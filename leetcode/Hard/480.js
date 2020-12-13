/**
 * 480. Sliding Window Median
 * Median is the middle value in an ordered integer list.
 * If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.
 *  Examples:
 *  [2,3,4] , the median is 3
 *  [2,3], the median is (2 + 3) / 2 = 2.5
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export default function medianSlidingWindow(nums, k) {
  const arr = [];
  const output = [];
  const isEven = k % 2 === 0;
  const m = Math.floor(k / 2);

  for (let i = 0; i < nums.length; i++) {
    binaryInsertion(arr, nums[i]);

    if (arr.length > k) {
      binaryDeletion(arr, nums[i - k]);
    }

    if (arr.length === k) {
      output.push(isEven ? (arr[m - 1] + arr[m]) / 2 : arr[m]);
    }
  }

  return output;
}

function binaryInsertion(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  arr.splice(left, 0, target);
}

function binaryDeletion(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (target === arr[mid]) {
      arr.splice(mid, 1);
      break;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
}
