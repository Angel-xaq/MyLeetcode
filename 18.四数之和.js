/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result=[];
    let len=nums.length;
    if(len<4){
        return result;
    }
    nums.sort((a,b)=>a-b);
    for(let i=0;i<len-3;i++){
        //剪枝
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        if (nums[i] + nums[len-3] + nums[len-2] + nums[len-1] < target) {
            continue;
        }
        if(i>0 && nums[i]===nums[i-1])  //i去重
            continue;    
        for(let j=i+1;j<len-2;j++){
            //剪枝
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] >target) {
                break;
            }
            if (nums[i] + nums[j] + nums[len - 2] + nums[len-1] < target) {
                continue;
            }
            if(j>i+1 && nums[j]===nums[j-1])  //j去重
                continue;
            let left=j+1,right=len-1;
            while(left<right){
                let sum = nums[i]+nums[j]+nums[left]+nums[right];
                if(sum<target){
                    left++;
                }
                else if(sum>target){
                    right--;
                }
                else{
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(nums[left]===nums[left+1]){
                        left++;
                    }
                    while(nums[right]===nums[right-1]){
                        right--;
                    }
                    right--;
                    left++;
                }
            }
        }
    }
    return result;
};
// @lc code=end

