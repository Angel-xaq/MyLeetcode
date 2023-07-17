/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N 皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var isVaild = function(board,row,col){
    //检查列
    let n =board.length;
    for(var i=0;i<n;i++){
        if(board[i][col]==='Q'){
            return false;
        }
    }
    //检查左上方
    for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
        if(board[i][j]==='Q'){
            return false;
        }
    }
    //检查右上方
    for(let i=row-1,j=col+1;i>=0&&j<n;i--,j++){
        if(board[i][j]==='Q'){
            return false;
        }
    }
    return true;
}
var totalNQueens = function(n) {
    let count = 0;
    let board = Array.from({length:n},()=>Array(n).fill('.'));
    var backtrack = function(board,row){
        if(row===board.length){  
            count++;   //只改了这个
            return;
        }
        let n = board.length;
        for(let i=0;i<n;i++){
            if(isVaild(board,row,i)){
                board[row][i]='Q';   //选择
                backtrack(board,row+1);
                board[row][i]='.';  //记得要取消选择，这样后面回来了继续找
            }
        }
    }
    backtrack(board,0);
    return count;
};
// @lc code=end

