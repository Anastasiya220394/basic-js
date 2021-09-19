import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let newst=str

  if (options["additionRepeatTimes"]==undefined){options.additionRepeatTimes=0}
  if (options["RepeatTimes"]==undefined){options.RepeatTimes=0}

  if(options["separator"]==undefined){   
    options.separator="+"
    }
  let add=""


if(options["addition"]!==undefined){
    if(options["additionSeparator"]==undefined){options.additionSeparator="|"}
  
  add+=options["addition"] 
 // console.log("add+aditonal="+add)
  for(let j=1;j<options['additionRepeatTimes'];j++){
    add+=options["additionSeparator"]+options["addition"]
  }
}  
newst+=add
let na=[]
na.push(str+add)

  for(let i=1;i<options['repeatTimes'];i++){
    na.push(str+add)       
    }
  return na.join(options.separator)
}
