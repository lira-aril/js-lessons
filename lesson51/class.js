// let b = "hello"
// console.log(typeof(b))

class AwesomeClass {
    constructor(height, price) {
        this.height = height
        this.price = price
        this.width = 100
    }
    test () {
        console.log("hi")
    }
    mark = "Toyota"

    get mark () {
        return this._mark
    }

    set mark (markName) {
        this._mark = markName
    }


}

let myObject = new AwesomeClass(7, 150)
myObject.test()
console.log(myObject.height)
console.log(myObject["price"])
console.log(myObject.mark)
myObject.mark = "BMW"
console.log(myObject.mark)


let anotherObject = new AwesomeClass()
anotherObject.test()
console.log(anotherObject.price)  // console.log(anotherObject["price"])
let awesomeArray = [myObject, anotherObject, new AwesomeClass(10, 200)]
console.log(awesomeArray)