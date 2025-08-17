class Edge {
  constructor(source, destination, weight = 1) {
    this.src = source;
    this.dest = destination;
    this.wt = weight;
  }
}

class cycleGraph {
  adjacencyList = [];

  constructor() {
    this.initializeGraph(5);

    const visited = new Set();
    const rec = new Set();
    const isCycle = this.isCycleDirected(1, visited, rec);
    if (isCycle) {
      console.log("Graph contains cycle");
    } else {
      console.log("Graph doesn't contain cycle");
    }
  }

  createGraph(vertices) {
    for (let i = 0; i < vertices; i++) {
      this.adjacencyList[i] = [];
    }
  }

  initializeGraph(vertices) {
    this.createGraph(vertices);
    this.adjacencyList[0].push(new Edge(0, 2));
    this.adjacencyList[1].push(new Edge(1, 0));
    this.adjacencyList[2].push(new Edge(2, 3));
    this.adjacencyList[3].push(new Edge(3, 0));
  }

  isCycleDirected(cur, visited, rec) {
    const graph = this.adjacencyList;

    visited.add(cur);
    rec.add(cur);
    const neighbors = graph[cur];
    for (const neighbor of neighbors) {
      const dest = neighbor.dest;
      if (rec.has(dest)) {
        return true;
      } else if (!visited.has(dest)) {
        if (this.isCycleDirected(dest, visited, rec)) {
          return true;
        }
      }
    }
    rec.delete(cur);
    return false;
  }
}


new cycleGraph();
