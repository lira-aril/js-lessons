document.addEventListener("DOMContentLoaded", () => {
    let square = document.getElementById("square")

    let x = localStorage.getItem("x")
    let y= localStorage.getItem("y")

    if (x) {
        square.style.left = `${x}px`
    }

    if (y) {
        square.style.top = `${y}px`
    }
})

document.addEventListener("keydown", myClick)

function myClick (e) {
    let square = document.getElementById("square")

    let x = 0;
    if (square.style.left) {
        x = parseInt(square.style.left)
    }

    let y = 0;
    if (square.style.top) {
        y = parseInt(square.style.top)
    }

    let max_x = window.innerWidth
    let max_y = window.innerHeight

    let step = 10

    if (e.code === "ArrowRight") {
        if (x < max_x - step - 50) {
            x += step
        }
    } else if (e.code === "ArrowLeft") {
        if (x > 0) {
            x -= step
        }
    } else if (e.code === "ArrowUp") {
        if (y > 0) {
            y -= step
        }
    } else if (e.code === "ArrowDown") {
        if (y < max_y - step - 50) {
            y += step
        }
    }

    localStorage.setItem("x", x)
    localStorage.setItem("y", y)

    square.style.left = `${x}px`
    square.style.top = `${y}px`
}