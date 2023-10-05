/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    //自己做的
    // for(let i=0;i<nums.length;i++){
    //     if(nums.indexOf(i+1)==-1){
    //         return i+1;
    //     }
    // }
    // nums.sort((a,b)=>a-b);  //放在这里是为了加快速度，能找到就不要排序了
    // return nums[nums.length-1]+1;
    //这种符合题目要求  先把每个元素放在自己的位置，nums[i] 从 位置 i 交换到 位置 nums[i]-1 。[1,nums.length+1] 以外的数不用交换
    for(let i=0;i<nums.length;i++){
        while(nums[i]>=1 && nums[i]<=nums.length && nums[nums[i]-1]!==nums[i]){
            [nums[nums[i]-1],nums[i]]=[nums[i],nums[nums[i]-1]]; //交换
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i+1){
            return i+1;
        }
    }
    return nums.length + 1;
};
// @lc code=end

