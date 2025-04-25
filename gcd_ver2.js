var gcdOfStrings = function(str1, str2) {

  let chunk = '';

  let smallSequence = '';
  let largeSequence = '';

  let smallTimes = 0;
  let largeTimes = 0;

  let smallString = '';
  let largeString = '';

  if (str1.length < str2.length) {
    smallString = str1;
    largeString = str2;
  } else {
    smallString = str2;
    largeString = str1;
  }

  for (let i = smallString.length; i >= 0; i--) {
    chunk = smallString.slice(0, i);

    if (chunk.length === 0) {
      break;
    }

    smallTimes = Math.floor(smallString.length / chunk.length);
    smallSequence = chunk.repeat(smallTimes);

    largeTimes = Math.floor(largeString.length / chunk.length);
    largeSequence = chunk.repeat(largeTimes);

    if (smallSequence === smallString && largeSequence === largeString) {
      break;
    }

  }

  return chunk;
}

let str1 = "ABCABCABCA";
let str2 = "ABCABC";
let gcd = gcdOfStrings(str1, str2);

console.log(`'${gcd}'`);
