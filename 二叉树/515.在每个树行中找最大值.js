/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
    let result = [];
    if(root===null) return result;
    let queue = [];  //队列
    queue.push(root);
    while(queue.length){ //*重点
        let len = queue.length;
        let max = -Infinity;
        for(let i=0;i<len;i++){
            node = queue.shift();
            if(node.val>max){    //自己做的，加个判断，保存最大值
                max = node.val;
            }
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        result.push(max);
    }
    return result;
};
// @lc code=end

