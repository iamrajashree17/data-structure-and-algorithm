/* 445. Add Two Numbers II
You are given two non-empty linked lists representing two non-negative integers. 
The most significant digit comes first and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

Example 2:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

Example 3:
Input: l1 = [0], l2 = [0]
Output: [0]
*/

function addTwoNumbers(l1, l2) {
    let stack1 = [];
    let stack2 = [];

    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while(l2) {
        stack2.push(l2.val)
        l2 = l2.next;
    }

    let carry = 0
    let head = null;
    while (stack1.length || stack2.length || carry) {
       let sum = carry;

       let a = stack1.length ? stack1.pop() : 0;
       let b = stack2.length ? stack2.pop() : 0;

        sum += a + b;
        carry = Math.floor(sum / 10);
        const node = new ListNode(sum % 10);
        node.next = head;
        head = node;
    }
    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list = new ListNode(7);
list.next = new ListNode(2)
list.next.next = new ListNode(4);
list.next.next.next = new ListNode(3);

let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list, list2));