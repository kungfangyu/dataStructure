/*
 * @Author: Fangyu Kung
 * @Date: 2024-02-06 00:29:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 18:40:09
 * @FilePath: /dataStructure/stack.js
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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

let myStack = new Stack();

myStack.push("Fane");
myStack.push("Amber");
myStack.printAll();
