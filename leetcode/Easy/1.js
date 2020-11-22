// 1. Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  const numsObjs = {}; // create nums obj with value as key and index as value eg: [2,7,11,15] => {2: 0, 7: 1, 11: 2, 15: 3}

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];

    if (target - currentValue in numsObjs) {
      return [i, numsObjs[target - currentValue]];
    }
    numsObjs[nums[i]] = i;
  }

  return [-1, -1];
}
