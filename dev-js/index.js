    //设立"严格模式"的目的
    //1、消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
    //2、消除代码运行的一些不安全之处，保证代码运行的安全；
    //3、提高编译器效率，增加运行速度；
    //4、为未来新版本的Javascript做好铺垫
    "use strict";
 
const SA1 = [1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1];
const SA2 = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0,0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1];
const SA3 = [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0,1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1];
const SA4 = [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1,1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1];
const SA5 = [0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0,0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0];
const SA6 = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1,1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1];
const SA7 = [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1];
const SA8 = [1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0,0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1];
const SB1 = [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0,1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1];
const SB2 = [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1,0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0];
const SB3 = [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0,1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1];
const SB4 = [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0,0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1];
const SB5 = [0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1,1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0];
const SB6 = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0,0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1];
const SB7 = [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1,0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1];
const SB8 = [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0,1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0];
const SC1 = [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0,0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0];
const SC2 = [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0,0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0];
const SC3 = [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0,0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0];
const SC4 = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0,1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1];
const SC5 = [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1,0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1];
const SC6 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0,0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0];
const SC7 = [0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1,0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const SC8 = [0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1,1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1];
const SD1 = [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0,0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1];
const SD2 = [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1];
const SD3 = [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0];
const SD4 = [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1,0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0];
const SD5 = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0,0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1];
const SD6 = [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0,1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
const SD7 = [0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0,1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0];
const SD8 = [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0,1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1];

const Sc =
         [[15, 18, 12, 25, 2, 6, 4, 1, 16, 7, 22, 11, 24, 20, 13, 5, 27, 9, 17, 8, 28, 21, 14, 3,
          42, 53, 32, 38, 48, 56, 31, 41, 52, 46, 34, 49, 45, 50, 40, 29, 35, 54, 47, 43, 51, 37, 30, 33],
          [16, 19, 13, 26, 3, 7, 5, 2, 17, 8, 23, 12, 25, 21, 14, 6, 28, 10, 18, 9, 1, 22, 15, 4,
          43, 54, 33, 39, 49, 29, 32, 42, 53, 47, 35, 50, 46, 51, 41, 30, 36, 55, 48, 44, 52, 38, 31, 34],
          [18, 21, 15, 28, 5, 9, 7, 4, 19, 10, 25, 14, 27, 23, 16, 8, 2, 12, 20, 11, 3, 24, 17, 6,
          45, 56, 35, 41, 51, 31, 34, 44, 55, 49, 37, 52, 48, 53, 43, 32, 38, 29, 50, 46, 54, 40, 33, 36],
          [20, 23, 17, 2, 7, 11, 9, 6, 21, 12, 27, 16, 1, 25, 18, 10, 4, 14, 22, 13, 5, 26, 19, 8,
          47, 30, 37, 43, 53, 33, 36, 46, 29, 51, 39, 54, 50, 55, 45, 34, 40, 31, 52, 48, 56, 42, 35, 38],
          [22, 25, 19, 4, 9, 13, 11, 8, 23, 14, 1, 18, 3, 27, 20, 12, 6, 16, 24, 15, 7, 28, 21, 10,
          49, 32, 39, 45, 55, 35, 38, 48, 31, 53, 41, 56, 52, 29, 47, 36, 42, 33, 54, 50, 30, 44, 37, 40],
          [24, 27, 21, 6, 11, 15, 13, 10, 25, 16, 3, 20, 5, 1, 22, 14, 8, 18, 26, 17, 9, 2, 23, 12,
          51, 34, 41, 47, 29, 37, 40, 50, 33, 55, 43, 30, 54, 31, 49, 38, 44, 35, 56, 52, 32, 46, 39, 42],
          [26, 1, 23, 8, 13, 17, 15, 12, 27, 18, 5, 22, 7, 3, 24, 16, 10, 20, 28, 19, 11, 4, 25, 14,
          53, 36, 43, 49, 31, 39, 42, 52, 35, 29, 45, 32, 56, 33, 51, 40, 46, 37, 30, 54, 34, 48, 41, 44],
          [28, 3, 25, 10, 15, 19, 17, 14, 1, 20, 7, 24, 9, 5, 26, 18, 12, 22, 2, 21, 13, 6, 27, 16,
          55, 38, 45, 51, 33, 41, 44, 54, 37, 31, 47, 34, 30, 35, 53, 42, 48, 39, 32, 56, 36, 50, 43, 46],
          [1, 4, 26, 11, 16, 20, 18, 15, 2, 21, 8, 25, 10, 6, 27, 19, 13, 23, 3, 22, 14, 7, 28, 17,
          56, 39, 46, 52, 34, 42, 45, 55, 38, 32, 48, 35, 31, 36, 54, 43, 49, 40, 33, 29, 37, 51, 44, 47],
          [3, 6, 28, 13, 18, 22, 20, 17, 4, 23, 10, 27, 12, 8, 1, 21, 15, 25, 5, 24, 16, 9, 2, 19,
          30, 41, 48, 54, 36, 44, 47, 29, 40, 34, 50, 37, 33, 38, 56, 45, 51, 42, 35, 31, 39, 53, 46, 49],
          [5, 8, 2, 15, 20, 24, 22, 19, 6, 25, 12, 1, 14, 10, 3, 23, 17, 27, 7, 26, 18, 11, 4, 21,
          32, 43, 50, 56, 38, 46, 49, 31, 42, 36, 52, 39, 35, 40, 30, 47, 53, 44, 37, 33, 41, 55, 48, 51],
          [7, 10, 4, 17, 22, 26, 24, 21, 8, 27, 14, 3, 16, 12, 5, 25, 19, 1, 9, 28, 20, 13, 6, 23,
          34, 45, 52, 30, 40, 48, 51, 33, 44, 38, 54, 41, 37, 42, 32, 49, 55, 46, 39, 35, 43, 29, 50, 53],
          [9, 12, 6, 19, 24, 28, 26, 23, 10, 1, 16, 5, 18, 14, 7, 27, 21, 3, 11, 2, 22, 15, 8, 25,
          36, 47, 54, 32, 42, 50, 53, 35, 46, 40, 56, 43, 39, 44, 34, 51, 29, 48, 41, 37, 45, 31, 52, 55],
          [11, 14, 8, 21, 26, 2, 28, 25, 12, 3, 18, 7, 20, 16, 9, 1, 23, 5, 13, 4, 24, 17, 10, 27,
          38, 49, 56, 34, 44, 52, 55, 37, 48, 42, 30, 45, 41, 46, 36, 53, 31, 50, 43, 39, 47, 33, 54, 29],
          [13, 16, 10, 23, 28, 4, 2, 27, 14, 5, 20, 9, 22, 18, 11, 3, 25, 7, 15, 6, 26, 19, 12, 1,
          40, 51, 30, 36, 46, 54, 29, 39, 50, 44, 32, 47, 43, 48, 38, 55, 33, 52, 45, 41, 49, 35, 56, 31],
          [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2,
          41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]];

var G = new Array(new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  	                new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)); 

  //对转换后的密码进行置换
  function DES_Init(Key, FCode){

  	//通过一元运算符+,将true转换为1、false转换为0
  	let C = [];
    C[0] = + ((Key[7] & 128) > 0); C[28] = + ((Key[7] & 2) > 0);
    C[1] = + ((Key[6] & 128) > 0); C[29] = + ((Key[6] & 2) > 0);
    C[2] = + ((Key[5] & 128) > 0); C[30] = + ((Key[5] & 2 )> 0);
    C[3] = + ((Key[4] & 128 )> 0); C[31] = + ((Key[4] & 2 )> 0);
    C[4] = + ((Key[3] & 128 )> 0); C[32] = + ((Key[3] & 2 )> 0);
    C[5] = + ((Key[2] & 128 )> 0); C[33] = + ((Key[2] & 2 )> 0);
    C[6] = + ((Key[1] & 128 )> 0); C[34] = + ((Key[1] & 2 )> 0);
    C[7] = + ((Key[0] & 128 )> 0); C[35] = + ((Key[0] & 2 )> 0);

    C[8] = + ((Key[7] & 64 )> 0); C[36] = + ((Key[7] & 4 )> 0);
    C[9] = + ((Key[6] & 64 )> 0); C[37] = + ((Key[6] & 4 )> 0);
    C[10] = + ((Key[5] & 64 )> 0); C[38] = + ((Key[5] & 4 )> 0);
    C[11] = + ((Key[4] & 64 )> 0); C[39] = + ((Key[4] & 4 )> 0);
    C[12] = + ((Key[3] & 64 )> 0); C[40] = + ((Key[3] & 4 )> 0);
    C[13] = + ((Key[2] & 64 )> 0); C[41] = + ((Key[2] & 4 )> 0);
    C[14] = + ((Key[1] & 64 )> 0); C[42] = + ((Key[1] & 4 )> 0);
    C[15] = + ((Key[0] & 64 )> 0); C[43] = + ((Key[0] & 4 )> 0);

    C[16] = + ((Key[7] & 32 )> 0); C[44] = + ((Key[7] & 8 )> 0);
    C[17] = + ((Key[6] & 32 )> 0); C[45] = + ((Key[6] & 8 )> 0);
    C[18] = + ((Key[5] & 32 )> 0); C[46] = + ((Key[5] & 8 )> 0);
    C[19] = + ((Key[4] & 32 )> 0); C[47] = + ((Key[4] & 8 )> 0);
    C[20] = + ((Key[3] & 32 )> 0); C[48] = + ((Key[3] & 8 )> 0);
    C[21] = + ((Key[2] & 32 )> 0); C[49] = + ((Key[2] & 8 )> 0);
    C[22] = + ((Key[1] & 32 )> 0); C[50] = + ((Key[1] & 8 )> 0);
    C[23] = + ((Key[0] & 32 )> 0); C[51] = + ((Key[0] & 8 )> 0);

    C[24] = + ((Key[7] & 16 )> 0); C[52] = + ((Key[3] & 16 )> 0);
    C[25] = + ((Key[6] & 16 )> 0); C[53] = + ((Key[2] & 16 )> 0);
    C[26] = + ((Key[5] & 16 )> 0); C[54] = + ((Key[1] & 16 )> 0);
    C[27] = + ((Key[4] & 16 )> 0); C[55] = + ((Key[0] & 16 )> 0);
    
    if (FCode===true) {
      for ( let n = 0;n<16;n++ )
      {
        for (let h = 0;h<48;h++ )
        {
          G[n][h] = C[Sc[n][h]-1];
        }
      }
    } else {
      for (let n = 0;n<16;n++ )
      {
        for (let h = 0;h<48;h++)
        {
          G[15 - n][h] = C[Sc[n][h]-1];
        }
      }
    }  
  }

  //对输入的8字节数据加密/解密
  function DES_Code(Input){

  	let L = [];
  	let RR = [];

    L[0] = 0; RR[0] = 0;
    L[1] = + ((Input[7] & 64) > 0); RR[1] = + ((Input[7] & 128) > 0);
    L[2] = + ((Input[6] & 64) > 0); RR[2] = + ((Input[6] & 128) > 0);
    L[3] = + ((Input[5] & 64) > 0); RR[3] = + ((Input[5] & 128) > 0);
    L[4] = + ((Input[4] & 64) > 0); RR[4] = + ((Input[4] & 128) > 0);
    L[5] = + ((Input[3] & 64) > 0); RR[5] = + ((Input[3] & 128) > 0);
    L[6] = + ((Input[2] & 64) > 0); RR[6] = + ((Input[2] & 128) > 0);
    L[7] = + ((Input[1] & 64) > 0); RR[7] = + ((Input[1] & 128) > 0);
    L[8] = + ((Input[0] & 64) > 0); RR[8] = + ((Input[0] & 128) > 0);
    L[9] = + ((Input[7] & 16) > 0); RR[9] = + ((Input[7] & 32) > 0);
    L[10] = + ((Input[6] & 16) > 0); RR[10] = + ((Input[6] & 32) > 0);
    L[11] = + ((Input[5] & 16) > 0); RR[11] = + ((Input[5] & 32) > 0);
    L[12] = + ((Input[4] & 16) > 0); RR[12] = + ((Input[4] & 32) > 0);
    L[13] = + ((Input[3] & 16) > 0); RR[13] = + ((Input[3] & 32) > 0);
    L[14] = + ((Input[2] & 16) > 0); RR[14] = + ((Input[2] & 32) > 0);
    L[15] = + ((Input[1] & 16) > 0); RR[15] = + ((Input[1] & 32) > 0);
    L[16] = + ((Input[0] & 16) > 0); RR[16] = + ((Input[0] & 32) > 0);
    L[17] = + ((Input[7] & 4) > 0); RR[17] = + ((Input[7] & 8) > 0);
    L[18] = + ((Input[6] & 4) > 0); RR[18] = + ((Input[6] & 8) > 0);
    L[19] = + ((Input[5] & 4) > 0); RR[19] = + ((Input[5] & 8) > 0);
    L[20] = + ((Input[4] & 4) > 0); RR[20] = + ((Input[4] & 8) > 0);
    L[21] = + ((Input[3] & 4) > 0); RR[21] = + ((Input[3] & 8) > 0);
    L[22] = + ((Input[2] & 4) > 0); RR[22] = + ((Input[2] & 8) > 0);
    L[23] = + ((Input[1] & 4) > 0); RR[23] = + ((Input[1] & 8) > 0);
    L[24] = + ((Input[0] & 4) > 0); RR[24] = + ((Input[0] & 8) > 0);
    L[25] = Input[7] & 1; RR[25] = + ((Input[7] & 2) > 0);
    L[26] = Input[6] & 1; RR[26] = + ((Input[6] & 2) > 0);
    L[27] = Input[5] & 1; RR[27] = + ((Input[5] & 2) > 0);
    L[28] = Input[4] & 1; RR[28] = + ((Input[4] & 2) > 0);
    L[29] = Input[3] & 1; RR[29] = + ((Input[3] & 2) > 0);
    L[30] = Input[2] & 1; RR[30] = + ((Input[2] & 2) > 0);
    L[31] = Input[1] & 1; RR[31] = + ((Input[1] & 2) > 0);
    L[32] = Input[0] & 1; RR[32] = + ((Input[0] & 2) > 0);

    for (let n = 0;n<16;n++){

      let z;
	  let F = [];

      z = ((RR[32] ^ G[n][1-1]) << 5) | ((RR[5] ^ G[n][6-1]) << 4) | ((RR[1] ^ G[n][2-1]) << 3) | ((RR[2] ^ G[n][3-1]) << 2) | ((RR[3] ^ G[n][4-1]) << 1) | (RR[4] ^ G[n][5-1]);
      F[9] = L[9] ^ SA1[z];
      F[17] = L[17] ^ SB1[z];
      F[23] = L[23] ^ SC1[z];
      F[31] = L[31] ^ SD1[z];

      z = ((RR[4] ^ G[n][7-1]) << 5) | ((RR[9] ^ G[n][12-1]) << 4) | ((RR[5] ^ G[n][8-1]) << 3) | ((RR[6] ^ G[n][9-1]) << 2) | ((RR[7] ^ G[n][10-1]) << 1) | (RR[8] ^ G[n][11-1]);
      F[13] = L[13] ^ SA2[z];
      F[28] = L[28] ^ SB2[z];
      F[2] = L[2] ^ SC2[z];
      F[18] = L[18] ^ SD2[z];

      z = ((RR[8] ^ G[n][13-1]) << 5) | ((RR[13] ^ G[n][18-1]) << 4) | ((RR[9] ^ G[n][14-1]) << 3) | ((RR[10] ^ G[n][15-1]) << 2) | ((RR[11] ^ G[n][16-1]) << 1) | (RR[12] ^ G[n][17-1]);
      F[24] = L[24] ^ SA3[z];
      F[16] = L[16] ^ SB3[z];
      F[30] = L[30] ^ SC3[z];
      F[6] = L[6] ^ SD3[z];

      z = ((RR[12] ^ G[n][19-1]) << 5) | ((RR[17] ^ G[n][24-1]) << 4) | ((RR[13] ^ G[n][20-1]) << 3) | ((RR[14] ^ G[n][21-1]) << 2) | ((RR[15] ^ G[n][22-1]) << 1) | (RR[16] ^ G[n][23-1]);
      F[26] = L[26] ^ SA4[z];
      F[20] = L[20] ^ SB4[z];
      F[10] = L[10] ^ SC4[z];
      F[1] = L[1] ^ SD4[z];

      z = ((RR[16] ^ G[n][25-1]) << 5) | ((RR[21] ^ G[n][30-1]) << 4) | ((RR[17] ^ G[n][26-1]) << 3) | ((RR[18] ^ G[n][27-1]) << 2) | ((RR[19] ^ G[n][28-1]) << 1) | (RR[20] ^ G[n][29-1]);
      F[8] = L[8] ^ SA5[z];
      F[14] = L[14] ^ SB5[z];
      F[25] = L[25] ^ SC5[z];
      F[3] = L[3] ^ SD5[z];

      z = ((RR[20] ^ G[n][31-1]) << 5) | ((RR[25] ^ G[n][36-1]) << 4) | ((RR[21] ^ G[n][32-1]) << 3) | ((RR[22] ^ G[n][33-1]) << 2) | ((RR[23] ^ G[n][34-1]) << 1) | (RR[24] ^ G[n][35-1]);
      F[4] = L[4] ^ SA6[z];
      F[29] = L[29] ^ SB6[z];
      F[11] = L[11] ^ SC6[z];
      F[19] = L[19] ^ SD6[z];

      z = ((RR[24] ^ G[n][37-1]) << 5) | ((RR[29] ^ G[n][42-1]) << 4) | ((RR[25] ^ G[n][38-1]) << 3) | ((RR[26] ^ G[n][39-1]) << 2) | ((RR[27] ^ G[n][40-1]) << 1) | (RR[28] ^ G[n][41-1]);
      F[32] = L[32] ^ SA7[z];
      F[12] = L[12] ^ SB7[z];
      F[22] = L[22] ^ SC7[z];
      F[7] = L[7] ^ SD7[z];

      z = ((RR[28] ^ G[n][43-1]) << 5) | ((RR[1] ^ G[n][48-1]) << 4) | ((RR[29] ^ G[n][44-1]) << 3) | ((RR[30] ^ G[n][45-1]) << 2) | ((RR[31] ^ G[n][46-1]) << 1) | (RR[32] ^ G[n][47-1]);
      F[5] = L[5] ^ SA8[z];
      F[27] = L[27] ^ SB8[z];
      F[15] = L[15] ^ SC8[z];
      F[21] = L[21] ^ SD8[z];

      //L = R;
      for (let m = 0;m<L.length;m++){
          L[m]=RR[m];
      }
      //R = F;
      for (let m = 0;m<RR.length;m++){
          RR[m]=F[m];
      }
    }

    let AAAAAA=[0,0,0,0,0,0,0,0];
    
    AAAAAA[0] = (L[8] << 7) | (RR[8] << 6) | (L[16] << 5) | (RR[16] << 4) | (L[24] << 3) | (RR[24] << 2) | (L[32] << 1) | RR[32];
    AAAAAA[1] = (L[7] << 7) | (RR[7] << 6) | (L[15] << 5) | (RR[15] << 4) | (L[23] << 3) | (RR[23] << 2) | (L[31] << 1) | RR[31];
    AAAAAA[2] = (L[6] << 7) | (RR[6] << 6) | (L[14] << 5) | (RR[14] << 4) | (L[22] << 3) | (RR[22] << 2) | (L[30] << 1) | RR[30];
    AAAAAA[3] = (L[5] << 7) | (RR[5] << 6) | (L[13] << 5) | (RR[13] << 4) | (L[21] << 3) | (RR[21] << 2) | (L[29] << 1) | RR[29];
    AAAAAA[4] = (L[4] << 7) | (RR[4] << 6) | (L[12] << 5) | (RR[12] << 4) | (L[20] << 3) | (RR[20] << 2) | (L[28] << 1) | RR[28];
    AAAAAA[5] = (L[3] << 7) | (RR[3] << 6) | (L[11] << 5) | (RR[11] << 4) | (L[19] << 3) | (RR[19] << 2) | (L[27] << 1) | RR[27];
    AAAAAA[6] = (L[2] << 7) | (RR[2] << 6) | (L[10] << 5) | (RR[10] << 4) | (L[18] << 3) | (RR[18] << 2) | (L[26] << 1) | RR[26];
    AAAAAA[7] = (L[1] << 7) | (RR[1] << 6) | (L[9] << 5) | (RR[9] << 4) | (L[17] << 3) | (RR[17] << 2) | (L[25] << 1) | RR[25];
    
    return AAAAAA;
  }  

  //把密码转换成8字节的数据
  function StrToKey(aKey){

    let key=[0,0,0,0,0,0,0,0];
    for (let i = 1;i<= aKey.length;i++)
    {
      key[i % 8] = key[i % 8] + aKey[i-1].charCodeAt();
    }
    return key;
  }

  function enCryptStr(aStr,aKey){

    let Key=StrToKey(aKey);//将密码转换成8字节的数据
    DES_Init(Key, true);
    
    let baStr = str2gbk(aStr);//字符串转换为GBK编码数组
            
    let rStr = "";

    let i = 0;
    do {
      let ReadBuf=[0,0,0,0,0,0,0,0];

      ReadBuf[0]=baStr[i*8+0];
      ReadBuf[1]=baStr[i*8+1];
      ReadBuf[2]=baStr[i*8+2];
      ReadBuf[3]=baStr[i*8+3];
      ReadBuf[4]=baStr[i*8+4];
      ReadBuf[5]=baStr[i*8+5];
      ReadBuf[6]=baStr[i*8+6];
      ReadBuf[7]=baStr[i*8+7];
      
      let WriteBuf=DES_Code(ReadBuf);

      for (let j = 0;j <= 7;j++){	
        let tmpSS = "00" + WriteBuf[j].toString(16);
        rStr = rStr + tmpSS.slice(-2);//截取最右边2位
      }

      i++;

    } while (i < baStr.length/8);//取商:12/8=1.5
        
    return rStr.toUpperCase();	
  }

  //解密字符串
  function deCryptStr(aStr,aKey){
	  		
    let Key=StrToKey(aKey);//将密码转换成8字节的数据
	  DES_Init(Key, false);			    			    
    
    let baStr = [];
    
    for (let i = 0; i < aStr.length/2; i++){
    	
    	baStr[i] = parseInt(aStr.substring(i*2, (i+1)*2), 16);
    }
        			            
    let i2=baStr.length / 8;//取商    

    let WriteBuf2 = [];
    
    for (let i = 0;i< i2;i++){
    	
      let ReadBuf=[0,0,0,0,0,0,0,0];
      
      ReadBuf[0]=baStr[i*8+0];
      ReadBuf[1]=baStr[i*8+1];
      ReadBuf[2]=baStr[i*8+2];
      ReadBuf[3]=baStr[i*8+3];
      ReadBuf[4]=baStr[i*8+4];
      ReadBuf[5]=baStr[i*8+5];
      ReadBuf[6]=baStr[i*8+6];
      ReadBuf[7]=baStr[i*8+7];
      
      let WriteBuf=DES_Code(ReadBuf);

      WriteBuf2 = WriteBuf2.concat(WriteBuf);
    }
    
    //GBK编码转字符串
    let rStr = new TextDecoder('gbk').decode(new Uint8Array(WriteBuf2));
     
    //通过对象方式声明正则表达式
    //let reg = new RegExp('\0', "g");//删除所有的NUL字符(即十进制为0的ASCII字符)
    //通过正则字面量创建正则表达式
    //js中正则表达式的定界符是一对/,/内是正则表达式内容.其他语言可能使用其他特殊符号作为正则定界符
    //g:修饰符,用于执行全局匹配.i:修饰符,用于执行对大小写不敏感的匹配
    let reg = /\0+$/;//删除结尾的1个或多个NUL字符(即十进制为0的ASCII字符)
    rStr = rStr.replace(reg,'');
    return rStr;
  }

  function enCryptStrBtn(){

    let str = document.querySelector("input[name='src_string']").value;
    console.log('源字符串:'+str);
    let key = document.querySelector("input[name='seed']").value;
    console.log('秘钥:'+key);
    let data = enCryptStr(str,key);
    console.log('加密结果:'+data);
    document.querySelector("input[name='en_string']").value = data;
  }

  function deCryptStrBtn(){

    let str = document.querySelector("input[name='en_string']").value;
    console.log('加密字符串:'+str);
    let key = document.querySelector("input[name='seed']").value;
    console.log('秘钥:'+key);
    let data = deCryptStr(str,key);
    console.log('解密结果:'+data);
    document.querySelector("input[name='de_string']").value = data;  	
  }

  function eyeOpenClose(arg1){

    let password = document.querySelector("input[name='seed']");
    if(password.type==='password'){
      password.setAttribute('type','text');
      arg1.src = 'images/eye-open.png';
    }else{
      password.setAttribute('type','password');
      arg1.src = 'images/eye-close.png';
    }
  }
