document.addEventListener("DOMContentLoaded", start)

function start() {
    let buttons = document.querySelectorAll("button")

    for (let i = 0; i < buttons.length; i++) {
        let btn = buttons[i]
        btn.addEventListener("click", () => {
            calc(btn.innerText)
        })
    }   
}

function calc (sign) {
    const inpOne = document.getElementById("one")
    const inpTwo = document.getElementById("two")
    let result = 0;
    if (sign === "+") {
        result = Number(inpOne.value) + Number(inpTwo.value)
    } else if (sign === "-") {
        result = Number(inpOne.value) - Number(inpTwo.value)
    } else if (sign === "*") {
        result = Number(inpOne.value) * Number(inpTwo.value)
    } else if (sign === "/") {
        result = Number(inpOne.value) / Number(inpTwo.value)
    }
    const resultNode = document.querySelector("div")
    resultNode.textContent = result
}