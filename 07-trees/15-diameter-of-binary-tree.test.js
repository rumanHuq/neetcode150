import { describe, test, expect } from "bun:test";
import diameterOfBinaryTree from "./diameter-of-binary-tree.js.js";

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

describe("diameter-of-binary-tree", () => {
  test("calculates diameter", () => {
    const root = arrayToTree([1, 2, 3, 4, 5]);
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test("single node", () => {
    const root = new TreeNode(1);
    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  test("empty tree", () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
  });
});
