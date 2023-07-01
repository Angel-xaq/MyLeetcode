/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
    let ave = 0;
    let result=[];
    if(root===null) return result;
    let queue = [];  //队列
    queue.push(root);
    while(queue.length){ //*重点
        let len = queue.length;
        let temp =0;
        for(let i=0;i<len;i++){
            node = queue.shift();
            temp +=node.val;      //自己做的，自己加的
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        result.push(temp/(len));
    }
    return result;
};
// @lc code=end

