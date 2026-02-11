/* 23. Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

*/

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;

    while (lists.length > 1) {
        let merged = [];

        for (let i = 0; i < lists.length; i+=2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] :  null;
            merged.push(mergeTwoLists(l1, l2));
        }

        lists = merged;
    }
    return lists[0];
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}

function mergeLists(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if(l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}

function mergeKLists1(lists) {
    console.log(lists)
    if (!lists || lists.length === 0) return null;

    while (lists.length > 1) {
        let merged = [];
        for (let i = 0; i < lists.length; i+=2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            merged.push(mergeLists(l1, l2));
        }
        lists = merged;
    }

    return lists[0];
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list = new ListNode(1);
list.next = new ListNode(4);
list.next.next = new ListNode(5);

let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(4);

let list2 = new ListNode(2);
list2.next = new ListNode(6);

console.log(mergeKLists1([list, list1, list2]));
