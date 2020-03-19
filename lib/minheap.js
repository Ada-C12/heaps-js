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
  // Time Complexity: O(logn)
  // Space Complexity: O(1)
  add(key, value = key) {
    const node = new HeapNode(key, value);
    const i = this.store.push(node) - 1;
    this.heapUp(i);
    // console.log(this.store);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(logn)
  // Space Complexity: O(1)
  remove() {
    if (this.isEmpty()) return;
    this.swap(0, this.store.length - 1);
    const { value } = this.store.pop();
    if (!this.isEmpty()) this.heapDown(0);
    return value;
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
    return this.store.length === 0;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(logn)
  // Space complexity: O(1)
  heapUp(index) {
    if (index <= 0) return;
    
    const parentIndex = this.parentIndex(index);
    if (this.store[index].key < this.store[parentIndex].key) {
      this.swap(index, parentIndex);
      this.heapUp(parentIndex);
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    const [leftIndex, rightIndex] = this.children(index);
    
    if (!leftIndex && !rightIndex) return;

    let min;
    rightIndex ? min = rightIndex : min = leftIndex;
    if ((leftIndex && rightIndex) &&
      this.store[leftIndex].key < this.store[rightIndex].key) {
        min = leftIndex;
    }

    if (this.store[index].key > this.store[min].key) {
      this.swap(index, min);
      this.heapDown(min);
    }
  }

  children(index) {
    let i = index * 2 + 1, j;
    if (i >= this.store.length) i = null;
    if (i && i < this.store.length - 1) j = i + 1;
    return [i, j];
  }

  parentIndex(index) {
    const i = Math.floor((index - 1) / 2);
    return i < 0 ? 0 : i;
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
