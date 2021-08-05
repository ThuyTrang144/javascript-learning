var count = 0
var isPowerOfTwo = function(n) {
    console.log('COUNT', count)
    count++;
    if (n == 0) return false;
    if (n == 1) return true;
    if (n % 2 !== 0 ) return false
    else {
        n  = n/ 2
        return isPowerOfTwo(n)
    }

};
console.log(isPowerOfTwo(16))