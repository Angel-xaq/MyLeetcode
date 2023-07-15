/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //别人的做法，很妙
    let len1=listLength(headA);
    let len2=listLength(headB);
    let long=headA; //存放的是最长的
    let short=headB;
    if(len1<len2){
        long=headB;
        short=headA;
        [len1,len2]=[len2,len1];
    }
    let gap=len1-len2;
    while(gap){
        long=long.next;
        gap--;
    }
    while(long&&long!=short){

        long=long.next;
        short=short.next;
    }
    return short;
};
var listLength =function(head){
    let len=0;
    while(head){
        len++;
        head=head.next;
    }
    return len;
}
// @lc code=end

