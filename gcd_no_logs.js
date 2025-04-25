
const gcdOfSmallString = function(str) {
  let chunk = '';
  let sequence = '';
  let times = 0;

  for (let i = str.length; i >= 0; i--) {
    chunk = createChunk(str, i);
    times = Math.floor(str.length / chunk.length);
    sequence = createSequence(chunk, times);

    if (sequence === str) {
      break;
    }

  }

  return chunk;
}

const gcdOfBothStrings = function(chunk, str) {
  let times = str.length / chunk.length;
  let sequence = createSequence(chunk, times);

  if (sequence === str) {
    return chunk;
  } else {
    return '';
  }

}

const createChunk = function(str, numChars) {
  let start = 0;
  let end = start + numChars;
  return str.slice(start, end);
}

const createSequence = function(chunk, times) {
  return chunk.repeat(times)
}

const gcdOfStrings = function(str1, str2) {

  let smallString = '';
  let largeString = '';

  if (str1.length < str2.length) {
    smallString = str1;
    largeString = str2;
  } else {
    smallString = str2;
    largeString = str1;
  }

  let gcdSmall = gcdOfSmallString(smallString);
  let gcdBoth = gcdOfBothStrings(gcdSmall, largeString);

  return gcdBoth;
}

let str1 = "ABCABCABC";
let str2 = "ABCABC";

let gcd = gcdOfStrings(str1, str2);
console.log(`the gcd of ${str1} and ${str2} is "${gcd}"`);
