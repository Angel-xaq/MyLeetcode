/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    //*背包有两个维度，一个是m 一个是n
    //dp[i][j]：最多有i个0和j个1的strs的最大子集的大小为dp[i][j]
    //递推公式：dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
    //与01背包的递推公式：dp[j] = max(dp[j], dp[j - weight[i]] + value[i])类比
    //*字符串的zeroNum和oneNum相当于物品的重量（weight[i]），字符串本身的个数相当于物品的价值（value[i]）
    const dp=Array.from(Array(m+1),()=>Array(n+1).fill(0));
    let zeroNum, oneNum;
    for(let str of strs){ //*遍历物品
        zeroNum = (str.match(/0/g) || []).length; //每个物品的weight  //*这里用正则表达式查找
        oneNum = (str.match(/1/g) || []).length;  //每个物品的weight
        //*也可以通过for循环遍历查找01的出现个数
        // for(let c of str) {
        //     if (c === '0') {
        //         zeroNum++;
        //     } else {
        //         oneNum++;
        //     }
        // }
        for(let i=m;i>=zeroNum;i--){   //*遍历背包    这道题的背包是个二维的，但其实我们的思想是滚动数组，所以才会有外面的遍历物品，*而且这一块都要从后向前
            for(let j=n;j>=oneNum;j--){
                dp[i][j]=Math.max(dp[i][j],dp[i-zeroNum][j-oneNum]+1);
            }
        }
    }
    return dp[m][n];
};
// @lc code=end

