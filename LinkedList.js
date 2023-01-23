class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
    }

    isEmpty() {
        return this.head === null
    }

    insertAtFront(data) {
        if (this.isEmpty()) {
            this.head = new ListNode(data)
        } else {
            const node = new ListNode(data)
            node.next = this.head
            this.head = node
        }
    }

    removeHead() {
        if (this.isEmpty()) {
            return false
        } else {
            const newHead = this.head.next
            this.head.next = null
            this.head = newHead
        }
    }

    removeBack() {
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        const temp = current.next
        current.next = null
        return temp.data
    }

    contains(val) {
        let runner = this.head
        while (runner) {
            if(runner.data === val) {
                return true
            }
            runner = runner.next
        }
        return false
    }

    containsRecursive(val, current = this.head) {
        if (current) {
            return (current.data == val) ? true : this.containsRecursive(val, current.next)
        }
        return false
    }

    average() {
        let sum = 0
        let count = 0
        if(this.isEmpty()) {
            return 0;
        } else {
            let runner = this.head
            while (runner) {
                sum += runner.data
                count ++
                runner = runner.next
            }
            return (sum/count)
        }
    }

    insertAtBack(data) {
        if(this.isEmpty()){
            this.head = new ListNode(data)
        }

        let runner = this.head
        if (runner) {
            while(runner.next) {
                runner = runner.next
            }
            runner.next = new ListNode(data)
        } else {
            this.head = new ListNode(data)
        }
    }

    insertAtBackRecursive(runner = this.head, data) {
        if(this.isEmpty()) {
            this.head = new ListNode(data)
            return
        }
        if(!runner.next) {
            return runner.next = new ListNode(data)
        } else {
            runner.next = this.insertAtBackRecursive(runner.next, data)
        }
        return runner
    }

    insertAtBackMany(arrayofValues, runner = this.head) {
        if (runner) {
            while (runner.next) {
                runner = runner.next
            }
        } else {
            this.head = new ListNode(arrayofValues[0])
            runner = this.head
            arrayofValues = arrayofValues.filter((i) => i != arrayofValues[0])
        }
        for (const val of arrayofValues) {
            runner.next = new ListNode(val)
            runner = runner.next
        }
    }

    toArr() {
        const arr = []
        let runner = this.head

        while (runner) {
            arr.push(runner.data)
            runner = runner.next
        }
        return arr
    }

    reverseList() {
        let prev = null
        let runner = this.head
        while (runner) {
            let next = runner.next
            runner.next = prev
            prev = runner
            runner = next
        }
        this.head = prev
    }


}
const testList = new SinglyLinkedList()
testList.insertAtBackMany([1,2,3,4,5])
testList.removeBack()
testList.removeHead()
console.log(testList.toArr())
testList.insertAtFront(10)
testList.insertAtBack(5)
console.log(testList.toArr())
testList.reverseList()
console.log(testList.toArr())