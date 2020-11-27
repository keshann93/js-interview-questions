// @flow
import findMedianSortedArrays from '../leetcode/Hard/4';

describe('leetcode hard', () => {
  test('findMedianSortedArrays()', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });
});
