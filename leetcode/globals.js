/* eslint import/prefer-default-export: off */

export class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

export function TreeNode(val: any) {
  this.val = val;
  this.left = null;
  this.right = null;
}
