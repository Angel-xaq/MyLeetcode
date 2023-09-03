/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //*重点 dp[j]：凑足总额为j所需钱币的最少个数为dp[j]
    //凑足总额为j - coins[i]的最少个数为dp[j - coins[i]]，那么只需要加上一个钱币coins[i]即dp[j - coins[i]] + 1就是dp[j]
    //递推公式：dp[j] = min(dp[j - coins[i]] + 1, dp[j]);
    //**非常重要，第一次碰到初始化为最大的数。考虑到递推公式的特性，dp[j]必须初始化为一个最大的数，否则就会在min(dp[j - coins[i]] + 1, dp[j])比较的过程中被初始值覆盖。
    if(!amount) {
        return 0;
    }
    const dp=Array(amount+1).fill(Infinity);
    let len=coins.length;
    dp[0]=0;  //*凑足总金额为0所需钱币的个数一定是0
    for(let i=0;i<len;i++){
        for(let j=coins[i];j<=amount;j++){
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

