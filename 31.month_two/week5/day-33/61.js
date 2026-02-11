/* 61. Rotate List
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
*/

function rotateList(head, k) {
    if(!head || !head.next || k === 0) return head;

    let tail = head;
    let len = 1;

    while(tail.next) {
        len++;
        tail = tail.next;
    }

    k = k % len;
    if (k === 0) return head;

    tail.next = head;
    let stepsToNewTail = len - k;
    let newTail = head;
    for (let i = 1; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let listNode = new ListNode(1);
listNode.next =  new ListNode(2);
listNode.next.next =  new ListNode(3);
listNode.next.next.next =  new ListNode(4);
listNode.next.next.next.next =  new ListNode(5);

console.log(rotateList(listNode, 2))