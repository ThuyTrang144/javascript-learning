// var twoSum = function(nums, target) {
//     for (var i = 0 ; i <= nums.length; i++) {
//         for (var x = 0; x <= nums.length; x++) {
//             var sum = nums[i] + nums[x];
//             if(sum == target) {
//                 return [i, x]; 
//         }
//        }
//       }       
// };

// console.log(twoSum([3,3,6,10], 13));
// console.log(twoSum([3,2,4], 6));


// var twoSum = function(nums, target) {
//     let obj = {};
//     console.log(obj);
//     for (let i = 0; i < nums.length; i += 1) {
//       let tempt = target - nums[i];
//       console.log(obj);
//       if (obj[tempt] !== undefined && obj[tempt] !== i) {
//         return [i, obj[tempt]];
//       } else {
//         obj[nums[i]] = i;
//         console.log(obj);
//       }
//     }
//   };
// console.log(twoSum([3,2,4], 6));

var twoSum = function(nums, target) {
  let map = new Map();
  console.log(map);
  for (let i = 0; i <= nums.length; i++) {
    let tempt = target - nums[i];
    if (map.has(tempt)) {
      return [map.get(tempt), i];
    } 
    else map.set(nums[i], i);
    console.log(map);
  }
}
console.log(twoSum([3,2,4], 6));