/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    //重点是不能丢掉当前的res，所以只让连接改变，然后不断比较，直到val不相同的时候可以切换到下一个
    let res = head;
    while(res!=null && res.next!=null){
        if(res.val==res.next.val){
            res.next=res.next.next;
        }
        else{
            res = res.next;
        }
    }
    return head;
};
// @lc code=end

