/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    //感觉有点难
    if(n==0) return [];
    const generateT = function(start,end){
        let res=[];
        if(start>end) return [null];
        for(let i=start;i<=end;i++){
            let leftBTS = generateT(start,i-1);
            let rightBTS = generateT(i+1,end);
            for(const left of leftBTS){
                for(const right of rightBTS){
                    const root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    res.push(root);
                }
            }
        }
        return res;
    }
    return generateT(1,n);
};
// @lc code=end

