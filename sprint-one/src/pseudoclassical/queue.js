var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.result = {};

};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(value) {
  
  return this.count++;
  
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    return this.count--;
  } else {
    return this.count;
  }
};