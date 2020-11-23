/* eslint import/prefer-default-export: off */

export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function TreeNode(val: any) {
  this.val = val;
  this.left = null;
  this.right = null;
}
