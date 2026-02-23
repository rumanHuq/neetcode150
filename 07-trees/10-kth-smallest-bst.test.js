import { describe, test, expect } from "bun:test";
import kthSmallest from "./kth-smallest-bst.js.js";

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

describe("kth-smallest-bst", () => {
  test("finds kth smallest", () => {
    const root = arrayToTree([3, 1, 4, null, 2]);
    expect(kthSmallest(root, 1)).toBe(1);
  });

  test("finds 3rd smallest", () => {
    const root = arrayToTree([5, 3, 6, 2, 4, null, 7]);
    expect(kthSmallest(root, 3)).toBe(4);
  });
});
