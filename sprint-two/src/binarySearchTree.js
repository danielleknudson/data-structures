var BinarySearchTree = function(value){
  var tree = {};

  _.extend(tree, treeMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var treeMethods = {};

treeMethods.insert = function(value){

  var traverse = function(node){
    if(value < node.value){
      if(node.left === null){
        node.left = BinarySearchTree(value);
      }else{
        node = node.left
        traverse(node);
      }
    }else{
      if(node.right === null){
        node.right = BinarySearchTree(value);
      }else{
        node = node.right
        traverse(node);
      }
    }
  };

  traverse(this);
};

treeMethods.contains = function(value){

  var wasFound = false;

  var traverse = function(node){

    if (node.value === value){
      wasFound = true;
    }

    if (value < node.value){
      if (node.left === null){
        return;
      }
      traverse(node.left);
    } else {
      if (node.right === null){
        return;
      }
      traverse(node.right)
    }

  };

  traverse(this);

  return wasFound;

};

treeMethods.depthFirstLog = function(cb){

  var traverse = function(node){
    // first thing, apply callback
    cb(node.value);

    if (node.left !== null){
      traverse(node.left);
    }

    if (node.right !== null){
      traverse(node.right);
    }

  };

  traverse(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
