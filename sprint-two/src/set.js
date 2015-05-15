var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this.contains(item)){
    return;
  }
  this._storage.push(item);
};

setPrototype.contains = function(item){
  for (var i = 0; i < this._storage.length; i++){
    if (this._storage[i] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  var result = [];
  for (var i = 0; i < this._storage.length; i++){
    if (this._storage[i] !== item){
      result.push(item);
    }
  }
  this._storage = result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
