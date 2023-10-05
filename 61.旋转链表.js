/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //自己做的 涉及快慢指针
    // let res = head;
    // if(head==null){
    //     return head;
    // }
    // let count = 1;
    // while(res.next!==null){  //计算链表长度
    //     count++;
    //     res = res.next;
    // }
    // k=k%count;
    // if(k==0){   //*重点
    //     return head;
    // }
    // let right = head,left=head;
    // for(let i=0;i<k;i++){
    //     right=right.next;
    // }
    // while(right.next!==null){
    //     right=right.next;
    //     left=left.next;
    // }
    // let end = left;
    // left =left.next;
    // end.next=null;
    // right.next=head;
    // return left;
    //参考答案  形成环形链表
    let res = head;
    if(head==null){
        return head;
    }
    let count = 1;
    while(res.next!==null){  //计算链表长度
        count++;
        res = res.next;
    }
    k=k%count;
    if(k==0){   //*重点
        return head;
    }
    res.next = head;
    let m=count-k;
    let end=head;
    for(let i=1;i<m;i++){
        end=end.next;
    }
    res = end.next;
    end.next=null;
    return res;
};
// @lc code=end

