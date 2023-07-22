/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    let max = 0;
    if(root===null){
        return max;
    }
    let queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        for(let i=0;i<len;i++){
            let node =queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        max++;  //自己做的
    }
    return max;
};
// @lc code=end

