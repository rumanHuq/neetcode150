import { describe, test, expect } from "bun:test";
import maxDepth from "./maximum-depth-binary-tree.js.js";

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

describe("maximum-depth-binary-tree", () => {
  test("depth of [3,9,20,null,null,15,7]", () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  test("depth of single node", () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  test("depth of empty tree", () => {
    expect(maxDepth(null)).toBe(0);
  });
});
