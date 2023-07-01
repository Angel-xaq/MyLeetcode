/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var subconnet = function(root){ //新定义一个递归函数
    if(root===null || root.left===null) return root;
    root.left.next = root.right;
    if(root.next){
        root.right.next = root.next.left;
    }
    subconnet(root.left);
    subconnet(root.right);
}
var connect = function(root) {
    /* if(root===null) return root;
    let queue = [];  //队列
    queue.push(root);
    while(queue.length){ //*重点
        let len = queue.length;
        for(let i=0;i<len;i++){
            let node = queue.shift();
            if(i<len-1){
                node.next = queue[0];   //*重点  不定义的话本身就是空
            }
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
    }
    return root; */

    //递归版
    subconnet(root);
    return root;

};
// @lc code=end

