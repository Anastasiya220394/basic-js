import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (value){
    if(value==true||value===undefined){this.value=true} else{this.value=false};        
    this.table=[]    
    let a= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    this.alpha=a
    for(let i=0;i<26;i++){
      this.table[i]=[]
      for(let j=0;j<26;j++){
        this.table[i][j]=a[j]      
      }
     
      a.push(a.shift())
    }
  }
  encrypt(message,key) {
      if(message===undefined||key===undefined){
        throw new Error();
      }      
      message=message.toUpperCase()
      key=key.toUpperCase()
      let m=0
      let k=0
      let j=0
      let result=[]
        for (let i=0;i<message.length;i++){
          if (this.alpha.indexOf(message[i])==-1){
                      result.push(message[i])        
          }else{     
          m=this.alpha.indexOf(message[i])
          k=this.alpha.indexOf(key[j])        
          result.push(this.table[k][m])        
          if(j==key.length-1) {j=0}else{j++}
        }
        }
        if(this.value==false){result=result.reverse()}
      return result.join("")
  }
  decrypt() {
          if(message===undefined||key===undefined){
            throw new Error();     
          }
          message=message.toUpperCase()
          key=key.toUpperCase()
          let char=0
          let m=0
          let k=0
          let j=0
          let result=[]
          for (let i=0;i<message.length;i++){
            if (this.alpha.indexOf(message[i])==-1){
                        result.push(message[i])        
            }else{ 
            k=this.alpha.indexOf(key[j]) 
            char= this.table[k].indexOf(message[i])    
            m=this.alpha[char]        
            result.push(m)    
            if(j==key.length-1) {j=0}else{j++}
          }
      }
      if(this.value==false){result=result.reverse()}
      return result.join("")
    }
  }

