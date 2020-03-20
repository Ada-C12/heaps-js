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
    this.store.push(new HeapNode(key, value));

    if (this.store.length === 1) {
      return;
    } else {
      return this.heapUp(this.store.length - 1);
    }
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n)
  // Space Complexity: O(log n)
  remove() {
    if (this.isEmpty()) return;

    this.swap(0, this.store.length - 1);
    const elem = this.store.pop();
    if (!this.isEmpty()) this.heapDown(0);

    return elem.value;
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
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild >= this.store.length || rightChild >= this.store.length) return;

    if (this.store[leftChild].key > this.store[index].key
        && this.store[rightChild].key > this.store[index].key) {
          return;
    } else if (this.store[leftChild].key < this.store[rightChild].key) {
      this.swap(leftChild, index);
      return this.heapDown(leftChild);
    } else {
      this.swap(rightChild, index);
      return this.heapDown(rightChild);
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
