var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var add = 0;
  var subtract = 0;
  someInstance.enqueue = function(value) {
    storage[add] = value;
    size ++;
    add ++;
  };
  

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    } else {
      size;
    }
    var popped = storage[subtract];
    delete storage[subtract];
    subtract++;
    return popped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
