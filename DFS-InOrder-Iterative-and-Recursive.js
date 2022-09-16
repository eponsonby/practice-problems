function inOrderIterative(root) {
    let stack = []
    
    while (true) {
            if (root) {
                stack.push(root)
                root = root.left
            } else {
                if (stack.length === 0) break
                root = stack.pop()
                console.log(root.value)
                root = root.right
            }
    }
}

function inOrderRecursive(root) {
  root.left && inOrderRecursive(root.left)
  root.right && inOrderRecursive(root.right)
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

console.log(inOrderRecursive(tree1))