namespace BreadFirstSearch {
    class Node {
        value: number;
        left: Node | null;
        right: Node | null;

        constructor(value: number) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        root: Node | null;

        constructor() {
            this.root = null;
        }

        insert(value: number): void {
            let newNode = new Node(value);

            if (!this.root) {
                this.root = newNode;
                return;
            }

            let parentNode: Node = this.root;

            while (true) {
                if (newNode.value > parentNode.value) {
                    if (!parentNode.right) {
                        parentNode.right = newNode;
                        return;
                    } else {
                        parentNode = parentNode.right;
                    }
                } else {
                    if (!parentNode.left) {
                        parentNode.left = newNode;
                        return;
                    } else {
                        parentNode = parentNode.left;
                    }
                }
            }
        }

        DFSInorder(node: Node, list: number[]): number[] {
            if (node.left) {
                this.DFSInorder(node.left, list);
            }

            list.push(node.value);

            if (node.right) {
                this.DFSInorder(node.right, list);
            }

            return list;
        }

        DFSPreorder(node: Node, list: number[]): number[] {
            list.push(node.value);

            if (node.left) {
                this.DFSPreorder(node.left, list);
            }

            if (node.right) {
                this.DFSPreorder(node.right, list);
            }

            return list;
        }

        DFSPostorder(node: Node, list: number[]): number[] {
            if (node.left) {
                this.DFSPostorder(node.left, list);
            }

            if (node.right) {
                this.DFSPostorder(node.right, list);
            }

            list.push(node.value);

            return list;
        }
    }

    interface TreeNode {
        value: number;
        left?: TreeNode | null;
        right?: TreeNode | null;
    }

    function traverse(node: Node): TreeNode {
        let tree: TreeNode = { value: node.value };

        tree.left = node.left === null ? null : traverse(node.left);
        tree.right = node.right === null ? null : traverse(node.right);

        return tree;
    }

    const tree = new BinarySearchTree();
    tree.insert(9);
    tree.insert(4);
    tree.insert(6);
    tree.insert(20);
    tree.insert(170);
    tree.insert(15);
    tree.insert(1);
    console.log(JSON.stringify(traverse(tree.root)));
    //     9
    //  4     20
    //1  6  15  170

    console.log("DFS Inorder: " + tree.DFSInorder(tree.root, []));
    // 1, 4, 6, 9, 15, 20, 170

    console.log("DFS Preorder: " + tree.DFSPreorder(tree.root, []));
    //  9, 4, 1, 6, 20, 15, 170

    console.log("DFS Postorder: " + tree.DFSPostorder(tree.root, []));
    // 1, 6, 4, 15, 170, 20, 9
}
