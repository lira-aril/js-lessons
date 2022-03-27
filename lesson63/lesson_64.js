let goods = [
    {goodName: "Computer", price: 1000},
    {goodName: "Laptop", price: 800},
    {goodName: "Printer", price: 500}
]


//  метод filter
let filteredGoods = goods.filter(x => x.goodName != "Printer")
console.log(filteredGoods)

// Метод  map

let b = [6, 9, 5, 7, 2]

let c = b.map(item => item * 2)
console.log(b, c)

let newGoods = goods.map(good => {
    let newGood = good;
    newGood.price = newGood.price * 2;
    newGood.available = true;
    return newGood
})

console.log(newGoods)

let newG = []
for(let i = 0; i < goods.length; i++) {
    let o = goods[i];
    o.price = o.price * 2
    o.available = true
    newG.push(o)
}
console.log(newG)

// Метод  sort && reverse

let s = b.sort((a, b) => a -b)  // сортирует в виде строки
console.log(s)

let r = s.reverse()
console.log(r)

// Метод  reduce

let res = b.reduce((m, num) => {
    console.log(m, num)
    return m * num
})
console.log(res)

let sum = goods.reduce((s, good) => )


