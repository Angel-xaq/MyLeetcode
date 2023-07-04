/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    /* //递归法
    if (root === null) return 0;
    let result =0;
    for (let child of root.children){
        result =  Math.max(result, maxDepth(child));
    }
    return 1 + result; */
    //层序遍历迭代
    let max = 0;
    if(root===null){
        return max;
    }
    let queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        for(let i=0;i<len;i++){
            let node =queue.shift();
            for(let child of node.children){
                queue.push(child);
            }
        }
        max++;  //自己做的
    }
    return max;

};
// @lc code=end

