/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    //我自己
    let dummy1=new ListNode(0,head);
    let pre=dummy1;
    while(pre.next && pre.next.next){//关键条件
        let slow=pre.next;
        let fast=slow.next;
        slow.next=fast.next;
        fast.next=slow;
        pre.next=fast;
        pre=slow;
    }
    return dummy1.next;
};
// @lc code=end

