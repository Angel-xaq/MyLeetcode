/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
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
    //参考答案 递归
    // if(list1 === null){
    //     return list2;
    // }
    // if(list2 === null){
    //     return list1;
    // }
    // if(list1.val < list2.val){
    //     list1.next = mergeTwoLists(list1.next, list2);
    //     return list1;
    // }else{
    //     list2.next = mergeTwoLists(list1, list2.next);
    //     return list2;
    // }
};
// @lc code=end

