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

        lookup(value: number): Node | boolean {
            if (!this.root) {
                return false;
            }

            let currentNode = this.root;

            while (currentNode) {
                if (value === currentNode.value) {
                    return currentNode;
                } else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        return false;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    if (!currentNode.left) {
                        return false;
                    } else {
                        currentNode = currentNode.left;
                    }
                }
            }
        }

        remove(value: number): boolean {
            if (!this.root) {
                return false;
            }

            let parentNode: Node = null;
            let currentNode: Node = this.root;

            while (currentNode) {
                if (value > currentNode.value) {
                    parentNode = currentNode;
                    currentNode = currentNode.right;
                } else if (value < currentNode.value) {
                    parentNode = currentNode;
                    currentNode = currentNode.left;
                } else if (value === currentNode.value) {
                    if (!currentNode.right) {
                        if (!parentNode) {
                            this.root = currentNode.left;
                        } else {
                            if (parentNode.value > currentNode.value) {
                                parentNode.left = currentNode.left;
                            } else {
                                parentNode.right = currentNode.left;
                            }
                        }
                    } else if (!currentNode.left) {
                        if (!parentNode) {
                            this.root = currentNode.right;
                        } else {
                            if (parentNode.value > currentNode.value) {
                                parentNode.left = currentNode.right;
                            } else {
                                parentNode.right = currentNode.left;
                            }
                        }
                    } else {
                        let leftmostParent = currentNode.right;
                        let leftmost: Node;

                        if (!leftmostParent.left) {
                            leftmost = leftmostParent;
                            leftmost.left = currentNode.left;
                        } else {
                            leftmost = leftmostParent.left;
                            while (leftmost.left) {
                                leftmostParent = leftmost;
                                leftmost = leftmost.left;
                            }

                            leftmostParent.left = leftmost.right;

                            leftmost.left = currentNode.left;
                            leftmost.right = currentNode.right;
                        }

                        if (!parentNode) {
                            this.root = leftmost;
                        } else {
                            if (parentNode.value > currentNode.value) {
                                parentNode.left = leftmost;
                            } else {
                                parentNode.right = leftmost;
                            }
                        }
                    }

                    return true;
                }
            }
        }

        breadthFirstSearch(): number[] {
            let list: number[] = [];
            let queue: Node[] = [];
            let currentNode: Node = this.root;

            queue.push(currentNode);

            while (queue.length) {
                currentNode = queue.shift();
                list.push(currentNode.value);

                if (currentNode.left) {
                    queue.push(currentNode.left);
                }

                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }

            return list;
        }

        breadthFirstSearchRecursive(queue: Node[], list: number[]): number[] {
            if (!queue.length) {
                return list;
            }

            let currentNode: Node = queue.shift();
            list.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }

            return this.breadthFirstSearchRecursive(queue, list);
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

    console.log(tree.lookup(4));
    console.log(tree.lookup(99));

    tree.remove(20);
    console.log(JSON.stringify(traverse(tree.root)));
    //     9
    //  4     170
    //1  6  15

    console.log("BFS: " + tree.breadthFirstSearch());

    let queue: Node[] = [tree.root];
    let list: number[] = [];
    console.log(
        "BFS recursive: " + tree.breadthFirstSearchRecursive(queue, list)
    );
}
