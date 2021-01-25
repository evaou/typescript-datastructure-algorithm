class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function getNodeHeight(node: TreeNode | null): number {
    if (node === null) {
        return 0;
    }

    let leftHeight = getNodeHeight(node.left);
    let rightHeight = getNodeHeight(node.right);

    if (leftHeight < 0 || rightHeight < 0) {
        return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
    return getNodeHeight(root) >= 0;
}
