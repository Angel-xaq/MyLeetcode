/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //dp[i]:字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。
    //如果确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true。(j<i)
    //所以递推公式是 if([j, i]这个区间的子串出现在字典里 && dp[j]是true) 那么 dp[i] = true。
    //dp[0]初始为true完全就是为了推导公式。下标非0的dp[i]初始化为false
    //本题是求排列数
    let len =s.length;
    const dp=Array(len+1).fill(false);
    dp[0]=true;
    for(let i=0;i<=len;i++){ //遍历背包
        for(let j=0;j<wordDict.length;j++){  //遍历物品
            if(i >= wordDict[j].length) {
                if(s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]){   //*十分重要 if([j, i]这个区间的子串出现在字典里 && dp[j]是true)
                    dp[i] = true;
                }
            }    
        }
    }
    return dp[len];
};
// @lc code=end

