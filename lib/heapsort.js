const { MinHeap } = require('../lib/minheap');
// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?
function heapsort(list) {
  if (list.length <= 1) return list;

  const heap = new MinHeap();
  list.forEach(item => {
    heap.add(item)
  })
  for (let i = 0; i < list.length; i++) {
    list[i] = heap.remove();
  }
  return list;
}

module.exports = heapsort;
