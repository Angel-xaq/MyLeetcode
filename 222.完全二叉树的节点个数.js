/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
/*     //递归法
    if (root === null) return 0;
    let result =0;
    result += countNodes(root.left);
    result += countNodes(root.right);  //*重点，在单层逻辑中要把左右加起来，再加一个中间节点 
    return result+1;  */
    //层序遍历  
    if(root===null){
        return 0;
    }
    let queue = [];
    queue.push(root);
    let result = 0;
    while(queue.length){
        let len = queue.length;
        result +=len;   //自己做的
        for(let i=0;i<len;i++){
            let node =queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }
    return result;
};
// @lc code=end

