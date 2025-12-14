//❓🤔DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array
// values as if all were numbers.
// Return your answer as a number.

// function sumMix(x){
//
// }

// 🐥TESTS:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//     assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//     assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
//   })
// });

// ✅ SOLUTION:

function sumMix(x){
  let count = 0

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'string') {
      count += Number(x[i])
    } else {
      count += x[i]
    }
  }

  return count
}

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
