/* 92. Reverse Linked List II
Given the head of a singly linked list and two integers left and right where left <= right,
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
*/

function reverseBetween(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    let curr = prev.next;
    for (let i = 0; i < right - left; i++) {
        const temp = curr.next;
        curr.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }
    return dummy.next;
}

function ListNode(val) {
    this.val =  val;
    this.next = null;
}

let listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(3);
listNode.next.next.next = new ListNode(4);
listNode.next.next.next.next = new ListNode(5);

let left = 2, right = 4;
console.log(reverseBetween(listNode, left, right))