let myCar = {
    marka: "Tesla",
    model: "007",
    speed: 0,
    go: function (km) {
        this.speed += km
    }
}

console.log(myCar.speed)
myCar.go(15)
console.log(myCar.speed)
myCar.go(250)
console.log(myCar.speed)
