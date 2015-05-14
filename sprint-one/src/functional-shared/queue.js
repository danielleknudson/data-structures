var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  _.extend(storage, queueMethods);
  storage.count = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  var result = this[0];

  if (this.count > 0) {
    for (var i = 0; i < this.count; i++) {
      this[i - 1] = this[i];
    }
    delete this[-1];
    this.count--;
  }

  return result;
};

queueMethods.size = function(){
  return this.count;
};
