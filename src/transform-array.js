import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newArr=[]

  if(!Array.isArray(arr)){throw new Error();}

 for (let index=0;index<arr.length;index++){
    if (arr[index]=='--double-next'){
      if(arr[index+1]!=undefined){
        newArr.push(arr[index+1]);continue}else {continue}
    }
    
    if (arr[index]=='--discard-prev'){
      if(newArr.length!=0&&arr[index-2]!=='--discard-next'){
        newArr.pop();continue}else{continue}
    }
    
    if (arr[index]=='--double-prev'){
      if(newArr.length!=0&&arr[index-2]!=='--discard-next'){
        newArr.push(arr[index-1]);continue}else {continue}
    }
    if (arr[index]=='--discard-next'){
      index++;continue
    }
    newArr.push(arr[index])
  }
  return newArr
}
