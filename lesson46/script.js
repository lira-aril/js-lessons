setInterval(doSomthing, 1000)

function doSomthing() {
    const elem = document.querySelector("div")
    let num = elem.innerText
    num++
    elem.innerText = num
}