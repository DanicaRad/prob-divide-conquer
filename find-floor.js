function findFloor(arr, val) {
  if(arr[0] > val) return -1;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if(val > middleVal) {
      if(middleIdx === leftIdx) {
        if(val < arr[rightIdx]) {
          return middleVal;
        }
        return arr[rightIdx];
      }
      leftIdx = middleIdx;
    }
    else if(val < middleVal) {
      rightIdx = middleIdx - 1;
    }
    else {
      return middleVal;
    } 
  }
}

module.exports = findFloor