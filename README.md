# Typescript - Data Structure & Algorithm

### Set up Environment

    $ npm install

### Set up Debug in VSCode IDE
Update file path for "args"

    // .vscode/launch.json
    {
        "version": "0.2.0",
        "configurations": [
            {
            "name": "Debug typescript file",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceRoot}",
            "runtimeArgs": ["-r", "ts-node/register"],
            "args": ["${workspaceRoot}/leetcode/208-implement-trie.ts"],
            "runtimeExecutable": "/usr/local/bin/node"
            }
        ]
    }



### Run Program

    $ tsc data-structure/array.ts
    $ node data-strucutre/array

### [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

### Hint
- constant lookup
    - hash map
- constant space
    - in place
    - two pointers
- sorted
    - binary search
    - time: *O(log N)*
- sort time from *O(N log N)* to *O(N)*
    - tail recursion
- call stack space from *O(log N)* to *O(1)*
    - tail recursion
- complete binary tree
    - upperCount = lastCount - 1
    - lastCount = 2^(height - 1) - 1
- heap
    - parentIdx = Math.floor((currentIdx - 1) / 2)
    - leftChildIdx = 2 * currentIdx + 1
    - rightChildIdx = 2 * currentIdx + 2
- acyclic
    - topological sort for Directed Acyclic Graph
- shortest path in directed weighted graph
    - positive weight 
        - dijkstra algorithm
    - negative weight
        - bellman-ford algorithm
        - no negative cycle, distance change after *(N - 1)* iteration
- dynamic programming
    - bottom-up recursion with one or two dimentional array memorization
- backtracking
    - hash map
    - rollback change as invalid 