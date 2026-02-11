/* 234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

function isPalindrome(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
 
    let second = null;
    while(slow) {
        let next = slow.next;
        slow.next = second;
        second = slow;
        slow = next;
    }
    let first = head;

    while(first && second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }
    return true;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

let listNode = new ListNode(1);
listNode.next = new ListNode(2);
listNode.next.next = new ListNode(2);
listNode.next.next.next = new ListNode(1);

console.log(isPalindrome(listNode));

