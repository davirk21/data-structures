var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(stackMethods);
  storage.count = 0;
  storage.result = {};

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.result[this.count] = value;
  this.count++;
};

stackMethods.pop = function() { 
  if (this.count > 0) {
    this.count--;
  } else {
    this.count;
  }
  var popped = this.result[this.count];
  delete this.result[this.count];
  return popped;
};

stackMethods.size = function() {
  return this.count;
};

