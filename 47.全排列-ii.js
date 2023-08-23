/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    let stack = [];
    nums.sort((a, b) => a - b);  //*重点，排序
    let used = new Array(nums.length).fill(false);
    const backtrack = function(used,stack,nums){
        if(stack.length===nums.length){
            result.push([...stack]);  //*重要，要为[...stack]，放入的是一个数组
            return;
        }
        for(let i=0;i<nums.length;i++){
            if (i > 0 && nums[i] === nums[i - 1]  && !used[i - 1]) {  //*重点  !used[i - 1]防止的就是最后211会出现两次，所以一定要是[i-1]，如果前面的相邻相等元素没有用过，则跳过
                continue;     //这里必须是i>0，排列没有start，从1开始判断哈
            }
            if(used[i]){
                continue;
            }
            //做选择
            stack.push(nums[i]);
            used[i]=true;
            backtrack(used,stack,nums);
            //取消选择
            stack.pop();
            used[i]=false;
        }
    }
    backtrack(used,stack,nums);
    return result;
};
// @lc code=end

