/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  let currKidCandies = 0;

  for (let i = 0; i < candies.length; i++) {
    currKidCandies = candies[i] + extraCandies;
    let isMax = true;
    let idx = 0;

    while (isMax === true && idx <= candies.length - 1) {
      if (currKidCandies < candies[idx]) {
        isMax = false;
        break;
      }

      idx++
    }

    result.push(isMax);
  }

  return result;
};

let candies = [1, 6, 4, 2, 1];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
