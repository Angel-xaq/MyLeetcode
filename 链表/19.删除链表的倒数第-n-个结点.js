/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //我自己的解法，放入栈，再推出去
    let stack=[];
    let head1=new ListNode(0);
    head1.next=head;
    while(head1.next){
        stack.push(head1.next.val);
        head1=head1.next;
    }
    let i=1;
    let head2=new ListNode(0);
    while(stack.length){
        if(i===n){
            i++;
            stack.pop(); //关键
            continue;
        }
        let a =stack.pop();
        let temp = new ListNode(a);
        temp.next=head2.next;
        head2.next=temp;
        i++;
    }
    return head2.next;
};
// @lc code=end

