// @flow
import addTwoNumbers from '../leetcode/Medium/2';
import lengthOfLongestSubstring from '../leetcode/Medium/3';
import longestPalindrome from '../leetcode/Medium/5';

describe('leetcode medium', () => {
  test('addTwoNumbers()', () => {
    expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  });
  test('lengthOfLongestSubstring()', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
  test('longestPalindrome()', () => {
    expect(longestPalindrome('a')).toEqual('a');
    expect(longestPalindrome('babad')).toEqual('bab');
  });
});
