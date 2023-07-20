/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    //参考78
    let result = [];
    let stack = [];
    nums.sort((a, b) => a - b);  //*重点，排序
    const backtrack = function(start,nums){
        
        result.push([...stack]); 
        
        for(let i=start;i<nums.length;i++){
            if(i > start && nums[i]===nums[i-1]){  //*重点 一定要有i>start，不然没发全部装入，假设数据是[1,2,2,2,2,2]
                continue;
            }
            //做选择
            stack.push(nums[i]);  //请注意走没走，刚开始1放进去后还没走
            backtrack(i+1,nums);
            //取消选择
            stack.pop();
        }
    }
    backtrack(0,nums);
    return result;
};
// @lc code=end

