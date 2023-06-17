/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1=[];
    let stack2=[];
    while(l1||l2){  //注意，这要分情况放入l1 l2，因为存在一个是空另一个非空的情况
        if(l1){
            stack1.push(l1.val);
            l1=l1.next;
        }
        if(l2){
            stack2.push(l2.val);
            l2=l2.next;
        }
    }
    let jinwei=0;
    let s=0
    let result = new ListNode(0);
    let num1=num2=0;  //关键，要倒着放回去啊！！  一个表示开始，然后一直插入头部
    while(jinwei||stack1.length||stack2.length){
        num1=stack1.length>0?stack1.pop():0;  //我又忘记了关键的一步
        num2=stack2.length>0?stack2.pop():0;
        s=jinwei+num1+num2;
        jinwei=Math.floor(s/10);
        s=s%10;
        let sum1=new ListNode(s);
        //为了去掉末尾的0，必须这么做
        sum1.next=result.next; //插在第二个节点
        result.next=sum1;
    }
    return result.next;
};
// @lc code=end

