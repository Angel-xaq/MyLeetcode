/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    //问题转化为跳跃覆盖范围究竟可不可以覆盖到终点
    //每移动一个单位，就更新最大覆盖范围。每次移动取最大跳跃步数
    if(nums.length===1) return true;
    let cover =0;
    for(let i=0; i<=cover; i++){   //在覆盖范围内每次移动一个单位，增加覆盖范围
        cover = Math.max(cover,i+nums[i]);
        if(cover>=nums.length-1){  //可以覆盖到终点了
            return true;
        }
    }
    return false;
};
// @lc code=end

