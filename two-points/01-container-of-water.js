// var containerOfWater1 = function (height) {
//     let maxContainer = 0;
//     for (let left = 0; left < height.length; left++) {
//         for (let right = height.length - 1; right > left; right--) { 
//             if (height[left] < height[right]) {
//                 container = height[left] * (right - left);
//             }
//             else {
//                 container = height[right] * (right - left);
//             } 
//            if (container > maxContainer) {
//             maxContainer = container;
//         }
//        }
//     }
//     return maxContainer;
// }
// // O(n^n)
// console.log("output",containerOfWater1([1,8,6,2,5,4,8,3,7]));
// console.log("output",containerOfWater1([1,1]));
// console.log("output",containerOfWater1([4,3,2,1,4]));

var containerOfWater2 = function (height) {
    let maxContainer = 0;
    let left = 0;
    let right = height.length - 1;       
    while (left < right) {
        if (height[left] < height[right]) {
            container = height[left] * (right - left);
            left ++;      }
        else {
            container = height[right] * (right - left);
            right --;
        }
        if (container > maxContainer) {
            maxContainer = container;
        }
    }
    return maxContainer;
};
console.log("output",containerOfWater2([1,8,6,2,5,4,8,3,7]));
console.log("output",containerOfWater2([1,1]));
console.log("output",containerOfWater2([4,3,2,1,4]));