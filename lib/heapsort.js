const { MinHeap } = require('../lib/minheap');
// This method uses a heap to sort an array.
// Time Complexity:  O(n log n) - iterating over list (n) while running .add()/.remove() (both log n) 
// Space Complexity: O(n), where n is length of list

function heapsort(list) {
  if (list.length <= 1) return list;

  const heap = new MinHeap();

  list.forEach(item => {
    heap.add(item)
  })

  for (let i = 0; i < list.length; i++) {
    // rewriting the original list ♻️
    list[i] = heap.remove();
  }

  return list;
}

module.exports = heapsort;
