var getLucky = function(s, k) {
    var newStr = " ";
    for (let i = 0; i < s.length; i++) {
        console.log("i", i)
        var letter = (s.charCodeAt(i) - 96).toString();
        console.log("letter =>", letter)
        newStr = newStr.concat(letter);
        // var newNumber = Number(newStr)
        console.log("newStr", letter, newStr, Number(newStr))
    }
    const sumCalculation = (sum) => {
        let digit = newStr.toString().split("");
        let digitArray = digit.map(Number)
        var sum = 0;
        for (let i = 0; i < digitArray.length; i++) {
            sum = sum + Number(digitArray[i]);
            console.log("sum",sum)
        }
        if (k == 1) return sum
        else {
            newStr = sum.toString();
            console.log("k=>", k)
            k--;
            return sumCalculation(sum)
        }
    }
    return sumCalculation(newStr);
};
// const getLucky = (ss, k) => {
//     let s = '';
//     for (const c of ss) s += c.charCodeAt() - 96;
//     console.log("s", s)
//     while (k--) {
//         s = go(s);
//     }
//     return s - '0';
// };

// const go = (s) => {
//     let sum = 0;
//     for (const c of s) {
//         sum += c - '0';
//         console.log("sum", sum)
//     }
//     return sum + '';
// };
console.log(getLucky("dbvmfhnttvr", 5))
// var str1 = "5";
// var str2 = "6";
// var res = str1.concat(str2);
// console.log(Number(res) / 2);