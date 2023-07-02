/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    //递归法
    let result =[];
    const dfs = function(root){
        if(root===null)
            return root;
        result.push(root.val);
        for(let item of root.children){
            dfs(item);
        } 
    }
    dfs(root);
    return result; 
/*     let result=[];
    if(root===null)
        return result;
    let stack=[root];
    while(stack.length){
        node = stack.pop();
        result.push(node.val);
        let i=0;
        for(let item of node.children){
            i++;
        }
        for(let j=i-1;j>=0;j--){   //入栈顺序是：右-->左  所以左先出来
            stack.push(node.children[j]);  //自己做的，思想就是先放后面的，因为栈是先进后出
        }
    }
    return result; */
};
// @lc code=end

