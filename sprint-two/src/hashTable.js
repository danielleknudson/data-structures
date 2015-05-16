var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// add "Steven", "Seagal"
// getIndexBelowMaxForKey("Steven", this._limit) -> unique key

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  if(!Array.isArray(this._storage[i])){
    this._storage[i] = [];
  }
  this._storage[i].push([key, value]);

  console.log(this._storage);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  return this._storage[i];
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage[i] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
