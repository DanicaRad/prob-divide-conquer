function countZeroes(arr) {
  let leftIdx = 0;
  if(arr[leftIdx] === 0) {
    return arr.length;
  }
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];

      if (middleVal === 1) {
          leftIdx = middleIdx + 1;
      } else if (middleVal === 0) {
          rightIdx = middleIdx - 1;
      }
  }
  if (leftIdx === 0) return 0;
  return arr.length - leftIdx;
}

module.exports = countZeroes