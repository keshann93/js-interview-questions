/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * Example:
 * Given the sorted array: [-10,-3,0,5,9],
 * One possible answer is: [0,-3,9,-10,null,5], which represents the
 */

import { TreeNode } from '../globals';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export default function sortedArrayToBST(nums) {
  if (nums === null || nums.length === 0) {
    return null;
  }

  return constructBST(nums, 0, nums.length - 1);
}

function constructBST(nums, left, right) {
  if (left > right) return null;

  const rootIndex = Math.round((left + right) / 2);

  const rootNode = new TreeNode(nums[rootIndex]);
  rootNode.left = constructBST(nums, left, rootIndex - 1);
  rootNode.right = constructBST(nums, rootIndex + 1, right);
  return rootNode;
}
