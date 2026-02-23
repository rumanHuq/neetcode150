import { describe, test, expect } from "bun:test";
import buildTree from "./construct-tree-preorder-inorder.js.js";

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
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

describe("construct-tree-preorder-inorder", () => {
  test("constructs tree", () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    const result = buildTree(preorder, inorder);
    expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7]);
  });

  test("single node", () => {
    const result = buildTree([1], [1]);
    expect(result.val).toBe(1);
  });
});
