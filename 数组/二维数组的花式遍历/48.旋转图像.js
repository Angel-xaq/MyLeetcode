/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    //注意要在原地修改，不可以新建数组
    let n=matrix.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            let temp=matrix[i][j];
            matrix[i][j]=matrix[j][i];   //沿着主对角线方向折叠交换
            matrix[j][i]=temp;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            [matrix[i][j], matrix[i][n-j-1]] = [matrix[i][n-j-1], matrix[i][j]]; //沿着垂直中轴线折叠交换
        }
    }
};

// @lc code=end

