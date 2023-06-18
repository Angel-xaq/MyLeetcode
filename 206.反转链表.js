/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
//这道题可以用头插法，迭代法，递归法解，推荐用迭代法解
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;
    while (curr !== null) {
        next = curr.next;//next向后移动一位
        curr.next = prev;//让当前指针curr.next指向前一个指针prev
        prev = curr;//prev向后移动一位
        curr = next;//curr向后移动一位
        //[curr.next, prev, curr] = [prev, curr, curr.next]
    }
    return prev
};
/*
var reverseList = function(head) {
    //我的解法，是迭代调用其他函数，比较麻烦
    let count=0;
    let dummy=new ListNode(0,head);
    let temp1=head;
    //判断0和1个的时候；
    while(temp1){  //计算链表长度
        count++;
        temp1=temp1.next;
    }
    if(count<=1){
        return dummy.next;
    }
    count--;
    let dummy1=new ListNode(0,head);
    while(count){
        dummy1.next=jiaohuan(dummy1.next,count);
        count--;
    }
    return dummy1.next;
};

var jiaohuan =function(head,n){
    //链表的两两交换需要涉及三个指针
    let dummy=new ListNode(0,head);
    let temp=dummy;
    let slow=dummy.next;
    let fast=slow.next;
    while(fast && n){
        slow.next=fast.next;
        fast.next=slow;
        temp.next=fast;
        temp=temp.next;
        n--;
        slow=fast.next; //注意
        fast=slow.next; //注意
    }
    return dummy.next;
}
*/
// @lc code=end

