// Даны два числа в переменных x, y. 
// Запишите три раза подряд произведение этих чисел.
const x = 10
const y = 5
const result = x*y
let s = ''
for (let i = 1; i <= 3; i++) {
    s += result
}
console.log(s);
