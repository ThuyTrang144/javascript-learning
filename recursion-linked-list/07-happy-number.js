var isHappy = function(n) {
    let arrayHappy = [];
    console.log("array =>", arrayHappy);
    const sumCalculation = (n) => {
        sum = 0;
        let happyNumber = n.toString().split("");
        let digitArray = happyNumber.map(Number)
        for (let i = 0 ; i < digitArray.length; i++) {
            sum = sum + Math.pow(digitArray[i], 2);
            }
            console.log("x", sum)
        if (sum == 1) return true
        if (arrayHappy.includes(sum)) {
            return false
        }
        arrayHappy.push(sum);
        console.log("array", arrayHappy)
        return sumCalculation(sum)
    }
    return sumCalculation(n)
};
console.log(isHappy(19))