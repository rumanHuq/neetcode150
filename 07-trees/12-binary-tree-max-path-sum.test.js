import { describe, test, expect } from "bun:test";
import maxPathSum from "./binary-tree-max-path-sum.js.js";

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

describe("binary-tree-max-path-sum", () => {
  test("finds max path sum", () => {
    const root = arrayToTree([-10, 9, 20, null, null, 15, 7]);
    expect(maxPathSum(root)).toBe(42);
  });

  test("single node", () => {
    const root = new TreeNode(1);
    expect(maxPathSum(root)).toBe(1);
  });

  test("negative values", () => {
    const root = arrayToTree([2, -1]);
    expect(maxPathSum(root)).toBe(2);
  });
});
