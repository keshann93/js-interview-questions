/**
 * 66 Plus One
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
export default function plusOne(digits) {
  const dup = digits;

  for (let i = digits.length - 1; i >= 0; i--) {
    dup[i] += 1;

    if (dup[i] < 10) {
      return dup;
    }
    dup[i] = 0;
  }
  dup.unshift(1);
  return dup;
}
