/*
108 Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, 
convert it to a height balanced BST.

A height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1.

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

* @param {number[]} nums
* @return {TreeNode}
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function(nums) {
  const len = nums.length;
  if (len < 1) {
    return null;
  }
  const mid = Math.floor(len / 2);
  // const mid = parseInt(len/2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9])); // [0, -3, 9, -10, null, 5]
