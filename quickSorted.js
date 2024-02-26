const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

function quickSort(arr) {

  if (arr.length <= 1) {

    return arr;

  }

  let middle = Math.floor(arr.length / 2);

  let less = [];

  let greater = [];

  for (let i = 0; i < arr.length; i++) {

    if (i === middle) continue;

    if (arr[i] < arr[middle]) {

      less.push(arr[i]);

    } else {

      greater.push(arr[i]);

    }

  }

  return [...quickSort(less), arr[middle], ...quickSort(greater)];

}

console.log(quickSort(arr));