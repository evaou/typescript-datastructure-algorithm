function getTreeHeight(node: TreeNode | null): number {
  let height = 0;

  while (node !== null) {
    height++;
    node = node.left;
  }

  return height;
}

function isNodeNull(
  nodeIdx: number,
  node: TreeNode | null,
  height: number
): boolean {
  let leftIdx = 0;
  let rightIdx = Math.pow(2, height - 1) - 1;
  let midIdx: number;

  for (let currentHeight = 1; currentHeight < height; currentHeight++) {
    midIdx = Math.ceil((leftIdx + rightIdx) / 2);

    if (nodeIdx >= midIdx) {
      leftIdx = midIdx;
      node = node.right;
    } else {
      rightIdx = midIdx - 1;
      node = node.left;
    }
  }

  return node === null;
}

function getLastCount(root: TreeNode | null, height: number): number {
  let leftIdx = 0;
  let rightIdx = Math.pow(2, height - 1) - 1;
  let midIdx: number;

  while (leftIdx < rightIdx) {
    midIdx = Math.ceil((leftIdx + rightIdx) / 2);

    if (isNodeNull(midIdx, root, height)) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx;
    }
  }

  return leftIdx + 1;
}

// time: O((log N)^2), space: O(1)
function countNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let height = getTreeHeight(root);
  let upperCount = Math.pow(2, height - 1) - 1;
  let lastCount = getLastCount(root, height);

  return upperCount + lastCount;
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
