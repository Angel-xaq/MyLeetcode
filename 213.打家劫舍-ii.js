/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //这道题很巧妙，形成环之后不能同时选首尾，所以分成三种情况
    //1、只包含中间元素；2、只包含首元素和中间元素；3、只包含尾元素和中间元素
    //只考虑23两种情况，因为包含了第1种情况
    let len = nums.length;
    if(len==1){
        return nums[0];
    }
    let result1=geneRob(nums,0,len-2);
    let result2=geneRob(nums,1,len-1);
    return Math.max(result1,result2);

    function geneRob(nums,start,end){
        if (end == start) return nums[start];  //整个很巧妙，专门针对只有两个数的时候，就是他们比大小
        let len=nums.length;
        const dp=Array(len).fill(0);
        dp[start]=nums[start];  //注意这里是dp[start]  dp[start+1]
        dp[start+1]=Math.max(nums[start],nums[start+1]);
        for(let i=start+2;i<=end;i++){   //*这里是<=end
            dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1]);
        }
        return dp[end];
    }
};
// @lc code=end

