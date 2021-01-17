let sum: number;

function traverseInOrder(node: TreeNode | null) {
    if (!node) {
        return;
    }

    traverseInOrder(node.right);

    sum += node.val;
    node.val = sum;

    traverseInOrder(node.left);
}

function bstToGst(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }

    sum = 0;
    traverseInOrder(root);

    return root;
}
