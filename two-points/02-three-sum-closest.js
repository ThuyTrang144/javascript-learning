var threeSumClosest = function(array, target) {
    let min = Math.pow(10, 4); // declare a maximum number;
    let result;
    array.sort((a,b) => a - b);
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right =  array.length - 1;
        while (left < right) {
            sum = array[i] + array[left] + array[right];
            distance = sum - target;
            if (sum == target) {
                return sum;
            }
            if (Math.abs(distance) < min) {
                min = Math.abs(distance)
                result = sum;
            }
            if (distance > 0) { //(sum > target => giam sum)
                right--;

            }
            else {
                left++;
            }
        }
    }
    return result;
};

// console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));
console.log(threeSumClosest([0,2,1,-3], 1));