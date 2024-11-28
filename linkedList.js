/*
 * @Author: Fangyu Kung
 * @Date: 2024-02-02 04:40:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 18:38:44
 * @FilePath: /dataStructure/linkedList.js
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.length == 1) {
      //只有一項的時候
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  }

  shift() {
    if (!this.head) {
      return null;
    } else if (this.length == 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  unshift(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      let newNode = new Node(value);
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return null;
    } else if (index == 0) {
      this.unshift(value);
      return;
    } else if (index == this.length) {
      this.push(value);
      return;
    }

    let currentNode = this.head;
    let newNode = new Node(value);
    //for loop index - 1 steps
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }

  removeAt(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    } else if (index == 0) {
      let result = this.shift(); //因為shift()會回傳一個值, 這邊將值丟到result
      return result;
    } else if (index == this.length - 1) {
      let result = this.pop();
      return result;
    }

    let currentNode = this.head;
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }

    let temp = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;
    return temp;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in this linked list.");
      return;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let myLinkedList = new LinkedList();
// myLinkedList.shift();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("James");
myLinkedList.push("Ken");
myLinkedList.removeAt(100);

// let popValued = myLinkedList.pop();
// console.log(popValued);
// myLinkedList.shift();
myLinkedList.printAll();
console.log(myLinkedList.get(2));
console.log(myLinkedList.length);
