/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len=prices.length;
    let dp=new Array(len).fill([0,0]);  
    dp[0]=[-prices[0],0];  //*初始化  dp[i][0]表示第i天持有股票所得最多现金  dp[0][0]是等于-prices[0]噢
    //dp[i][1] 表示第i天不持有股票所得最多现金
    for(let i=1;i<len;i++){
        dp[i]=[Math.max(dp[i-1][0],-prices[i]),Math.max(dp[i-1][1],prices[i]+dp[i-1][0])];
    }
    return dp[len-1][1];
};
// @lc code=end

