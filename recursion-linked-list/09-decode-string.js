//using stack
/*
use two stacks, one for numbers and the other for encoded strings

Iterate through given string.
At each character, we check the following:

If char is digit
    keep track of it by appending it to `numberStr` 
Else if char is '['
    push `numberStr` to `numberStack`
    push `charStr` to `charStack`
    set `numberStr` to an empty string
    set `charStr` to an empty string
Else if char is ']'
    pop an element k from NumberStack
    pop an element convertedStr rom charStack
    set charStr to convertedStr + charStr.repeat(k)
Else
    append character to `charStr`
*/
var decodeString1 = function(s) {
    var i = 0;
    // s = Array.from(s)
    var number = "";
    var charStr = ""
    var numberStack = [];
    var charStack = []
    for (let i = 0; i < s.length; i++) {
       if (!isNaN(s[i])) {
        number += s[i]
       } else if (isNaN(s[i]) && s[i] !== "[" && s[i] !== "]") {
           charStr += s[i]
           console.log(charStr)
       } else if (s[i] === "[") {
           numberStack.push(number)
           charStack.push(charStr)
           number = "";
           charStr = ""
       } else if (s[i] === "]") {
           var k = Number(numberStack.pop());
           var convertedStr = charStack.pop();
           charStr =  convertedStr + charStr.repeat(k)
       }
    }
    return charStr;
};


// using recursion (but use too much memory)
var decodeString2 = function(s) {
    var i = 0;
    s = Array.from(s)
    const decode = (s) => {
        var charStack = [];
         while (s[i] !== "]") {
            charStack.push(s[i])
            s.splice(i, 1);
            i = 0;
        }
        if (s[0] === "]") {
            s.splice(0, 1);
        }
        var right = charStack.length - 1
        var characterStack = []
        while (isNaN(charStack[right])) { // if char[right] is character, push to characterStack
            characterStack.push(charStack.pop())
            right--;
        }  
        characterStack.pop()

        var numberStack = []
        while(!isNaN(charStack[right])) { // if char[right] is number, push to numberStack
            numberStack.push(charStack.pop())
            right--;
        }      

        var k = [] 
        var r1 = numberStack.length - 1
        while(numberStack.length !== 0) {
            k.push(numberStack.pop())
            r1--;
        }
        k = k.join("")
        k = Number(k)

        var r2 = characterStack.length - 1
        characterStack = characterStack.join("")
        characterStack = characterStack.repeat(k)
        characterStack  = Array.from(characterStack)
        while (characterStack.length !== 0) {
            charStack.push(characterStack.pop());
            r2--;
        }
        s = [...charStack, ...s]
        if (s.includes("[")) {
            return decode(s)
        }
        else {
            s = s.join("")
            return s;
        }
  }
return decode(s)
};

// using recursion
var decodeString = function(s) {
    if (!s.includes("[")) {
        return s;
    } else {
        const arrInput = splitString(s);
        console.log('child =>', s, arrInput)
        let result = ""
        for (let current of arrInput) {
            console.log('child => =>>', current)
            const isOk = current.match(/(\d+)\[(.+)\]/)
            if (!isOk) {
                result += current
            } else {
                const [, count, str] = isOk;
                let reCount = decodeString(str)
                for (let i = 0; i < count; i++) {
                    result += reCount
                }
                console.log('result', result)
            }
        }
        return result
    }
}

var splitString = function (s) {
    let str = "";
    let tempStr = "";
    let charStack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) && s[i] !== "[" && s[i] !== "]") {
            str += s[i]; 
            if (i === s.length - 1) {
                charStack.push(str)
            }
        } else if (!isNaN(s[i])) {
            if (str.length !== 0 & count === 0) {
                charStack.push(str);
                str = "";
            }
            tempStr += s[i];
        } else if (s[i] === "[") {
            str = str + tempStr + s[i];
            tempStr = ""
            count++; 
        } else if (s[i] === "]") {
            count--;
            if(count === 0) { 
                str += s[i]; 
                charStack.push(str);
                str = "";
            } else {
                str += s[i]
            }
        }
    }
    return charStack;
}

// console.log(decodeString("abc"))
console.log(decodeString("ab310[z]2[y]pq4[2[jk]e1[f]]ef"))
// console.log(splitString("2[y]pq4[2[jk]e1[f]]"))
// console.log(decodeString("abc3[lee2[ab]leeleeleeleeleeleeleelee]")) 
// console.log(splitString("abc31[a2[c]]3[ac]cd")) 
// console.log(decodeString("2[abc]3[cd]ef")) 
// console.log(decodeString("abc3[cd]xyz")) 
// console.log("abc")
