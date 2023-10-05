/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res=Math.abs(x);
    res = res.toString().split('').reverse().join('');
    res = parseInt(res);
    //*重点是转换后的这个数是不是超出范围
    if(res>Math.pow(2,31)-1) return 0;
    if(res<Math.pow(-2,31)) return 0;
    if(x<0){
        return parseInt(res)*(-1);
    }
    return res;
    //当然这题也可以使用数学的方法 类似9回文数
};
// @lc code=end

