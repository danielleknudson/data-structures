var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push({value: value});
};

treeMethods.contains = function(target){
  for(var i = 0; i<this.children.length; i++){
    if(this.children[i].value === target){
      return true;
    }
  }
  return false;

};

var myFamilyHistory = Tree("Our Family History");


/*
 * Complexity: What is the time complexity of the above functions?
 */
