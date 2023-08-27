/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    //重点：本题就是尽量让石头分成重量相同的两堆。这题的思想和416、分割等和子集一样
    let len=stones.length;
    let sum =stones.reduce((a,b)=>a+b);
    let target=Math.floor(sum/2);
    const dp=Array(target+1).fill(0);  //*重点，是target+1
    for(let i=0;i<len;i++){
        for(let j=target;j>=stones[i];j--){
            dp[j]=Math.max(dp[j],dp[j-stones[i]]+stones[i]);
        }
    }
    return sum-dp[target]-dp[target];  //*重点 如果等分就=0
};
// @lc code=end

