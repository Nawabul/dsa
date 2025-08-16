
class Edge {
	constructor(source, destination,weight = 1) {
		this.src = source;
		this.dest = destination;
		this.wt = weight;
	}
}

class ArrayOfArrays {

	adjacencyList = [];
	constructor() {
		this.adjacencyList = [];

		// initializeGraph(4); // Example with 4 vertices
		this.initializeGraph(7); // Example with 4 vertices
		// // printVerticNeighbors(2); // Example to print neighbors of vertex 2
		// this.printVerticNeighbors(2); // Example to print neighbors of vertex 2
		// this.printVerticNeighbors(1); // Example to print neighbors of vertex 1
		// this.bfs(); // Example to perform BFS starting from vertex 0
		const visited = new Set();
		this.dfs(0, visited); // Example to perform DFS starting from vertex 0
	}

	createGraph(vertices){
		for (let i = 0; i < vertices; i++) {
			this.adjacencyList[i] = [];
		}

		
	}


	initializeGraph(vertices) {
		this.createGraph(vertices);
		this.adjacencyList[0].push(new Edge(0, 1));
		this.adjacencyList[0].push(new Edge(0, 2));
		this.adjacencyList[1].push(new Edge(1, 0));
		this.adjacencyList[1].push(new Edge(1, 3));
		this.adjacencyList[2].push(new Edge(2, 0));
		this.adjacencyList[2].push(new Edge(2, 3));
		this.adjacencyList[3].push(new Edge(3, 1));
		this.adjacencyList[3].push(new Edge(3, 4));
		this.adjacencyList[3].push(new Edge(3, 5));
		this.adjacencyList[4].push(new Edge(4, 2));
		this.adjacencyList[4].push(new Edge(4, 3));
		this.adjacencyList[5].push(new Edge(5, 3));
		this.adjacencyList[5].push(new Edge(5, 4));
		this.adjacencyList[5].push(new Edge(5, 6));
		this.adjacencyList[6].push(new Edge(6, 5));
	
	}

	printVerticNeighbors(vertex) {

		const neighbors = this.adjacencyList[vertex];
		const length = neighbors.length;
		for ( let i =0 ; i<length;i++) {
			const edge = neighbors[i];
			console.log(`Vertex ${vertex} is connected to Vertex ${edge.dest} with weight ${edge.wt}`);
		}
	
	}


	bfs(){
		// Implement BFS logic here
		const visited = new Set();
		const queue = [];
		const startVertex = 0; // Starting from vertex 0
		queue.push(startVertex);
		const graph = this.adjacencyList;
		while(queue.length >0){
			const currentVertex = queue.shift();

			// If the vertex has already been visited, skip it
			if(visited.has(currentVertex)) {
				continue;
			}
			// Mark the current vertex as visited
			visited.add(currentVertex)
			console.log(`Visited vertex: ${currentVertex}`);
			// Get the neighbors of the current vertex
			const neighbors = graph[currentVertex];
			// Iterate through the neighbors and add them to the queue
			for (let i = 0; i < neighbors.length; i++) {
				const edge = neighbors[i];
				if (!visited.has(edge.dest)) {
					queue.push(edge.dest);
				}
			}
		}
	}

	dfs(vertex,visited){
		
		const graph = this.adjacencyList;
		
			const currentVertex = vertex
			// If the vertex has already been visited, skip it
			if(visited.has(currentVertex)) {
				return;
			}
			// Mark the current vertex as visited
			visited.add(currentVertex);
			console.log(`Visited vertex: ${currentVertex}`);
			// Get the neighbors of the current vertex
			const neighbors = graph[currentVertex];
			// Iterate through the neighbors and add them to the stack
			for (let i = 0; i < neighbors.length; i++) {
				const edge = neighbors[i];
				this.dfs(edge.dest, visited);
			}

		
	}


}

const arrayOfArrays = new ArrayOfArrays();