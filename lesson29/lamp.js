// let b = true
// "be or not to be"
// console.log(b || !b) // дает true

// let b = false
// "be or not to be"
// console.log(b || !b)  // дает true

let s = Number(prompt("Пдощадь комнаты: "))

let n = 0
let error = false

if (s > 30 && s <= 50) {
    n = 2
 }else if (s > 50 && s < 150) {
     n = 4
 }else if (s >= 150) {
     n = 10
 }else if (s > 0 && s <= 30) {
     n = 1
 }else if (s <= 0) {
     console.log("Ошибка!")
     error = true
 }

 let lamp = "лампочек"
 if (n == 1) {
     lamp = "лампочка"
 }else if (n == 2 || n == 4) {
     lamp = "лампочки"
 }

 if (!error) {
 console.log("Нужно " + String(n) + " " + lamp)
 }