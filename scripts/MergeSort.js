class MergeSort = require('./MergeSort');

let array = [5, 4, 3, 2, 1];

function mergeSort (array) {
  if (array < 2) {
    return array
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left ,right) {
  let ghost = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      ghost.push(left.shift());
    } else {
      ghost.push(right.shift());
    }
    return ghost;
  }
}

module.exports = MergeSort;
