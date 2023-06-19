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
    //根据官方解答，哈希表
    if(s.length!==t.length){
        return false;  //长度不同就返回false，提高效率
    }
    let table = new Array(26).fill(0);
    let a = 'a'.codePointAt(0);  //方便复用
    for (let i=0;i<s.length;i++){
        table[s.codePointAt(i)-a]++;
    }
    for (let i=0;i<t.length;i++){
        table[t.codePointAt(i)-a]--;
        if(table[t.codePointAt(i)-a]<0){  //关键，只要t有一个和s不一样，那那里就会变成-1，并且一开始已经探讨过它们长度一致，如果存在不一样的字符，必定会有<0，妙
            return false;  
        }
    }
    return true;
};
// @lc code=end

