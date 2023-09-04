/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //dp[i]：考虑下标i（包括i）以内的房屋，最多可以偷窃的金额为dp[i]。
    //决定dp[i]的因素就是第i房间偷还是不偷。
    //如果偷第i房间，那么dp[i] = dp[i - 2] + nums[i] ，即：第i-1房一定是不考虑的，找出 下标i-2（包括i-2）以内的房屋，最多可以偷窃的金额为dp[i-2] 加上第i房间偷到的钱。
    //如果不偷第i房间，那么dp[i] = dp[i - 1]，即考 虑i-1房，（注意这里是考虑，并不是一定要偷i-1房，这是很多同学容易混淆的点）
    //dp[i]取最大值，即dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
    //初始化：dp[0]一定是nums[0]，dp[1]就是max(nums[0], nums[1]);
    let len=nums.length;
    const dp=Array(len).fill(0);
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);
    for(let i=2;i<len;i++){   //从下标2开始遍历
        dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1]);
    }
    return dp[len-1];
};
// @lc code=end

