function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
}

function DFS(node: TreeNode | null, count: number): number {
  if (node === null) {
    return count;
  }

  count++;

  return Math.max(DFS(node.left, count), DFS(node.right, count));
}
// time: O(N), space: O(N)
function maxDepth2(root: TreeNode | null): number {
  return DFS(root, 0);
}
