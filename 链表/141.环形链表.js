/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //方法1，哈希表法  但时空复杂度都为o(N)
    // let set = new Set();
    // while(head){
    //     if(set.has(head)){
    //         return true;
    //     }
    //     set.add(head);
    //     head=head.next;
    // }
    // return false;
    // 方法2，快慢指针，涉及数学知识 空间复杂度为o(N)，空间复杂度为o(1)
    if(!head || !head.next) return false; //只有0/1个元素
    let slow =head.next, fast = head.next.next; //差两个
    while(fast) {
        if(!fast.next){
            return false;
        }
        slow = slow.next; //slow移动一个单位
        fast = fast.next.next;  //fast移动两个单位
        if(slow===fast){
            return true;
        }
    }
    return false; //fast=null
};
// @lc code=end

