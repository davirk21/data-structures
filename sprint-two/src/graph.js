

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.Edges = [];
  
  
};

// Add a node to the graph, passing in the node's  value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // var found = false;
  // while (this.storage[node] !== null) { 
  //   _.each (this.storage, function(key) {
  //     if (key === node) {
  //       found = true;
  //     } 
  //   });
  //   return found;
  // }
  // return found;
  for (var key in this.storage) {
    if (parseInt(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var key in this.storage) {
    if (parseInt(key) !== node) {
      if (this.hasEdge(parseInt(key), node)) {
        this.removeEdge(parseInt(key), node);
      }
    }
  }

  for (var key in this.storage) {
    if (parseInt(key) === node) {
      delete this.storage[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.storage[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = _.indexOf(this.storage[fromNode], toNode);
  this.storage[fromNode].splice(index, 1);
  var reverse = _.indexOf(this.storage[toNode], fromNode);
  this.storage[toNode].splice(reverse, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(parseInt(key));
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


