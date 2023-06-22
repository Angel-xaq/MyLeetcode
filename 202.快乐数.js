/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var getSum = function(n){
    let sum=0;
    while(n){
        sum+=(n%10)**2;
        n=Math.floor(n/10);
    }
    return sum;
}
var isHappy = function(n) {
    let set =new Set();
    while(n!==1 && !set.has(n)){  //如果set里面有且！=1的话，就代表循环了，不是快乐数了
        set.add(n);
        n=getSum(n);
    }
    return n===1;   //在这里判断最终的结果
};
// @lc code=end

