/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return "";
    let res = strs[0];
    for(let i=1;i<strs.length;i++){
        let j=0;   //*注意变量作用域
        for(;j<res.length && j<strs[i].length;j++){
            if(res[j]!=strs[i][j]){
                break;
            }
        }
        res = res.slice(0, j);
        if(res ===""){
            return res;
        }
    }
    return res;
};
// @lc code=end

