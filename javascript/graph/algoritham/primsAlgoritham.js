import Edge from "../utils/edge.js"
import PriorityQueue from "../utils/priorityQueue.js"

class Pair {

	constructor(dest,cost){
		this.dest = dest
		this.cost = cost
	}
}



class Prims {
	  adjacencyList = [];
  constructor() {
    this.adjacencyList = [];
    const vertex = 6;
    this.initializeGraph(vertex); // Example with 4 vertices
    this.primsAlgoritham(this.adjacencyList, 0);
  }

  createGraph(vertices) {
    for (let i = 0; i < vertices; i++) {
      this.adjacencyList[i] = [];
    }
  }

  initializeGraph(vertices) {
    this.createGraph(vertices);
    this.adjacencyList[0].push(new Edge(0, 1, 10));
    this.adjacencyList[0].push(new Edge(0, 2, 15));
    this.adjacencyList[0].push(new Edge(0, 3, 30));

    this.adjacencyList[1].push(new Edge(1, 0, 10));
    this.adjacencyList[1].push(new Edge(1, 3, 40));

    this.adjacencyList[2].push(new Edge(2, 0, 15));
    this.adjacencyList[2].push(new Edge(2, 3, 50));

    this.adjacencyList[3].push(new Edge(3, 0, 30));
    this.adjacencyList[3].push(new Edge(3, 1, 40));
    this.adjacencyList[4].push(new Edge(4, 2, 50));
  }

  compare(a, b) {
    return a.cost - b.cost;
  }


     primsAlgoritham(graph,src){

		const visited = new Set();
		const pq = new PriorityQueue(this.compare)
		let totalCost = 0;
		// initail proint cost
		pq.enqueue(new Pair(src,0));

		while(!pq.isEmpty()){

			const current = pq.dequeue();

			if(!visited.has(current.dest)){

				visited.add(current.dest)
				const cost = current.cost;
				totalCost += cost
				const neighbors = graph[current.dest]

				for(const neighbor of neighbors){

					const dest = neighbor.dest
					const wt = neighbor.wt
					if(!visited.has(dest)){
						pq.enqueue(new Pair(dest,wt));
					}
				}
			}

		}

		console.log("MST total cost : ",totalCost)

	 }
}

new Prims();