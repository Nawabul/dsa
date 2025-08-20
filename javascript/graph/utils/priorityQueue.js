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

module.export =  PriorityQueue;
