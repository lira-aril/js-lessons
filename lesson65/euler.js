// #9

// for (let a = 1; a <= 500; a++) {
//     for (let b = a; b <= 500; b++) {
//         let c = 500 - a - b
//         if (a ** 2 + b ** 2 === c ** 2) {
//             console.log(a, b, c) 
//             console.log(a * b * c)
//         }
//     }
// }

// #4

function isPalindrome(num) {
    let strNum = Number(num);
    if(strNum.split("").reverse().join("") === strNum) {
        return true
    }
    return false
}

let m = 1
for(let a = 1000; a > 100; a--) {
    for(let b = a; b > 100; b--) {
        let c = a * b;
        if(isPalindrome(c) && c > m) {
            console.log(a, b, c)
            m = c
        }
    }
}


