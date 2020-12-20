// 61. Rotate List

// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export default function rotateRight(head, k) {
  let len = 0;
  let curr = head;
  let tail = curr;
  while (curr !== null) {
    tail = curr;
    curr = curr.next;
    len++;
  }
  k %= len;
  if (len <= 1 || k === 0) return head;
  curr = head;
  for (let i = 0; i < len - k - 1; i++) {
    curr = curr.next;
  }
  const nextHead = curr.next;
  tail.next = head;
  head = nextHead;
  curr.next = null;
  return head;
}
