/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const ABmap = new Map();
    for(let i of nums1){
        for(let j of nums2){
            if(ABmap.has(i+j)){
                ABmap.set(i+j,ABmap.get(i+j)+1);
            }
            else{
                ABmap.set(i+j,1);
            }
        }
    }
    let count=0;
    for(i of nums3){
        for(j of nums4){
            if(ABmap.has(-(i+j))){
                count+=ABmap.get(-(i+j));
            }
        }
    }
    return count;
};
// @lc code=end