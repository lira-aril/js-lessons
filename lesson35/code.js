document.addEventListener("DomContentLoaded", function () {

    let myArr = [ 63, 25, 52, 26, 62, 92 ]

    const input = document.querySelector("input")
    const div = document.querySelector("div")

    input.addEventListener("change", () => {
        let a = Number(input.value)
        if (myArr.includes(a)) {
            div.textContent = "Есть"
        } else {
            div.textContent = "Нет"
        }
    })
}
)