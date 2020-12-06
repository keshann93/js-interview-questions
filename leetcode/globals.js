/* eslint import/prefer-default-export: off */

export function ListNode(value = 0, next = null) {
  this.value = value;
  this.next = next;
}

export function TreeNode(val: any) {
  this.val = val;
  this.left = null;
  this.right = null;
}
