/**
 * 138. Copy List with Random Pointer
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * 
 * A linked list of length n is given such that each node contains an additional random pointer,
 * which could point to any node in the list, or null.
 * Construct a deep copy of the list.
 */
class Node {
  constructor(val = 0, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function arrayToListWithRandom(values, randomIndices) {
  if (!values.length) return null;
  const nodes = values.map(v => new Node(v));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (randomIndices) {
    for (let i = 0; i < randomIndices.length; i++) {
      if (randomIndices[i] !== null) {
        nodes[i].random = nodes[randomIndices[i]];
      }
    }
  }
  return nodes[0];
}

function listToArrayWithRandom(head) {
  const result = [];
  const nodeMap = new Map();
  let current = head;
  let idx = 0;
  while (current) {
    nodeMap.set(current, idx);
    result.push({ val: current.val, randomIdx: null });
    current = current.next;
    idx++;
  }
  current = head;
  idx = 0;
  while (current) {
    if (current.random) {
      result[idx].randomIdx = nodeMap.get(current.random);
    }
    current = current.next;
    idx++;
  }
  return result;
}

function copyRandomList(head) {
  if (!head) return null;

  const oldToNew = new Map();
  let current = head;
  while (current) {
    oldToNew.set(current, new Node(current.val));
    current = current.next;
  }

  current = head;
  while (current) {
    const newNode = oldToNew.get(current);
    newNode.next = oldToNew.get(current.next) || null;
    newNode.random = oldToNew.get(current.random) || null;
    current = current.next;
  }

  return oldToNew.get(head);
}

export default copyRandomList;
export { Node, arrayToListWithRandom, listToArrayWithRandom };
