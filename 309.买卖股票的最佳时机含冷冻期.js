/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len=prices.length;
    let dp=Array.from(Array(len),()=>new Array(4));
    dp[0][0]=-prices[0];  //持有股票状态
    dp[0][1]=0;  //保持卖出股票状态：1、已经卖出去几天了；2、昨天刚好卖出，今天冷冻期
    dp[0][2]=0;    //今天卖出股票状态：今天刚卖出
    dp[0][3]=0;    //达到冷冻期状态：昨天刚卖出股票
    for(let i=1;i<len;i++){
        dp[i][0]=Math.max(dp[i-1][0],Math.max(dp[i-1][3],dp[i-1][1])-prices[i]);
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][3]);
        dp[i][2]=dp[i-1][0]+prices[i];
        dp[i][3]=dp[i-1][2];
    }
    return Math.max(dp[len-1][1],Math.max(dp[len-1][2],dp[len-1][3]));
};
// @lc code=end

