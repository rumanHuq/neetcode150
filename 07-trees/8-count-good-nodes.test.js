import { describe, test, expect } from "bun:test";
import countGoodNodes from "./count-good-nodes.js.js";

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function arrayToTree(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

describe("count-good-nodes", () => {
  test("counts good nodes", () => {
    const root = arrayToTree([3, 1, 4, 3, null, 1, 5]);
    expect(countGoodNodes(root)).toBe(4);
  });

  test("single node is good", () => {
    const root = new TreeNode(1);
    expect(countGoodNodes(root)).toBe(1);
  });
});
