/* Optional building PNGs. Nearest available level/view; Canvas only if no candidate exists.
   Files: assets/buildings/type-L1-R0.png (R0/R1/R2/R3).
   placements calibrates the original 1024x1024 ComfyUI export, including padding.
   Do not crop or shift that canvas. 768x768 or 512x512 resized versions also work.
   overrides accepts a type or full filename: {scale:1.0, offsetX:0, offsetY:0}.
   Set animals:false if the replacement PNG already contains animals.
*/
window.FarmBuildingSprites = {
  enabled: true,
  folder: 'assets/buildings',
  animals: true,
  levels: [1, 2, 3, 4, 5, 6, 7, 8],
  overrides: {},
  placements: {
  "apiary-L1-R0.png": {
    "x": -67.1573,
    "y": -41.6828,
    "width": 132.9637,
    "height": 132.9637
  },
  "apiary-L1-R1.png": {
    "x": -67.1594,
    "y": -39.3577,
    "width": 132.9806,
    "height": 132.9806
  },
  "apiary-L1-R2.png": {
    "x": -67.1647,
    "y": -35.8982,
    "width": 133.0235,
    "height": 133.0235
  },
  "apiary-L1-R3.png": {
    "x": -67.1594,
    "y": -40.9292,
    "width": 132.9807,
    "height": 132.9807
  },
  "automation-L1-R0.png": {
    "x": -66.5623,
    "y": -54.1759,
    "width": 132.1561,
    "height": 132.1561
  },
  "automation-L1-R1.png": {
    "x": -66.7277,
    "y": -54.0513,
    "width": 132.1879,
    "height": 132.1879
  },
  "automation-L1-R2.png": {
    "x": -66.7605,
    "y": -58.895,
    "width": 132.4525,
    "height": 132.4525
  },
  "automation-L1-R3.png": {
    "x": -66.7432,
    "y": -55.0896,
    "width": 132.3126,
    "height": 132.3126
  },
  "bakery-L1-R0.png": {
    "x": -67.6356,
    "y": -66.0941,
    "width": 138.6694,
    "height": 138.6694
  },
  "bakery-L1-R1.png": {
    "x": -66.7622,
    "y": -55.0476,
    "width": 132.0049,
    "height": 132.0049
  },
  "bakery-L1-R2.png": {
    "x": -67.5116,
    "y": -68.1676,
    "width": 139.756,
    "height": 139.756
  },
  "bakery-L1-R3.png": {
    "x": -68.3935,
    "y": -76.6821,
    "width": 141.7207,
    "height": 141.7207
  },
  "bakery-L3-R0.png": {
    "x": -67.6574,
    "y": -66.7249,
    "width": 138.944,
    "height": 138.944
  },
  "bakery-L3-R1.png": {
    "x": -66.7901,
    "y": -55.6994,
    "width": 132.2936,
    "height": 132.2936
  },
  "bakery-L3-R2.png": {
    "x": -67.5378,
    "y": -68.794,
    "width": 140.0273,
    "height": 140.0273
  },
  "bakery-L3-R3.png": {
    "x": -69.0618,
    "y": -77.2963,
    "width": 142.8079,
    "height": 142.8079
  },
  "barn-L1-R0.png": {
    "x": -69.3917,
    "y": -57.9938,
    "width": 166.5923,
    "height": 166.5923
  },
  "barn-L1-R1.png": {
    "x": -98.3827,
    "y": -51.9931,
    "width": 166.509,
    "height": 166.509
  },
  "barn-L1-R2.png": {
    "x": -69.3989,
    "y": -50.9981,
    "width": 166.6592,
    "height": 166.6592
  },
  "barn-L1-R3.png": {
    "x": -98.5736,
    "y": -52.7377,
    "width": 166.7679,
    "height": 166.7679
  },
  "cheese-L1-R0.png": {
    "x": -66.7074,
    "y": -54.3448,
    "width": 132.4339,
    "height": 132.4339
  },
  "cheese-L1-R1.png": {
    "x": -66.6299,
    "y": -52.0399,
    "width": 132.177,
    "height": 132.177
  },
  "cheese-L1-R2.png": {
    "x": -66.8552,
    "y": -53.1437,
    "width": 132.0825,
    "height": 132.0825
  },
  "cheese-L1-R3.png": {
    "x": -66.772,
    "y": -61.1642,
    "width": 132.5122,
    "height": 132.5122
  },
  "cheese-L5-R0.png": {
    "x": -66.5464,
    "y": -55.0804,
    "width": 132.2451,
    "height": 132.2451
  },
  "cheese-L5-R1.png": {
    "x": -66.6461,
    "y": -53.1552,
    "width": 132.3006,
    "height": 132.3006
  },
  "cheese-L5-R2.png": {
    "x": -66.7396,
    "y": -54.3876,
    "width": 132.2085,
    "height": 132.2085
  },
  "cheese-L5-R3.png": {
    "x": -66.7622,
    "y": -61.9172,
    "width": 132.42,
    "height": 132.42
  },
  "cheese-L8-R0.png": {
    "x": -66.5366,
    "y": -55.6312,
    "width": 132.1868,
    "height": 132.1868
  },
  "cheese-L8-R1.png": {
    "x": -66.6388,
    "y": -53.7051,
    "width": 132.2447,
    "height": 132.2447
  },
  "cheese-L8-R2.png": {
    "x": -66.8817,
    "y": -55.0919,
    "width": 132.3291,
    "height": 132.3291
  },
  "cheese-L8-R3.png": {
    "x": -66.7561,
    "y": -62.4701,
    "width": 132.3631,
    "height": 132.3631
  },
  "complex-L1-R0.png": {
    "x": -103.6976,
    "y": -83.0981,
    "width": 235.1497,
    "height": 235.1497
  },
  "complex-L1-R1.png": {
    "x": -132.9218,
    "y": -80.4191,
    "width": 235.6388,
    "height": 235.6388
  },
  "complex-L1-R2.png": {
    "x": -103.9583,
    "y": -85.0518,
    "width": 235.6634,
    "height": 235.6634
  },
  "complex-L1-R3.png": {
    "x": -132.9302,
    "y": -83.1478,
    "width": 235.3943,
    "height": 235.3943
  },
  "coop-L1-R0.png": {
    "x": -69.3847,
    "y": -52.6806,
    "width": 166.5283,
    "height": 166.5283
  },
  "coop-L1-R1.png": {
    "x": -98.3989,
    "y": -50.9981,
    "width": 166.6592,
    "height": 166.6592
  },
  "coop-L1-R2.png": {
    "x": -69.3989,
    "y": -50.9981,
    "width": 166.6592,
    "height": 166.6592
  },
  "coop-L1-R3.png": {
    "x": -98.5781,
    "y": -51.0356,
    "width": 166.8091,
    "height": 166.8091
  },
  "cottage-L1-R0.png": {
    "x": -72.1287,
    "y": -57.0591,
    "width": 138.1812,
    "height": 138.1812
  },
  "cottage-L1-R1.png": {
    "x": -66.7577,
    "y": -54.3369,
    "width": 132.3786,
    "height": 132.3786
  },
  "cottage-L1-R2.png": {
    "x": -67.4035,
    "y": -57.9844,
    "width": 139.7272,
    "height": 139.7272
  },
  "cottage-L1-R3.png": {
    "x": -66.7629,
    "y": -60.4751,
    "width": 132.4266,
    "height": 132.4266
  },
  "cottage-L3-R0.png": {
    "x": -72.1453,
    "y": -57.6869,
    "width": 138.3927,
    "height": 138.3927
  },
  "cottage-L3-R1.png": {
    "x": -66.7555,
    "y": -54.6876,
    "width": 132.3574,
    "height": 132.3574
  },
  "cottage-L3-R2.png": {
    "x": -67.4064,
    "y": -58.443,
    "width": 139.7547,
    "height": 139.7547
  },
  "cottage-L3-R3.png": {
    "x": -67.2612,
    "y": -61.4247,
    "width": 133.4356,
    "height": 133.4356
  },
  "cottage-L5-R0.png": {
    "x": -72.131,
    "y": -58.0554,
    "width": 138.2097,
    "height": 138.2097
  },
  "cottage-L5-R1.png": {
    "x": -66.7483,
    "y": -55.0865,
    "width": 132.2896,
    "height": 132.2896
  },
  "cottage-L5-R2.png": {
    "x": -67.3968,
    "y": -58.6861,
    "width": 139.6637,
    "height": 139.6637
  },
  "cottage-L5-R3.png": {
    "x": -67.9099,
    "y": -62.3106,
    "width": 134.5608,
    "height": 134.5608
  },
  "cottage-L8-R0.png": {
    "x": -72.124,
    "y": -58.5657,
    "width": 138.1199,
    "height": 138.1199
  },
  "cottage-L8-R1.png": {
    "x": -66.7424,
    "y": -55.6374,
    "width": 132.2343,
    "height": 132.2343
  },
  "cottage-L8-R2.png": {
    "x": -67.3949,
    "y": -59.3347,
    "width": 139.6455,
    "height": 139.6455
  },
  "cottage-L8-R3.png": {
    "x": -68.618,
    "y": -63.7672,
    "width": 136.1181,
    "height": 136.1181
  },
  "dairy-L1-R0.png": {
    "x": -69.9486,
    "y": -56.0332,
    "width": 135.8759,
    "height": 135.8759
  },
  "dairy-L1-R1.png": {
    "x": -70.3127,
    "y": -56.2262,
    "width": 136.2695,
    "height": 136.2695
  },
  "dairy-L1-R2.png": {
    "x": -67.1373,
    "y": -56.6373,
    "width": 137.2029,
    "height": 137.2029
  },
  "dairy-L1-R3.png": {
    "x": -67.1952,
    "y": -56.1844,
    "width": 137.7517,
    "height": 137.7517
  },
  "dairy-L3-R0.png": {
    "x": -69.952,
    "y": -56.5087,
    "width": 135.9184,
    "height": 135.9184
  },
  "dairy-L3-R1.png": {
    "x": -70.3084,
    "y": -56.6857,
    "width": 136.2147,
    "height": 136.2147
  },
  "dairy-L3-R2.png": {
    "x": -67.1412,
    "y": -57.107,
    "width": 137.2404,
    "height": 137.2404
  },
  "dairy-L3-R3.png": {
    "x": -67.199,
    "y": -56.6517,
    "width": 137.788,
    "height": 137.788
  },
  "dairy-L5-R0.png": {
    "x": -69.9397,
    "y": -56.7543,
    "width": 135.7614,
    "height": 135.7614
  },
  "dairy-L5-R1.png": {
    "x": -70.3036,
    "y": -56.9442,
    "width": 136.1521,
    "height": 136.1521
  },
  "dairy-L5-R2.png": {
    "x": -67.2681,
    "y": -57.3616,
    "width": 137.1732,
    "height": 137.1732
  },
  "dairy-L5-R3.png": {
    "x": -67.1815,
    "y": -56.8906,
    "width": 137.6218,
    "height": 137.6218
  },
  "dairy-L8-R0.png": {
    "x": -69.94,
    "y": -57.4253,
    "width": 135.7649,
    "height": 135.7649
  },
  "dairy-L8-R1.png": {
    "x": -70.3036,
    "y": -57.6128,
    "width": 136.1532,
    "height": 136.1532
  },
  "dairy-L8-R2.png": {
    "x": -67.1236,
    "y": -58.0108,
    "width": 137.0729,
    "height": 137.0729
  },
  "dairy-L8-R3.png": {
    "x": -67.1808,
    "y": -57.5511,
    "width": 137.6155,
    "height": 137.6155
  },
  "fishery-L1-R0.png": {
    "x": -45.0392,
    "y": -35.7355,
    "width": 117.0421,
    "height": 117.0421
  },
  "fishery-L1-R1.png": {
    "x": -74.4196,
    "y": -38.439,
    "width": 134.2805,
    "height": 134.2805
  },
  "fishery-L1-R2.png": {
    "x": -42.9049,
    "y": -17.1975,
    "width": 116.7899,
    "height": 116.7899
  },
  "fishery-L1-R3.png": {
    "x": -88.8046,
    "y": -31.5414,
    "width": 134.0328,
    "height": 134.0328
  },
  "greenhouse-L1-R0.png": {
    "x": -69.5579,
    "y": -57.4957,
    "width": 166.6958,
    "height": 166.6958
  },
  "greenhouse-L1-R1.png": {
    "x": -98.2131,
    "y": -57.6212,
    "width": 166.5199,
    "height": 166.5199
  },
  "greenhouse-L1-R2.png": {
    "x": -69.2024,
    "y": -57.438,
    "width": 166.4222,
    "height": 166.4222
  },
  "greenhouse-L1-R3.png": {
    "x": -98.2324,
    "y": -57.3329,
    "width": 166.6958,
    "height": 166.6958
  },
  "house-L1-R0.png": {
    "x": -73.1845,
    "y": -66.0404,
    "width": 170.8915,
    "height": 170.8915
  },
  "house-L1-R1.png": {
    "x": -98.4497,
    "y": -64.0111,
    "width": 166.8527,
    "height": 166.8527
  },
  "house-L1-R2.png": {
    "x": -69.983,
    "y": -66.7717,
    "width": 172.1546,
    "height": 172.1546
  },
  "house-L1-R3.png": {
    "x": -98.4357,
    "y": -70.5136,
    "width": 166.7134,
    "height": 166.7134
  },
  "house-L3-R0.png": {
    "x": -73.1921,
    "y": -66.5569,
    "width": 170.9884,
    "height": 170.9884
  },
  "house-L3-R1.png": {
    "x": -98.4511,
    "y": -64.5247,
    "width": 166.8669,
    "height": 166.8669
  },
  "house-L3-R2.png": {
    "x": -69.9825,
    "y": -67.2665,
    "width": 172.1499,
    "height": 172.1499
  },
  "house-L3-R3.png": {
    "x": -98.4371,
    "y": -71.0269,
    "width": 166.7277,
    "height": 166.7277
  },
  "house-L5-R0.png": {
    "x": -73.1844,
    "y": -66.8725,
    "width": 170.8905,
    "height": 170.8905
  },
  "house-L5-R1.png": {
    "x": -98.4322,
    "y": -64.6712,
    "width": 166.6785,
    "height": 166.6785
  },
  "house-L5-R2.png": {
    "x": -69.9723,
    "y": -67.5788,
    "width": 172.0478,
    "height": 172.0478
  },
  "house-L5-R3.png": {
    "x": -98.4279,
    "y": -71.3571,
    "width": 166.6363,
    "height": 166.6363
  },
  "house-L8-R0.png": {
    "x": -73.1766,
    "y": -67.3546,
    "width": 170.7918,
    "height": 170.7918
  },
  "house-L8-R1.png": {
    "x": -98.434,
    "y": -65.3565,
    "width": 166.6971,
    "height": 166.6971
  },
  "house-L8-R2.png": {
    "x": -69.9716,
    "y": -68.2389,
    "width": 172.0411,
    "height": 172.0411
  },
  "house-L8-R3.png": {
    "x": -98.4298,
    "y": -72.0417,
    "width": 166.6553,
    "height": 166.6553
  },
  "jam-L1-R0.png": {
    "x": -67.0363,
    "y": -54.3878,
    "width": 132.733,
    "height": 132.733
  },
  "jam-L1-R1.png": {
    "x": -66.8539,
    "y": -52.0641,
    "width": 132.3289,
    "height": 132.3289
  },
  "jam-L1-R2.png": {
    "x": -66.8597,
    "y": -53.1498,
    "width": 132.1241,
    "height": 132.1241
  },
  "jam-L1-R3.png": {
    "x": -66.7744,
    "y": -61.1663,
    "width": 132.5352,
    "height": 132.5352
  },
  "jam-L5-R0.png": {
    "x": -67.0277,
    "y": -55.1348,
    "width": 132.643,
    "height": 132.643
  },
  "jam-L5-R1.png": {
    "x": -66.8696,
    "y": -53.1778,
    "width": 132.4494,
    "height": 132.4494
  },
  "jam-L5-R2.png": {
    "x": -66.8808,
    "y": -54.4035,
    "width": 132.3207,
    "height": 132.3207
  },
  "jam-L5-R3.png": {
    "x": -66.7646,
    "y": -61.9191,
    "width": 132.443,
    "height": 132.443
  },
  "jam-L8-R0.png": {
    "x": -67.0223,
    "y": -55.6835,
    "width": 132.5866,
    "height": 132.5866
  },
  "jam-L8-R1.png": {
    "x": -66.8621,
    "y": -53.7267,
    "width": 132.3917,
    "height": 132.3917
  },
  "jam-L8-R2.png": {
    "x": -66.8835,
    "y": -55.0942,
    "width": 132.3462,
    "height": 132.3462
  },
  "jam-L8-R3.png": {
    "x": -66.7585,
    "y": -62.4719,
    "width": 132.386,
    "height": 132.386
  },
  "kennel-L1-R0.png": {
    "x": -32.3502,
    "y": -25.8605,
    "width": 63.7359,
    "height": 63.7359
  },
  "kennel-L1-R1.png": {
    "x": -32.3642,
    "y": -25.1182,
    "width": 65.4313,
    "height": 65.4313
  },
  "kennel-L1-R2.png": {
    "x": -32.4296,
    "y": -21.3846,
    "width": 63.6402,
    "height": 63.6402
  },
  "kennel-L1-R3.png": {
    "x": -32.665,
    "y": -23.3504,
    "width": 63.9791,
    "height": 63.9791
  },
  "loom-L1-R0.png": {
    "x": -66.6289,
    "y": -54.3448,
    "width": 132.4337,
    "height": 132.4337
  },
  "loom-L1-R1.png": {
    "x": -66.5357,
    "y": -52.0297,
    "width": 132.1131,
    "height": 132.1131
  },
  "loom-L1-R2.png": {
    "x": -66.8731,
    "y": -52.0513,
    "width": 132.2487,
    "height": 132.2487
  },
  "loom-L1-R3.png": {
    "x": -66.7761,
    "y": -54.3616,
    "width": 132.5506,
    "height": 132.5506
  },
  "loom-L3-R0.png": {
    "x": -66.6264,
    "y": -54.6953,
    "width": 132.4131,
    "height": 132.4131
  },
  "loom-L3-R1.png": {
    "x": -66.5529,
    "y": -52.665,
    "width": 132.2561,
    "height": 132.2561
  },
  "loom-L3-R2.png": {
    "x": -66.8796,
    "y": -52.5441,
    "width": 132.3092,
    "height": 132.3092
  },
  "loom-L3-R3.png": {
    "x": -66.7737,
    "y": -54.7113,
    "width": 132.5282,
    "height": 132.5282
  },
  "loom-L5-R0.png": {
    "x": -66.6179,
    "y": -55.0939,
    "width": 132.3443,
    "height": 132.3443
  },
  "loom-L5-R1.png": {
    "x": -66.5505,
    "y": -53.1453,
    "width": 132.2361,
    "height": 132.2361
  },
  "loom-L5-R2.png": {
    "x": -66.8861,
    "y": -53.1657,
    "width": 132.3698,
    "height": 132.3698
  },
  "loom-L5-R3.png": {
    "x": -66.7662,
    "y": -55.1095,
    "width": 132.4584,
    "height": 132.4584
  },
  "loom-L8-R0.png": {
    "x": -66.6111,
    "y": -55.6446,
    "width": 132.2891,
    "height": 132.2891
  },
  "loom-L8-R1.png": {
    "x": -66.544,
    "y": -53.6959,
    "width": 132.1818,
    "height": 132.1818
  },
  "loom-L8-R2.png": {
    "x": -66.88,
    "y": -53.7152,
    "width": 132.3136,
    "height": 132.3136
  },
  "loom-L8-R3.png": {
    "x": -66.7601,
    "y": -55.6592,
    "width": 132.4009,
    "height": 132.4009
  },
  "market-L1-R0.png": {
    "x": -69.5808,
    "y": -66.1615,
    "width": 167.5507,
    "height": 167.5507
  },
  "market-L1-R1.png": {
    "x": -98.7471,
    "y": -63.1126,
    "width": 167.5832,
    "height": 167.5832
  },
  "market-L1-R2.png": {
    "x": -69.4214,
    "y": -63.2932,
    "width": 167.6768,
    "height": 167.6768
  },
  "market-L1-R3.png": {
    "x": -98.4287,
    "y": -66.3603,
    "width": 167.7659,
    "height": 167.7659
  },
  "mill-L1-R0.png": {
    "x": -58.019,
    "y": -43.3264,
    "width": 93.7773,
    "height": 93.7773
  },
  "mill-L1-R1.png": {
    "x": -65.4894,
    "y": -61.6717,
    "width": 110.9977,
    "height": 110.9977
  },
  "mill-L1-R2.png": {
    "x": -45.5532,
    "y": -63.8485,
    "width": 113.2612,
    "height": 113.2612
  },
  "mill-L1-R3.png": {
    "x": -43.4668,
    "y": -46.367,
    "width": 107.0979,
    "height": 107.0979
  },
  "quarry-L1-R0.png": {
    "x": -62.5135,
    "y": -46.7888,
    "width": 153.982,
    "height": 153.982
  },
  "quarry-L1-R1.png": {
    "x": -91.5135,
    "y": -39.7058,
    "width": 153.9816,
    "height": 153.9816
  },
  "quarry-L1-R2.png": {
    "x": -62.5135,
    "y": -39.7058,
    "width": 153.9816,
    "height": 153.9816
  },
  "quarry-L1-R3.png": {
    "x": -91.5135,
    "y": -39.7058,
    "width": 153.9816,
    "height": 153.9816
  },
  "sawmill-L1-R0.png": {
    "x": -77.1772,
    "y": -68.1484,
    "width": 175.0139,
    "height": 175.0139
  },
  "sawmill-L1-R1.png": {
    "x": -98.3881,
    "y": -64.0081,
    "width": 166.835,
    "height": 166.835
  },
  "sawmill-L1-R2.png": {
    "x": -70.0672,
    "y": -66.3504,
    "width": 176.4665,
    "height": 176.4665
  },
  "sawmill-L1-R3.png": {
    "x": -98.4114,
    "y": -60.0837,
    "width": 166.4719,
    "height": 166.4719
  },
  "sawmill-L3-R0.png": {
    "x": -77.1845,
    "y": -68.6527,
    "width": 175.106,
    "height": 175.106
  },
  "sawmill-L3-R1.png": {
    "x": -98.3898,
    "y": -64.5218,
    "width": 166.8499,
    "height": 166.8499
  },
  "sawmill-L3-R2.png": {
    "x": -70.0482,
    "y": -66.6477,
    "width": 176.3442,
    "height": 176.3442
  },
  "sawmill-L3-R3.png": {
    "x": -98.4023,
    "y": -60.4092,
    "width": 166.3813,
    "height": 166.3813
  },
  "sawmill-L5-R0.png": {
    "x": -77.1751,
    "y": -68.9557,
    "width": 174.9873,
    "height": 174.9873
  },
  "sawmill-L5-R1.png": {
    "x": -98.3676,
    "y": -64.668,
    "width": 166.6592,
    "height": 166.6592
  },
  "sawmill-L5-R2.png": {
    "x": -70.045,
    "y": -67.1269,
    "width": 176.3233,
    "height": 176.3233
  },
  "sawmill-L5-R3.png": {
    "x": -98.4038,
    "y": -60.7619,
    "width": 166.3965,
    "height": 166.3965
  },
  "sawmill-L8-R0.png": {
    "x": -77.1734,
    "y": -69.6017,
    "width": 174.9659,
    "height": 174.9659
  },
  "sawmill-L8-R1.png": {
    "x": -98.3699,
    "y": -65.3535,
    "width": 166.6785,
    "height": 166.6785
  },
  "sawmill-L8-R2.png": {
    "x": -70.0406,
    "y": -67.766,
    "width": 176.2953,
    "height": 176.2953
  },
  "sawmill-L8-R3.png": {
    "x": -98.4059,
    "y": -61.4487,
    "width": 166.417,
    "height": 166.417
  },
  "sheep-L1-R0.png": {
    "x": -69.3956,
    "y": -56.1166,
    "width": 166.6281,
    "height": 166.6281
  },
  "sheep-L1-R1.png": {
    "x": -98.3989,
    "y": -50.9981,
    "width": 166.6592,
    "height": 166.6592
  },
  "sheep-L1-R2.png": {
    "x": -69.3989,
    "y": -50.9981,
    "width": 166.6592,
    "height": 166.6592
  },
  "sheep-L1-R3.png": {
    "x": -98.5781,
    "y": -51.0356,
    "width": 166.8091,
    "height": 166.8091
  },
  "warehouse-L1-R0.png": {
    "x": -73.7282,
    "y": -64.6345,
    "width": 171.4537,
    "height": 171.4537
  },
  "warehouse-L1-R1.png": {
    "x": -105.4502,
    "y": -67.8353,
    "width": 174.2514,
    "height": 174.2514
  },
  "warehouse-L1-R2.png": {
    "x": -70.0647,
    "y": -67.2579,
    "width": 172.9667,
    "height": 172.9667
  },
  "warehouse-L1-R3.png": {
    "x": -99.1332,
    "y": -67.3554,
    "width": 175.3507,
    "height": 175.3507
  },
  "warehouse-L3-R0.png": {
    "x": -73.7356,
    "y": -65.1483,
    "width": 171.5496,
    "height": 171.5496
  },
  "warehouse-L3-R1.png": {
    "x": -105.4492,
    "y": -68.1524,
    "width": 174.239,
    "height": 174.239
  },
  "warehouse-L3-R2.png": {
    "x": -69.8821,
    "y": -67.5574,
    "width": 172.8293,
    "height": 172.8293
  },
  "warehouse-L3-R3.png": {
    "x": -99.1417,
    "y": -67.857,
    "width": 175.4358,
    "height": 175.4358
  },
  "warehouse-L5-R0.png": {
    "x": -73.7278,
    "y": -65.4632,
    "width": 171.449,
    "height": 171.449
  },
  "warehouse-L5-R1.png": {
    "x": -105.4408,
    "y": -68.4594,
    "width": 174.1319,
    "height": 174.1319
  },
  "warehouse-L5-R2.png": {
    "x": -69.8718,
    "y": -67.868,
    "width": 172.7257,
    "height": 172.7257
  },
  "warehouse-L5-R3.png": {
    "x": -99.1306,
    "y": -68.1611,
    "width": 175.3238,
    "height": 175.3238
  },
  "warehouse-L8-R0.png": {
    "x": -73.7198,
    "y": -65.9428,
    "width": 171.3462,
    "height": 171.3462
  },
  "warehouse-L8-R1.png": {
    "x": -105.4394,
    "y": -69.1095,
    "width": 174.115,
    "height": 174.115
  },
  "warehouse-L8-R2.png": {
    "x": -70.0524,
    "y": -68.5474,
    "width": 172.8445,
    "height": 172.8445
  },
  "warehouse-L8-R3.png": {
    "x": -99.1284,
    "y": -68.8058,
    "width": 175.3021,
    "height": 175.3021
  },
  "well-L1-R0.png": {
    "x": -29.8801,
    "y": -28.2506,
    "width": 59.9444,
    "height": 59.9444
  },
  "well-L1-R1.png": {
    "x": -27.4548,
    "y": -27.5572,
    "width": 54.066,
    "height": 54.066
  },
  "well-L1-R2.png": {
    "x": -27.1619,
    "y": -27.6253,
    "width": 54.2585,
    "height": 54.2585
  },
  "well-L1-R3.png": {
    "x": -26.5725,
    "y": -27.567,
    "width": 54.1911,
    "height": 54.1911
  },
  "bench-L1-R0.png": {
    "x": -16.2263,
    "y": -15.8978,
    "width": 39.864,
    "height": 39.864
  },
  "bench-L1-R1.png": {
    "x": -16.0023,
    "y": -8.8413,
    "width": 38.4299,
    "height": 38.4299
  },
  "bench-L1-R2.png": {
    "x": -22.7036,
    "y": -9.1699,
    "width": 38.3925,
    "height": 38.3925
  },
  "bench-L1-R3.png": {
    "x": -23.1217,
    "y": -16.2806,
    "width": 39.9925,
    "height": 39.9925
  },
  "cart-L1-R0.png": {
    "x": -24.6812,
    "y": -16.9258,
    "width": 47.1192,
    "height": 47.1192
  },
  "cart-L1-R1.png": {
    "x": -25.2069,
    "y": -16.8404,
    "width": 47.789,
    "height": 47.789
  },
  "cart-L1-R2.png": {
    "x": -22.3479,
    "y": -16.5924,
    "width": 47.1192,
    "height": 47.1192
  },
  "cart-L1-R3.png": {
    "x": -22.4089,
    "y": -17.4258,
    "width": 47.9,
    "height": 47.9
  },
  "fence-L1-R0.png": {
    "x": -20.8757,
    "y": -14.7536,
    "width": 41.6945,
    "height": 41.6945
  },
  "fence-L1-R1.png": {
    "x": -20.7337,
    "y": -14.5718,
    "width": 41.4522,
    "height": 41.4522
  },
  "fence-L1-R2.png": {
    "x": -20.6528,
    "y": -14.5718,
    "width": 41.4522,
    "height": 41.4522
  },
  "fence-L1-R3.png": {
    "x": -20.4997,
    "y": -14.7516,
    "width": 41.6703,
    "height": 41.6703
  },
  "fence-L1-R0-joined.png": {
    "x": -20.6895,
    "y": -16.0739,
    "width": 42.9585,
    "height": 42.9585
  },
  "fence-L1-R1-joined.png": {
    "x": -20.8068,
    "y": -15.8531,
    "width": 42.8538,
    "height": 42.8538
  },
  "fence-L1-R2-joined.png": {
    "x": -20.6693,
    "y": -15.8369,
    "width": 42.7001,
    "height": 42.7001
  },
  "fence-L1-R3-joined.png": {
    "x": -20.7028,
    "y": -16.0927,
    "width": 43.1288,
    "height": 43.1288
  },
  "fountain-L1-R0.png": {
    "x": -32.8422,
    "y": -16.5978,
    "width": 65.7411,
    "height": 65.7411
  },
  "fountain-L1-R1.png": {
    "x": -32.8422,
    "y": -16.5978,
    "width": 65.7411,
    "height": 65.7411
  },
  "fountain-L1-R2.png": {
    "x": -32.9739,
    "y": -16.4722,
    "width": 65.7774,
    "height": 65.7774
  },
  "fountain-L1-R3.png": {
    "x": -32.9739,
    "y": -16.4722,
    "width": 65.7774,
    "height": 65.7774
  },
  "gate-L1-R0.png": {
    "x": -31.5927,
    "y": -18.7092,
    "width": 53.1896,
    "height": 53.1896
  },
  "gate-L1-R1.png": {
    "x": -31.8395,
    "y": -22.1053,
    "width": 53.4126,
    "height": 53.4126
  },
  "gate-L1-R2.png": {
    "x": -21.5086,
    "y": -22.1619,
    "width": 53.4431,
    "height": 53.4431
  },
  "gate-L1-R3.png": {
    "x": -21.2046,
    "y": -18.7043,
    "width": 53.1543,
    "height": 53.1543
  },
  "gazebo-L1-R0.png": {
    "x": -62.3985,
    "y": -47.9771,
    "width": 124.5675,
    "height": 124.5675
  },
  "gazebo-L1-R1.png": {
    "x": -62.404,
    "y": -48.1095,
    "width": 124.6381,
    "height": 124.6381
  },
  "gazebo-L1-R2.png": {
    "x": -62.404,
    "y": -48.1095,
    "width": 124.6381,
    "height": 124.6381
  },
  "gazebo-L1-R3.png": {
    "x": -62.3985,
    "y": -47.9771,
    "width": 124.5675,
    "height": 124.5675
  },
  "gnome-L1-R0.png": {
    "x": -22.2568,
    "y": -20.8185,
    "width": 44.6099,
    "height": 44.6099
  },
  "gnome-L1-R1.png": {
    "x": -22.2568,
    "y": -20.8185,
    "width": 44.6099,
    "height": 44.6099
  },
  "gnome-L1-R2.png": {
    "x": -22.0039,
    "y": -20.451,
    "width": 44.1724,
    "height": 44.1724
  },
  "gnome-L1-R3.png": {
    "x": -22.0039,
    "y": -20.451,
    "width": 44.1724,
    "height": 44.1724
  },
  "lamp-L1-R0.png": {
    "x": -29.4341,
    "y": -36.3319,
    "width": 58.9776,
    "height": 58.9776
  },
  "lamp-L1-R1.png": {
    "x": -29.3765,
    "y": -36.3319,
    "width": 58.9776,
    "height": 58.9776
  },
  "lamp-L1-R2.png": {
    "x": -29.5319,
    "y": -36.63,
    "width": 59.2646,
    "height": 59.2646
  },
  "lamp-L1-R3.png": {
    "x": -29.6477,
    "y": -36.63,
    "width": 59.2646,
    "height": 59.2646
  },
  "path_brick-L1-R0.png": {
    "x": -33.9998,
    "y": -19.066,
    "width": 68.2642,
    "height": 68.2642
  },
  "path_brick-L1-R1.png": {
    "x": -34.3575,
    "y": -19.1529,
    "width": 68.5754,
    "height": 68.5754
  },
  "path_brick-L1-R2.png": {
    "x": -33.9998,
    "y": -19.066,
    "width": 68.2642,
    "height": 68.2642
  },
  "path_brick-L1-R3.png": {
    "x": -34.3331,
    "y": -19.066,
    "width": 68.2642,
    "height": 68.2642
  },
  "path_stone-L1-R0.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "path_stone-L1-R1.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "path_stone-L1-R2.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "path_stone-L1-R3.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "path_wood-L1-R0.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "path_wood-L1-R1.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "path_wood-L1-R2.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "path_wood-L1-R3.png": {
    "x": -34.1386,
    "y": -19.2184,
    "width": 68.3319,
    "height": 68.3319
  },
  "pond_decor-L1-R0.png": {
    "x": -58.4178,
    "y": -36.1906,
    "width": 119.0595,
    "height": 119.0595
  },
  "pond_decor-L1-R1.png": {
    "x": -61.2588,
    "y": -31.7325,
    "width": 121.2634,
    "height": 121.2634
  },
  "pond_decor-L1-R2.png": {
    "x": -63.5431,
    "y": -26.8889,
    "width": 117.8852,
    "height": 117.8852
  },
  "pond_decor-L1-R3.png": {
    "x": -57.4504,
    "y": -33.6118,
    "width": 118.0145,
    "height": 118.0145
  },
  "scarecrow-L1-R0.png": {
    "x": -22.8365,
    "y": -26.2908,
    "width": 45.816,
    "height": 45.816
  },
  "scarecrow-L1-R1.png": {
    "x": -23.3238,
    "y": -26.7153,
    "width": 46.3955,
    "height": 46.3955
  },
  "scarecrow-L1-R2.png": {
    "x": -22.9461,
    "y": -26.7019,
    "width": 46.2283,
    "height": 46.2283
  },
  "scarecrow-L1-R3.png": {
    "x": -22.7555,
    "y": -26.2933,
    "width": 45.848,
    "height": 45.848
  },
  "sign-L1-R0.png": {
    "x": -23.2471,
    "y": -26.4461,
    "width": 46.6276,
    "height": 46.6276
  },
  "sign-L1-R1.png": {
    "x": -23.1289,
    "y": -26.0581,
    "width": 46.5142,
    "height": 46.5142
  },
  "sign-L1-R2.png": {
    "x": -23.6988,
    "y": -26.0561,
    "width": 46.4894,
    "height": 46.4894
  },
  "sign-L1-R3.png": {
    "x": -24.0453,
    "y": -26.4903,
    "width": 47.1729,
    "height": 47.1729
  },
  "table-L1-R0.png": {
    "x": -21.1455,
    "y": -13.9758,
    "width": 43.4426,
    "height": 43.4426
  },
  "table-L1-R1.png": {
    "x": -22.2103,
    "y": -14.3106,
    "width": 43.7193,
    "height": 43.7193
  },
  "table-L1-R2.png": {
    "x": -22.0774,
    "y": -14.5929,
    "width": 43.658,
    "height": 43.658
  },
  "table-L1-R3.png": {
    "x": -21.3874,
    "y": -14.3405,
    "width": 43.3583,
    "height": 43.3583
  }
}
};
