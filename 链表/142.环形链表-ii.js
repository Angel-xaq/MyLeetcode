/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    //方法1，哈希表法  但时空复杂度都为o(N)
    let set = new Set();
    while(head){
        if(set.has(head)){
            return head;
        }
        set.add(head);
        head=head.next;
    }
    return null;
    // 方法2，快慢指针，涉及数学知识 空间复杂度为o(N)，空间复杂度为o(1)
    // if(!head || !head.next) return null; //只有0/1个元素
    // let slow =head.next, fast = head.next.next; //差两个
    // while(fast && fast.next && fast!== slow) {
    //     slow = slow.next; //slow移动一个单位
    //     fast = fast.next.next;  //fast移动两个单位
    // }
    // if(!fast || !fast.next ) return null; //当没有环的时候返回null，否则总会相交
    // slow = head; //计算交点，让slow变成头指针，大家一起移动一个单位到入口处
    // while (fast !== slow) {
    //     slow = slow.next;
    //     fast = fast.next;
    // }
    // return slow;
};
// @lc code=end

