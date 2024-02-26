let arr = [-9, -7]
let arr1 = [9, 7, 3, 5]

console.log(arr.sort());
console.log(arr1.sort());

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

let items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic" },
    { name: "Zeros", value: 37 },
  ];
  console.log(items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  }));