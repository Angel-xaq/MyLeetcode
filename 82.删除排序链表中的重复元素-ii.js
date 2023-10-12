/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
    //一次遍历
    //由于链表的头节点可能会被删除，因此我们需要额外使用一个哑节点（dummy node）指向链表的头节点。
    let dummy = new ListNode(0,head);  //等于说一个0节点后面连着head
    let res = dummy;
    while(res.next && res.next.next){ //*重点
        if(res.next.val==res.next.next.val){
            let x = res.next.val;
            while(res.next && res.next.val==x){   //*
                res.next=res.next.next;   //*
            }
        }
        else{
            res = res.next;
        }
    }
    return dummy.next;
    //[1,1,1,1,2]
    //首先是[1,1,1,2]，接着是[1,1,2]，再接着是[1,2]，最后是[2]
};
// @lc code=end

