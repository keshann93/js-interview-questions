// @flow
import addTwoNumbers from '../leetcode/Medium/2';
import lengthOfLongestSubstring from '../leetcode/Medium/3';
import longestPalindrome from '../leetcode/Medium/5';
import topKFrequent from '../leetcode/Medium/347';

describe('leetcode medium', () => {
  test('2 addTwoNumbers()', () => {
    expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  });
  test('3 lengthOfLongestSubstring()', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
  test('5 longestPalindrome()', () => {
    expect(longestPalindrome('a')).toEqual('a');
    expect(longestPalindrome('babad')).toEqual('bab');
  });
  test('347 topKFrequent()', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });
});
