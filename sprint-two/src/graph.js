

var Graph = function(){
  this.vertices = [];
  this.edges = [];
};

// O(1)
Graph.prototype.addNode = function(node){
  this.vertices.push(node);
};

// O(n)
Graph.prototype.contains = function(node){
  for (var i = 0; i < this.vertices.length; i++){
    if (this.vertices[i] === node){
      return true;
    }
  }
  return false;
};

// O(n)
Graph.prototype.removeNode = function(node){

  for (var i = 0; i < this.vertices.length; i++){
    if (this.vertices[i] === node){
      this.vertices.splice(i, 1);
    }
  }
};

// O(n)
Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.edges.length; i++){
    if((this.edges[i].indexOf(fromNode) > -1) && (this.edges[i].indexOf(toNode) > -1)){
      return true;
    }
  }
  return false;
};

// O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

// O(n)
Graph.prototype.removeEdge = function(fromNode, toNode){

  for (var i = 0; i < this.edges.length; i++){
    if ((this.edges[i].indexOf(fromNode) > -1) && (this.edges[i].indexOf(toNode) > -1)){
      this.edges.splice(i, 1);
    }
  }

};

// O(n)
Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.vertices.length; i++){
    cb(this.vertices[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



