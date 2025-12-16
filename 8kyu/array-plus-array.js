//❓🤔DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... ' +
// 'Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//   return arr1 + arr2; //something went wrong
// }

// 🐥TESTS:

// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

// ✅ SOLUTION:

function getUnionArray (array1, array2) {
  let unionArray = []
  for (let i = 0; i < array1.length; i++) {
    unionArray.push(array1[i])
  }

  for (let i = 0; i < array2.length; i++) {
    unionArray.push(array2[i])
  }

  return unionArray
}

function arrayPlusArray(arr1, arr2) {
  let unionArray = getUnionArray(arr1, arr2)
  let sumOfNumbers = 0

  for (let i = 0; i < unionArray.length; i++) {
    sumOfNumbers += unionArray[i]
  }

  return sumOfNumbers; //something went wrong
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))