document.addEventListener ("DOMContentLoaded", () => {
    const elem = document.querySelector("#sec")
    elem.innerText = 100
    setInterval(() => {
        let current = Number(elem.innerText)
        current --
        elem.innerText = current
    }, 1000)
})