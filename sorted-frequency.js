function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length -1;

  while(leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if( middleVal > val) {
      rightIdx = middleIdx -1;
    }
    else if (middleVal < val) {
      leftIdx = middleIdx + 1;
    }
    else if(middleVal === val) {
      let middleLeftIdx = Math.floor((leftIdx + middleIdx) / 2);
      let middleRightIdx = Math.floor((middleIdx + rightIdx) / 2);
      if(arr[middleLeftIdx] < val) {
        leftIdx = middleLeftIdx + 1;
      }
      else if(arr[middleRightIdx] > val) {
        rightIdx = middleRightIdx - 1;
      } else {
        if (rightIdx === leftIdx) return 1
        return rightIdx - leftIdx;
      }
    }
    else {
      return -1;
    }
  }
  
  if (rightIdx === leftIdx ) return 1;
  return rightIdx - leftIdx;
}


module.exports = sortedFrequency