/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    //非常巧妙，利用位运算
    let res = 0;
    while(n){
        n =n&(n-1);
        res++;
    }
    return res;
};
// @lc code=end

