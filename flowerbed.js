/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function(flowerbed, n) {
  console.log(`starting flowerbed: ${flowerbed}`);
  let flowersPlaced = 0;

  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return true;
  }

  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    flowerbed[0] = 1;
    flowersPlaced++;
  }

  for (let i = 1; i < flowerbed.length - 2; i++) {

    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      flowersPlaced++;
    }

  }

  if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
    flowerbed[flowerbed.length - 1] = 1;
    flowersPlaced++;
  }

  console.log(`final flowerbed: ${flowerbed}`);
  let result = flowersPlaced >= n;
  return result;
};

let flowerbed = [1, 0, 0, 0, 0, 0, 1];
let n = 2;
let success = canPlaceFlowers(flowerbed, n);
console.log(`can plant ${n} flowers: ${success}`);
