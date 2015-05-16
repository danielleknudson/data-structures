// var LinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value){
//     if(this.head === null && this.tail === null){
//       this.head = Node(value);
//       this.tail = this.head;
//     }else{
//       this.tail.next = Node(value);
//       this.tail = this.tail.next;
//     }
//   };

//   list.removeHead = function(){
//     var result = this.head.value;

//     this.head = this.head.next;

//     return result;
//   };

//   list.contains = function(target){
//     var temp = this.head;
//     while(temp !== null){
//       if (temp.value === target) {
//         return true;
//       }
//       temp = temp.next;
//     }
//     return false;
//   };

//   return list;
// };

// var Node = function(value){
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null && list.tail === null){
      list.head = node;
      list.tail = node;
    }else{
      list.tail.next = node;
      list.tail = node;
    }
  };


  // o(1)
  list.removeHead = function(){
    var result = list.head.value;

    list.head = list.head.next;

    return result;
  };

  // o(n)
  list.contains = function(target){
    var start = list.head;
    while(start !== null){
      if(start.value === target){
        return true;
      }
      start = start.next;
    }
    return false;
  };

  // o(n)
  list.removeNodes = function(target){
    var result;
    var start = list.head;
    var prev = start;

    while (start !== null){
      if (start.value === target){
        result = target;
        prev.next = start.next;
      }
      prev = start;
      start = start.next;
    }
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
