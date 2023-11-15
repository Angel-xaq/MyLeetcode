/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //双指针法，要注意排序和去重
    let result = [];
    let len=nums.length;
    if(nums==null || len <3)
        return result;    //返回空
    nums.sort((a,b)=>a-b); //排序，升序
    for(let i=0;i<len;i++){
        if(nums[i] > 0) break;  //如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i>0 && nums[i]===nums[i-1]){  //a的去重
            continue;
        }
        let left=i+1,right=len-1;
        while(left<right){
            if(nums[i]+nums[left]+nums[right]>0){
                right--;
            }
            else if(nums[i]+nums[left]+nums[right]<0){
                left++;
            }
            else{
                result.push([nums[i],nums[left],nums[right]]);  //存入结果中
                while(nums[left]===nums[left+1]){   //b的去重
                    left++;
                }  
                while(nums[right]===nums[right-1]){  //c的去重
                    right--;
                }
                left++;
                right--; 
            }
        }
    }
    return result;
};
// @lc code=end

