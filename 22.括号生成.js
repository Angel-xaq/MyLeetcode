/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //左括号的数量都大于或等于右括号的数量
    let result =[];
    if(n===0) return result;
    let track='';
    function backtrack(left, right, track, result) {
        if (right < left) return;  // 若左括号剩下的多，说明不合法
        if (left < 0 || right < 0) return;  // 数量小于 0 肯定是不合法的
        if (left == 0 && right == 0) {
            result.push(track);
            return;
        }
        track = track + '(';   // 选择
        backtrack(left - 1, right, track, result);
        track = track.slice(0, -1); // 撤消选择

        track = track + ')'; // 选择
        backtrack(left, right - 1, track, result);
        track = track.slice(0, -1); // 撤消选择
    }
    backtrack(n,n,track,result);
    return result;
};
// @lc code=end

