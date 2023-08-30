/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    //这道题有顺序要求 排列
    let len = nums.length;
    const dp = Array(target+1).fill(0);
    dp[0]=1;
    //*重点，交换循环顺序，但是i j不交换
    for(let i=0;i<=target;i++){  //遍历背包
        for(let j=0;j<len;j++){  //遍历物品
            if(i-nums[j]>=0){  //*注意这里是>=
                dp[i] = dp[i]+dp[i-nums[j]];   //dp[i]才表示背包，所以这里i j交换了
            }
        }
    }
    return dp[target];
};
// @lc code=end

