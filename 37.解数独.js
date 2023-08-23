/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    //和N皇后有点类似，不过这个是二维递归，遍历行列放，然后判断合理性
    function isValid(row, col, val, board) {
        let len = board.length;
        // 行不能重复
        for(let i = 0; i < len; i++) {
            if(board[row][i] === val) {
                return false;
            }
        }
        // 列不能重复
        for(let i = 0; i < len; i++) {
            if(board[i][col] === val) {
                return false;
            }
        }
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for(let i = startRow; i < startRow + 3; i++) {   // 判断9方格里是否重复
            for(let j = startCol; j < startCol + 3; j++) {
                if(board[i][j] === val) {
                    return false;
                }
            }
        }
        return true;
    }
    function backtrack(board) {
        for(let i = 0; i < board.length; i++) {   //遍历行
            for(let j = 0; j < board[0].length; j++) {   //遍历列
                if(board[i][j] !== '.') continue;
                for(let val = 1; val <= 9; val++) {
                    if(isValid(i, j, `${val}`, board)) {  //检查合理性
                        board[i][j] = `${val}`;  //做选择
                        if (backtrack(board)) {
                            return true;
                        }
                        board[i][j] = `.`;     //取消选择，撤销`${val}`
                    }
                }
                return false;
            }
        }
        return true;    //9个数都试完了，都不行，那么就返回false
    }
    backtrack(board);
    return board;
};
// @lc code=end

