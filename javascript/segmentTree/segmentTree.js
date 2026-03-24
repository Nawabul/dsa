class SegmentTree {
  arr = [];
  right = 0;
  constructor(arr) {
    const length = arr.length;
    this.right = length - 1;
    this.buildTree(0, 0, length - 1, arr);
  }

  getRight() {
    return this.right;
  }
  size() {
    return this.arr.length;
  }

  buildTree(node, left, right, arr) {
    if (left == right) {
      this.arr[node] = arr[left];
      return;
    }

    const mid = (left + right) >> 1;

    this.buildTree(2 * node + 1, left, mid, arr);
    this.buildTree(2 * node + 2, mid + 1, right, arr);

    // sum
    this.arr[node] = this.arr[2 * node + 1] + this.arr[2 * node + 2];
  }

  // update query
  updateQuery(idx, value) {
    this.processUpdateQuery(idx, 0, value, 0, this.getRight());
  }

  processUpdateQuery(idx, node, value, left, right) {
    if (left == right) {
      this.arr[node] = value;
      return;
    }

    const mid = (left + right) >> 1;

    if (idx <= mid) {
      this.processUpdateQuery(idx, 2 * node + 1, value, left, mid);
    } else {
      this.processUpdateQuery(idx, 2 * node + 2, value, mid + 1, right);
    }

    // sum
    this.arr[node] = this.arr[2 * node + 1] + this.arr[2 * node + 2];
  }
}

const tree = new SegmentTree([3, 1, 2, 7]);

// update
tree.updateQuery(1, 2);

console.log("Node : ", tree.arr);
