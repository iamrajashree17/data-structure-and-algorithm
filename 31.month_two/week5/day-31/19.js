/* 19. Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }

    let slow = dummy;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(4);
listNode.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(listNode, 2))