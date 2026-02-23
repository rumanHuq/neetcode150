import { describe, test, expect } from "bun:test";
import invertTree from "./invert-binary-tree.js.js";

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

function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left, node.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) result.pop();
  return result;
}

describe("invert-binary-tree", () => {
  test("inverts [4,2,7,1,3,6,9]", () => {
    const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
    const result = invertTree(root);
    expect(treeToArray(result)).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });

  test("handles empty tree", () => {
    expect(invertTree(null)).toBeNull();
  });

  test("handles single node", () => {
    const root = new TreeNode(1);
    const result = invertTree(root);
    expect(result.val).toBe(1);
  });
});
