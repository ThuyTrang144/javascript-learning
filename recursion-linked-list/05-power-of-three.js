var isPowerOfThree = function(n) {
    if (n == 0) {
        return false;
    }
    if (n == 1) {
        return true;
    }
    if (n % 2 == 0 || n % 3 != 0) {
        return false
    }
    else {
        n = n / 3;
        return isPowerOfThree(n);
    }
};
console.log(isPowerOfThree(41))