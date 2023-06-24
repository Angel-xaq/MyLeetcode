/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //官方解答，用数组哈希
    let arr=new Array(26).fill(0);
    for(let i=0;i<magazine.length;i++){
        arr[magazine.codePointAt(i)-'a'.codePointAt(0)]++;
    }
    for(let i=0;i<ransomNote.length;i++){
        arr[ransomNote.codePointAt(i)-'a'.codePointAt(0)]--;
        if(arr[ransomNote.codePointAt(i)-'a'.codePointAt(0)]<0)
            return false;
    }
    return true;
     //我自己做出来的，用哈希表，不过注意，要用的是他们的编码，也就是最好减去'a'，我这里没有
    // let map=new Map();
    // const arr = Array.from(magazine);
    // for(let i of arr){
    //     if(map.has(i)){
    //         map.set(i,map.get(i)+1);
    //     }
    //     else{
    //         map.set(i,1);
    //     }
    // }
    // const arr1 = Array.from(ransomNote);
    // for(let j of arr1){
    //     if(map.has(j) && map.get(j)>=1){
    //         map.set(j,map.get(j)-1);
    //     }
    //     else{
    //         return false;
    //     }
    // }
    // return true;

};
// @lc code=end

