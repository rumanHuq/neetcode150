import { describe, test, expect } from "bun:test";
import obj from "./serialize-deserialize-bst.js.js";
const serialize = obj.serialize;
const deserialize = obj.deserialize;

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

describe("serialize-deserialize-bst", () => {
  test("serializes and deserializes", () => {
    const root = arrayToTree([2, 1, 3]);
    const serialized = serialize(root);
    const deserialized = deserialize(serialized);
    expect(treeToArray(deserialized)).toEqual([2, 1, 3]);
  });

  test("handles empty tree", () => {
    expect(deserialize(serialize(null))).toBeNull();
  });
});
