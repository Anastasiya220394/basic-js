import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let i=0
  for(let a=0;a<matrix.length;a++){
    for(let b=0;b<matrix[a].length;b++){
      if (matrix[a][b]=='^^'){i++}
    }
  }
 return i
}
