var BinarySearchTree = function(value) {

  var instance = {};

  instance.tree = {};
  instance.head = null;
  
  _.extend(instance, treeMethod);

  return instance;
};

var treeMethod = {};

treeMethod.insert = function(value) {
  // if (!this.tree) {
  //   this.tree[value] = {left: null, right: null};
  //   this.head = value;
  // } else if ((value < this.head && this.head[left] === null) {
  
  this.tree[value] = {left: null, right: null};



};

treeMethod.contains = function(value) {

};

treeMethod.depthFirstLog = function(cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
