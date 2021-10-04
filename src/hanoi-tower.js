import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 2**disksNumber-1;
    let speed = turnsSpeed/3600;
    let sec = Math.floor(turns/speed);
    let result = new Hanoi(turns,sec);
    return result
}
function Hanoi(tur,sec) {
  this.turns = tur;
  this.seconds = sec;
}
