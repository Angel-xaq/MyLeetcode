/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length==0) return[]; //顾全思想
    let top=left=0,bottom=matrix.length-1,right=matrix[0].length-1;
    const result=[];
    while(top<bottom && left<right){  //关键，当无法形成环的时候，停止迭代
        for(let i=left;i<right;i++)
            result.push(matrix[top][i]);
        for(let i=top;i<bottom;i++)
            result.push(matrix[i][right]);
        for(let i=right;i>left;i--)
            result.push(matrix[bottom][i]);
        for(let i=bottom;i>top;i--){
            result.push(matrix[i][left]);
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    //剩下一行和一列的情况
    if(top==bottom){
        for(let i=left;i<=right;i++){ //注意这里是小于等于，因为如果中间只有一个元素的话，左右上下都相等
            result.push(matrix[top][i]);
        }
    }
    else if(left==right){ //注意要用else if，如果只有一个元素的时候只做一个条件判断就可以了，不然会多放
        for(let i=top;i<=bottom;i++){ //注意这里是小于等于，因为如果中间只有一个元素的话，左右上下都相等
            result.push(matrix[i][left]);
        }
    }
    return result;
};
// @lc code=end

