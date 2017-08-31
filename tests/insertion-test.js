import { expect, assert } from 'chai';
import insertion from '../scripts/insertion.js';
import arrays from '../scripts/index.js';
import genRandomNumberArray from '../scripts/index.js';

describe('Insertion Sort', () => {
  let testArray;

  it('should sort a short array', function() {
    let numberArray = [9, 4, 7, 3, 1];

    assert.deepEqual(insertion(numberArray), [1, 3, 4, 7, 9]);
  })

  it('should sort a short array', function() {
    let numberArray = [-9, -4, -7, -3, -1];

    assert.deepEqual(insertion(numberArray), [-9, -7, -4, -3, -1]);
  })

  it('should sort a large random array', function() {
    let largeArray = genRandomNumberArray(50);
    let testArray = largeArray;

    largeArray.sort((a, b) => a - b)
    assert.deepEqual(insertion(testArray), largeArray)
  })

  it('should sort alphabetically', function() {
    let letterArray = ["c", "f", "a", "m", "r", "e"];

    assert.deepEqual(insertion(letterArray), ["a", "c", "e", "f", "m", "r"]);
  })

  it('should sort an extremely large random array', function() {
    let largeArray = genRandomNumberArray(100000);
    let testArray = largeArray;

    largeArray.sort((a, b) => a - b)
    assert.deepEqual(insertion(testArray), largeArray)
  })

})
