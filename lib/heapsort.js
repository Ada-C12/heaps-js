const { MinHeap } = require('../lib/minheap');

// This method uses a heap to sort an array.
// Time Complexity:  O(n log n) - first iterate over list (O(n))
// and run .add() for each item (O(log n))
// Space Complexity: O(1) - uses original list param to store sorted list
function heapsort(list) {
  if (list.length <= 1) return list;
  const heap = new MinHeap();
  const length = list.length;
  
  for (let i = 0; i < length; i++) {
    heap.add(list.pop());
  }

  while (!heap.isEmpty()) {
    list.push(heap.remove());
  }

  return list;
}

module.exports = heapsort;
