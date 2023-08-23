/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result =[],stack=[];
    function backtrack(i){
        let len=stack.length;
        if(len>4) return;
        if(len===4 && i===s.length){
            result.push(stack.join("."));
            return;
        }
        for(let j=i; j<s.length; j++){
            let str =s.slice(i,j+1);  //切割
            if(str.length>3 || +str>255) break;   //变数字，大于255不合格
            if(str.length>1 && str[0]==="0") break;   //以0开头的不合格
            stack.push(str);
            backtrack(j+1);   //过程:"25525511135",先装2，然后考虑后面的不行后，2取消，先装25，再不行后，25取消，先装255
            stack.pop();
        }
    }
    backtrack(0);
    return result;
};
// @lc code=end

