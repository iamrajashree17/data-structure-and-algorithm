/* 143. Reorder List
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
*/

function reorderList(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null;

    let prev = null;
    while (second) {
        let next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    second = prev;

    let first = head;
    while(second) {
        let temp = first.next;
        first.next = second;
        first = temp;
        temp = second.next;
        second.next = first;
        second = temp;
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

reorderList(list);
console.log(list);


// Time: o(n)
// Space: o(1);