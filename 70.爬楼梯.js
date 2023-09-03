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
    //方法一：要找规律  （斐波那契数）
    // dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶
    // let dp = [1,2];  //爬到第1层有1种方法，第二层有2种方法
    // for(let i = 2; i < n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // return dp[n - 1];  //n-1表示第n层
    //方法二：完全背包问题
    //1阶，2阶，.... m阶就是物品，楼顶就是背包。每一阶可以重复使用，例如跳了1阶，还可以继续跳1阶。
    //问跳到楼顶有几种方法其实就是问装满背包有几种方法。并且是排列的方法
    const m=2;  //最多一次性爬两层
    const dp=Array(n+1).fill(0);
    dp[0]=1
    for(let i=0;i<=n;i++){       //遍历背包
        for(let j=1;j<=m;j++){  //遍历物品  物品的价值是1或者2
            if(i-j>=0){  //*重要，有个判断条件
                dp[i] =dp[i]+dp[i-j];
            }
        }
    }
    return dp[n];
};
// @lc code=end

