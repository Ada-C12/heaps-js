const { MinHeap } = require('../lib/minheap');
// This method uses a heap to sort an array.
// Time Complexity:  O(n log n)
// Space Complexity: O(n) where n is elements in list
function heapsort(list) {
  if (list.length <= 1) return list;

  const heap = new MinHeap();
  const size = list.length

  for(let i = 0; i < size; i++) {
    heap.add(list.pop());
  }

  while (!heap.isEmpty()) {
    list.push(heap.remove());
  }

  return list;
};

module.exports = heapsort;
