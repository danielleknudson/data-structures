

var Graph = function(){
  this.vertices = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.vertices.push(node);
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.vertices.length; i++){
    if (this.vertices[i] === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var result = [];

  for (var i = 0; i < this.vertices.length; i++){
    if (this.vertices[i] !== node){
      result.push(this.vertices[i]);
    }
  }

  this.vertices = result;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.edges.length; i++){
    if((this.edges[i].indexOf(fromNode) > -1) && (this.edges[i].indexOf(toNode) > -1)){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var result = [];

  for (var i = 0; i < this.edges.length; i++){
    if (!((this.edges[i].indexOf(fromNode) > -1) && (this.edges[i].indexOf(toNode) > -1))){
      result.push(this.edges[i]);
    }
  }

  this.edges = result;
};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.vertices.length; i++){
    cb(this.vertices[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



