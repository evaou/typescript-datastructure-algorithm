class UndirectedCyclicGraph {
    numberOfNodes: number;
    adjacentList: { [key: string]: string[] };

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node: string): void {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1: string, node2: string): void {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections(): void {
        let output: string = "";
        let value: string[];

        for (let key in this.adjacentList) {
            value = this.adjacentList[key];
            output += `${key}--> ${value.join(" ")}\n`;
        }

        console.log(output);
    }
}

const myGraph = new UndirectedCyclicGraph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
