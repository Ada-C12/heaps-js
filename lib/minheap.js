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
  // Time Complexity: O(log n), if we include the heapUp helper function
  // Space Complexity: O(log n), because of the recursive heapUp stack
  add(key, value = key) {
    this.store.push(new HeapNode(key, value));
    if (this.store.length === 1) {
      return;
    } else {
      this.heapUp(this.store.length - 1)
    }
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
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
  // Time complexity: O(1) of course!
  // Space complexity: O(1). never felt more confident with space complexity.
  isEmpty() {
    return this.store.length === 0
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n)
  // Space complexity: O(log n)
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
  // time complexity: O(log n)
  // space complexity: O(log n), because of the recursive stack
  heapDown(index) {

    // to shorten code lines instead of writing out 'this.store' every time
    const s = this.store;

    if (index >= s.length) return;

    let leftChild = index * 2 + 1
    let rightChild = index * 2 + 2

    // return if there is no left child node
    if (s[leftChild] === undefined) {
      return;
    }

    // find smaller child node between left & right
    let minChild = rightChild;
    if (s[rightChild] === undefined || s[leftChild].key <= s[rightChild].key) minChild = leftChild

    // swap parent with smaller child
    if (s[minChild].key < s[index].key) {
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
