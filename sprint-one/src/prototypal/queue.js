var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count = 0;


  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function() {
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  } else {
    this.count;
  }
};

queueMethods.size = function() {
  return this.count;
};

