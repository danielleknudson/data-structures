var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.collection = {};
  // let's extend the storage object to contain our push, pop, and size methods
  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

// pop, push, size

stackMethods.push = function(value){
  // let's add this.collection
  var key = this.size();
  this.collection[key] = value;
};

stackMethods.pop = function(){
  var result = this.collection[this.size() - 1];
  delete this.collection[this.size() - 1];
  return result;
};

stackMethods.size = function(){
  var size = 0;

  for (var key in this.collection) {
    size++;
  }

  return size;
  // return this.size;
};
