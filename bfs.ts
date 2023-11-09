class Graph{
    private adjacencyList: Map<number,number[]>;
    constructor (){
        this.adjacencyList=new Map()
    }


    addVertex(vertex:number){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[])
            // console.log(this.adjacencyList.set(vertex,[]))
        }
    }
    addEdge(vertex1:number,vertex2:number){
        this.adjacencyList.get(vertex1)?.push(vertex2)
        // console.log(this.adjacencyList.get(vertex1))
        this.adjacencyList.get(vertex2)?.push(vertex1)
        // console.log(this.adjacencyList.get(vertex2))
    }

    bfs(startingVertix:number){
        const visited:Map<number,boolean>=new Map
        const queue:number[]=[]

        visited.set(startingVertix,true);
        queue.push(startingVertix)
        
        while(queue.length!==0){
            console.log("queue  ",queue)
            const currentVertex=queue.shift()!;
            console.log("current vertex  ",currentVertex)
            const neighbors=this.adjacencyList.get(currentVertex)||[];
            console.log("neigbors ", neighbors)
            for(const neighbor of neighbors){
                if(!visited.get(neighbor)){
                    visited.set(neighbor,true)
                    queue.push(neighbor)
                }
            }
        }
    }
}


const graph = new Graph

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