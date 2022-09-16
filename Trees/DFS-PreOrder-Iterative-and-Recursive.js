function preOrderIterative(root) {
    if (root === null) {
        return;
    }
     
    // Create an empty stack and push root to it
    var stack = [root];
     
    /* Pop all items one by one. Do following
    for every popped item
    a) print it
    b) push its right child
    c) push its left child
    Note that right child is pushed first so
    that left is processed first */
    while (stack.length > 0) {
        // Pop the top item from stack and print it
        let mynode = stack.pop();
        console.log(mynode.value + " ");
         
        // Push right and left children of
        // the popped node to stack
        if (mynode.right != null) {
            stack.push(mynode.right);
        }
        
        if (mynode.left != null) {
            stack.push(mynode.left);
        }
    }
}

function preOrderRecursive(root) {
  console.log(root.value)
  root.left && preOrderRecursive(root.left)
  root.right && preOrderRecursive(root.right)
}


class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const tree1 = new TreeNode(1,
                  new TreeNode(2,
                    new TreeNode(4),
                    new TreeNode(5)),
                  new TreeNode(3,
                      new TreeNode(6),
                      new TreeNode(7)));

console.log(preOrderRecursive(tree1))