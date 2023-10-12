/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //官方思路 用set   key是唯一的,不重复的
    //下面这个交换可以不要，只是为了提高效率，让nums2是长度小的，这样循环执行长度小
    if(nums1.length<nums2.length){
        const temp=nums1;
        nums1=nums2;
        nums2=temp;
    }
    const num1set=new Set(nums1);  //有nums1来的set
    const res = new Set();
    for(let i=0;i<nums2.length;i++){
        if(num1set.has(nums2[i]))
            res.add(nums2[i]);  //set会保证不重复添加的
    }
    return Array.from(res);  //转为数组
};

// var intersection = function(nums1, nums2) {
//     //我自己的方法，哈希表+计数
//     const map = new Map();
//     let arr = new Array();
//     let i=0;
//     let arr1=0;
//     let arr2=0;
//     //判断长度让算法执行更快一点
//     if(nums1.length<=nums2.length){
//         arr1 = nums1;
//         arr2 = nums2;
//     }
//     else{
//         arr1 = nums2;
//         arr2 = nums1;
//     }
//     while(i<arr1.length){   //先存一下
//         if(!(map[arr1[i]])){
//             map.set(arr1[i],1);
//         }
//         i++;
//     }    
//     i=0;
//     while(i<arr2.length){
//         if(map.get(arr2[i])===1){
//             map.set(arr2[i],0);
//         }
//         i++;
//     }
//     i=0;
//     for (let [key,value] of map) {  //遍历map
//         if(value===0 && !(arr.includes(key))){
//             arr.push(key);
//         }
//     }
//     return arr;
// };
// @lc code=end

