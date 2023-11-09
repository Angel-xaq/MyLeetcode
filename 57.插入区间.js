/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res=[];
    let i=0;
    let len=intervals.length;
    while(i<len && intervals[i][1]<newInterval[0]){ //不重叠，需满足：绿区间的右端，位于蓝区间的左端的左边
        res.push(intervals[i]);
        i++;
    }
    while(i<len && intervals[i][0]<=newInterval[1]){  //重叠，绿区间的左端 <= 蓝区间的右端
        newInterval[0] = Math.min(newInterval[0],intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1],intervals[i][1]);
        i++;
    }
    res.push(newInterval);
    while(i<len){    //剩余的，直接推入res
        res.push(intervals[i]);
        i++;
    }
    return res;
};
// @lc code=end

