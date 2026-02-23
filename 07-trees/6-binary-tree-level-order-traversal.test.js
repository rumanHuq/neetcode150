import { describe, test, expect } from "bun:test";
import levelOrder from "./binary-tree-level-order-traversal.js.js";

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

describe("binary-tree-level-order-traversal", () => {
  test("level order traversal", () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    const result = levelOrder(root);
    expect(result).toEqual([[3], [9, 20], [15, 7]]);
  });

  test("single node", () => {
    const root = new TreeNode(1);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  test("empty tree", () => {
    expect(levelOrder(null)).toEqual([]);
  });
});
