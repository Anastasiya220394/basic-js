import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const arr = [];
  const arr2 = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const arr3 = [];
      if (j >= 1) {
        arr3.push(matrix[i][j - 1]);
        if (i + 1 < matrix.length) {
          arr3.push(matrix[i + 1][j - 1]);
        }
      }
      if (i + 1 < matrix.length) {
        arr3.push(matrix[i + 1][j]);
        if (j + 1 < matrix[i].length) {
          arr3.push(matrix[i + 1][j + 1]);
        }
      }
      if (j + 1 < matrix[i].length) {
        arr3.push(matrix[i][j + 1]);
      }
      if (i >= 1) {
        arr3.push(matrix[i - 1][j]);
        if (j >= 1) {
          arr3.push(matrix[i - 1][j - 1]);
        }
        if (j + 1 < matrix[i].length) {
          arr3.push(matrix[i - 1][j + 1]);
        }
      }
      arr.push(arr3.filter((el) => el === true || el === 1).length);
    }
  }
  let index = Math.ceil(arr.length / matrix.length);
  arr2.push(arr.slice(0, index));
  while (index < arr.length) {
    arr2.push(arr.slice(index, index + index));
    index += index;
  }
  
  return arr2;
}
