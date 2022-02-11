// function onClick() {
//     confirm("Вы нажали кнопку?")
//     for (i = 1; i < 4; i++) {
//         console.log(i)
//     }
//     const counter = document.querySelector("div")
//     let k = Number(counter.textContent)
//     k++
//     counter.textContent = k
//     // можем написать по короче
//     // counter.textContent = Number(counter.textContent) + 1
// }
//эту функцию можем по-короче писать:

document.addEventListener("DOMContentLoaded", start)

function start() {
    const btn = document.querySelector("button")
    btn.addEventListener("click", btnClick)
}

function btnClick() {
    const counter = document.querySelector("div")
    counter.textContent = Number(counter.textContent) + 1
}
