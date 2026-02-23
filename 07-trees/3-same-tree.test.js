import { describe, test, expect } from "bun:test";
import isSameTree from "./same-tree.js.js";

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

describe("same-tree", () => {
  test("compares identical trees", () => {
    const p = arrayToTree([1, 2, 3]);
    const q = arrayToTree([1, 2, 3]);
    expect(isSameTree(p, q)).toBe(true);
  });

  test("compares different trees", () => {
    const p = arrayToTree([1, 2]);
    const q = arrayToTree([1, null, 2]);
    expect(isSameTree(p, q)).toBe(false);
  });

  test("compares empty trees", () => {
    expect(isSameTree(null, null)).toBe(true);
  });
});
