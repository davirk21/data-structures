var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.count = 0;
  instance.storage = {};
  
  // instance.push = stackMethods.push;
  // instance.pop = stackMethods.pop; //barrow methods
  // instance.size = stackMethods.size;

  _.extend(instance, stackMethods);
  
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
  } else {
    this.count;
  }
  var popped = this.storage[this.count];
  delete this.storage[this.count];
  return popped;
};

stackMethods.size = function() {
  return this.count;
}; //method to delegate fallback methods

console.log(stackMethods);