var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size ++;
  };
  

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    } else {
      size;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
