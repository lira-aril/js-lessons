let a = [6, [7, 13], [[[[[6, 83, 7, [63, 52]]]]]]]
let b = []

function lookForKey (myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (Array.isArray(myArray[i])) {
            lookForKey(myArray[i])
        } else if (myArray[i] === 83) {
            console.log(`FOUND THE KEY - ${myArray[i]}`)
        }
    }
}

lookForKey(a)

function convert (myArray, resultArr) {
    for (let i = 0; i < myArray.length; i++) {
        if (Array.isArray(myArray[i])) {
            convert(myArray[i], resultArr)
        } else {
            resultArr.push(myArray[i])
        }
    }
     return resultArr
}

console.log(convert(a, b))
