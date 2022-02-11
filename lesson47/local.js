document.addEventListener("DOMContentLoaded", () => {
    const myDiv = document.getElementById("local")
 
    if (!localStorage.getItem("number")) {
        localStorage.setItem("number", 0)
    }
 
    myDiv.innerHTML = localStorage.getItem("number")
    setInterval(() => {
        let num = Number(myDiv.innerText)
        num++
        localStorage.setItem("number", num)
        myDiv.innerText = num
    }, 1000);
})