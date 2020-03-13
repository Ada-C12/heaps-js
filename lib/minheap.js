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
    let newNode = new HeapNode(key, value);
    this.store.push(newNode);

    let current = this.store.length - 1;
    this.heapUp(current);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    let result;

    if (this.store.length === 0) {
      return result
    }

    this.swap(0, this.store.length - 1);
    result = this.store.pop();
    this.heapDown(0)

    return result.value;
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

    let parentIndex = index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;

    while( index > 0 && (this.store[parentIndex].key > this.store[index].key)) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    // console.log(this.store.length)

    let leftChild = index * 2 + 1;
    let rightChild = index * 2 + 2;

    while ( this.store[leftChild] || this.store[rightChild]) {
      if (this.store[leftChild] === undefined) {
        if (this.store[rightChild].key < this.store[index].key) {
          this.swap(index, rightChild);
        }
          index = rightChild;
      } else if (this.store[rightChild] === undefined) {
        if (this.store[leftChild].key < this.store[index].key) {
          this.swap(index, leftChild);
        }
          index = leftChild;
      }else if (this.store[leftChild].key < this.store[rightChild].key) {
        this.swap(index, leftChild);
        index = leftChild;
      } else {
        this.swap(index, rightChild);
        index = rightChild;
      }

      leftChild = index * 2 + 1;
      rightChild = index * 2 + 2;
    }
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {MinHeap};


// let myHeap = new MinHeap;
// console.log(myHeap.isEmpty())
// myHeap.add(6);
// console.log(myHeap)
// myHeap.add(4);
// // console.log(myHeap)
// myHeap.add(5);
// myHeap.add(3); 
// console.log(myHeap)
// myHeap.remove();
// console.log(myHeap)
// console.log(myHeap.isEmpty())