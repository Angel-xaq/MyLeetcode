/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    //dp[j]:和为j的完全平方数的最少数量
    const dp=Array(n+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i*i<=n;i++){  //* i*i<=n
        for(let j=i*i;j<=n;j++){  //* 遍历背包 j=i*i  这里非常容易错，如果从j = 0开始，j-i*i会为负数。我的理解是物品最小是i*i，本题必定有解，所以j从i*i开始
            dp[j]=Math.min(dp[j],dp[j-i*i]+1);
        }
    }
    return dp[n];
};
// @lc code=end

