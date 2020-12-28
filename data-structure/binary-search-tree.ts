namespace BinarySearchTree {
    class Node {
        value: number | null;
        left: Node | null;
        right: Node | null;

        constructor(value: number) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    interface TreeType {
        value: number;
        left?: TreeType | null;
        right?: TreeType | null;
    }

    class BinarySearchTree {
        root: Node | null;

        constructor() {
            this.root = null;
        }

        insert(value: number): BinarySearchTree {
            let newNode = new Node(value);

            if (!this.root) {
                this.root = newNode;
                return this;
            }

            let currentNode: Node = this.root;

            while (currentNode) {
                if (newNode.value >= currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                } else {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
            }

            return this;
        }

        lookup(value: number): Node | null {
            if (!this.root) {
                return null;
            }

            let currentNode: Node = this.root;

            while (currentNode) {
                if (value === currentNode.value) {
                    return currentNode;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                } else {
                    currentNode = currentNode.left;
                }
            }

            return null;
        }

        remove(value: number): BinarySearchTree {
            if (!this.root) {
                return this;
            }

            let currentNode: Node = this.root;
            let parentNode: Node;
            let leftTree = new BinarySearchTree();
            let rightTree = new BinarySearchTree();
            let mergedNode: Node;

            while (currentNode) {
                if (value === currentNode.value) {
                    leftTree.root = currentNode.left;
                    rightTree.root = currentNode.right;
                    mergedNode = this.merge(leftTree, rightTree);

                    if (currentNode === this.root) {
                        currentNode.left = null;
                        currentNode.right = null;

                        this.root = mergedNode;
                    } else {
                        if (currentNode.value >= parentNode.value) {
                            parentNode.right = mergedNode;
                        } else {
                            parentNode.left = mergedNode;
                        }
                    }

                    break;
                } else if (value >= currentNode.value) {
                    parentNode = currentNode;
                    currentNode = currentNode.right;
                } else {
                    parentNode = currentNode;
                    currentNode = currentNode.left;
                }
            }

            return this;
        }

        merge(leftTree: BinarySearchTree, rightTree: BinarySearchTree): Node {
            if (!leftTree.root) {
                return rightTree.root;
            }

            if (!rightTree) {
                return leftTree.root;
            }

            let currentNode: Node = leftTree.root;

            while (currentNode) {
                if (rightTree.root.value >= currentNode.value) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = rightTree.root;
                        break;
                    }
                } else {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = rightTree.root;
                        break;
                    }
                }
            }

            return leftTree.root;
        }

        traverse(node: Node = this.root): TreeType | null {
            let tree: TreeType = { value: node.value };

            tree.left = node.left === null ? null : this.traverse(node.left);
            tree.right = node.right === null ? null : this.traverse(node.right);

            return tree;
        }
    }

    var tree = new BinarySearchTree();
    tree.insert(9);
    tree.insert(4);
    tree.insert(6);
    tree.insert(20);
    tree.insert(170);
    tree.insert(15);
    tree.insert(1);
    console.log(JSON.stringify(tree.traverse()));
    console.log(tree.lookup(15));
    console.log(tree.lookup(199));
    console.log(JSON.stringify(tree.traverse()));

    console.log("REMOVE:");
    //console.log(tree.remove(20));
    //console.log(tree.remove(6));
    console.log(tree.remove(9));

    console.log("TRAVERSE:");
    console.log(JSON.stringify(tree.traverse()));
}
