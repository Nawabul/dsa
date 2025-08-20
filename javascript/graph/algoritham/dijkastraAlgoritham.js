class Edge {
  constructor(source, destination, weight = 1) {
    this.src = source;
    this.dest = destination;
    this.wt = weight;
  }
}



class Pair {
  constructor(src, dist) {
    this.src = src;
    this.distance = dist;
  }
}

class PriorityQueue {
  constructor(comparator = (a, b) => a - b, items = []) {
    this._cmp = comparator;     // return < 0 if a has higher priority than b
    this._heap = items.slice();
    if (this._heap.length) this._heapify();
  }

  size() { return this._heap.length; }
  isEmpty() { return this._heap.length === 0; }
  peek() { return this._heap[0]; }
  clear() { this._heap.length = 0; }
  toArray() { return this._heap.slice(); }

  enqueue(value) {
    this._heap.push(value);
    this._siftUp(this._heap.length - 1);
    return this.size();
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const top = this._heap[0];
    const last = this._heap.pop();
    if (!this.isEmpty()) {
      this._heap[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  // ----- private helpers -----
  _heapify() {
    for (let i = (this.size() >> 1) - 1; i >= 0; i--) this._siftDown(i);
  }
  _parent(i) { return (i - 1) >> 1; }
  _left(i) { return (i << 1) + 1; }
  _right(i) { return (i << 1) + 2; }
  _swap(i, j) { [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]]; }
  _higher(i, j) { return this._cmp(this._heap[i], this._heap[j]) < 0; }

  _siftUp(i) {
    while (i > 0) {
      const p = this._parent(i);
      if (!this._higher(i, p)) break;
      this._swap(i, p);
      i = p;
    }
  }

  _siftDown(i) {
    for (;;) {
      const l = this._left(i), r = this._right(i);
      let best = i;
      if (l < this.size() && this._higher(l, best)) best = l;
      if (r < this.size() && this._higher(r, best)) best = r;
      if (best === i) break;
      this._swap(i, best);
      i = best;
    }
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





