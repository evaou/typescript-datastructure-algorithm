function averageOfLevels(root: TreeNode | null): number[] {
    let queue: TreeNode[] = [root];
    let result: number[] = [];

    while (queue.length) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            let curNode = queue.shift();
            levelSum += curNode.val;

            if (curNode.left) {
                queue.push(curNode.left);
            }

            if (curNode.right) {
                queue.push(curNode.right);
            }
        }

        result.push(levelSum / levelSize);
    }

    return result;
}
