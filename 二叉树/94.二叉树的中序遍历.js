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
    /* //递归法
    let result = [];
    const dfs = function(root){
        if(root==null) return;
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    dfs(root); //只有一个参数是因为我们在js中使用闭包
    return result; */
    //迭代法，用指针！
    let result = [];
    let stack = [];
    let cur = root;
    while(stack.length ||cur){
        if(cur){
            stack.push(cur);
            cur=cur.left;
        }
        else{
            cur = stack.pop();
            result.push(cur.val);
            cur=cur.right;
        }
    }
    return result;
};
// @lc code=end

