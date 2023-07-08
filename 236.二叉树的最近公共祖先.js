/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/* var lowestCommonAncestor = function(root, p, q) {
    //递归  回溯思想 我知道是后序遍历
    const travelTree = function(root,p,q){
        if(root==p || root==q || root==null){
            return root;
        }
        let left =travelTree(root.left,p,q);
        let right =travelTree(root.right,p,q);
        if(left!==null &&right!==null){
            return root;
        }
        if(left==null){
            return right;
        }
        return left;
    }
    return travelTree(root,p,q);
}; */
var lowestCommonAncestor = function(root, p, q) {
    //存储父节点，就是比较耗用空间，需要两个哈希表
    let map = new Map();
    let set = new Set();
    const dfs = function(root){
        if(root.left){
            map.set(root.left.val,root);
            dfs(root.left);
        }
        if(root.right){
            map.set(root.right.val,root);
            dfs(root.right);
        }
    }
    dfs(root);
    while(p!=null){
        set.add(p.val);
        p=map.get(p.val);
    }
    while(q!=null){
        if(set.has(q.val)){
            return q;
        }
        q=map.get(q.val);
    }
    return null;
};
// @lc code=end

