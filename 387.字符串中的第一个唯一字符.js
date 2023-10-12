/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map=[]; //*用一个数组或者对象
    for(let i of s){
        map[i]=(map[i] || 0)+1;
    }
    for(let i=0;i<s.length;i++){
        if(map[s[i]]===1){
            return i;
        }
    }
    return -1;
};
// @lc code=end

