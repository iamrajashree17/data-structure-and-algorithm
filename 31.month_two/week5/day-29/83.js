/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

function deleteDuplicates(head) {
    let curr = head;

    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next
        }
    }

    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let listNode = new ListNode(1);
listNode.next = new ListNode(1);
listNode.next.next = new ListNode(2);
console.log(deleteDuplicates(listNode));
