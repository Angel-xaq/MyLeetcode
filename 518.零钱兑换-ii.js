/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    //计算方法数  这题与01背包的组合数异曲同工
    let len = coins.length;
    const dp = Array(amount+1).fill(0);
    dp[0]=1;
    for(let i=0;i<len;i++){
        for(let j=coins[i];j<=amount;j++){
            dp[j] = dp[j]+dp[j-coins[i]];   //*重点，是j-coins[i]，不是用amount去减
        }
    }
    return dp[amount];
};
// @lc code=end

