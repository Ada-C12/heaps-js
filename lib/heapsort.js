const { MinHeap } = require('./minheap');

// This method uses a heap to sort an array.
// Time Complexity: O(logn)
// Space Complexity: O(n)
function heapsort(list) {
  const heap = new MinHeap();
  const out = [];
  let i = 0;

  list.forEach(x => heap.add(x));
  
  while (i < list.length) {
    out[i] = heap.remove();
    i++;
  }
  return out;
};

module.exports = heapsort;
