/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 * 
 * Given a singly linked list L: L0→L1→...→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→...
 * You must do this in-place without altering the nodes' values.
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToList(arr) {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function findMiddle(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function reorderList(head) {
  if (!head || !head.next) return head;

  const mid = findMiddle(head);
  const secondHalf = mid.next;
  mid.next = null;

  const reversedSecond = reverseList(secondHalf);

  let first = head;
  let second = reversedSecond;
  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }

  return head;
}

export default reorderList;
export { ListNode, arrayToList, listToArray };
