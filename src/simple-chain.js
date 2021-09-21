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
    this.chain.push('( ' + value + ' )');
    return this;
  },
  removeLink(pos) {
    if (typeof pos === 'number' && pos > 0 && pos <= this.chain.length) {
      this.chain.splice(pos - 1, 1);
    } else {
        this.chain = [];
        throw new Error('You can\'t remove incorrect link!');
      };
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};
