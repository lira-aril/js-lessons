class Car {
    constructor(mark, model, year, price) {
        this.mark = mark
        this.model = model
        this.year = year
        this.price = price
    }

    get mileAge() {
        return this._mileAge
    }
    
    set mileAge(km) {
        this._mileAge = km
    }

    set model(myModel) {
        this._model = myModel
    }
    get model() {
        return `${this._mark} ${this._model}`
    }

    go (km) {
        this.mileAge += km
    }
}

let carOne = new Car("Toyota", "Camry", 2015, "6000$")
carOne.mileAge = 12000
console.log(carOne.mileAge)
carOne.go(150)
console.log(carOne.mileAge)
let carTwo = new Car("BMW", "X3", 2018, "7000$")
