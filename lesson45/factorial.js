console.log(myFactorial(6))

function myFactorial (n) {
    if (n === 1) return 1
    else return n * myFactorial(n - 1)
}

// шаг 1: 6 * myFactorial(5)
// шаг 2: 6 * 5 * myFactorial(4)
// шаг 3: 6 * 5 * 4 * myFactorial(3)
// шаг 1: 6 * 5 * 4 * 3 * myFactorial(2)
// шаг 1: 6 * 5 * 4 * 3 * 2 * myFactorial(1)
// шаг 1: 6 * 5 * 4 * 3 * 2 * 1 = 720