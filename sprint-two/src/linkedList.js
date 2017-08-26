 
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  


  list.addToTail = function(value) {
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      var place = this.head;
      while (place.next !== null) {
        place = place.next;
      }
      
      place.next = Node(value);
      this.tail = place.next;
    }
    
  };

  list.removeHead = function() {
      //head will equal the next value of head;
    var remove = this.head.value;
    this.head = this.head.next;
    return remove;

  };

  list.contains = function(target) {
    var place = this.head;
    
    var test = function(head, num) {
      if (head.value === num) {
        return true;
      } else if (head.next !== null) {
        return test(head.next, num);
      }
      return false;
    };
    
    return test(place, target);
    
    // var helper = function (place, target) {
    //   if (place.value === target) {
    //     return true;
    //   } else if (place.next !== null)  {
    //     return helper(place.next, target);       
    //   }
    //   return false;
    // };  

    // return helper(place, target);
  
    // while (place.next !== null) {
    //   if (place.value === target) {
    //     return true;
    //   } else {
    //     place = place.next;
    //   }
    // }
    // if (place.value === target) {
    //   return true;
    // }
    // return false;

    // if (place.value === target){
    //   return value;  
    // }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
