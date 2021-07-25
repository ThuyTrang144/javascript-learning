// var addTwoNumbers = function(l1, l2) {
//     l1 = reverse(l1);
//     console.log(l1)
//     l2 = reverse(l2);   
//     console.log(l1) 
// };
//Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// var reverseLinkedList = function(list) {
//    let previous = null;
//    let current = head;
//    let tempt = current.next;
//    while(current != null) {
       
//    }
    
// }
// console.log.reverse([2,4,3]);
// algo:
// reverse the linked List 
// merge nodes to numbers 
// add two numbers
// convert the sum to linked list
// create the nodes
let list = null;

function makeNode(value) {
    return {
      value: value,
      next: null
    }
  }

let four = makeNode(4);
let three = makeNode(3);
let two = makeNode(2);
let one = makeNode(1);

// link them together
four.next = three;
three.next = two;
two.next = one;

console.log(makeNode(list));