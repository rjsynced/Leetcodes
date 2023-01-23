/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
}

var reverseList = function(head) {
    let prev = null
    let curr = head
    let next = null
    
    while(curr!== null){
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};

let list = new LinkedList();
list.insertFirst(1)
console.log(list)


