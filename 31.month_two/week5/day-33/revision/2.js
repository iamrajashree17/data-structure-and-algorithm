/* 2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

function addTwoNumbers(l1, l2) {
   let dummy = new ListNode(0);
   let curr  = dummy;

   let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry;

        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;

        sum += a + b;
        curr.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);

        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummy.next;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list = new ListNode(2);
list.next = new ListNode(4)
list.next.next = new ListNode(3);

let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list, list2))
