// @flow
import SumTimelineMethod from '../leetcode/Easy/371';
import twoSum from '../leetcode/Easy/1';
import isValid from '../leetcode/Easy/20';
import plusOne from '../leetcode/Easy/66';
import canConstruct from '../leetcode/Easy/383';
import fizzBuzz from '../leetcode/Easy/412';

describe('1 leetcode easy', () => {
  test('twoSum()', () => {
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
  test('383 ransome note canConstruct()', () => {
    expect(canConstruct('aabc', 'gcbaabc')).toEqual(true);
    expect(canConstruct('aab', 'baa')).toEqual(true);
    expect(canConstruct('a', 'b')).toEqual(false);
  });
  test('371 SumTimelineMethod()', () => {
    expect(SumTimelineMethod(1, -1)).toEqual(0);
    expect(SumTimelineMethod(-1, 1)).toEqual(0);
    expect(SumTimelineMethod(1, 2)).toEqual(3);
    expect(SumTimelineMethod(10, 20)).toEqual(30);
  });
  test('412 fizzBuzz()', () => {
    expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });
});
