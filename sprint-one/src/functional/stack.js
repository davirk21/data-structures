var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var place = 0;
  var hold = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[place] = value;
    place++;
    console.log(storage);
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
    } else {
      size;
    }
    var popped = storage[hold];
    delete storage[hold];
    hold++;
    return popped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
