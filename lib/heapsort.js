// const MinHeap = require('./minheap.js')
const { MinHeap } = require('./minheap');
// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?

function heapsort(list) {
  let myHeap = new MinHeap;

  for (let i = 0; i < list.length; i++) {
    myHeap.add(list[i]);  
  }

  let result = [];
  while (!myHeap.isEmpty()) {
    let node = myHeap.remove();
    result.push(node)
  }

  return result;
};

module.exports = heapsort;

// console.log(heapsort([5, 27, 3, 16, -50])); 