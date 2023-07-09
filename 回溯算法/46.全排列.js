/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let stack = [];
    let used = new Array(nums.length).fill(false);
    const backtrack = function(used,stack,nums){
        if(stack.length===nums.length){
            result.push([...stack]);  //*重要，要为[...stack]，放入的是一个数组
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]){
                continue;
            }
            //做选择
            stack.push(nums[i]);
            used[i]=true;
            backtrack(used,stack,nums);
            //取消选择
            stack.pop();
            used[i]=false;
        }
    }
    backtrack(used,stack,nums);
    return result;
};
// @lc code=end

