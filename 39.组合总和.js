/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result=[];
    let stack=[];
    let trackSum = 0;    //*重点   定义一个当前路径和，这样下面可以随时增删
    const backtrack = function(start,candidates,target){
        if(trackSum===target){
            result.push([...stack]);
        }
        else if(trackSum>target){
            return;
        }
        for(let i=start;i<candidates.length;i++){
            //做选择
            trackSum +=candidates[i];    
            stack.push(candidates[i]);
            backtrack(i,candidates,target);  //*重要，从i开始，而不是i+1开始，这样可以重复选择当前元素
            //撤销选择
            trackSum -= candidates[i];   //*重要
            stack.pop();
        }
    }
    backtrack(0,candidates,target); 
    return result;
};
// @lc code=end

