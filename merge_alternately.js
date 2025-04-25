
/*
 * convert to array
 * for i < math.max(array lengths) {
 *    result.push(word1[i])
 *    result.push(word2[i])
 * }

 * reassemble string 
 */


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function(word1, word2) {
  arr1 = word1.split('');
  arr2 = word2.split('');
  let maxLength = Math.max(arr1.length, arr2.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }

  return result.toString().replaceAll(',', '');
};
