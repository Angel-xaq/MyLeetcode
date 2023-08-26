/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    //这题和62有点区别，多了障碍物
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array(m).fill().map(item => Array(n).fill(0));  //初始化为0
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {  //*重要，这里的判断条件，当有障碍的时候，后面就不再赋值1
        dp[i][0] = 1;
    }
    for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]; //如果有障碍物，这个地方就到不了
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

