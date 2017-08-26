var Tree = function(value) {
  var newTree = {};
  newTree.value = value; 

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //pudh add child into .children array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  //create a helper function to recurse contains
  var test = function (node, target) { 
      // if the value of tree equals target...
    if (node.value === target) {
        //return true;
      return true;

      // //else if the first children does exist...
      // } else if (node.children.length > 0) {
      //     //run .contains for tree.children
      //   _.filter(node.children, function(child) {
      //     if (test(child, target)) {
      //       return true;
      //     }
      // } 

    } else if (node.children[0] !== undefined) {
      for (var i = 0; i < node.children.length; i++) {
        if (test(node.children[i], target)) {
          return true;
        }
      }
    }
       
    return false;   
  };

  return test(this, target);
};






/*
 * Complexity: What is the time complexity of the above functions?
 */
