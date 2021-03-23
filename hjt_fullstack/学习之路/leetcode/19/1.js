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
var removeNthFromEnd = function (head, n) {
    let p = new ListNode(null);
    p.next = head;
    let pp = p;
    let rp = p;
    while (n > 0) {
        pp = pp.next;
        n--;
    }
    while (pp.next !== null) {
        p = p.next;
        pp = pp.next;
    }
    p.next = p.next.next;
    return rp.next;
};