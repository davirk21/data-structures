var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;
  instance.result = {};
  instance.add = 0;
  instance.subtract = 0;
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.result[this.add] = value;
  this.add++;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  } else {
    this.count;
  }
  var popped = this.result[this.subtract];
  delete this.result[this.subtract];
  this.subtract++;
  return popped;
};

queueMethods.size = function() {
  return this.count;
};

