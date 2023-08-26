/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //很有意思，要找到坐标上的规律
    //dp[i][j] 为到达[i][j]的路径数
    const dp = Array(m).fill().map(item => Array(n)); //也可以直接将dp数值值初始化为1，let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    for(let i=0;i<m;i++){
        dp[i][0]=1;
    }
    for(let j=0;j<n;j++){
        dp[0][j]=1;
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

