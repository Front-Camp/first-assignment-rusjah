/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  const data = [a, b].filter(el => !isNaN(el) && typeof el === 'number' && el !== Infinity && el !== -Infinity)
  if(data.length === 2) {
    return a + b;
  }
  throw new Error('Bad data!')
};

export default sum;
