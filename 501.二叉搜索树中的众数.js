/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var findMode = function(root) {
    //递归法  中序遍历  自己做的
    let result=[];
    const dfs = function(root){
        if(root===null){
            return;
        }
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    let map = new Map();
    for(let i=0;i<result.length;i++){
        if(!map.has(result[i])){
            map.set(result[i],0);
        }
        map.set(result[i],map.get(result[i])+1);
    }
    let res=[];
    let max=1;
    for(let [key,value] of map){
        if(value==max){
            max=value;
            res.push(key);
        }
        else if(value>max){  
            max=value;
            res=[key];   //*重点
        }
    }
    return res;  
}; */
var findMode = function(root) {
    //利用二叉搜索树的性质做
    let count=0,maxCount=1;
    let pre=root,result=[];
    const dfs = (cur) =>{
        if(cur===null) return;
        dfs(cur.left);
        if(pre.val===cur.val){
            count++;
        }
        else{
            count=1;
        }
        pre=cur;
        if(count===maxCount){  //处理大家都是1个的情况，或者是多个众数的情况
            result.push(cur.val);
        }

        if(count>maxCount){  //这样出现相同数值的时候，count一定增加，覆盖前面一个
            result=[cur.val];
            maxCount=count;
        }
        dfs(cur.right);
    }
    dfs(root);
    return result;
};
// @lc code=end

