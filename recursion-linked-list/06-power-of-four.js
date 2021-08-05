var isPowerOfFour = function(n) {
    if (n == 0) {
        return false;
    }
    if (n == 1) {
        return true;
    }
    if (n % 4 != 0) {
        return false
    }
    else {
        n = n / 4;
        return isPowerOfFour(n);
    }
};
console.log(isPowerOfFour(16))