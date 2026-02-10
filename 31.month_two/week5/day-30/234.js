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

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let otherHalf = slow;
    let reverseHalf = reverse(otherHalf);

    let left = head;
    let right = reverseHalf;

    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next
    }
    return true;
}

function reverse(head) {
    let curr = head;
    let prev = null;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
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

