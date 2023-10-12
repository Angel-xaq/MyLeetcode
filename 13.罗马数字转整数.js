/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        IV: 4,
        IX: 9,
        X: 10,
        XL: 40,
        XC: 90,
        L: 50,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000,
    }
    let res = 0;
    let index = 0;
    let len = s.length;
    while(index < len){
        if(index + 1 < len && map[s.slice(index, index+2)]){  //*重点 map[s.slice(index, index+2)]
            res += map[s.slice(index, index+2)];
            index += 2;
        }else{
            res += map[s.slice(index, index+1)];
            index += 1;
        }
    }
    return res;
};
// @lc code=end

