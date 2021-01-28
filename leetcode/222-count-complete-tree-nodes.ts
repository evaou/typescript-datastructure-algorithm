function findTreeHeight(node: TreeNode | null): number {
  let height = 0;

  while (node !== null) {
    height++;
    node = node.left;
  }

  return height;
}

function findMidLeave(node: TreeNode, height: number): TreeNode | null {
  let currentNode = node.right;
  let currentHeight = height - 1;

  while (currentHeight > 1) {
    currentNode = currentNode.left;
    currentHeight--;
  }

  return currentNode;
}

function findCountAtLastLevel(root: TreeNode | null, height: number): number {
  let currentNode = root;
  let leftIdx = 0;
  let rightIdx = Math.pow(2, height - 1) - 1;
  let midIdx: number;
  let currentHeight = height;

  while (leftIdx !== rightIdx) {
    midIdx = Math.ceil((leftIdx + rightIdx) / 2);

    if (findMidLeave(currentNode, currentHeight) === null) {
      rightIdx = midIdx - 1;
      currentNode = currentNode.left;
    } else {
      leftIdx = midIdx;
      currentNode = currentNode.right;
    }
    currentHeight--;
  }

  return leftIdx + 1;
}

// time: O(log N), space: O(N)
function countNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let height = findTreeHeight(root);
  let countAboveLastLevel = Math.pow(2, height - 1) - 1;
  let countAtLastLevel = findCountAtLastLevel(root, height);

  return countAboveLastLevel + countAtLastLevel;
}

let count: number;

function dfs(node: TreeNode | null): void {
  if (node === null) {
    return;
  }

  count++;
  dfs(node.left);
  dfs(node.right);
}

function countNodes2(root: TreeNode | null): number {
  count = 0;

  dfs(root);

  return count;
}
