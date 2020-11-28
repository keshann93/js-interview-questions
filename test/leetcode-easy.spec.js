// @flow
import SumTimelineMethod from '../leetcode/Easy/371';
import SingleNumber from '../leetcode/Easy/136';
import CanWinNim from '../leetcode/Easy/292';
import twoSum from '../leetcode/Easy/1';
import isValid from '../leetcode/Easy/20';
import plusOne from '../leetcode/Easy/66';
import canConstruct from '../leetcode/Easy/383';
import fizzBuzz from '../leetcode/Easy/412';

describe('leetcode easy', () => {
  test('twoSum()', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0]);
    expect(twoSum([3, 2, 3], 6)).toEqual([2, 0]);
    expect(twoSum([2, 7, 11, 15], 10)).toEqual([-1, -1]);
  });
  test('valid parenthesis isValid()', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('(]')).toEqual(false);
  });
  test('plusOne()', () => {
    expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([9])).toEqual([1, 0]);
  });
  test('ransome note canConstruct()', () => {
    expect(canConstruct('aabc', 'gcbaabc')).toEqual(true);
    expect(canConstruct('aab', 'baa')).toEqual(true);
    expect(canConstruct('a', 'b')).toEqual(false);
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
  test('412 fizzBuzz()', () => {
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });
});
