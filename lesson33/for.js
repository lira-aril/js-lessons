//Ex: #1

// let c = [6, 42, 23];
// let b = [];

// for (let i = 0; i < c.length; i++) {
//     let a = c[i] * 2;
//     b.push(a);
// }

// console.log(b);


// Ex: #2

// let m = ['hello', 43, true, 7, 'hi', null];
// let n = {};

// for (let i = 0; i < m.length; i++) {
//     n[typeof(m[i])]= m[i];
// };

// console.log(n);

// Ex: #3

// let m = ['hello', 43, true, 7, 'hi', null];
// let n = {};

// for ( let i = 0; i < m.length; i++) {
//     let key = typeof (m[i]);
//     if ( key in n) {
//         let inside_arr = [];
//         inside_arr.push(n[key]);
//         inside_arr.push(m[i]);
//         n[key] = inside_arr
//     } else {
//         n[key] = m[i]
//     }
// }

// console.log(n);


// Ex: #4

let myArr = [6, 18, 37, 86, 54];
let dragon = myArr[0];

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > dragon) {
        dragon = myArr[i]
    }
}

console.log(dragon)





