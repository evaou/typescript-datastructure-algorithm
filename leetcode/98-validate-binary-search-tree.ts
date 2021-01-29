function isValidPreorder(
  node: TreeNode | null,
  min: number,
  max: number
): boolean {
  if (node.val <= min || node.val >= max) return false;

  if (node.left && !isValidPreorder(node.left, min, node.val)) return false;
  if (node.right && !isValidPreorder(node.right, node.val, max)) return false;

  return true;
}

// time: O(N), space: O(N)
function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  return isValidPreorder(root, -Infinity, Infinity);
}
