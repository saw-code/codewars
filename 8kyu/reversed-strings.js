//❓🤔DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//
// }

// 🐥TESTS:

// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

// ✅ SOLUTION:

function solution(str){
  let reverseString = ''

  for (let i = str.length - 1; i >= 0; i--) {
     reverseString += str[i]
  }

  return reverseString
}

console.log(solution('world'))
console.log(solution('hello'))
console.log(solution(''))
console.log(solution('h'))