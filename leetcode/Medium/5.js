/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example:
 *  Input: s = "babad"
 *  Output: "bab"
 *  Note: "aba" is also a valid answer.
 */

/**
 * @param {string} s
 * @return {string}
 */
export default function longestPalindrome(st) {
  const twoDimArray = Array(st.length)
    .fill(0)
    .map(() => Array(st.length).fill(0));

  // replace 0 with true if only one character occurs
  for (let i = 0; i < st.length; i++) {
    twoDimArray[i][i] = true;
  }

  let maxLength = 1;
  let longestPalindromeStr = st.substr(0, 1);
  for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
      if (st.charAt(startIndex) === st.charAt(endIndex)) {
        if (
          endIndex - startIndex === 1 ||
          twoDimArray[startIndex + 1][endIndex - 1]
        ) {
          twoDimArray[startIndex][endIndex] = true;
          maxLength = Math.max(maxLength, endIndex - startIndex + 1);
          longestPalindromeStr =
            longestPalindromeStr.length > maxLength
              ? longestPalindromeStr
              : st.substr(startIndex, maxLength);
        }
      }
    }
  }
  return longestPalindromeStr;
}
