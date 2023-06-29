/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    const dfs = function(root){
        if(root==null) return;
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    dfs(root); //只有一个参数是因为我们在js中使用闭包
    return result;
};
// @lc code=end

