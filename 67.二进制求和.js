/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0');  //将比较短的字符串用0填充到一样长度
    b = b.padStart(maxLen, '0');
    let cnt = 0;//进位
    let res = '';//结果字符串
    for (let i = maxLen - 1; i >= 0; i--) {  //从最低位开始
      let temp = parseInt(a[i]) + parseInt(b[i]) + cnt;
      let currentNum = temp % 2;
      cnt = Math.floor(temp / 2);  //拿到进位
      res = currentNum + res;  //字符串连接
    }
    if (cnt > 0) {
      res = cnt + res;  //最后还要再加上进位，且是放在前面的
    }
    return res;
};
// @lc code=end

