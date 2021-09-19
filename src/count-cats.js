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
  for(let i2=0;i2<matrix.length;i2++){
    for(let i3=0;i3<matrix[i2].length;i3++){
      if (matrix[i2][i3]=='^^'){i++}
    }
  }
 return i
}
