import { describe, test, expect } from "bun:test";
import isSubtree from "./subtree-of-another-tree.js.js";

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

describe("subtree-of-another-tree", () => {
  test("detects subtree", () => {
    const root = arrayToTree([3, 4, 5, 1, 2]);
    const subRoot = arrayToTree([4, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  test("no subtree", () => {
    const root = arrayToTree([3, 4, 5, 1, 2]);
    const subRoot = arrayToTree([3, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  test("empty subtree matches", () => {
    expect(isSubtree(null, null)).toBe(true);
  });
});
