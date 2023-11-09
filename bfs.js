var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    Graph.prototype.addVertex = function (vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
            // console.log(this.adjacencyList.set(vertex,[]))
        }
    };
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        var _a, _b;
        (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
        // console.log(this.adjacencyList.get(vertex1))
        (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push(vertex1);
        // console.log(this.adjacencyList.get(vertex2))
    };
    Graph.prototype.bfs = function (startingVertix) {
        var visited = new Map;
        var queue = [];
        visited.set(startingVertix, true);
        queue.push(startingVertix);
        while (queue.length !== 0) {
            console.log("queue  ", queue);
            var currentVertex = queue.shift();
            console.log("current vertex  ", currentVertex);
            var neighbors = this.adjacencyList.get(currentVertex) || [];
            console.log("neigbors ", neighbors);
            for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                var neighbor = neighbors_1[_i];
                if (!visited.get(neighbor)) {
                    visited.set(neighbor, true);
                    queue.push(neighbor);
                }
            }
        }
    };
    return Graph;
}());
var graph = new Graph;
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);
console.log("BFS starting from vertex 2:");
graph.bfs(2);
