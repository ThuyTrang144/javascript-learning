var threeSum = function (nums) {
    let array = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
       left = i + 1;
       right = nums.length - 1;
      //  if (nums[i] > 0 || nums[i] == 0 && nums.length == 1 || nums.length == 0) return [];
       if (i > 0 && nums[i] === nums[i-1]) continue;
       while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
           if (sum < 0) {
           left++;      
           } 
           else if (sum > 0)  { 
            right--;
           }
           else { 
               array.push([nums[i], nums[left], nums[right]]);
               console.log(array);
              while (nums[left] === nums[left+1]) left++;
              left++;
              while (nums[right] === nums[right-1]) right--;
              right--;
            }
      }
  }
  return array; 
};
// Best 2-Pointer solution of 3-Sum I could arrive at
var threeSum3 = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];

    if (a > 0) return result;
    if (a === nums[indexA - 1]) continue;

    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    // Now check if sum is zero, and if NOT, then run the next set of 2 if loop to update indexB and indexC
    while (indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];

      if ((a + b + c) === 0) {
        result.push([a, b, c]);
      }

      // Now with the below 2 if functions, I am just implementing how the indexB and indexC will be incremented and decremented with each iteration and gets feeded back to the above while function ( while (indexB < indexC ))

      if ((a + b + c) >= 0) {
        while (nums[indexC - 1] === c) { indexC--; } // This is equivalent to continue in my previous implementation
        indexC--;
      }

      if((a + b + c ) <= 0) {
        while (nums[indexB + 1] === b) { indexB++ } // This is equivalent to continue in my previous implementation
        indexB++
      }
    }
  }
  return result;
};
// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([0]));
// console.log(threeSum([]));
// console.log(threeSum([0, 0, 0]))
console.log(threeSum([1, -1, -1, 0]))