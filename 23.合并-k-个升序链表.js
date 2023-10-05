/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //自己做的 迭代
    let res = new ListNode();
    let result=res;
    let left = list1;
    let right=list2;
    while(left!==null&&right!==null){
        if(left.val<=right.val){
            res.next = left;
            left = left.next;
        }
        else{
            res.next = right;
            right = right.next;
        }
        res = res.next;
    }
    if(left!==null){
        res.next=left;
    }
    if(right!==null){
        res.next=right;
    }
    return result.next;
}
var mergeKLists = function(lists) {
    //分治 合并从 lists[i] 到 lists[j-1] 的链表
    //按照一分为二再合并的逻辑，递归像是在后序遍历一棵平衡二叉树。
    // function dfs(i, j) {
    //     const m = j - i;
    //     if (m === 0) return null; // 注意输入的 lists 可能是空的
    //     if (m === 1) return lists[i]; // 无需合并，直接返回
    //     const left = dfs(i, i + Math.floor(m/2)); // 合并左半部分
    //     const right = dfs(i + Math.floor(m/2), j); // 合并右半部分
    //     return mergeTwoLists(left, right); // 最后把左半和右半合并
    // }
    // return dfs(0, lists.length);
    //我想到的，但没自己写 两两合并
    let len = lists.length;
    if(len == 0) return null;
    let res = lists[0];
    for(let i = 1;i < n;i++){
        if(lists[i]){
            res = mergeTwoLists(res,lists[i]);
        }
    }
    return res;
};
// @lc code=end

