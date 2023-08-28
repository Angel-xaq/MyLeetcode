/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    //*重点：假设加法的总和为x，那么减法对应的总和就是sum - x，
    //所以我们求的是 x - (sum - x) = target，则x = (target + sum) / 2。target和sum都是固定的。
    //此时问题就转化为，装满容量为x的背包，有几种方法
    //本题是装满有几种方法。其实这就是一个组合问题了。背包+组合
    //dp[j] 表示：用数组中若干个元素组成和为j的方案数
    //dp[j] = dp[j] + dp[j - nums[i]]
    //这个方程的意思是，如果我们要用若干个元素组成和为j的方案数，那么有两种选择：不选第i个元素或者选第i个元素。如果不选第i个元素，那么原来已经有多少种方案数就不变；如果选第i个元素，那么剩下要组成和为j - nums【i】 的方案数就等于dp[j - nums【i】]。所以两种选择相加就是dp【j】。
    let sum = nums.reduce((a,b)=>a+b);
    if((sum+target)%2 !==0){
        return 0;
    }
    if(Math.abs(target)>sum){
        return 0;
    }
    let x = (sum+target)/2;
    let len = nums.length;
    const dp = Array(x+1).fill(0);
    dp[0]=1;  //*这里不能细究，否则后面推不出来，必须设置为1。dp[0]表示用若干个元素组成和为零的方案数，只有1种就是什么都不选，所以设为1
    //即使说[0,0,0,0,0] target=0,答案是32，只有一开始初始化dp[0]=1，最后得到dp[0]才会等于32。
    for(let i=0;i<=len;i++){
        for(let j=x;j>=nums[i];j--){
            dp[j] =dp[j]+dp[j-nums[i]];
        }
    }
    return dp[x];
};
// @lc code=end

