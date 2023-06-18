/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right){
    //头插法
    let dummy2=new ListNode(0,head);
    let dummy1=dummy2;
    let n=1; //在left前面一个节点
    while(n<left){  //注意这个，这是让dummy1指向left前面一个节点
        dummy1=dummy1.next;  
        n++;
    }
    let count=right-left;
    let cur=dummy1.next;
    while(count){
        const next=cur.next;
        cur.next=next.next;
        next.next=dummy1.next;
        dummy1.next=next;
        // cur=cur.next;  不可以有这句话，因为cur一开始指向dummy后面一个节点，之后就往后面流动
        count--;
    }
    return dummy2.next;//首先定义一个不会动的虚拟头节点
};

/*
var reverseBetween = function(head, left, right) {
     //我的解法，是迭代调用其他函数，比较麻烦，用了206的自己的方法改过来
    let count=0;
    let dummy=new ListNode(0,head);
    let dummy2=dummy;

    if(left===right){
        return dummy.next;
    }
    let n1=1;
    while(n1<left){
        dummy2=dummy2.next;
        n1++;
    }
    count=right-left;
    // count--;
    // let dummy1=new ListNode(0,head);
    while(count){
        dummy2.next=jiaohuan(dummy2.next,count);
        count--;
    }
    return dummy.next; //关键，定义一个虚拟头节点后，再去搞一个指针等于这个虚拟头节点，之后就在这个指针上操作
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

