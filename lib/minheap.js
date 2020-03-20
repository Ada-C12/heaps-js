class HeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MinHeap {
  constructor() {
    this.store = [];
  }

  // This method adds a HeapNode instance to the heap
  // Time Complexity: ?
  // Space Complexity: ?
  add(key, value = key) {
    this.store.push(new HeapNode(key, value));
    if (this.store.length === 1) {
      return
    } else {
      this.heapUp(this.store.length - 1)
    }
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    if (this.isEmpty()) return;
    this.swap(0, this.store.length - 1)
    const removedNode = this.store.pop();
    this.heapDown(0);
    return removedNode.value;
  }


  // Used for Testing
  toString() {
    if (!this.store.length) {
      return "[]";
    }

    const values = this.store.map(item => item.value);
    const output = `[${values.join(', ')}]`;
    return output;
  }

  // This method returns true if the heap is empty
  // Time complexity: ?
  // Space complexity: ?
  isEmpty() {
    return this.store.length === 0
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: ?
  // Space complexity: ?
  heapUp(index) {

    const parent = Math.floor((index - 1) / 2);
    if (this.store[parent].key > this.store[index].key) {
      this.swap(parent, index);
      // heap up until we hit the root
      if (parent > 0) this.heapUp(parent);
    } 

  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {

    // got tired of writing out this.store
    const store = this.store;

    if (index >= store.length) return;

    let leftChild = index * 2 + 1
    let rightChild = index * 2 + 2

    // return if there is no left child node
    if (store[leftChild] === undefined) {
      return;
    }

    // find smaller child node between left & right
    let minChild = rightChild;
    if (store[rightChild] === undefined || store[leftChild].key <= store[rightChild].key) minChild = leftChild

    // swap parent with smaller child
    if (store[minChild].key < store[index].key) {
      this.swap(minChild, index)
      this.heapDown(minChild);
    } 
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap
};
