var BinarySearchTree = function(value) {

  var instance = {};

  // instance.root = null;
  // instance.head = null;
  // instance.current = null;
  instance.value = value;
  instance.left = null;
  instance.right = null;
  

  _.extend(instance, treeMethod);

  return instance;
};

var treeMethod = {};

treeMethod.insert = function(value) {
  
  this.current = {value: value, left: null, right: null};
  

  var helper = function (current, insert) { 
      // if value in insert node < current node && if left is null 
        if (insert.value < current.value && current.left === null) {
          // insert insert node into left
          current.left = insert;
        //else if value in insert node < current node)
        } else if ( insert.value < current.value) {
          //run recursion with left node, and insert insert node
          helper(current.left, insert);   
        //if vaule in insert node is > current node && if right is null
        } else if (insert.value > current.value && current.right === null) {
          //insert insert node into right
          current.right = insert;
        //else if value in insert node > current node
        } else if ( insert.value > current.value) {
          //run recursion with right node, and insert insert node
          helper(current.right, insert);   
        }
  };
  helper(this, this.current);

};

treeMethod.contains = function(value) {

  var testing = function(current, search) {
    //if current value is equal to search
    if (current.value === search) { 
      return true;
    } else if (current.value > search && current.left === null) { 
      //else if current value is greater than search AND current left is equal to null
      return false; 
    } else if (current.value > search) {
    //else if current value is greater than search
      return testing(current.left, search);//test the left of current and search
    } else if (current.value < search && current.right === null) {
    //else if current value is less than search AND current right is equal to null
      return false;
    } else if (current.value < search) {
    // else if current value is less than search
      return testing(current.right, search); //test the right of current and search
    }

  };
  return testing(this, value);

};

treeMethod.depthFirstLog = function(cb) {


  var array = [];
  
  var test = function (node) {
    array.push(node.value);
    if (node.left !== null) {
      test(node.left);
    }
    if (node.right !== null) {
      test(node.right);
    }
  };
  
  test(this);

  for (var i = 0; i < array.length; i++) {
    cb(array[i]);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
