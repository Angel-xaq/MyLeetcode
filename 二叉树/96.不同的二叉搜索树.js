/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */ 
var numTrees = function(n) {
    // //递归  我自己做的
    // //循环 固定每个点，看剩余的点
    // //1：1 2：2 3：5 4：14
    // const countNum = function(n){
    //     if(n==0 ||n==1){
    //         return 1;
    //     }
    //     if(n==2){
    //         return 2;
    //     }
    //     if(n==3){
    //         return 5;
    //     }
    //     let count = 0;  //*重点  否则会叠加
    //     for(let i=1;i<n+1;i++){
    //         let left = countNum(i-1);
    //         let right = countNum(n-i);
    //         count += left*right;
    //     }
    //     return count;
    // }
    // let count1 = countNum(n);
    // return count1;

    //方法2：动态规划
    //dp[i]：1到i为节点组成的二叉搜索树的个数
    //dp[0] = 1    dp[i] += dp[j - 1] * dp[i - j]
    let dp = new Array(n+1).fill(0);
    dp[0]=1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            dp[i] += dp[j-1]*dp[i-j];   //假设以1~i为根节点，计算树的数量
        }
    }
    return dp[n];
};
// @lc code=end

