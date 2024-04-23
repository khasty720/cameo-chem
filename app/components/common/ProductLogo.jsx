import React from 'react';

export function ProductLogo({size = 28}) {
  return (
    <div className="product-logo">
      <svg
        height={size}
        viewBox="0 0 1350 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M98.5 9.81495L149.277 39.1312C156.084 43.0611 160.277 50.3239 160.277 58.1838V116.816C160.277 124.676 156.084 131.939 149.277 135.869L98.5 165.185C91.6932 169.115 83.3068 169.115 76.5 165.185L25.7228 135.869C18.916 131.939 14.7228 124.676 14.7228 116.816V58.1838C14.7228 50.3239 18.916 43.0611 25.7228 39.1312L76.5 9.81495C83.3068 5.88503 91.6932 5.88503 98.5 9.81495Z"
          stroke="black"
          strokeWidth="6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87.5 24.7006V19.2088L57.3575 36.4168L27.215 53.6247L31.8817 56.4523V119.629L27.215 122.456L57.3575 139.664L87.5 156.872V151.381L143.118 119.629L147.785 122.456V88.0406V53.6247L143.118 56.4523L87.5 24.7006ZM147.785 53.6247L87.5 19.2088L27.215 53.6247V122.456L87.5 156.872L147.785 122.456V53.6247Z"
          fill="black"
        />
        <path
          d="M266.545 69.2856H243.818C243.515 66.9522 242.894 64.8462 241.955 62.9674C241.015 61.0886 239.773 59.4825 238.227 58.1492C236.682 56.8159 234.848 55.8007 232.727 55.1037C230.636 54.3765 228.318 54.0128 225.773 54.0128C221.258 54.0128 217.364 55.1189 214.091 57.331C210.848 59.5431 208.348 62.7401 206.591 66.9219C204.864 71.1037 204 76.1643 204 82.1037C204 88.2856 204.879 93.4674 206.636 97.6492C208.424 101.801 210.924 104.937 214.136 107.058C217.379 109.149 221.212 110.195 225.636 110.195C228.121 110.195 230.379 109.876 232.409 109.24C234.47 108.604 236.273 107.68 237.818 106.467C239.394 105.225 240.682 103.725 241.682 101.967C242.712 100.18 243.424 98.1644 243.818 95.9219L266.545 96.0583C266.152 100.18 264.955 104.24 262.955 108.24C260.985 112.24 258.273 115.892 254.818 119.195C251.364 122.467 247.152 125.073 242.182 127.013C237.242 128.952 231.576 129.922 225.182 129.922C216.758 129.922 209.212 128.073 202.545 124.376C195.909 120.649 190.667 115.225 186.818 108.104C182.97 100.983 181.045 92.3159 181.045 82.1037C181.045 71.8613 183 63.1795 186.909 56.0583C190.818 48.9371 196.106 43.528 202.773 39.831C209.439 36.134 216.909 34.2856 225.182 34.2856C230.818 34.2856 236.03 35.0734 240.818 36.6492C245.606 38.1947 249.818 40.4674 253.455 43.4674C257.091 46.4371 260.045 50.0886 262.318 54.4219C264.591 58.7553 266 63.7098 266.545 69.2856ZM299.102 129.831C294.648 129.831 290.693 129.089 287.239 127.604C283.814 126.089 281.102 123.816 279.102 120.786C277.133 117.725 276.148 113.892 276.148 109.286C276.148 105.407 276.83 102.134 278.193 99.4674C279.557 96.8007 281.436 94.634 283.83 92.9674C286.223 91.3007 288.981 90.0431 292.102 89.1947C295.223 88.3159 298.557 87.725 302.102 87.4219C306.072 87.0583 309.269 86.6795 311.693 86.2856C314.117 85.8613 315.875 85.2704 316.966 84.5128C318.087 83.725 318.648 82.6189 318.648 81.1947V80.9674C318.648 78.634 317.845 76.831 316.239 75.5583C314.633 74.2856 312.466 73.6492 309.739 73.6492C306.799 73.6492 304.436 74.2856 302.648 75.5583C300.86 76.831 299.723 78.5886 299.239 80.831L278.739 80.1037C279.345 75.8613 280.905 72.0734 283.42 68.7401C285.966 65.3765 289.451 62.7401 293.875 60.831C298.33 58.8916 303.678 57.9219 309.92 57.9219C314.375 57.9219 318.481 58.4522 322.239 59.5128C325.996 60.5431 329.269 62.0583 332.057 64.0583C334.845 66.028 336.996 68.4522 338.511 71.331C340.057 74.2098 340.83 77.4977 340.83 81.1947V128.649H319.92V118.922H319.375C318.133 121.286 316.542 123.286 314.602 124.922C312.693 126.558 310.436 127.786 307.83 128.604C305.254 129.422 302.345 129.831 299.102 129.831ZM305.966 115.286C308.36 115.286 310.511 114.801 312.42 113.831C314.36 112.861 315.905 111.528 317.057 109.831C318.208 108.104 318.784 106.104 318.784 103.831V97.1947C318.148 97.528 317.375 97.831 316.466 98.1037C315.587 98.3765 314.617 98.634 313.557 98.8765C312.496 99.1189 311.405 99.331 310.284 99.5128C309.163 99.6947 308.087 99.8613 307.057 100.013C304.966 100.346 303.178 100.861 301.693 101.558C300.239 102.255 299.117 103.164 298.33 104.286C297.572 105.376 297.193 106.68 297.193 108.195C297.193 110.498 298.011 112.255 299.648 113.467C301.314 114.68 303.42 115.286 305.966 115.286ZM354.42 128.649V58.831H375.557V71.6492H376.33C377.784 67.4068 380.239 64.0583 383.693 61.6037C387.148 59.1492 391.269 57.9219 396.057 57.9219C400.905 57.9219 405.057 59.1644 408.511 61.6492C411.966 64.134 414.163 67.4674 415.102 71.6492H415.83C417.133 67.4977 419.678 64.1795 423.466 61.6947C427.254 59.1795 431.723 57.9219 436.875 57.9219C443.481 57.9219 448.845 60.0431 452.966 64.2856C457.087 68.4977 459.148 74.2856 459.148 81.6492V128.649H436.92V86.7401C436.92 83.2553 436.027 80.6037 434.239 78.7856C432.451 76.9371 430.133 76.0128 427.284 76.0128C424.223 76.0128 421.814 77.0128 420.057 79.0128C418.33 80.9825 417.466 83.634 417.466 86.9674V128.649H396.102V86.5128C396.102 83.2704 395.223 80.7098 393.466 78.831C391.708 76.9522 389.39 76.0128 386.511 76.0128C384.572 76.0128 382.86 76.4825 381.375 77.4219C379.89 78.331 378.723 79.634 377.875 81.331C377.057 83.028 376.648 85.028 376.648 87.331V128.649H354.42ZM505.557 129.967C498.254 129.967 491.951 128.528 486.648 125.649C481.375 122.74 477.314 118.604 474.466 113.24C471.648 107.846 470.239 101.437 470.239 94.0128C470.239 86.8007 471.663 80.4977 474.511 75.1037C477.36 69.6795 481.375 65.4674 486.557 62.4674C491.739 59.4371 497.845 57.9219 504.875 57.9219C509.845 57.9219 514.39 58.6947 518.511 60.2401C522.633 61.7856 526.193 64.0734 529.193 67.1037C532.193 70.134 534.527 73.8765 536.193 78.331C537.86 82.7553 538.693 87.831 538.693 93.5583V99.1037H478.011V86.1947H518.011C517.981 83.831 517.42 81.725 516.33 79.8765C515.239 78.028 513.739 76.5886 511.83 75.5583C509.951 74.4977 507.784 73.9674 505.33 73.9674C502.845 73.9674 500.617 74.528 498.648 75.6492C496.678 76.7401 495.117 78.2401 493.966 80.1492C492.814 82.028 492.208 84.1643 492.148 86.5583V99.6947C492.148 102.543 492.708 105.043 493.83 107.195C494.951 109.316 496.542 110.967 498.602 112.149C500.663 113.331 503.117 113.922 505.966 113.922C507.936 113.922 509.723 113.649 511.33 113.104C512.936 112.558 514.314 111.755 515.466 110.695C516.617 109.634 517.481 108.331 518.057 106.786L538.466 107.376C537.617 111.952 535.754 115.937 532.875 119.331C530.027 122.695 526.284 125.316 521.648 127.195C517.011 129.043 511.648 129.967 505.557 129.967ZM582.636 129.967C575.303 129.967 569 128.467 563.727 125.467C558.485 122.437 554.439 118.225 551.591 112.831C548.773 107.407 547.364 101.119 547.364 93.9674C547.364 86.7856 548.773 80.4977 551.591 75.1037C554.439 69.6795 558.485 65.4674 563.727 62.4674C569 59.4371 575.303 57.9219 582.636 57.9219C589.97 57.9219 596.258 59.4371 601.5 62.4674C606.773 65.4674 610.818 69.6795 613.636 75.1037C616.485 80.4977 617.909 86.7856 617.909 93.9674C617.909 101.119 616.485 107.407 613.636 112.831C610.818 118.225 606.773 122.437 601.5 125.467C596.258 128.467 589.97 129.967 582.636 129.967ZM582.773 113.195C585.439 113.195 587.697 112.376 589.545 110.74C591.394 109.104 592.803 106.831 593.773 103.922C594.773 101.013 595.273 97.6492 595.273 93.831C595.273 89.9522 594.773 86.5583 593.773 83.6492C592.803 80.7401 591.394 78.4674 589.545 76.831C587.697 75.1947 585.439 74.3765 582.773 74.3765C580.015 74.3765 577.682 75.1947 575.773 76.831C573.894 78.4674 572.455 80.7401 571.455 83.6492C570.485 86.5583 570 89.9522 570 93.831C570 97.6492 570.485 101.013 571.455 103.922C572.455 106.831 573.894 109.104 575.773 110.74C577.682 112.376 580.015 113.195 582.773 113.195Z"
          fill="black"
        />
        <path
          d="M724.364 64.6492H718.545C717.939 61.4977 716.803 58.4522 715.136 55.5128C713.47 52.5431 711.318 49.8765 708.682 47.5128C706.076 45.1189 703.045 43.225 699.591 41.831C696.136 40.4371 692.318 39.7401 688.136 39.7401C682.015 39.7401 676.379 41.3765 671.227 44.6492C666.106 47.8916 662 52.6643 658.909 58.9674C655.848 65.2704 654.318 72.9825 654.318 82.1037C654.318 91.2856 655.848 99.028 658.909 105.331C662 111.634 666.106 116.407 671.227 119.649C676.379 122.861 682.015 124.467 688.136 124.467C692.318 124.467 696.136 123.786 699.591 122.422C703.045 121.028 706.076 119.149 708.682 116.786C711.318 114.392 713.47 111.71 715.136 108.74C716.803 105.77 717.939 102.71 718.545 99.5583H724.364C723.697 103.316 722.409 106.998 720.5 110.604C718.621 114.21 716.136 117.483 713.045 120.422C709.985 123.331 706.364 125.649 702.182 127.376C698.03 129.073 693.348 129.922 688.136 129.922C680.379 129.922 673.545 127.952 667.636 124.013C661.727 120.043 657.091 114.467 653.727 107.286C650.394 100.104 648.727 91.7098 648.727 82.1037C648.727 72.4977 650.394 64.1037 653.727 56.9219C657.091 49.7401 661.727 44.1795 667.636 40.2401C673.545 36.2704 680.379 34.2856 688.136 34.2856C693.348 34.2856 698.03 35.1492 702.182 36.8765C706.364 38.5734 709.985 40.8765 713.045 43.7856C716.136 46.6643 718.621 49.9068 720.5 53.5128C722.409 57.1189 723.697 60.831 724.364 64.6492ZM749.795 83.3765V128.649H744.25V35.5583H749.795V69.8765H750.341C751.977 66.2401 754.583 63.3462 758.159 61.1947C761.765 59.0128 766.083 57.9219 771.114 57.9219C775.811 57.9219 779.947 58.9219 783.523 60.9219C787.098 62.8916 789.886 65.725 791.886 69.4219C793.917 73.0886 794.932 77.4825 794.932 82.6037V128.649H789.432V82.831C789.432 76.8613 787.659 72.0734 784.114 68.4674C780.568 64.8613 775.886 63.0583 770.068 63.0583C766.159 63.0583 762.674 63.9068 759.614 65.6037C756.553 67.3007 754.144 69.6795 752.386 72.7401C750.659 75.7704 749.795 79.3159 749.795 83.3765ZM845.102 130.104C838.799 130.104 833.314 128.543 828.648 125.422C823.981 122.301 820.375 118.028 817.83 112.604C815.284 107.18 814.011 100.998 814.011 94.0583C814.011 87.0886 815.284 80.8765 817.83 75.4219C820.405 69.9674 823.936 65.6643 828.42 62.5128C832.905 59.3613 838.027 57.7856 843.784 57.7856C847.693 57.7856 851.39 58.5734 854.875 60.1492C858.39 61.6947 861.481 63.9371 864.148 66.8765C866.845 69.8159 868.951 73.3613 870.466 77.5128C872.011 81.6644 872.784 86.331 872.784 91.5128V94.9674H817.511V89.9219H867.239C867.239 84.8613 866.208 80.3007 864.148 76.2401C862.087 72.1795 859.284 68.9522 855.739 66.5583C852.193 64.1643 848.208 62.9674 843.784 62.9674C839.148 62.9674 835.011 64.2704 831.375 66.8765C827.769 69.4522 824.905 72.9371 822.784 77.331C820.693 81.725 819.602 86.634 819.511 92.0583V94.331C819.511 100.149 820.527 105.376 822.557 110.013C824.617 114.619 827.557 118.27 831.375 120.967C835.193 123.634 839.769 124.967 845.102 124.967C848.92 124.967 852.178 124.331 854.875 123.058C857.602 121.755 859.83 120.18 861.557 118.331C863.284 116.483 864.587 114.695 865.466 112.967L870.511 115.013C869.451 117.346 867.799 119.68 865.557 122.013C863.345 124.316 860.527 126.24 857.102 127.786C853.708 129.331 849.708 130.104 845.102 130.104ZM891.875 128.649V58.831H897.284V69.3765H897.83C899.163 65.8613 901.466 63.0734 904.739 61.0128C908.011 58.9522 911.951 57.9219 916.557 57.9219C921.617 57.9219 925.693 59.134 928.784 61.5583C931.905 63.9825 934.148 67.2704 935.511 71.4219H936.011C937.375 67.331 939.814 64.0583 943.33 61.6037C946.875 59.1492 951.239 57.9219 956.42 57.9219C963.178 57.9219 968.33 60.0583 971.875 64.331C975.451 68.5734 977.239 74.3916 977.239 81.7856V128.649H971.693V81.7856C971.693 75.9674 970.299 71.3916 967.511 68.0583C964.723 64.725 960.633 63.0583 955.239 63.0583C949.481 63.0583 945.057 64.8613 941.966 68.4674C938.875 72.0734 937.33 76.6644 937.33 82.2401V128.649H931.784V81.4219C931.784 75.9977 930.42 71.5886 927.693 68.1947C924.966 64.7704 920.875 63.0583 915.42 63.0583C911.723 63.0583 908.527 63.9068 905.83 65.6037C903.163 67.3007 901.087 69.634 899.602 72.6037C898.148 75.5734 897.42 78.9825 897.42 82.831V128.649H891.875ZM1000.52 128.649V58.831H1006.02V128.649H1000.52ZM1003.3 46.4674C1002.08 46.4674 1001.02 46.0431 1000.11 45.1946C999.235 44.3462 998.795 43.3159 998.795 42.1037C998.795 40.8916 999.235 39.8613 1000.11 39.0128C1000.99 38.1643 1002.05 37.7401 1003.3 37.7401C1004.51 37.7401 1005.55 38.1643 1006.43 39.0128C1007.34 39.8613 1007.8 40.8916 1007.8 42.1037C1007.8 43.3159 1007.36 44.3462 1006.48 45.1946C1005.6 46.0431 1004.54 46.4674 1003.3 46.4674ZM1055.43 130.104C1049.49 130.104 1044.27 128.543 1039.75 125.422C1035.23 122.27 1031.7 117.967 1029.16 112.513C1026.64 107.058 1025.39 100.876 1025.39 93.9674C1025.39 87.0583 1026.66 80.8765 1029.2 75.4219C1031.75 69.9674 1035.28 65.6643 1039.8 62.5128C1044.31 59.3613 1049.51 57.7856 1055.39 57.7856C1059.81 57.7856 1063.84 58.6947 1067.48 60.5128C1071.14 62.331 1074.17 64.8613 1076.57 68.1037C1078.99 71.3462 1080.54 75.1037 1081.2 79.3765H1075.57C1074.66 74.6492 1072.39 70.7401 1068.75 67.6492C1065.14 64.528 1060.7 62.9674 1055.43 62.9674C1050.7 62.9674 1046.49 64.3007 1042.8 66.9674C1039.1 69.6037 1036.19 73.2553 1034.07 77.9219C1031.95 82.5583 1030.89 87.8765 1030.89 93.8765C1030.89 99.7856 1031.92 105.089 1033.98 109.786C1036.04 114.452 1038.92 118.149 1042.61 120.876C1046.31 123.604 1050.58 124.967 1055.43 124.967C1058.86 124.967 1061.98 124.286 1064.8 122.922C1067.64 121.558 1070.02 119.619 1071.93 117.104C1073.84 114.589 1075.1 111.649 1075.7 108.286H1081.34C1080.67 112.589 1079.16 116.376 1076.8 119.649C1074.43 122.922 1071.42 125.483 1067.75 127.331C1064.08 129.18 1059.98 130.104 1055.43 130.104ZM1118.75 130.149C1114.72 130.149 1111.02 129.346 1107.66 127.74C1104.33 126.134 1101.64 123.786 1099.61 120.695C1097.61 117.604 1096.61 113.846 1096.61 109.422C1096.61 106.513 1097.13 103.952 1098.16 101.74C1099.19 99.528 1100.78 97.6189 1102.93 96.0128C1105.08 94.4068 1107.84 93.0886 1111.2 92.0583C1114.57 90.9977 1118.58 90.1795 1123.25 89.6037C1126.8 89.1795 1129.96 88.7704 1132.75 88.3765C1135.54 87.9522 1137.72 87.3007 1139.3 86.4219C1140.9 85.5431 1141.7 84.2098 1141.7 82.4219V79.5128C1141.7 74.4219 1140.1 70.3765 1136.89 67.3765C1133.67 64.3765 1129.25 62.8765 1123.61 62.8765C1118.61 62.8765 1114.4 63.9825 1110.98 66.1947C1107.58 68.3765 1105.2 71.1947 1103.84 74.6492L1098.61 72.6947C1099.95 69.3613 1101.87 66.5886 1104.39 64.3765C1106.93 62.1643 1109.84 60.5128 1113.11 59.4219C1116.42 58.331 1119.87 57.7856 1123.48 57.7856C1126.6 57.7856 1129.57 58.225 1132.39 59.1037C1135.23 59.9825 1137.77 61.3159 1139.98 63.1037C1142.22 64.8916 1143.99 67.1795 1145.3 69.9674C1146.6 72.725 1147.25 76.028 1147.25 79.8765V128.649H1141.7V116.058H1141.3C1140.08 118.664 1138.42 121.043 1136.3 123.195C1134.2 125.316 1131.67 127.013 1128.7 128.286C1125.77 129.528 1122.45 130.149 1118.75 130.149ZM1119.3 125.013C1123.66 125.013 1127.52 123.952 1130.89 121.831C1134.28 119.68 1136.93 116.74 1138.84 113.013C1140.75 109.286 1141.7 105.058 1141.7 100.331V90.0583C1141.01 90.6643 1139.99 91.2098 1138.66 91.6947C1137.36 92.1492 1135.87 92.5583 1134.2 92.9219C1132.57 93.2553 1130.84 93.5583 1129.02 93.831C1127.23 94.0734 1125.49 94.3007 1123.8 94.5128C1118.7 95.1189 1114.55 96.0583 1111.34 97.331C1108.16 98.5734 1105.83 100.21 1104.34 102.24C1102.89 104.27 1102.16 106.725 1102.16 109.604C1102.16 114.361 1103.8 118.119 1107.07 120.876C1110.34 123.634 1114.42 125.013 1119.3 125.013ZM1176.05 35.5583V128.649H1170.5V35.5583H1176.05ZM1243.36 73.8765L1238.23 75.2401C1237.41 72.6947 1236.24 70.4977 1234.73 68.6492C1233.21 66.8007 1231.3 65.3765 1229 64.3765C1226.73 63.3462 1224 62.831 1220.82 62.831C1215.7 62.831 1211.5 64.1037 1208.23 66.6492C1204.98 69.1947 1203.36 72.5128 1203.36 76.6037C1203.36 79.9371 1204.47 82.6947 1206.68 84.8765C1208.89 87.028 1212.27 88.6644 1216.82 89.7856L1227.55 92.4674C1233.06 93.831 1237.21 96.0431 1240 99.1037C1242.79 102.134 1244.18 105.907 1244.18 110.422C1244.18 114.27 1243.14 117.68 1241.05 120.649C1238.95 123.619 1236.06 125.937 1232.36 127.604C1228.7 129.27 1224.42 130.104 1219.55 130.104C1213.03 130.104 1207.68 128.589 1203.5 125.558C1199.32 122.498 1196.64 118.119 1195.45 112.422L1200.77 111.058C1201.77 115.604 1203.85 119.073 1207 121.467C1210.18 123.831 1214.35 125.013 1219.5 125.013C1225.2 125.013 1229.79 123.664 1233.27 120.967C1236.79 118.27 1238.55 114.816 1238.55 110.604C1238.55 107.392 1237.52 104.68 1235.45 102.467C1233.39 100.255 1230.27 98.634 1226.09 97.6037L1214.95 94.8765C1209.26 93.4825 1204.98 91.2553 1202.14 88.1947C1199.29 85.1037 1197.86 81.3007 1197.86 76.7856C1197.86 73.028 1198.85 69.725 1200.82 66.8765C1202.79 64.028 1205.5 61.8007 1208.95 60.1947C1212.41 58.5886 1216.36 57.7856 1220.82 57.7856C1226.73 57.7856 1231.55 59.1795 1235.27 61.9674C1239 64.7553 1241.7 68.725 1243.36 73.8765Z"
          fill="black"
        />
      </svg>
    </div>
  );
}