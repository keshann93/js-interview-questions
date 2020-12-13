// @flow
import findMedianSortedArrays from '../leetcode/Hard/4';
import medianSlidingWindow from '../leetcode/Hard/480';

describe('leetcode hard', () => {
  test('4 findMedianSortedArrays()', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });
  test('480 medianSlidingWindow()', () => {
    expect(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      1.0,
      -1.0,
      -1.0,
      3.0,
      5.0,
      6.0,
    ]);
  });
});
