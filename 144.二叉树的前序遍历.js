/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
/*     //递归法
    let result = [];
    const dfs = function(root){
        if(root==null) return;
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root); //只有一个参数是因为我们在js中使用闭包
    return result; */
    //迭代法 用栈
    let result =[];
    if(root==null) return result;
    let stack = [root];
    while(stack.length){
        node = stack.pop();
        result.push(node.val);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
    return result;
};
// @lc code=end

