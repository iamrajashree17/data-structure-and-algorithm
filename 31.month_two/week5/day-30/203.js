/* 203. Remove Linked List Elements
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
*/

function removeElements(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;
}

function ListNode(val) {
    this.val =  val;
    this.next = null;
}

let listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(6);
listNode.next.next.next = new ListNode(3);
listNode.next.next.next.next = new ListNode(4);
listNode.next.next.next.next.next = new ListNode(5);
listNode.next.next.next.next.next.next = new ListNode(6);

console.log(removeElements(listNode, 6))