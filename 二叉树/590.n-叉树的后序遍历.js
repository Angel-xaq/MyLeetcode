/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    //递归法
    let result =[];
    const dfs = function(root){
        if(root===null)
            return root;
        for(let item of root.children){
            dfs(item);
        } 
        result.push(root.val);
    }
    dfs(root);
    return result;  
    /* //迭代法
    let result=[];
    if(root===null)
        return result;
    let stack=[root];
    while(stack.length){
        node = stack.pop();
        result.push(node.val);   //入栈顺序是：左-->右  所以右先出来  出栈：中-->右-->左  *中都是第一个出栈
        for(let item of node.children){
            stack.push(item);  //自己做的，和前序遍历对调，先放前面的，最后reverse
        }
    }
    return result.reverse(); */
};
// @lc code=end

