let a = "hello world!"

console.log(a[4])

let b = a.length  //12
let c = b - 1  //11
console.log(a[c])  //a[11]

let k = 7
let ar = [5, 2 , 7, "hello", true, 3.14, k]
console.log(ar[2]) //7
console.log(ar[5]) //3.14
console.log(ar.length)
ar.push(123)
ar.push("world")
console.log(ar)
ar.pop()
console.log(ar)  //