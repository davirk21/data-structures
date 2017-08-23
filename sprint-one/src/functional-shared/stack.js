var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  storage.count = 0;
  
  // storage.push = stackMethods.push;
  // storage.pop = stackMethods.pop; //barrow methods
  // storage.size = stackMethods.size;

  _.extend(storage, stackMethods);
  
  return storage;
};

var stackMethods = {};

stackMethods.push = function() {
  this.count++;
};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return this.count;
}; //method to delegate fallback methods

console.log(stackMethods);