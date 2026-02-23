import { describe, test, expect } from "bun:test";
import isValidBST from "./validate-bst.js.js";

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

describe("validate-bst", () => {
  test("validates BST", () => {
    const root = arrayToTree([2, 1, 3]);
    expect(isValidBST(root)).toBe(true);
  });

  test("invalid BST", () => {
    const root = arrayToTree([5, 1, 4, null, null, 3, 6]);
    expect(isValidBST(root)).toBe(false);
  });

  test("single node is valid", () => {
    const root = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });
});
