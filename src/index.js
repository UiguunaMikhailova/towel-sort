
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  for (let i = 0; i < matrix.length; i = i + 1) {
    if (i % 2 !== 0) {
      matrix[i].reverse()
    }
  }
  return matrix.flat()
}
