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

### [Visual Algorithm](https://visualgo.net/en)

### Hint

- constant lookup
  - hash map
- constant space
  - in place
  - two pointers
- sorted
  - binary search
  - time: _O(log N)_
- tail recursion
  - sort time from _O(N log N)_ to _O(N)_
  - call stack space from _O(log N)_ to _O(1)_
- complete binary tree
  - height starts from 0
  - total count = 2^(height + 1) - 1
  - last-level count = 2^height
  - non-last-level total count = last-level count - 1
  - e.g. min/max heap
- heap
  - parentIdx = Math.floor((currentIdx - 1) / 2)
  - leftChildIdx = 2 \* currentIdx + 1
  - rightChildIdx = 2 \* currentIdx + 2
- topological sort
  - Directed Acyclic Graph
  - inDegree
- shortest path in directed weighted graph
  - positive weight
    - dijkstra algorithm
      - update distances with the smallest weight
      - min heap
  - negative weight
    - bellman-ford algorithm
      - e.g. network delay
      - no negative cycle, distance change after _(N - 1)_ iteration
- dynamic programming
  - bottom-up recursion with one or two dimentional array memorization
- backtracking
  - rollback change as invalid
  - multiple partitionings or layouts
- sliding window
  - hash map for the index of seen item
- two pointers
  - sorted input
