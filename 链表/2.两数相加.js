/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum  = new ListNode('0');
    let head = sum;
    let jinwei = 0;
    while (l1|| l2 || jinwei){
        let data1 = l1 !== null ? l1.val : 0;
        let data2 = l2 !== null ? l2.val : 0;
        temp = data1+data2+jinwei;
        sum.next = new ListNode(temp%10);
        // jinwei = temp>=10 ? 1 : 0
        jinwei = Math.floor(temp/10);
        sum=sum.next;
        if(l1)
            l1 = l1.next;
        if(l2)
            l2 = l2.next;
    }
    return head.next;
};
// @lc code=end

