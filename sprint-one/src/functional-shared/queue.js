var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  
  instance.count = 0;
  
  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.count++;

};

queueMethods.dequeue = function () {
  if (this.count > 0) {
    this.count--;
  } else {
    this.count;
  }
};

queueMethods.size = function () {
  return this.count;
}; 
