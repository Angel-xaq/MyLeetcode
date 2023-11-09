/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    //空间复杂度O(H)，递归栈的深度。
    //中序遍历BST，依次访问的节点值是递增的，错误的BST会破坏递增性，从而能定位出错误。 错误有两种：
    //错误1：出现了两对不满足前小后大，需要交换第一对的第一个元素与第二对的第二个元素。
    //错误2：只出现一对不满足前小后大，交换这一对元素即可。

    let prev = new TreeNode(-Infinity);
    let num1 = null;
    let num2 = null;
    const dfs = function(root){
        if(root==null){
            return;
        }
        dfs(root.left);
        if(prev.val>=root.val && num1==null){  //第1个错误
            num1=prev;
        }
        if(prev.val>=root.val && num1!=null){  //第2个错误 在找到第二次错误的时候会刷新
            num2=root;
        }
        prev=root;
        dfs(root.right);
    }
    dfs(root);
    let temp = num1.val;
    num1.val=num2.val;
    num2.val=temp;
    return root;
};
// @lc code=end

