// time: O(N), space: O(N)
function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  let result: number[] = [];
  bfs(root, result);

  return result;
}

function bfs(node: TreeNode | null, result: number[]) {
  if (node === null) {
    return;
  }

  let queue: (TreeNode | null)[] = [node];
  let levelNodeNum = queue.length;
  let count = 0;
  let currentNode: TreeNode | null;

  while (queue.length > 0) {
    currentNode = queue.shift();
    count++;

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    if (count === levelNodeNum) {
      result.push(currentNode.val);
      count = 0;
      levelNodeNum = queue.length;
    }
  }
}

function rightSideView2(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  let result: number[] = [];
  dfs(root, 0, result);

  return result;
}

function dfs(node: TreeNode | null, level: number, result: number[]) {
  if (node === null) {
    return;
  }

  if (result.length <= level) {
    result.push(node.val);
  }

  dfs(node.right, level + 1, result);
  dfs(node.left, level + 1, result);
}
