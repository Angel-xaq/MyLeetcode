/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //计数问题，用到map
    let map = new Map();
    for(let i of nums){
        if(map.has(i)){
            return true;
        }
        else{
            map.set(i,1);
        }
    }
    return false;
};
// @lc code=end

