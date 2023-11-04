/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //有点难理解，画图出来就懂了  000112->001112->001122
    //这道题返回的是长度
    let len=nums.length;
    if(len<=2){
        return len;
    }
    let slow =2,fast=2;
    while(fast<len){
        if(nums[slow-2]!=nums[fast]){
            nums[slow]=nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};
// @lc code=end

