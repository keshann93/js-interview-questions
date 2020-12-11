/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * Example 1:
 *  Input: nums = [1,1,1,2,2,3], k = 2
 *  Output: [1,2]
 */

/**
 *
 * @param {*} nums
 * @param {*} k
 */

export default function topKFrequent(nums, k) {
  const res = [];
  const map = new Map();

  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  const sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }

  return res;
}
