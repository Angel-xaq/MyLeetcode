/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if(root===null) return result;
    let queue = [];  //队列
    queue.push(root);
    while(queue.length){ //*重点
        let len = queue.length;
        let temp =[];
        for(let i=0;i<len;i++){
            node = queue.shift();
            temp.push(node.val);
            let j=0;
            // while(node.children[j]){       //自己做的，自己加的
            //     queue.push(node.children[j]);
            //     j++;
            // }
            for(let item of node.children){  //也可以这样
                if(item){
                    queue.push(item); 
                }
            }
        }
        result.push(temp);
    }
    return result;
};
// @lc code=end

