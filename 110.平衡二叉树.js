/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    //递归法  求根节点的高度
    const getDepth = function(node) {
        if(node===null) return 0;
        let leftDepth=getDepth(node.left);
        if(leftDepth===-1) return -1;  // 当判定左子树不为平衡二叉树时,即可直接返回-1
        let rightDepth=getDepth(node.right);
        if(rightDepth===-1) return -1;
        if(Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        }
        else {
            return 1 + Math.max(leftDepth, rightDepth);
        }
    }
    return getDepth(root)===-1? false:true;
    
/*     let left = root.left;
    let right= root.right;
    let leftDepth=0,rightDepth=0;
    while(left){
        left = left.left;
        leftDepth++;
    }
    while(right){
        right = right.rightt;
        rightDepth++;
    }
    if(Math.abs(leftDepth-rightDepth)>1){
        return false;
    }
    else{
        isBalanced(root.left);
        isBalanced(root.right);
    }
    return true; */
};
// @lc code=end

