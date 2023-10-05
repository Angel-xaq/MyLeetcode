/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //这题联想到二进制加法 我写的
    // const len = digits.length;
    // let cnt=1;
    // let res='';
    // for(let i = len - 1; i >= 0; i--) {
    //     let temp = cnt + digits[i];
    //     let currentNum = temp%10;
    //     cnt = Math.floor(temp/10);
    //     res = currentNum+res;
    // }
    // if (cnt > 0) {
    //     res = cnt + res;  //最后还要再加上进位，本题就是
    // }
    // return res.split("");
    //标准答案 这个好处是对空间的占用率低
    const len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;  //没有进位的时候直接返回或者到没有进位的时候直接返回
    }
    digits = [...Array(len + 1)].map(x=>0);
    digits[0] = 1;
    return digits;
};
// @lc code=end

