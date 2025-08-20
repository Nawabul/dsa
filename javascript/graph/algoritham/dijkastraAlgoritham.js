import Edge from "../utils/edge.js";
import PriorityQueue from "../utils/priorityQueue.js";

class Pair {
  constructor(src, dist) {
    this.src = src;
    this.distance = dist;
  }
}



class Dijkastra {
  adjacencyList = [];
  constructor() {
    this.adjacencyList = [];
    const vertex = 6;
    this.initializeGraph(vertex); // Example with 4 vertices
    this.dijkastra(this.adjacencyList, 0, vertex);
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

  compare(a, b) {
    return a.distance - b.distance;
  }

  dijkastra(graph, src, vertex) {
    const dist = new Array(vertex).fill(Number.MAX_SAFE_INTEGER);
    dist[src] = 0;

    const pq = new PriorityQueue(this.compare);
    const visited = new Set();
    pq.enqueue(new Pair(src, 0));

    while (!pq.isEmpty()) {
      const current = pq.dequeue();

      if (!visited.has(current.src)) {
        visited.add(current.src);

        const neighbors = graph[current.src];

        for (const neighbor of neighbors) {
          const u = neighbor.src;
          const v = neighbor.dest;
          const wt = neighbor.wt;

          if (dist[v] > dist[u] + wt) {
            dist[v] = dist[u] + wt;
            pq.enqueue(new Pair(v, dist[v]));
          }
        }
      }
    }

    // print
    console.log("Distance : ", dist);
  }
}

new Dijkastra();





