/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const len = digits.length;
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    if(len===0) return [];
    if(len===1) return map[digits].split("");
    let result =[];
    let stack =[];
    function backtrack(digits,len,i){
        if(stack.length===len){
            result.push(stack.join(""));   //注意是.join("")，这样串起来
            return;
        }
        for(let item of map[digits[i]]){  //*重点，这里的digits[i]代表的就是第几位，所以23分别是ad ae af，然后是b开头的
            stack.push(item);
            backtrack(digits,len,i+1);
            stack.pop();
        }
    }
    backtrack(digits,len,0);
    return result;
};
// @lc code=end

