/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
    let result = [];
    if(root===null) return result;
    let queue = [];  //队列
    queue.push(root);
    while(queue.length){ //*重点
        let len = queue.length;
        for(let i=0;i<len;i++){
            node = queue.shift();
            if(i==len-1){    //自己做的，把102改一下，加个判断
                result.push(node.val);
            }
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }
    return result;
};
// @lc code=end

