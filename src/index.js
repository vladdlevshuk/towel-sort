module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix === undefined) { // проверка на наличие параметра
    return [];
  }

  for (let i = 0; i < matrix.length; i++) { 
    if (i % 2 != 0) {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]); // для нечетных строк
      }
    }
    else {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]); // для четных строк
      }
    }
  }

  return result;
}