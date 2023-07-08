/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
var lowestCommonAncestor = function(root, p, q) {
/*     //递归 从上往下
    if(root.val<p.val && root.val<q.val){
        return lowestCommonAncestor(root.right,p,q);
    }
    else if (root.val>p.val && root.val>q.val){
        return lowestCommonAncestor(root.left,p,q);
    }
   else{
        return root;
   } */
   //迭代
   while(root){
        if(root.val<p.val && root.val<q.val){
            root=root.right;
        }
        else if (root.val>p.val && root.val>q.val){
            root=root.left;
        }
        else{
            return root;
        }
   }
};
// @lc code=end

