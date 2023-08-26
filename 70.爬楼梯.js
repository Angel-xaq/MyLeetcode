/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //要找规律
    // dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶
    let dp = [1,2];  //爬到第1层有1种方法，第二层有2种方法
    for(let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];  //n-1表示第n层
};
// @lc code=end

