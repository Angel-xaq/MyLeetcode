/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    let stack = [];
    const backtrack = function(start,nums){
        
        result.push([...stack]);  //*重要，最开始执行放入[]空的
        
        for(let i=start;i<nums.length;i++){
            //做选择
            stack.push(nums[i]);  //请注意走没走，刚开始1放进去后还没走
            backtrack(i+1,nums);
            //取消选择
            stack.pop();
        }
    }
    backtrack(0,nums);
    return result;
};
// @lc code=end

