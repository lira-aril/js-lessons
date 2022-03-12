
let n = prompt()

let k = 0 
for (let i = 0; i < n.length; i++) {
    let a = n[i]
    let b = n[n.length-i-1]
    if ( a === b ) { k += 1 }
} if (k === n.length) console.log('Полиндром') 
  else console.log('Не полиндром')

let m = prompt()
 
if (m.length % 2 === 0) {
    console.log(m.length / 2) 
} else {
    console.log( (m.length + 1) / 2 + 0.5)
}

//Функция// 
function myFunction () { 
    console.log('Функция вызвана') 
    console.log('Вторая строка') 
    console.log('строка 3')
    console.log(a + b)
    
    let c = a * b 
    return c
}

let res = myFunction(3, 4)
console.log(res)

function isEven(a) { 
    if (a % 2 === 0) {
        console.log("четное")
    } else {
        console.log("не четное")
    }
}
        isEven(a)
        isEven(b)

