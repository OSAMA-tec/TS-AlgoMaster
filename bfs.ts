class Graph{
    private adjacencyList: Map<number,number[]>;
    constructor (){
        this.adjacencyList=new Map()
    }


    addVertex(vertex:number){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[])
            console.log(this.adjacencyList.set(vertex,[]))
        }
    }
    addEdge(vertex1:number,vertex2:number){
        this.adjacencyList.get(vertex1)?.push(vertex2)
        this.adjacencyList.get(vertex2)?.push(vertex1)
    }
}


const graph = new Graph
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);