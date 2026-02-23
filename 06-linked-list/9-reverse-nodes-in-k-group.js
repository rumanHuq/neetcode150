/**
 * 25. Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * 
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
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

function countNodes(head) {
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

function reverseKGroup(head, k) {
  const dummy = new ListNode(0, head);
  let prevGroup = dummy;

  while (true) {
    const kth = getKthNode(prevGroup, k);
    if (!kth) break;

    const nextGroup = kth.next;
    let prev = kth.next;
    let current = prevGroup.next;

    for (let i = 0; i < k; i++) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    const firstNodeOfGroup = prevGroup.next;
    prevGroup.next = kth;
    prevGroup = firstNodeOfGroup;
  }

  return dummy.next;
}

function getKthNode(head, k) {
  let current = head;
  for (let i = 0; i < k; i++) {
    if (!current) return null;
    current = current.next;
  }
  return current;
}

export default reverseKGroup;
export { ListNode, arrayToList, listToArray };
