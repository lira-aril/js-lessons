// let a =  Number(prompt("Введите 1-е число: "))
// let b =  Number(prompt("Введите 2-е число: "))

// if ( a > b) {
//     console.log(a)
// } else if ( b > a) {
//     console.log(b)
// }

let a = Number(prompt("number 1: "))
let b = Number(prompt("number 2: "))
let c = Number(prompt("number 3: "))
let d = Number(prompt("number 4: "))

//Решение 1

// if ( a > b) {
//     if ( a > c ) {
//         if ( a > d) {
//             console.log(a)
//         } else {
//             console.log(d)
//         }
//     }else {
//         if ( c > d) {
//             console.log(c)
//         } else {
//             console.log(d)
//         }
//     }
// } else {
//     if ( b > c) {
//         if ( b > d ) {
//             console.log(b)
//         } else {
//             console.log(d)
//         }    
//     } else {
//         if ( c > d) {
//             console.log(c)
//         } else {
//             console.log(d)
//         }   
//     }
// }


// Решение 2

if ( a > b && a > c && a > d) {
    console.log(a)
} else if ( b > a && b > c && b > d) {
    console.log(b)
} else if ( c > a && c > b && c > d) {
    console.log(c)
} else {
    console.log(d)
}