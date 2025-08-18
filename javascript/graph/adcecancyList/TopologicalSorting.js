class Edge {
  constructor(source, destination, weight = 1) {
    this.src = source;
    this.dest = destination;
    this.wt = weight;
  }
}

class TopologicalSorting {

	adjacencyList = [];
	constructor() {
		this.adjacencyList = [];

		// initializeGraph(4); // Example with 4 vertices
		this.initializeGraph(6); // Example with 4 vertices
	
		this.topSort(this.adjacencyList)
	}

	createGraph(vertices){
		for (let i = 0; i < vertices; i++) {
			this.adjacencyList[i] = [];
		}

		
	}


	initializeGraph(vertices) {
		this.createGraph(vertices);
	
		(this.adjacencyList[5] ??= []).push(new Edge(5, 2));
		(this.adjacencyList[5] ??= []).push(new Edge(5, 0));
		(this.adjacencyList[4] ??= []).push(new Edge(4, 0));
		(this.adjacencyList[2] ??= []).push(new Edge(2, 3));
		(this.adjacencyList[3] ??= []).push(new Edge(3, 1));

	
	}

	topSortDfs(graph,cur,visited,stack){
		visited[cur] = true;
		
		const neighbors = graph[cur]
		for( let neighbor of neighbors){
			if(!visited[neighbor.dest]) {
				this.topSortDfs(graph,neighbor.dest,visited,stack)
			}
		}

		stack.push(cur);
	}


	topSort(graph){
		const visited = new Array(graph.length).fill(false);
		const stack = [];
		for(let i = 0; i<graph.length;i++){
			if(!visited[i]) {
				this.topSortDfs(graph,i,visited,stack)
			}
		}

		console.log('Topology Sorted path : ',stack.reverse().join('->'));
	}






}
new TopologicalSorting();