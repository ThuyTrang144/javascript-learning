class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    addNode(val) {
        let newNode = new ListNode(val, null);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    printList() {
        let current = this.head
        while (current !== null) {
            console.log(current.val);
            current = current.next;
            }
    }
// use while loop
//     deleteDuplicates() {
//         let current = this.head;
//         while (current !== null && current.next !== null) {
//             if (current.val === current.next.val) {
//                 current.next = current.next.next;
//             }
//             else {
//                 current = current.next;
//             }
//         }
//     }

// recursive approach;
    deleteDuplicates() {
        let current = this.head
        if(current === null) {
            return [];
        }
        if (current !== null && current.next === null) {
            return head;
        }
        else {
            if (current.val === current.next.val) {
                current.next = current.next.next
            }
            else current = current.next;
            deleteDuplicates();
        }
        return head

        
    }
}
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


let list = new LinkedList();
list.addNode(1);
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.deleteDuplicates(list)
console.log("current.value", list.printList())