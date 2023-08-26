/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = -Infinity;
    let count = 0;
    for (let i = 0; i < nums.length; i++) { // 设置起始位置
        count += nums[i];
        if(count>result){
            result=count;
        }
        if (count <= 0) count = 0;    //重置最大子序起始位置，因为遇到负数一定是拉低总和，下一次从i+1开始
    }
    return result;
};
// @lc code=end

