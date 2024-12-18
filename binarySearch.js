class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.path = ""; //tree traversal 的路線
    this.queue = [];
  }

  treeInsert(z) {
    let y = null;
    let x = this.root;

    while (x !== null) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    if (y == null) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
  }

  //preOrder
  preOrder(n) {
    if (n != null) {
      this.path += n.key + " ";
      this.preOrder(n.left);
      this.preOrder(n.right);
    }
  }

  //inOrder
  inOrder(n) {
    if (n != null) {
      this.inOrder(n.left);
      this.path += n.key + " ";
      this.inOrder(n.right);
    }
  }

  //postOrder
  postOrder(n) {
    if (n != null) {
      this.postOrder(n.left);
      this.postOrder(n.right);
      this.path += n.key + " ";
    }
  }

  //Search Recursively
  searchRecursively(x, key) {
    if (x == null || key == x.key) {
      return x;
    } else if (key < x.key) {
      return this.searchRecursively(x.left, key);
    } else {
      return this.searchRecursively(x.right, key);
    }
  }

  searchIteratively(x, key) {
    while (x != null && key != x.key) {
      if (key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    if (x == null) {
      console.log("Node not found");
    } else {
      console.log("Node found.");
    }
    return x;
  }

  bftt(n) {
    if (n != null) {
      this.queue.push(n);
      for (let i = 0; i < this.queue.length; i++) {
        let currentNode = this.queue[i];
        if (currentNode != null) {
          if (currentNode.left != null) {
            this.queue.push(currentNode.left);
          }
          if (currentNode.right != null) {
            this.queue.push(currentNode.right);
          }
        }
      }
    }
  }
}

let bst = new BinarySearchTree();
bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

// bst.bftt(bst.root);
// console.log(bst.queue);

let result = bst.searchIteratively(bst.root, 9);
console.log(result);
