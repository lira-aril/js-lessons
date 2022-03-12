document.addEventListener("DOMContentLoaded", main)

// function main () {
//     document.querySelector("button").addEventListener("click", toggle)
// }


// вариант 1

// function toggle() {
//     const btn = document.querySelector("button")
//     const lamp = document.querySelector("div")
//     if (lamp.style.backgroundColor === "yellow") {
//         lamp.style.backgroundColor = "white"
//         btn.innerHTML = "Turn On"
//     } else {
//         lamp.style.backgroundColor = "yellow"
//         btn.innerHTML = "Turn Off"
//     }
// }

// вариант 2

// function toggle() {
//     const btn = document.querySelector("button")
//     const lamp = document.querySelector("div")
//     if (lamp.innerHTML = '<img src="./img/lighton.png" alt="">') {
//         lamp.innerHTML = '<img src="./img/lightoff.png" alt="">'
//         btn.innerHTML = "Turn On"
//     } else {
//         lamp.innerHTML = '<img src="./img/lighton.png" alt="">'
//         btn.innerHTML = "Turn Off"
//     }
// }

// вариант 3

function main() {
    const btn = document.querySelector("button")
    const lamp = document.querySelector("div")

    lamp.isOn = false
    
    btn.addEventListener("click", () => {
        if (lamp.isOn) {
            lamp.style.backgroundImage = 'url(./img/lightoff.png)'
            btn.innerHTML = "Turn On"
            lamp.isOn = false
        } else {
            lamp.style.backgroundImage = 'url(./img/lighton.png)'
            btn.innerHTML = "Turn Off"
            lamp.isOn = true
        }
    })
}
