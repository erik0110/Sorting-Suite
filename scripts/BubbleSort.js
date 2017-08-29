class BubbleSort = require('./BubbleSort');

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array);
      if (n[j] > n[j + 1]) {
        [n[j], n[j + 1]] = [n[j + 1], n[j]]
      }
    }
  }
  return(array)
}

bubbleSort();

module.exports = BubbleSort;
