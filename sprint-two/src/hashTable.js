

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
}; 

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push([k, v]);
  } else {
    var storage = this._storage.get(index);
    var truth = false;
    var place = 0;
    for (var i = 0; i < storage.length; i++) {
      var tuple = storage[i];
      if (tuple[0] === k)  {
        truth = true;
        place = i
      }
    }
    if(truth) {
      this._storage.get(index).splice(place, 1);
      this._storage.get(index).push([k, v]);
    } else {
      this._storage.get(index).push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index)
  for (var i = 0; i < storage.length; i++){
    var tuple = storage[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index)
  for (var i = 0; i < storage.length; i++){
    var tuple = storage[i];
    if (tuple[0] === k) {
      this._storage.get(index).splice(i, 1)
    }
  }
  
}; 



/*
 * Complexity: What is the time complexity of the above functions?
 */


