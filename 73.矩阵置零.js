/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //官方答案1  用矩阵的第一行和第一列作为两个标记数组，且需要额外使用两个标记变量分别记录第一行和第一列是否原本包含0。
    let m = matrix.length, n = matrix[0].length;
    let flagCol = false, flagRow = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol = true;
        }
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            flagRow = true;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    //处理第一行和第一列本身存在0的情况
    if (flagCol) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    if (flagRow) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    //官方答案2 只使用一个标记变量记录第一列是否原本存在0
    // const m = matrix.length, n = matrix[0].length;
    // let flagCol0 = false;
    // for (let i = 0; i < m; i++) {
    //     if (matrix[i][0] === 0) {
    //         flagCol0 = true;
    //     }
    //     for (let j = 1; j < n; j++) {
    //         if (matrix[i][j] === 0) {
    //             matrix[i][0] = matrix[0][j] = 0;
    //         }
    //     }
    // }
    // for (let i = m - 1; i >= 0; i--) {
    //     for (let j = 1; j < n; j++) {
    //         if (matrix[i][0] === 0 || matrix[0][j] === 0) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    //     if (flagCol0) {
    //         matrix[i][0] = 0;
    //     }
    // }
};
// @lc code=end

