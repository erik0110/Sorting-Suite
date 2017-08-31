import { expect, assert } from 'chai';
import bubble from '../scripts/bubble.js';
import arrays from '../scripts/index.js';
import genRandomNumberArray from '../scripts/index.js';

describe('Bubble Sort', () => {
  let testArray;

  it('should sort a short array', function() {
    let numberArray = [9, 4, 7, 3, 1];

    assert.deepEqual(bubble(numberArray), [1, 3, 4, 7, 9]);
  })

  it('should sort a short array', function() {
    let numberArray = [-9, -4, -7, -3, -1];

    assert.deepEqual(bubble(numberArray), [-9, -7, -4, -3, -1]);
  })

  it('should sort a large random array', function() {
    let largeArray = genRandomNumberArray(50);
    let testArray = largeArray;

    largeArray.sort((a, b) => a - b)
    assert.deepEqual(bubble(testArray), largeArray)
  })

  it('should sort alphabetically', function() {
    let letterArray = ["c", "f", "a", "m", "r", "e"];

    assert.deepEqual(bubble(letterArray), ["a", "c", "e", "f", "m", "r"]);
  })

  it.skip('should sort an extremely large random array', function() {
    let largeArray = genRandomNumberArray(100000);
    let testArray = largeArray;

    largeArray.sort((a, b) => a - b)
    assert.deepEqual(bubble(testArray), largeArray)
  })

})
