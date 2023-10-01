/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let exp=n>0?n:-n;
    let res=quickpow(x,exp);
    return n>0?res:1/res;
};
//快速幂
function quickpow(x,n){
    let res=1;
    while(n>0){
        if (n % 2 == 1) {
            res = res * x;
        }
        x = x * x;
        n = Math.floor(n/2);
    }
    return res;
}
// @lc code=end

