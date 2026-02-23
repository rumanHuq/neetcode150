import { describe, test, expect } from "bun:test";
import rightSideView from "./binary-tree-right-side-view.js.js";

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

describe("binary-tree-right-side-view", () => {
  test("right side view", () => {
    const root = arrayToTree([1, 2, 3, null, 5, null, 4]);
    expect(rightSideView(root)).toEqual([1, 3, 4]);
  });

  test("single node", () => {
    const root = new TreeNode(1);
    expect(rightSideView(root)).toEqual([1]);
  });

  test("empty tree", () => {
    expect(rightSideView(null)).toEqual([]);
  });
});
