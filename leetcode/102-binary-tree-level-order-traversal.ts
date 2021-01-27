namespace leetcode102 {
  function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];

    if (!root) {
      return result;
    }

    let queue = [root];
    let levelCount = queue.length;
    let count = 0;
    let node: TreeNode;
    let levelResult: number[] = [];

    while (queue.length > 0) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      levelResult.push(node.val);

      count++;

      if (count === levelCount) {
        result.push(levelResult);
        levelResult = [];
        count = 0;
        levelCount = queue.length;
      }
    }

    return result;
  }

  let result: number[][];

  function levelOrder2(root: TreeNode | null): number[][] {
    result = [];
    if (!root) {
      return result;
    }

    dfs(root, 0);

    return result;
  }

  function dfs(node: TreeNode | null, level: number) {
    if (!node) {
      return;
    }

    if (result[level] === undefined) {
      result[level] = [];
    }

    result[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
}
