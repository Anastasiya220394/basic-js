import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position == null || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    // console.log(this.chain);
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};
