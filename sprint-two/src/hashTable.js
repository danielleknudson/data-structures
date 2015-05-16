// var HashTable = function(){
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// // add "Steven", "Seagal"
// // getIndexBelowMaxForKey("Steven", this._limit) -> unique key

// HashTable.prototype.insert = function(key, value){
//   var i = getIndexBelowMaxForKey(key, this._limit);
//   if(!Array.isArray(this._storage[i])){
//     this._storage[i] = [];
//   }
//   this._storage[i].push([key, value]);

//   console.log(this._storage);
// };

// HashTable.prototype.retrieve = function(key){
//   var i = getIndexBelowMaxForKey(key, this._limit);

//   for(var j =0; j<this._storage[i].length; j++){
//     if(this._storage[i][j][0] === key){
//       return this._storage[i][j][1];
//     }
//   }
// };

// HashTable.prototype.remove = function(key){
//   var i = getIndexBelowMaxForKey(key, this._limit);

//   for (var j = 0; j < this._storage[i].length; j++){
//     if(this._storage[i][j][0] === key){
//       this._storage[i][j][1] = null;
//     }
//   }

// };

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// add "Steven", "Seagal"
// getIndexBelowMaxForKey("Steven", this._limit) -> unique key

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);

  // check if there's an array in the index
  if (!Array.isArray(this._storage.get(i))){
    this._storage.set(i, []);
  }

  this._storage.get(i).push({key: key, value: value});
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var result;
  this._storage.each(function(house, houseIndex){
    if(houseIndex === i){
      for(var j = 0; j < house.length; j++){
        if(house[j].key === key){
          result = house[j].value;
        }
      }
    }
  });
  return result;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage.each(function(house, houseIndex){
    if(houseIndex === i){
      for(var j = 0; j < house.length; j++){
        if(house[j].key === key){
          house[j].value = null;
        }
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
