/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result =[];
    let stack = [];
    candidates.sort((a, b) => a - b);  //*重点，排序

    const backtrack = function (start, nums) {
        sum =0;
        for(let item of stack){
            sum = sum+item;
        }
        if(sum===target){
            result.push([...stack]);
        }
        else if(sum>target){   //*做剪枝，可以加快速度
            return;
        }

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {  //*重点 一定要有i>start，这个的思想和子集一样
                continue;
            }
            //做选择
            stack.push(nums[i]);  //请注意走没走，刚开始1放进去后会一直在
            backtrack(i + 1, nums);
            //取消选择
            stack.pop();
        }
    }
    backtrack(0, candidates);
    return result;
};
// @lc code=end

