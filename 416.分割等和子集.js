/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum =(nums.reduce((a,b)=>a+b));  //求数组总和
    if(sum %2==1) return false;
    const dp = Array(sum/2+1).fill(0);   //一维数组从0~sum/2
    for(let i=0;i<nums.length;i++){
        for(let j=sum/2;j>=nums[i];j--){  //*注意是j--
            dp[j]=Math.max(dp[j],dp[j-nums[i]]+nums[i]);
            if(dp[j]===sum/2){   //提高运行效率
                return true;
            }
        }
    }
    return dp[sum/2]===sum/2;
};
// @lc code=end

