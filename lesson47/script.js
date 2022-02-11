document.addEventListener ("DOMContentLoaded", () => {
    const elem = document.querySelector("#min")
    elem.innerText = "25:00"

    const startButton = document.getElementById("start")
    let invervalID = 0
    startButton.addEventListener("click", () => {
        if (invervalID < 1) {
            invervalID = setInterval(myTimer, 1000)
        }    
    })
 
    const pauseButton = document.getElementById("pause")
    pauseButton.addEventListener("click", () => 
    {
        clearInterval(invervalID)
        invervalID = 0
    })
})
 
function myTimer () {  
    const elem = document.querySelector("#min")  
    let current = elem.innerText.split(":") // ['25', '00']
    let seconds = Number(current[1])
    let minutes = Number(current[0])
 
    if (minutes === 0 && seconds === 0) {
        return 0
    }
 
    if (seconds === 0) {
        seconds = 59
        minutes--
    } else {
        seconds--
    }
 
    seconds = convertTime(seconds)
    minutes = convertTime(minutes)        
    
    elem.innerText = `${minutes}:${seconds}`
}
 
function convertTime(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return String(num)
    }
}