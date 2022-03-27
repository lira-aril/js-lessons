let arr =[1, 2, 3, 4]

// arr.splice(1, 1, 3, 4)
// console.log(arr)

// arr.splice(index, deleteCount, elem1, ..., elemN )

let b = [6, 2, 9, 4, 3]
let c = b.slice(1, 4) // 1вкл, 4 не вкл
console.log(c, b)

let d = b.concat(c, arr)
console.log(d)

// Удалить дубликаты из массива

const fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "grape"]
//1 способ
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits);
//2 способ 
const uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2)

// Очистить массив

// fruits.length = 0;
// console.log(fruits)

// Сделать из массива объект

const fruitsObject = {... fruits};
console.log(fruitsObject);

// Заполнение массива данными

const newArray = new Array(10).fill("1");
console.log(newArray);

// Объединение массивов

const meet = ["poultry", "beef", "fish"]
const vegetables = ["potato", "tomato", "cucumber"]
const food = [ ... fruits, ... meet, ... vegetables]
console.log(food)