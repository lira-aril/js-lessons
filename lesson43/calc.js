// document.addEventListener("DOMContentLoaded", () => {

//     const firstInput = document.querySelector("#input_1");
//     const secondInput = document.querySelector("#input_2");
//     const resultNode = document.querySelector("div");
    
//     firstInput.addEventListener("input", () => {
//         resultNode.innerText = Number(firstInput.value) + Number(secondInput.value)
//     });


//     secondInput.addEventListener("input", () => {
//         resultNode.innerText = Number(firstInput.value) + Number(secondInput.value)
//     });
// })

document.addEventListener("DOMContentLoaded", ()=> {
    const inputElem = document.querySelector("input");
    inputElem.addEventListener("input", calc)
})

function calc() {
    let symbolIndex = 0;
    let text = document.querySelector("input").value;

    for(let i = 0; i < text.length; i++) {
        if("+-*/".includes(text[i])) {
            symbolIndex = i

        }
    }
    const firstNum = Number(text.slice(0, symbolIndex));
    const secondNum = Number(text.slice(symbolIndex+1, text.length));
    if(text[i] === "+") {
        const result = firstNum + secondNum
    } else if(text[i] === "-") {
        const result = firstNum - secondNum
    } else if(text[i] === "*") {
        const result = firstNum * secondNum
    } else if(text[i] === "/") {
        const result = firstNum / secondNum
    }
    document.querySelector("div").innerText = result
}