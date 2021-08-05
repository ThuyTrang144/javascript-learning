var sumArray = function (arr) {
    console.log("arr1", arr)
    if (arr.length == 0) {
        return [];
    }
    if (arr.length == 1) {
        return arr[0];
    }
    if (arr.length >= 2) {
        console.log("arr", arr);
        tempt = Number(arr.splice(0,1))
        let sum = tempt + sumArray(arr);
        console.log("sum", sum)
        return  sum
    }
}
console.log(sumArray([1,2,3]))