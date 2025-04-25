/* For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2. */

const gcdOfSmallString = function(smallString, largeString) {
  console.log("the string is: " + smallString);
  let chunk = '';
  let sequence = '';
  let times = 0;

  for (let i = smallString.length; i >= 0; i--) {
    chunk = createChunk(smallString, i);
    console.log("trying chunk: " + chunk);
    times = Math.floor(smallString.length / chunk.length);
    console.log(`${chunk} goes into ${smallString} [${times}] times`);


    sequence = createSequence(chunk, times);
    console.log('the sequence is: ' + sequence);

    if (sequence === smallString) {
      console.log(`${sequence} equals ${smallString}, the gcd is ${chunk}`);
      break;
    }

    console.log(`${sequence} doesn't equal ${smallString}, try next chunk`);
  }

  return chunk;
}

const gcdOfBothStrings = function(chunk, str) {
  let times = str.length / chunk.length;
  let sequence = createSequence(chunk, times);

  if (sequence === str) {
    console.log(`${chunk} goes into both strings!`)
    return chunk;
  } else {
    console.log(`${chunk} does not go into ${str}`);
    return 'no common denominator';
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

let str1 = "ABCABC";
let str2 = "ABCABCABC";
let gcd = gcdOfStrings(str1, str2);


console.log(`the greatest common denominator of ${str1} and ${str2} is ${gcd}`);
