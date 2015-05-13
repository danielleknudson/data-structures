// var Queue = function(){
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   someInstance.enqueue = function(value){
//     var key = someInstance.size();
//     storage[key] = value;
//   };

//   someInstance.dequeue = function(){
//     var result = storage[0];
//     var temp = {};
//     delete storage[0];
//     for(var i = 0; i<someInstance.size(); i++){
//       temp[i] = storage[i + 1];
//     }
//     storage = temp;
//     return result;
//   };

//   someInstance.size = function(){
//     var size = 0;
//     for(var key in storage){
//       size++;
//     }
//     return size;
//   };

//   return someInstance;
// };

var Queue = function(){
  var someInstance = {};

  var storage = {};
  var size = 0;

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(value){
    var result = storage[0];
    if (size > 0) {
      for(var i = 0; i<size; i++){
        storage[i - 1] = storage[i];
      }
      delete storage[-1];
      size--;
    }
    return result;
  };

  someInstance.size = function(value){
    return size;
  };

  return someInstance;
};
