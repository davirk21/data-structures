var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.result = {};
  this.add = 0;
  this.sub = 0;

};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(value) {
  this.result[this.add] = value;
  this.add++;
  return this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  } else {
    this.count;
  }
  var popped = this.result[this.sub];
  delete this.result[this.sub];
  this.sub++;
  return popped;
};