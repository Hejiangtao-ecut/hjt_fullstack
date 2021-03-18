var removeElements = function (head, val) {
    const res = new ListNode(0);
    res.next = head;
    let p = res;
    while (res.next !== null) {
        if (res.next.val === val) {
            res.next = res.next.next
        } else {
            res = res.next;
        }
    }
    return p.next;
};