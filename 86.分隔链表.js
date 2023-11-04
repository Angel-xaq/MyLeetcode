/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    //双指针，*三种情况的判断
    //删除：快指针上节点 → 快指针下节点
    //插入：慢指针上节点 → 快指针节点 → 慢指针节点
    // if (head === null) return null;
    // let preSlow = new ListNode(0),slow=head,preFast=slow,fast=head.next;
    // let temp=preSlow;
    // preSlow.next=head;
    // while(fast){
    //     if(slow.val<x){
    //         preSlow=slow;
    //         slow=slow.next;
    //         preFast=fast;
    //     }
    //     else if(fast.val<x){   //slow.val>=x 且fast.val<x
    //         preFast.next=fast.next;
    //         preSlow.next=fast;
    //         fast.next=slow;
    //         preSlow=fast;
    //     }
    //     else{
    //         preFast=fast; // slow.val>=x 且fast.val>=x
    //     }
    //     fast = preFast.next;
    // }
    // return temp.next;

    //方法2，设计两个链表后再连接 我觉得更易懂
    let a = new ListNode(0),b=new ListNode(0);
    let pa = a,pb=b;
    while(head){
        if(head.val<x){
            a.next=head;
            a=a.next;
        }
        else{
            b.next=head;
            b=b.next;
        }
        head=head.next;
    }
    a.next=pb.next;
    b.next=null;
    return pa.next;
};
// @lc code=end

