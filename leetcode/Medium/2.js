/**
 * 2. Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *  Input: l1 = [2,4,3], l2 = [5,6,4]
 *  Output: [7,0,8]
 *  Explanation: 342 + 465 = 807.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
import { ListNode } from '../globals';

export default function addTwoNumbers(l1, l2) {
  let carry = 0;
  const resultNode = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let curr = resultNode;

  while (p1 || p2) {
    const x1 = (p1 && p1.val) || 0;
    const x2 = (p2 && p2.val) || 0;
    const currentSum = carry + x1 + x2;

    carry = Math.floor(currentSum / 10);
    curr.next = new ListNode(currentSum % 10);
    curr = curr.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return printList(resultNode.next);
}

// function to print the linked list
function printList(node) {
  const list = [];
  if (node === null) {
    return [];
  }
  let temp = node;
  while (temp != null) {
    list.push(temp.value);
    process.stdout.write(String(temp.value));
    process.stdout.write(' -> ');
    temp = temp.next;
  }
  return list;
}
