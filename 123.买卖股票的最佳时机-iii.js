/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //这边有5种状态  没有操作 （其实我们也可以不设置这个状态） 第一次持有股票 第一次不持有股票 第二次持有股票 第二次不持有股票
    //注意初始化
    let len=prices.length;
    let dp=new Array(len).fill([0,-prices[0],0,-prices[0],0]);
    for(let i=1;i<len;i++){
        dp[i][1]=Math.max(dp[i-1][0]-prices[i],dp[i-1][1]);
        dp[i][2]=Math.max(dp[i-1][1]+prices[i],dp[i-1][2]);
        dp[i][3]=Math.max(dp[i-1][2]-prices[i],dp[i-1][3]);
        dp[i][4]=Math.max(dp[i-1][3]+prices[i],dp[i-1][4]);
    }
    return dp[len-1][4];
};
// @lc code=end

