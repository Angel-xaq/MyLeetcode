/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}ng
 */
var jump = function(nums) {
    let ans=0;
    let curDistance =0;   //当前覆盖最远距离下标
    let nextDistance =0;  //下一步覆盖最远距离下标
    if(nums.length===1) return 0;
    for(let i=0; i<nums.length; i++){  //这里是i<nums.length
        nextDistance =Math.max(nextDistance,i+nums[i]); //更新下一步覆盖最远距离下标
        if(i==curDistance){
            ans++;
            curDistance=nextDistance;
            if(nextDistance>=nums.length-1) break;
        }
    }
    return ans;
};
// @lc code=end

