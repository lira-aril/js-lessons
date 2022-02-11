document.addEventListener("DOMContentLoaded", main)

function main () {
    document.addEventListener("keydown", go)
}

function go (event) {
    let dino = document.querySelector(".gamer")
    let x = parseInt(dino.style.left)
    let y = parseInt(window.getComputedStyle(dino).top)
    let maxX = window.innerWidth
    

    if (!x) {
        x = 50
    }

    if (event.code === "ArrowRight") {
        if (x < maxX - 75) {
            dino.style.transform = "scaleX(1)";
            x += 20
        }
    } else if (event.code === "ArrowLeft") {
        if (x > 0) {
            dino.style.transform = "scaleX(-1)";
            x -= 20
        }  
    } else if (event.code === "Space") {
        dino.style.top = `${y - 100}px`
        setTimeout(() => {dino.style.top = `${y}px`}, 700)
    }
    dino.style.left = `${x}px`
}