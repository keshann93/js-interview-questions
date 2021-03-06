// @flow
import SumTimelineMethod from '../leetcode/Easy/371';
import twoSum from '../leetcode/Easy/1';
import isValid from '../leetcode/Easy/20';
import plusOne from '../leetcode/Easy/66';
import canConstruct from '../leetcode/Easy/383';
import fizzBuzz from '../leetcode/Easy/412';
import movingAverageJs from '../leetcode/Easy/346';
import sortedArrayToBST from '../leetcode/Easy/108';

describe('leetcode easy', () => {
  test('1 twoSum()', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0]);
    expect(twoSum([3, 2, 3], 6)).toEqual([2, 0]);
    expect(twoSum([2, 7, 11, 15], 10)).toEqual([-1, -1]);
  });
  test('20 valid parenthesis isValid()', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
  });
  test('66 plusOne()', () => {
    expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([9])).toEqual([1, 0]);
  });
  test('108 sortedArrayToBST()', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual([
      0,
      -3,
      9,
      -10,
      null,
      5,
    ]);
  });
  test('346 MovingAverage()', () => {
    movingAverageJs.size = 3;
    expect(movingAverageJs.next(4)).toEqual(4);
    expect(movingAverageJs.next(12)).toEqual(8);
    expect(movingAverageJs.next(5)).toEqual(7);
    expect(movingAverageJs.next(10)).toEqual(9);
  });
  test('371 SumTimelineMethod()', () => {
    expect(SumTimelineMethod(1, -1)).toEqual(0);
    expect(SumTimelineMethod(-1, 1)).toEqual(0);
    expect(SumTimelineMethod(1, 2)).toEqual(3);
    expect(SumTimelineMethod(10, 20)).toEqual(30);
  });
  test('383 ransome note canConstruct()', () => {
    expect(canConstruct('aabc', 'gcbaabc')).toEqual(true);
    expect(canConstruct('aab', 'baa')).toEqual(true);
    expect(canConstruct('a', 'b')).toEqual(false);
  });

  test('412 fizzBuzz()', () => {
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });
});
