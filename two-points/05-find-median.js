var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let left = 0;
    let right = this.arr.length - 1;
    this.arr.push(num);
    //use two pointers
    while (left < right) {
        if (this.arr[left] <= this.arr[right]) {
            left++
        }
        else {
            const tempt = this.arr[left];
            this.arr[left] = this.arr[right];
            this.arr[right] = tempt;
            left++;
        }
    }

    /* use binary search
    let numIndex;
    MedianFinder.prototype.addNum = function(num) {
        let left = 0;
        let right = this.arr.length - 1;
        let numIndex;
          while (left < right) {
           const averageIndex = (right + left) / 2 | 0; // ex: 2.5 | 0 = 2
            if (num < this.arr[averageIndex]) {
                right = averageIndex;
            }
            else {
                left = averageIndex + 1;   
            }
            if (num < this.arr[right]) {
                numIndex = left
            }
            else {
                numIndex = right + 1;
            }
        }
        if (this.arr.length < 2 ){
            if (num < this.arr[0]) {
                this.arr.splice(0, 0, num);  
            }
            else {
                this.arr.splice(1, 0, num)
            }
        }
        else this.arr.splice(numIndex, 0, num); 
    }; */
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.arr.length % 2 === 0) {
        const middle = this.arr.length / 2
        return (this.arr[middle] + this.arr[middle - 1]) / 2
    } else {
        const middle = (this.arr.length - 1) / 2
        return this.arr[middle]
    }
};

let obj = new MedianFinder();
obj.addNum(-2)
obj.addNum(-1)
obj.addNum(-3)
obj.addNum(-4)
obj.addNum(5)
obj.addNum(-5)
obj.addNum(6)
obj.addNum(3)
obj.addNum(1)
obj.addNum(0)
obj.addNum(0)
obj.addNum(1)
obj.addNum(2)
obj.addNum(3)
obj.addNum(4)
obj.addNum(5)
obj.addNum(6)
obj.addNum(7)
obj.addNum(8)
obj.addNum(9)
obj.addNum(10)
console.log(obj.findMedian())