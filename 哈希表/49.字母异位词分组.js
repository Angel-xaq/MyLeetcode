/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //计数法
    const map=new Object();  //关键
    for(let s of strs){
        const count= new Array(26).fill(0);
        for(let c of s){
            count[c.charCodeAt()-'a'.charCodeAt()]++
        }
        map[count]? map[count].push(s):map[count]=[s];//如果存在同样计数频次的数组就加入，否则就创建
    }
    return Object.values(map);
};
// @lc code=end

