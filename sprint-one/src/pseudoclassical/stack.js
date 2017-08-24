var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.result = {};

};



Stack.prototype.push = function(value) {
  this.result[this.count] = value;
  return this.count++;
};


Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.count--;
  } else {
    this.count;
  }
  var popped = this.result[this.count];
  delete this.result[this.count];
  return popped;
};

Stack.prototype.size = function() {
  return this.count;
};





