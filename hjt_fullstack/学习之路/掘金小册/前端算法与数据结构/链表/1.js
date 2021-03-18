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
var mergeTwoLists = function (l1, l2) {
    // 创建用于接收结果的新链表
    const res = new ListNode(0);
    // 利用一个指针来不断更新我们新链表的next
    let p = res;
    // 遍历两个链表
    while (l1 && l2) {
        // 判断链表值的大小
        if (l1.val < l2.val) {
            // 将较小值赋值给新链表
            p.next = l1;
            // 更新该链表的指针
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        // 更新p的指针，使其指向下一个节点
        p = p.next;
    }
    // 判断两个链表中是否有剩余节点
    // 因为是有序链表，所以直接将next指向剩余节点的头部即可
    // 返回结果
    // 因为res的头部指针是我们创建的临时接受结果的节点，所以我们这里直接从res.next 开始返回
    return res.next;
};