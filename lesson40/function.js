let b = {
    name: "Steve",
    surname: "Jobs",
    id: 2748,
    fullname: function () {
        return this.name + this.surname
    },
    greetings: function (word) {
        return `${word}, ${this.name}!`
    },
    info: function () {
        return `My name is ${this.name}, my id is ${this.id}`
    } 

}

console.log(b.name)
console.log(b.fullname())
console.log(b.greetings("Hello"))
console.log(b.info())
