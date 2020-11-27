/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * Example:
 *  Input: nums1 = [1,3], nums2 = [2]
 *  Output: 2.00000
 *  Explanation: merged array = [1,2,3] and median is 2.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export default function findMedianSortedArrays(nums1, nums2) {
  const sortedNums = nums1.concat(nums2).sort((a, b) => a - b);

  if (sortedNums.length % 2 !== 0) {
    return sortedNums[Math.floor(sortedNums.length / 2)];
  }
  return (
    (sortedNums[sortedNums.length / 2] +
      sortedNums[sortedNums.length / 2 - 1]) /
    2
  );
}
