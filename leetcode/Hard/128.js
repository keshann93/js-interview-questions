/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * Example 1:
 *  Input: nums = [100,4,200,1,3,2]
 *  Output: 4
 *  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function longestConsecutive(nums) {
  const numSet = new Set();

  for (const num of nums) {
    numSet.add(num);
  }

  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
}
