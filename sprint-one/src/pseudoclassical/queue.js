var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(){
  var result = this[0];

  if(this.count > 0){
    for(var i = 0; i<this.count; i++){
      this[i - 1] = this[i];
    }
    delete this[-1];
    this.count--;
  }

  return result;
};

Queue.prototype.size = function(){
  return this.count;
};
