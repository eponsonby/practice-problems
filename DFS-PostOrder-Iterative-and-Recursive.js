function postOrderIterative(root) {
    if (!root) {
        return
    }
 
    // create an empty stack and push the root node
    let stack = [root]
    let out = []
    
    // create another stack to store postorder traversal
 
    // loop till stack is empty
    while (stack.length > 0) {
        // pop a node from the stack and push the data into the output stack
        let curr = stack.pop()
        out.push(curr.value)
 
        // push the left and right child of the popped node into the stack
        if (curr.left) {
            stack.push(curr.left)
        }
 
        if (curr.right) {
            stack.push(curr.right)
        }
    }

    // print the output stack
    for (let i = out.length; i >= 0; i--) {
        console.log(out[i])    
    }
}


function postOrderRecursive(root) {
  root.left && postOrderRecursive(root.left)
  root.right && postOrderRecursive(root.right)
  console.log(root.value)
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

console.log(postOrderRecursive(tree1))