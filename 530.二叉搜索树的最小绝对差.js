/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    //递归法  中序遍历  自己做的
    let min = Infinity;
    let result=[];
    const dfs = function(root){
        if(root===null){
            return;
        }
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    for(let i=0;i<result.length-1;i++){
        if(Math.abs(result[i]-result[i+1])<min){
            min=Math.abs(result[i]-result[i+1]);
        }
    }
    return min;  
};
// @lc code=end

