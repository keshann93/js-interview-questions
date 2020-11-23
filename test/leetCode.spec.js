// @flow
import SumTimelineMethod from '../leetcode/Easy/371';
import SingleNumber from '../leetcode/Easy/136';
import CanWinNim from '../leetcode/Easy/292';
import twoSum from '../leetcode/Easy/1';
import addTwoNumbers from '../leetcode/Medium/2';

describe('leetcode easy', () => {
  test('twoSum()', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0]);
    expect(twoSum([3, 2, 3], 6)).toEqual([2, 0]);
    expect(twoSum([2, 7, 11, 15], 10)).toEqual([-1, -1]);
  });
  test('SumTimelineMethod()', () => {
    expect(SumTimelineMethod(1, -1)).toEqual(0);
    expect(SumTimelineMethod(-1, 1)).toEqual(0);
    expect(SumTimelineMethod(1, 2)).toEqual(3);
    expect(SumTimelineMethod(10, 20)).toEqual(30);
  });
  test('SingleNumber()', () => {
    expect(SingleNumber([1])).toEqual(1);
    expect(SingleNumber([1, 1, 2, 2, 3, 3, 4])).toEqual(4);
  });
  test('CanWinNim()', () => {
    expect(CanWinNim(4)).toEqual(false);
  });
});

describe('leetcode medium', () => {
  test('addTwoNumbers()', () => {
    expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  });
});
