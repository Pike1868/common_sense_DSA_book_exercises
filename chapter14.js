/**Node-Based Data Structures
 *
 * Linked lists: Like an array, a linked list is a data structure
 * that represents a list of items.
 *
 * However unlike arrays that are contiguous blocks of memory inside of a computer,
 * the data from a linked list can be scattered across different cells throughout
 * the computer's memory.
 *
 * Connected data that is dispersed throughout memory are know as nodes. In a
 * linked list, each node represents one item in the list.
 *
 * Each node comes with a little extra information, namely, the memory address
 * of the next node in the list.
 *
 * A linked lists first node can be referred to its head, and its final node as its tail.
 *
 *
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }

  //append method
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  //prepend method
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  //insert method

  insertAtIndex(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let currentIndex = 0;

    // Traverse the list to find the position before the one where the new node should be inserted
    while (current !== null && currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current === null) {
      // If the current is null, index is out of bounds
      console.log("Index out of bounds");
      return;
    }

    // Inserting the new node at the required index
    newNode.next = current.next;
    current.next = newNode;
  }

  //delete method
  delete(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  //find method
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  //display method
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  //last node value in list
  last() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  //method to reverse a linked list
  reverse() {
    //need to keep track of three variables
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      // Store next node
      next = current.next;
      // Reverse current node's pointer
      current.next = prev;
      // Move pointers one position ahead
      prev = current;
      current = next;
    }
    // Update head to point to the new front of the list
    this.head = prev;
  }
}

let exampleLinkedList = new LinkedList();

exampleLinkedList.append(11);
exampleLinkedList.append(12);
exampleLinkedList.append(13);
exampleLinkedList.append(14);
exampleLinkedList.append(15);

console.log("Full linked list:");
exampleLinkedList.display();

//Example deleting a node
exampleLinkedList.delete(13);
console.log("Linked list after deleting a node:");
exampleLinkedList.display();

//Example finding a node
let node = exampleLinkedList.find(14);
console.log("Found node:", node);

//Example returning last node in list
console.log("Last value in list:", exampleLinkedList.last());

//Example reversing linked list
console.log("Reverse list and then display:");
exampleLinkedList.reverse();
exampleLinkedList.display();

console.log("====================");

/**Doubly Linked List
 * A doubly linked list is like a linked list except that each node has two
 * links- one that points to the next node, and another that points to
 * the previous node.
 *
 * In addition the doubly linked list always keeps track of the first and last nodes,
 * instead of just the first node.
 */

class DoublyNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  insertAtEnd(value) {
    const newNode = new DoublyNode(value);
    //if the linked list doesn't have any elements in the linked list yet
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //if the linked list already has at least one node
      //set the newNode's previous node to the current last node
      newNode.prev = this.last;
      //set the next node of the current last node to the new node
      this.last.next = newNode;
      //update the last node to be the newNode
      this.last = newNode;
    }
  }

  //method to delete from the front
  removeFromFront() {
    const removedNode = this.first;
    this.first = this.first.next;
    return removedNode;
  }

  //display method
  display() {
    let current = this.first;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  //method to display backwards
  displayBackwards(value) {
    let current = this.last;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
    return null;
  }
}

/**Queues as Doubly linked lists
 *
 * Because doubly linked lists can insert data at the end in O(1) time
 * and delete data from the front in O(1) time, they make the perfect
 * underlying structure for a queue.
 */

class Queue {
  constructor() {
    this.queue = new DoublyLinkedList();
  }

  //enqueue method (insert at end)
  enqueue(value) {
    this.queue.insertAtEnd(value);
  }

  //dequeue method (remove from front)
  dequeue() {
    return this.queue.removeFromFront();
  }

  //peek method (to find a node)
  peek(value) {
    return this.queue.first ? this.queue.first.value : null;
  }
}

let list = new DoublyLinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

// Printing the list forward
console.log("List displayed forward:");
list.display();
// Printing the list backward
console.log("List displayed backwards:");
list.displayBackwards();
