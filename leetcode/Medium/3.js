/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * Example

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

/**
 * @param {string} s
 * @return {number}
 */
export default function lengthOfLongestSubstring(s) {
  let windowStart = 0;
  const distinctChar = {};
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (s[windowEnd] in distinctChar) {
      windowStart = Math.max(windowStart, distinctChar[s[windowEnd]] + 1);
    }
    distinctChar[s[windowEnd]] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
