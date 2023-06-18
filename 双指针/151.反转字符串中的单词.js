/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = Array.from(s);//关键，字符串要先转为数组
    removeExtraSpace(arr);
    reverse(arr,0,arr.length-1);
    let start=0;
    for(let i = 0; i <= arr.length; i++){//等于号是因为要反转最后一个单词，在里面表示-1，所以要有等号
        if (arr[i] == ' ' || i == arr.length){
          reverse(arr, start, i - 1);
          start = i + 1;
        }
    }
    return arr.join(''); //前面都是数组，这样变成字符串
};

function removeExtraSpace(arr){
    let slow=0;
    let fast=0;
    while(fast<arr.length){ //注意，移除空格要分情况，1开始位置和结束位置 2中间多余的空格
        if(arr[fast]==' ' &&(fast==0||arr[fast-1]==' ')){ //关键，这里处理了开始位置和中间位置多余的空格，但是末尾可能会剩下一个空格
            fast++;//就跳过了
        }
        else{
            arr[slow++]=arr[fast++];
        }
    }
    arr.length=arr[slow-1]==' '?slow-1:slow;  //巧妙
}

function reverse(arr,s,e){
    let left=s;
    let right=e;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
}
// @lc code=end

