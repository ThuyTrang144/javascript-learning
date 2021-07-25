var fourSum = function(nums, target) {
    let array = new Array;
    nums.sort((a, b) => a - b);
    console.log(nums);
    if (nums.length < 4) return [];
    for (let i = 0; i < nums.length - 3; i++) {
        let j = i + 1
        while(j < nums.length - 2) {
            let left = j + 1;
            let right = nums.length - 1;
            console.log("loop =>", i, j, left, right);
            while(left < right) {
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    array.push([nums[i], nums[j], nums[left], nums[right]])
                }
                if (sum > target) {
                    while (nums[right] == nums[right - 1]) {
                        right--;
                    }
                    right--;
                }
                else {
                    while (nums[left] == nums[left + 1]) {
                        left++;
                    }
                    left++;
                }
            }
            while (nums[j] == nums[j + 1]) {
                j++;
            }
            j++;
            console.log("loop <=", i, j, left, right);
        }
        while (nums[i] == nums[i + 1]) {
            i++;
        }
    }
    return array;
};
// console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log("result", fourSum([2,2,2,2,2], 8));