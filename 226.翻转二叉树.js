/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    /* //层序遍历
    if(root===null) return root;
    let queue = [];  //队列
    queue.push(root);
    while(queue.length){ 
        let len = queue.length;
        for(let i=0;i<len;i++){
            node = queue.shift();
            let temp1=node.left;
            node.left=node.right;
            node.right=temp1;
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }
    return root; */
   /*  //递归前序遍历
    if(root===null) return root;
    let temp = root.left;
    root.left=root.right;
    root.right=temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;  */
    //迭代前序遍历
    if(root===null)
        return root;
    let stack =[];
    stack.push(root);
    while(stack.length){
        let node = stack.pop();
        let temp = node.left;
        node.left=node.right;
        node.right=temp;
        if(node.right)
            stack.push(node.right);  //右边先进
        if(node.left)
            stack.push(node.left);
    }
    return root;
};
// @lc code=end

