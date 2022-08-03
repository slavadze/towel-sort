
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }
  }
  return matrix.flat();
}

console.log(module.exports([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ]))
