namespace leetcode98 {
    class TreeNode {
        val: number;
        left: TreeNode | null;
        right: TreeNode | null;
        constructor(
            val?: number,
            left?: TreeNode | null,
            right?: TreeNode | null
        ) {
            this.val = val === undefined ? 0 : val;
            this.left = left === undefined ? null : left;
            this.right = right === undefined ? null : right;
        }
    }

    class BinarySearchTree {
        root: TreeNode | null;

        constructor() {
            this.root = null;
        }

        build(input: number[]): void {
            if (input.length === 0) {
                return;
            }

            let queue: TreeNode[] = [];
            let newNode: TreeNode = new TreeNode(input[0]);
            let currentNode: TreeNode;
            let inputIdx: number = 1;
            let tmpVal: number | null;

            this.root = newNode;
            queue.push(newNode);

            while (queue.length > 0) {
                currentNode = queue.shift();

                if (inputIdx < input.length) {
                    tmpVal = input[inputIdx++];
                    if (tmpVal) {
                        newNode = new TreeNode(tmpVal);
                        currentNode.left = newNode;
                        queue.push(newNode);
                    } else {
                        currentNode.left = null;
                    }
                }

                if (inputIdx < input.length) {
                    tmpVal = input[inputIdx++];
                    if (tmpVal) {
                        newNode = new TreeNode(tmpVal);
                        currentNode.right = newNode;
                        queue.push(newNode);
                    } else {
                        currentNode.right = null;
                    }
                }
            }
        }
    }

    function isValidBSTMinMax(root: TreeNode | null): boolean {
        if (!root) {
            return true;
        }

        if (!root.left && !root.right) {
            return true;
        }

        return isValid(root, -Math.pow(2, 31) - 1, Math.pow(2, 31));
    }

    function isValid(node: TreeNode, min: number, max: number): boolean {
        if (!node) {
            return true;
        }

        if (node.val <= min || node.val >= max) {
            return false;
        }

        if (!isValid(node.left, min, node.val)) {
            return false;
        }

        if (!isValid(node.right, node.val, max)) {
            return false;
        }

        return true;
    }

    let prevNode: TreeNode | null = null;

    function isValidBST(node: TreeNode | null): boolean {
        prevNode = null;
        return isValidInorder(node);
    }

    function isValidInorder(node: TreeNode | null): boolean {
        if (!node) {
            return true;
        }

        if (!isValidInorder(node.left)) {
            return false;
        }

        if (prevNode && prevNode.val >= node.val) {
            return false;
        } else {
            prevNode = node;
        }

        if (!isValidInorder(node.right)) {
            return false;
        }

        return true;
    }

    let tree = new BinarySearchTree();
    let input: number[];
    //input = [5, 1, 4, null, null, 3, 6]; // false
    //     5
    //  1     4
    //n  n  3   6

    //input = [2, 1, 3]; // true
    //input = [1, 1]; // false

    //input = [5, 4, 6, null, null, 3, 7]; // false
    //     5
    //  4     6
    //n  n  3   7

    input = [0]; // true

    //input = [34,-6,null,-21] // true
    //     34
    //  -6    n
    //-21

    //input = [-2147483648, null, 2147483647]; // true

    //input = [2147483647, 2147483647]; // false

    tree.build(input);
    console.log(isValidBST(tree.root));
}
