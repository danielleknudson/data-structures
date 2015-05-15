// var Tree = function(value){
//   var newTree = {};
//   _.extend(newTree, treeMethods);
//   newTree.value = value;

//   // your code here
//   newTree.children = [];  // fix me

//   return newTree;
// };



// var treeMethods = {};

// treeMethods.addChild = function(value){
//   var node = {value: value, children: [], parent: this};
//   _.extend(node, treeMethods);

//   this.children.push(node);
// };

// // treeMethods.contains = function(target){
// //   var wasFound = false;

// //   var traverseTree = function(start){
// //     for(var i=0; i<start.length; i++){
// //       if(start[i].value === target){
// //         wasFound = true;
// //       }
// //       if(start[i].children.length>0){
// //         traverseTree(start[i].children);
// //       }

// //     }
// //   };

// //   traverseTree(this.children);
// //   return wasFound;
// // };



// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

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
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++){
    if (this.children[i].contains(target)){
      return true;
    }
  }

  return false;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


