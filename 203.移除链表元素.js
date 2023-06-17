/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    //双指针
    let head1=new ListNode(0,head);
    let slow=head1;
    let fast=head1.next; //让快指针在前面跑，慢指针指向的是符合要求的链表
    while(fast!=null){
        if(fast.val!=val){  //这是关键，参考数组中移除元素，我们不等于的时候就串起来
            slow.next=fast; 
            slow=slow.next;
        }
        fast=fast.next;
    }
    slow.next=null;//这是因为如果末尾是要删除的元素，只有这样才可以丢弃掉
    return head1.next;

};
// @lc code=end

