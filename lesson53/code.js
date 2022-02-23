// let n = Number(prompt())

// let arr = []

// for (let i = 1; i < n + 1; i++) {
//     arr.push(-i)
// }

// console.log(arr)

class Computer {
    constructor (model, price, ) {
        this.model = model
        this.price = price
        this.avialable = true
    }

    sell () {
        this.avialable = false
        return this.price
    }
}

class Printer {
    constructor (model, price, ) {
        this.model = model
        this.price = price
        this.avialable = true
    }

    sell () {
        this.avialable = false
        return this.price
    }
}

class MonthBudget {
    constructor (startMoney, planMoney) {
        this.startMoney = startMoney
        this.planMoney = planMoney
        this.factMoney = startMoney
    }

    sell (myObject) {
        this.factMoney += myObject.sell()
    }
}

let comp_1 = new Computer("HP", 1000)
let comp_2 = new Computer("Mac", 1700)
let printer = new Printer("HP laserjet", 500)

const febBudget = new MonthBudget(300, 3000)
console.log(febBudget.factMoney)
febBudget.sell(comp_1)
console.log(febBudget.factMoney)
febBudget.sell(comp_2)
console.log(febBudget.factMoney)
febBudget.sell(printer)
console.log(febBudget.factMoney)