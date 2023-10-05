/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //自己做的
    // if(x<0){
    //     return false;
    // }
    // var num = x.toString().split("").reverse().join("");
    // return x.toString()==num? true:false;

    //方法2，数学方法，反转数字的后半部分进行比较
    //*重点，js需要这种对/的处理
    if(x<0||(x%10==0&&x!=0)){
        return false;
    }
    var num =0;
    while(x>num){
        num = num*10+x%10;
        x=Math.trunc(x/10);
    }
    return x==num||x==Math.trunc(num/10);
};
// @lc code=end

