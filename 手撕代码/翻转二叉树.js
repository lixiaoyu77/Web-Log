// 定义二叉树节点类
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 翻转二叉树函数
function invertBinaryTree (root) {
  if (!root) {
    return null
  }

  // 递归地交换左右子树
  const left = invertBinaryTree(root.left)
  const right = invertBinaryTree(root.right)

  // 交换左右子树的位置
  root.left = right
  root.right = left

  return root
}

// 示例
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log('翻转前的二叉树：', root)

const invertedRoot = invertBinaryTree(root)
console.log('翻转后的二叉树：', invertedRoot)
