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
var subsetsWithDup = function (nums) {
    //参考78
    let result = [];
    let stack = [];
    nums.sort((a, b) => a - b);  //*重点，排序
    const backtrack = function (start, nums) {
        result.push([...stack]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {  //*重点 一定要有i>start，不然没法全部装入，假设数据是[1,2,2,2,2,2]，装入[1,2,...]后回到[1,2]的状态时，这时候把2踢掉，轮到第二个2的时候，下标2>下标1,会因为和前面的2重复而不放入，就不会导致有两个[1,2]
                continue;
            }
            //做选择
            stack.push(nums[i]);  //请注意走没走，刚开始1放进去后会一直在
            backtrack(i + 1, nums);
            //取消选择
            stack.pop();
        }
    }
    backtrack(0, nums);
    return result;
};
// @lc code=end

