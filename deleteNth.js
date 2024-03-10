const list = [1, 2, 3, 1, 2, 1, 2, 3];

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    console.log((cache[n] = (cache[n] || 0) + 1));
    return cache[n] <= x;
  });
}

console.log(deleteNth(list, 2));
