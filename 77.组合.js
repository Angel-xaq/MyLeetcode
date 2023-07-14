/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result=[];
    let stack=[];
    const backtrack = function(n,k){
        if(stack.length===k){
            result.push([...stack]);
        }
        for(let i=n;i>0;i--){
            //做选择
            stack.push(i);
            backtrack(i-1,k);
            //撤销选择
            stack.pop();
        }
    }
    backtrack(n,k);
    return result;
};
// @lc code=end

