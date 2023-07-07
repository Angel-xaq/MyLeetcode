/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let result = [];
    if(root===null) return result;
    let queue = [];  //队列
    queue.push(root);
    while(queue.length){ //*重点
        let len = queue.length;
        let temp =[];
        for(let i=0;i<len;i++){
            node = queue.shift();
            temp.push(node.val);
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        result.push(temp);
    }
    //自己做的，自己加的
    return result.reverse();
};
// @lc code=end

