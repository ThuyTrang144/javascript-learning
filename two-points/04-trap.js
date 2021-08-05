var trap = function(height) {
    let area = 0;
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i];
        }
    }
    console.log("max", max)
    for (let j =  1; j <= max; j++) {
        width = calWidth(height);
        let left = 0;
        let right = height.length - 1;
        console.log("j => ",j);
        area = area + width;
        console.log("area",area)
        while (left <= right) {
            if (height[left] == 0) {
                left++;
            }
            else {
                height[left]--;
                left++;
            }
        }
    }
    return area;
};
var calWidth = function (height) {
    let width = 0;
    for (let left = 0; left < height.length - 1; left++) {
        let right = height.length - 1;
        while (height[0] === 0) {
            height.splice(0, 1);
        }
        while (height[right] === 0) {
            height.pop();
            right = height.length - 1;
        }
        if (height[left] === 0) {
            width++;
        }
    }
    return width; 
}
// console.log("result", trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log("result", trap([0,1,0,2,1]));
// console.log("result", trap([0,0,1,0,0,0,2,1,0,1,0]));
// console.log(trap([4,2,0,3,2,5]));
// console.log(trap([2,0,2]))


var trap2 = function(height) {
    const maxHeight = Math.max(...height)
    const width = height.length - 1
    
    let result = 0;
    console.log('maxHeight', maxHeight, width)
    for (let i = 1; i <= maxHeight; i++) {
        let previousBound = -1;
        let temp = 0;
        for (let k = 0; k <= width; k++) {
            console.log('Line', i, 'Column', k, i - height[k])
            if (i - height[k] > 0) {
                temp += 1;
            } else {
                if (previousBound > 0) {
                    result += temp;
                    // temp = 0;
                    previousBound = k;
                } else {
                    previousBound = k;
                    // temp = 0;
                    // result += temp;
                }
            }
        }
        if (i - height[width] > 0) {
            result += temp;
            previousBound = -1;
        }
        console.log('Finish line', i, result, temp)
    }
    return result;
};

 var trap3 = function(height) {
    let right = height.length - 1;
    let area1 = 0, area2 = 0;
    let maxHeight = 0;
    let maxIndex = 0;
    let max1 = 0, max2 = 0;
    for (let i = 0; i <= right; i++) {
        if (height[i] >= maxHeight) {
            maxHeight = height[i];
            maxIndex = i;
        }     
    }
    for (let i = 0; i < maxIndex ; i ++) {
        while (height[0] == 0) {
            height.splice(0,1);
            maxIndex--;
            right--;
        }
        if (i == maxIndex) continue;
        if (height[i] > max1) {
            max1 = height[i];
        }
        if (height[i+1] < height[i]) {
            area1 = area1 + max1 - height[i+1];
        }
        else {
            if (height[i+1] > max1) {
                max1 = height[i+1];
            }
            else {
                area1 = area1 + max1 - height[i+1];
            }
        }
        
    }
    for (let j = right; j > maxIndex; j--) {
        while (height[right] == 0) {
            height.pop();
            right--;
            j = right;
        }
        if (right == maxIndex) continue;
        if (height[j] > max2) {
            max2 = height[j];
        }
        if (height[j-1] < height[j]) {
            area2 = area2 + max2 - height[j-1]
        } 
        else {
            if (height[j-1] > max2) {
                max2 = height[j-1];
            }
            else {
                area2 = area2 + max2 - height[j-1]
            }         
        }
    }
    let area = area1 + area2;
    return area;
 }
//  console.log("result", trap3([0,0,0,2,1,0,1,3,2,1,2,1]));
//  console.log(trap3([4,2,0,3,2,5]));
//  console.log(trap3([0, 2, 0]));
// console.log(trap3([6, 8, 5, 0, 0, 6, 5]))
// console.log(trap3([0,0,0,2,0,8,6,7,7]));
// console.log(trap3([0,0,5,0,7,3,1,5,5,0,7,6,8,4,0,5]));
// console.log(trap3([8,5,4,1,8,9,3,0,0]))
// console.log(trap3([8,9,5,4,6,4,4,8,8,4,9,1,3,0,0]));
var trapUseTwoPointers = function(height) {
    let left = 0; 
    let right = height.length - 1;
    let left_max = height[0], right_max = height[right];
    let area = 0;
    while(left < right) {
        if(height[left] < height[right]) {
            // if(height[left] > left_max) {
            //     left_max = height[left]; 
            // }
            console.log("left_max", left_max)  
            if (height[left + 1] < left_max) {
                area = area + left_max - height[left+1]
                console.log("area left", area)
            }
            else {
                left_max = height[left+1]
            }    
            left++;  
            console.log("left_max", left_max)    
            console.log("height_left", height[left])   
        }
        else {
            // if(height[right] > right_max) {
            //     right_max = height[right];
            //     console.log("original right max", right_max) 
            // }
            if (height[right - 1] < right_max) {
                area = area + right_max - height[right-1]
                console.log("area right", area)
                console.log("height_right", height[right]) 
                right--;
            }
            else {
                right_max = height[right-1];
                right--;
            }
            console.log("right_max", right_max)     
        }
        
    }
    return area;
}
 console.log("result 3",trapUseTwoPointers([0, 2, 0]));
console.log("result 8",trapUseTwoPointers([8,9,5,4,6,4,4,8,8,4,9,1,3,0,0]));
//  console.log("result 1", trapUseTwoPointers([0,1,0,2,1,0,1,3,2,1,2,1]));
//  console.log("result 2",trapUseTwoPointers([4,2,0,3,2,5]));
// console.log("result 4",trapUseTwoPointers([6, 8, 5, 0, 0, 6, 5]))
// console.log("result 5",trapUseTwoPointers([0,0,0,2,0,8,6,7,7]));
// console.log("result 6",trapUseTwoPointers([0,0,5,0,7,3,1,5,5,0,7,6,8,4,0,5]));
// console.log("result 7",trapUseTwoPointers([8,5,4,1,8,9,3,0,0]))
