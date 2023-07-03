/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) { 
    /* //层序遍历  无法解决第三层两个都是左节点的情况 本该为false,结果是true
    //队列迭代  *重点，从数的外围向内入队
    let queue =[];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length){
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if(leftNode===null && rightNode===null){
            continue;
        }
        if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        queue.push(leftNode.left);     //左节点左孩子入队
        queue.push(rightNode.right);   //右节点右孩子入队
        queue.push(leftNode.right);    //左节点右孩子入队
        queue.push(rightNode.left);    //右节点左孩子入队
    }
    return true;  */
    //栈迭代  只是把上面的改成了栈
    let stack =[];
    stack.push(root.left);
    stack.push(root.right);
    while(stack.length){
        let leftNode = stack.shift();
        let rightNode = stack.shift();
        if(leftNode===null && rightNode===null){
            continue;
        }
        if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        stack.push(leftNode.left);     //左节点左孩子入栈
        stack.push(rightNode.right);   //右节点右孩子入栈
        stack.push(leftNode.right);    //左节点右孩子入栈
        stack.push(rightNode.left);    //右节点左孩子入栈
    }
    return true; 
    //递归法
    //递归的参数是树，判断两个树是否相等，左右判断，返回的布尔值
    const duicheng = function(root1,root2){
        if(root1===null && root2!==null || root1!==null &&root2===null){
            return false;
        }
        else if(root1===null && root2===null){
            return true;
        }
        else if(root1.val!==root2.val){
            return false;
        }
        let outside = duicheng(root1.left,root2.right);  //*重点，这个单层的递归逻辑
        let inside = duicheng(root1.right,root2.left);
        return outside && inside;
    }
    let bool = duicheng(root.left,root.right);
    return bool;
};
// @lc code=end

