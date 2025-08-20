import Edge from "./../utils/edge.js"



class BellmanFord {

	 adjacencyList = [];
  constructor() {
    this.adjacencyList = [];
    const vertex = 6;
    this.initializeGraph(vertex); // Example with 6 vertices
    this.bellmanFord(this.adjacencyList, 0, vertex);
  }

  createGraph(vertices) {
    for (let i = 0; i < vertices; i++) {
      this.adjacencyList[i] = [];
    }
  }

  initializeGraph(vertices) {
    this.createGraph(vertices);
    this.adjacencyList[0].push(new Edge(0, 1, 2));
    this.adjacencyList[0].push(new Edge(0, 2, 4));
    this.adjacencyList[1].push(new Edge(1, 2, 1));
    this.adjacencyList[1].push(new Edge(1, 3, 7));
    this.adjacencyList[2].push(new Edge(2, 4, 3));
    this.adjacencyList[3].push(new Edge(3, 4, 2));
    this.adjacencyList[3].push(new Edge(3, 5, 1));
    this.adjacencyList[4].push(new Edge(4, 5, 5));
  }


   bellmanFord(graph,src,vertex){

	const dist = new Array(vertex).fill(Number.MAX_SAFE_INTEGER)
	dist[src] = 0;

	for(let k = 0; k<vertex-1;k++){

		for(let i = 0; i<vertex;i++){
			const neighbors = graph[i];

			for(const neighbor of neighbors){

				const u = neighbor.src
				const v = neighbor.dest 
				const wt = neighbor.wt;

				if(dist[u] != Number.MAX_SAFE_INTEGER && dist[u] + wt < dist[v]){
					dist[v] = dist[u] + wt
				}
			}
		}
	}


	// detect cyble
	for(let i = 0; i<vertex;i++){
			const neighbors = graph[i];

			for(const neighbor of neighbors){

				const u = neighbor.src
				const v = neighbor.dest 
				const wt = neighbor.wt;

				if(dist[u] != Number.MAX_SAFE_INTEGER && dist[u] + wt < dist[v]){
					console.log('There is negative cycle in graphp');
					return 
				}
			}
		}

	console.log('Bellman Distance : ',dist);
   }


}


new BellmanFord();