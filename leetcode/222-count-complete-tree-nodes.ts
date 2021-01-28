let count: number;

function dfs(node: TreeNode | null): void {
  if (node === null) {
    return;
  }

  count++;
  dfs(node.left);
  dfs(node.right);
}

function countNodes(root: TreeNode | null): number {
  count = 0;

  dfs(root);

  return count;
}
