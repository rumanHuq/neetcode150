import { describe, test, expect } from "bun:test";
import lowestCommonAncestor from "./lowest-common-ancestor-bst.js.js";

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

describe("lowest-common-ancestor-bst", () => {
  test("finds LCA", () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const p = new TreeNode(2);
    const q = new TreeNode(8);
    const result = lowestCommonAncestor(root, p, q);
    expect(result.val).toBe(6);
  });

  test("finds LCA with descendant", () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const p = new TreeNode(2);
    const q = new TreeNode(4);
    const result = lowestCommonAncestor(root, p, q);
    expect(result.val).toBe(2);
  });
});
