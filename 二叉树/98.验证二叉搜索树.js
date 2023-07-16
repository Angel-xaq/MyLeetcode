/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    /* //递归法  中序遍历后判断数组是否递增
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
    for(let i=0;i<result.length-1;i++){
        if(result[i]>=result[i+1]){
            return false;
        }
    }
    return true;  */
    //迭代法  这个比较不好理解 中序遍历 实时检查当前节点的值是否大于前一个中序遍历到的节点的值
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
}; 
/* //官方解答，设置上下界，左边设置上界是根节点的值，右边下界是根节点的值，并且这样会不断下去，就是保持这个根节点的值作为左边的树的上界，作为右边树的下界
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
}; */
// @lc code=end

