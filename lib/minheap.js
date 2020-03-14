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
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  add(key, value = key) {
    const newNode = new HeapNode(key, value);
    this.store.push(newNode);

    if (this.store.length === 1) {
      return;
    } else {
      return this.heapUp(this.store.length - 1);
    }
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    throw new Error("Method not implemented yet...");
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
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return this.store.length == 0;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n)
  // Space complexity: O(log n)
  heapUp(index) {
    let parent = Math.floor((index - 1)/2);
    if (parent < 1) parent = 0;

    if (this.store[parent].key > this.store[index].key) {
      this.swap(parent, index);
      return this.heapUp(parent);
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    throw new Error("Method not implemented yet...");
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
