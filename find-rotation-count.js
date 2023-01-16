function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length -1;

  while (rightIdx > leftIdx + 1) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if(middleVal < arr[leftIdx]) {
      rightIdx = middleIdx;
    }
    else if(middleVal > arr[rightIdx]) {
      leftIdx = middleIdx;
    }
    else {
      return 0;
    }
  }
  return rightIdx;
}

module.exports = findRotationCount