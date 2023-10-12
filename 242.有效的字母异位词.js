/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;  //长度不同就返回false，提高效率
    }
    let map=[];
    for (let i=0;i<s.length;i++){
        map[s[i]] = (map[s[i]]||0)+1;
    }
    for (let i=0;i<t.length;i++){
        map[t[i]] = (map[t[i]]||0)-1;
        if(map[t[i]]<0){
            return false;  
        }
    }
    return true;
};
// @lc code=end

