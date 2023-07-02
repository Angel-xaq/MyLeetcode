/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    let depth = 0;
    if(root===null){
        return depth;
    }
    let queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        depth++;
        for(let i=0;i<len;i++){
            let node =queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            if(node.left===null && node.right===null){  //自己做的，关键就是这个判断条件，存在没有孩子节点的节点的时候就是找到了最小深度
                return depth;
            }
        }
    }
};
// @lc code=end

