function rabbit() {
    
    let tstart = 1000
    let tsleep = 3500
    let tfinish = 1000
    const ro = document.getElementById("rabbit")

    setTimeout(() => {
        console.log("Заяц прошел половину")
        ro.style.left = "50%"

    }, tstart)

    setTimeout(() => {
        console.log("Заяц спал 10 секунд")
    }, tstart + tsleep) 

    setTimeout(() => {
        console.log("Заяц финишировал")
        ro.style.left = "90%"
    }, tstart + tsleep + tfinish)
}

function turtle() {
    const to = document.getElementById("turtle")
    for (let i = 1; i < 6; i++) {
        let part = i * 20
        setTimeout(
            () => {
                console.log(`Черепаха прошла ${part}% пути`)
                if (part === 100) part = 90
                to.style.left = `${part}%`
            }, i * 1000

            )
        }
}

// function turtle () {
//     const to = document.getElementById("turtle")
//     let currentLeft = 0 
//     setInterval(() => {
//         currentLeft += 20
//         if (currentLeft === 100) currentLeft = 90
//         to.style.left = `${currentLeft}%`
//     }, 1000)
    
// }
    
document.addEventListener("DOMContentLoaded", () => {
rabbit()
turtle()
})

