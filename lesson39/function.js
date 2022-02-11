// Пример №1

// function mySum (a, b) {
//     return a + b
// };

// let myMult = function (a, b) {
//     return a * b
// };

// let division = (a, b) => { return a / b};
// let power = (a, b) => a ** b;

// console.log(mySum(5, 4));
// console.log(myMult(5, 4));
// console.log(division(10, 5));
// console.log(power(3, 4));


//Пример №2

let n = Number(prompt())

console.log(factorial(n))

// function factorial(num) {  // можно по короче написать используя =>
//     let res = 1
//     for (i = 1; i <= num; i++) {
//         res *= i
//     }
//     return res
// }

let factorial = (num) => {  // изменили на стрелочную функцию
    let res = 1
    for(i = 1; i <= num; i++) {
        res *=i
    }
    return res
}







