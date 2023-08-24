/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //这道题还是比较有趣的，如果一直重叠则只会一直更新prev[1]的值，然后到最后循环外才存入
    intervals.sort((a,b)=>a[0]-b[0]);   //排序
    let result=[];
    let prev = intervals[0];
    for(let i=0; i<intervals.length; i++){
        let cur = intervals[i];
        if(cur[0]>prev[1]){   //如果这个区间不包含前面的区间（不存在重叠区间），就整个存入
            result.push(prev);  //只会在这个地方存入
            prev=cur;
        }
        else{  //如果cur[0]<=prev[1]，则存在重叠区间，就更新prev[1]值
            prev[1]=Math.max(cur[1],prev[1]);
        }
    }
    result.push(prev);
    return result;
};
// @lc code=end

