/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function leftOf(c) {
    if (c === '}') return '{';
    if (c === ')') return '(';
    return '[';
}
var isValid = function(s) {
    //用栈 栈是一种先进后出的数据结构，处理括号问题的时候尤其有用
    let left=[];
    for(let i=0; i< s.length; i++){
        let c = s.charAt(i);
        if (c === '(' || c === '{' || c === '[')
            left.push(c);
        else { // 字符 c 是右括号
            if (left.length !== 0 && leftOf(c) === left[left.length - 1]) //是否与最近的括号匹配
                left.pop();
            else
                return false;  //和最近的左括号不匹配
        }
    }
    return left.length === 0;   //是否所有的左括号都被匹配了
};
// @lc code=end

