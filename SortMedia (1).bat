@echo off
setlocal EnableExtensions DisableDelayedExpansion
set "SORT_MEDIA_BAT=%~f0"
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -Command "try { $parts = [IO.File]::ReadAllText($env:SORT_MEDIA_BAT, [Text.Encoding]::UTF8) -split '(?m)^# POWERSHELL\r?$', 2; if ($parts.Length -ne 2) { throw 'PowerShell script is missing.' }; $status = & ([ScriptBlock]::Create($parts[1])) $env:SORT_MEDIA_BAT; exit $status } catch { Write-Host $_.Exception.Message -ForegroundColor Red; exit 1 }"
set "SORT_MEDIA_STATUS=%ERRORLEVEL%"
echo(
pause
exit /b %SORT_MEDIA_STATUS%
# POWERSHELL
param([string]$ScriptPath)

$ErrorActionPreference = 'Stop'

$root = [IO.Path]::GetDirectoryName($ScriptPath)
$videoFolder = [IO.Path]::Combine($Root, 'Видео')
$imageFolder = [IO.Path]::Combine($Root, 'Картинки')
$otherFolder = [IO.Path]::Combine($Root, 'Другое')
$destinations = @($videoFolder, $imageFolder, $otherFolder)
$videoExtensions = @(
    '.mp4', '.mkv', '.avi', '.mov', '.qt', '.wmv', '.webm', '.m4v', '.mpg',
    '.mpeg', '.mpe', '.m1v', '.m2v', '.mpv', '.3gp', '.3g2', '.3gpp', '.flv',
    '.f4v', '.ogv', '.ogm', '.m2ts', '.m2t', '.mts', '.ts', '.vob', '.mxf',
    '.asf', '.rm', '.rmvb', '.divx', '.wtv', '.dvr-ms', '.tod'
)
$imageExtensions = @(
    '.jpg', '.jpeg', '.jpe', '.jfif', '.png', '.apng', '.gif', '.webp', '.bmp',
    '.dib', '.tif', '.tiff', '.heic', '.heif', '.avif', '.jxl', '.ico', '.icns',
    '.svg', '.svgz', '.jp2', '.j2k', '.jpf', '.jpx', '.tga', '.dds', '.pcx',
    '.pbm', '.pgm', '.ppm', '.pnm', '.exr', '.hdr', '.dng', '.cr2', '.cr3',
    '.nef', '.nrw', '.arw', '.srf', '.sr2', '.raf', '.orf', '.rw2', '.pef',
    '.srw', '.x3f', '.erf', '.3fr', '.iiq', '.rwl', '.kdc', '.dcr'
)
$folderLinks = @('Junction', 'SymbolicLink')

function Test-TransportStream {
    param([string]$Path)

    # Both .ts and .mts can also be TypeScript source files.
    $stream = [IO.File]::OpenRead($Path)
    try {
        $sample = [byte[]]::new(409)
        $read = 0
        while ($read -lt $sample.Length) {
            $chunk = $stream.Read($sample, $read, $sample.Length - $read)
            if ($chunk -eq 0) { break }
            $read += $chunk
        }
        foreach ($packetSize in @(188, 192, 204)) {
            $offset = 0
            if ($packetSize -eq 192) { $offset = 4 }
            $second = $offset + $packetSize
            $third = $second + $packetSize
            if ($read -gt $third -and $sample[$offset] -eq 0x47 -and
                $sample[$second] -eq 0x47 -and $sample[$third] -eq 0x47) {
                return $true
            }
        }
        return $false
    } finally {
        $stream.Dispose()
    }
}

function Move-FileWithUniqueName {
    param([IO.FileInfo]$File, [string]$Destination)

    $stem = [IO.Path]::GetFileNameWithoutExtension($File.Name)
    $extension = $File.Extension
    $name = $File.Name
    $number = 0
    while ($true) {
        $target = [IO.Path]::Combine($Destination, $name)
        try {
            # The two-argument overload refuses to replace an existing file.
            [IO.File]::Move($File.FullName, $target)
            return ($number -gt 0)
        } catch {
            if (-not ([IO.File]::Exists($target) -or [IO.Directory]::Exists($target))) {
                throw
            }
        }

        $number += 1
        $suffix = ' ({0})' -f $number
        $maxStemLength = 255 - $suffix.Length - $extension.Length
        if ($maxStemLength -le 0) {
            $stem = $File.Name
            $extension = ''
            $maxStemLength = 255 - $suffix.Length
        }
        $prefix = $stem.Substring(0, [Math]::Min($stem.Length, $maxStemLength))
        if ($prefix.Length -gt 0 -and [char]::IsHighSurrogate($prefix[$prefix.Length - 1])) {
            $prefix = $prefix.Substring(0, $prefix.Length - 1)
        }
        $name = $prefix + $suffix + $extension
    }
}

$fileCounts = @{}
foreach ($folder in $destinations) {
    [void][IO.Directory]::CreateDirectory($folder)
    if ((Get-Item -LiteralPath $folder -Force).LinkType -in $folderLinks) {
        throw ('Папка назначения «{0}» является ссылкой. Перемещение остановлено.' -f $folder)
    }
    $fileCounts[$folder] = 0
}

$pending = [Collections.Generic.Stack[string]]::new()
$cleanup = [Collections.Generic.Stack[string]]::new()
$pending.Push($Root)
$renamed = 0
$removed = 0
$errors = 0
$links = 0

while ($pending.Count -gt 0) {
    $directory = $pending.Pop()
    try {
        $entries = Get-ChildItem -LiteralPath $directory -Force
    } catch {
        Write-Host ('Не удалось прочитать папку «{0}». {1}' -f $directory, $_.Exception.Message) -ForegroundColor Yellow
        $errors += 1
        continue
    }

    if ($directory -ne $root -and $directory -notin $destinations) {
        $cleanup.Push($directory)
    }

    foreach ($entry in $entries) {
        if ($entry.PSIsContainer) {
            if ($entry.LinkType -in $folderLinks) {
                $links += 1
            } else {
                $pending.Push($entry.FullName)
            }
            continue
        }

        if ([string]::Equals($entry.FullName, $ScriptPath, [StringComparison]::OrdinalIgnoreCase)) {
            continue
        }
        if ($entry.LinkType -eq 'SymbolicLink') {
            $links += 1
            continue
        }

        try {
            $isVideo = $entry.Extension -in $videoExtensions
            if ($entry.Extension -in @('.ts', '.mts')) {
                $isVideo = Test-TransportStream -Path $entry.FullName
            }
            if ($isVideo) {
                $destination = $videoFolder
            } elseif ($entry.Extension -in $imageExtensions) {
                $destination = $imageFolder
            } else {
                $destination = $otherFolder
            }
            if ([string]::Equals($directory, $destination, [StringComparison]::OrdinalIgnoreCase)) {
                continue
            }
            if (Move-FileWithUniqueName -File $entry -Destination $destination) { $renamed += 1 }
            $fileCounts[$destination] += 1
        } catch {
            Write-Host ('Не удалось переместить «{0}». {1}' -f $entry.FullName, $_.Exception.Message) -ForegroundColor Yellow
            $errors += 1
        }
    }
}

# Parents were added before their children. Pop the children first.
while ($cleanup.Count -gt 0) {
    $directory = $cleanup.Pop()
    try {
        if ((Get-Item -LiteralPath $directory -Force).LinkType -in $folderLinks) {
            continue
        }
        if (Get-ChildItem -LiteralPath $directory -Force | Select-Object -First 1) {
            continue
        }
        [IO.Directory]::Delete($directory, $false)
        $removed += 1
    } catch {
        Write-Host ('Не удалось удалить папку «{0}». {1}' -f $directory, $_.Exception.Message) -ForegroundColor Yellow
        $errors += 1
    }
}

Write-Host ('Перемещено видео — {0}, картинок — {1}, прочих файлов — {2}.' -f $fileCounts[$videoFolder], $fileCounts[$imageFolder], $fileCounts[$otherFolder])
Write-Host ('Переименовано из-за совпадения имён — {0}.' -f $renamed)
Write-Host ('Удалено пустых папок — {0}.' -f $removed)
if ($links -gt 0) { Write-Host ('Пропущено ссылок — {0}.' -f $links) }
if ($errors -gt 0) {
    Write-Host ('Ошибок — {0}. Подробности указаны выше.' -f $errors) -ForegroundColor Yellow
    return 1
}
return 0
