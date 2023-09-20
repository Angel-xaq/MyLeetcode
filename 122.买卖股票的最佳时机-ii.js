/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //和121差在递推公式不一样，在121中因为股票全程只能买卖一次，所以如果买入股票，那么第i天持有股票即dp[i][0]一定就是 -prices[i]。
    //本体股票可以买卖多次
    //如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来
        //第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
        //第i天买入股票，所得现金就是昨天不持有股票的所得现金减去今天的股票价格 即：dp[i - 1][1] - prices[i]
    let len=prices.length;
    let dp=new Array(len).fill([-prices[0],0]);
    for(let i=1;i<len;i++){
        dp[i]=[Math.max(dp[i-1][0],dp[i-1][1]-prices[i]),Math.max(dp[i-1][1],dp[i-1][0]+prices[i])]
    }
    return dp[len-1][1];
};
// @lc code=end

