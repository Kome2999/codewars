/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
    let count = initialValue - 1;
  
    return function() {  // This is the closure
      count += 1;
      return count;
    };
  }
  