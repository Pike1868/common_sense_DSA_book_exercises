/**Speeding Up All Things with Binary Search Trees
 *
 * An ordered array is a simple but effective tool for keeping data in order.
 * It's also fast for certain operation as it has O(1) reads and O(log N) search (when using binary search)
 *
 * However there is a drawback to ordered arrays.
 *
 * When it comes to insertions and deletions, ordered arrays are relatively slow.
 * Inserting into or deleting from the first cell in an array takes N steps in a worst case scenario.
 * And N/2 steps on average. Either way it is O(N) which is relatively slow for simple insertion and deletion.
 *
 */

/**Trees
 * A tree is a node-based data structure, but within a tree, each node can have links to multiple nodes.
 * Trees come with their own unique nomenclature:
 * - The uppermost node is called the root.
 * - A node's descendants(children) are all the nodes that stem from that node.
 * - Trees are said to have levels, each level is a row withing the tree.
 *
 * One property of a tree is how balanced it is. A tree is balanced when its nodes subtrees have the
 * same number of nodes in it.
 */

/**Binary Search Trees
 * There are many different kinds of tree-based data-structures, but this chapter will focus on binary search trees.
 * *Note that there are two adjectives here: binary and search
 *
 * 1. A "binary" tree is a tree in which each node has a zero, one, or ,two children.
 * 2. A binary "search" tree is a binary tree that also abides by the following rules:
 *  - Each node can have at most one "left" child and one "right" child.
 *  - A node's "left" descendants can only contain values that are less than the node itself. Likewise, a node's
 *      "right" descendants can only contain values that are greater than the node itself.
 *
 */

//Basic Tree Node class, where each node can have multiple children.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = []; // This will hold child nodes
  }

  // Method to add a child node
  addChild(node) {
    this.children.push(node);
  }

  // Method to remove a child node
  removeChild(node) {
    const index = this.children.indexOf(node);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }
}

//Binary Tree Node class, where each node has at most two children
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; // Reference to the left child
    this.right = null; // Reference to the right child
  }

  //insert method
  insert(value) {
    //Decide to go left if the value is less than the current value
    if (value < this.value) {
      //If no left child, this is the spot for insertion
      if (this.left === null) {
        this.left = new BinaryTreeNode(value);
      } else {
        //otherwise, recurse down the left subtree
        this.left.insert(value);
      }
      //Decide to go right if the value is greater than the current value
    } else if (value > this.value) {
      //If no right child, this is the spot for insertion
      if (this.right === null) {
        this.right = new BinaryTreeNode(value);
      } else {
        //otherwise, recurse down the right subtree
        this.right.insert(value);
      }
    }
  }
  //Search method
  search(value) {
    //Check if current node contains value
    if (value === this.value) {
      //return node if the value matches
      return this;
    }
    //If the value is less than the current node's value, go left
    if (value < this.value) {
      //If there is no left node, return null
      if (this.left === null) {
        return null;
      } else {
        //Recursively search the left subtree
        return this.left.search(value);
      }
      //If the value is greater than the current node's value, go right
    } else if (value > this.value) {
      //If there is no right node, return null
      if (this.right === null) {
        return null;
      } else {
        return this.right.search(value);
      }
    }
  }

  /** Steps of deletion algorithm
   * 1. In node being deleted has no children, simply delete it
   * 
   * 2. If the node being deleted has one child, delete the node and plug the child into the
   *    spot where the deleted node was
   * 
   * 3. When deleting a node with two children, replace the deleted node with the successor node.
   *    The successor node is the child node whose value is the least of all values that are greater than the deleted node.
   * 
   * 4. To find the successor node: visit the right child of the deleted value, and then keep on visiting the the left child
   *     of each subsequent child until there are no more left children. The bottom value is the successor node.
   * 
   * 5. If the successor node has a right child, after plugging the successor node into the spot of the deleted node, take
   *    the former right child of the successor node and turn it into the left child of the former parent of the successor node. 
   */
  //Delete node method
  delete(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        return this.left.delete(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        return this.right.delete(value, this);
      }
    } else {
      // Case 1: Node with two children
      if (this.left !== null && this.right !== null) {
        this.value = this.right.minValue();
        this.right.delete(this.value, this);
      }
      // Case 2: Node with one child or no child
      else {
        const child = this.left !== null ? this.left : this.right;

        // If the node to delete is not the root node
        if (parent !== null) {
          if (parent.left === this) {
            parent.left = child;
          } else if (parent.right === this) {
            parent.right = child;
          }
        } else {
          // This means `this` is the root node
          // Copy the child's value and children to `this`
          if (child !== null) {
            this.value = child.value;
            this.left = child.left;
            this.right = child.right;
          } else {
            // The tree had only one node, set its value to null
            this.value = null;
          }
        }
      }
    }
  }
  //Display nodes method
  display() {
    if (this.left) {
      this.left.display();
    }
    console.log(this.value);
    if (this.right) {
      this.right.display();
    }
  }

  // Helper method to find the minimum value in the subtree
  minValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.minValue();
    }
  }
}

// Example usage for a binary tree node
const root = new BinaryTreeNode(10);
root.insert(5);
root.insert(15);
root.insert(3);
root.insert(7);
root.insert(12);
root.insert(18);

console.log("Before deletion:");
root.display(); // Assume a display method that prints all values

root.delete(10); // Delete root node to test complex scenario

console.log("After deletion:");
root.display();

console.log("Search for 7", root.search(7));
root.insert(77)
root.insert(11)
console.log("Insert 11 and 77:");
root.display()
