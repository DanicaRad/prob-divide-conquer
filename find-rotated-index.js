function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if( val > middleVal) {
      if( val > arr[rightIdx]) {
        rightIdx = middleIdx - 1;
      }
      else if( val < arr[rightIdx]) {
        leftIdx = middleIdx + 1;
      } else {
        return rightIdx;
      }
    }
    else if (val < middleVal) {
      if( val < arr[leftIdx]) {
        leftIdx = middleIdx + 1;
      }
      else if (val > arr[leftIdx]) {
        rightIdx = middleIdx - 1;
      } else {
        return leftIdx;
      }
    }
    else {
      return middleIdx;
    }
  }
  return -1;
}

module.exports = findRotatedIndex