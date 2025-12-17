// Graphs - Dijkstra Exercise
// Create a constructor function for a WeightedGraph. 
// It should inherit from the Graph constructor and have all the same methods except for adding an edge. 
// Since weights will now be added with edges, 
// the adjacency list should not only store the nodes which are connected to it but also 
// the corresponding weight of the edge.

// A PriorityQueue has been implemented for you. 
// The PriorityQueue adds the LOWEST priority first (this is helpful for Dijkstra).

// Implement the following method on the WeightedGraph.prototype

// Dijkstra - this function should return an array with two values, 
// the first being the total distance and the second an array of nodes which create the shortest path.

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  numEdges() {
    let total = 0;

    Object.values(this.adjacencyList).forEach(list => {
      total += list.length;
    });

    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
}

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }

  Dijkstra(start, finish) {
    let previous = {};
    let distances = {};
    let nodes = new PriorityQueue();
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
        if(vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }
     
    while(nodes.values.length) {
        smallest = nodes.dequeue().val;
        if (smallest === finish) {
            let curr = finish;
            while (curr) {
                path.push(curr);
                curr = previous[curr];
            }
            path.reverse();
            return [path.length, path];
        }
        if (smallest || distances[smallest] !== Infinity) {
            let neighbors = this.adjacencyList[smallest];
            for(let neighbor in neighbors){
                let nextNode = neighbors[neighbor];
                let candidate = distances[smallest] + nextNode.weight;
                let neighborNode = nextNode.node;
                if(candidate < distances[neighborNode]) {
                    distances[neighborNode] = candidate;
                    previous[neighborNode] = smallest;
                    nodes.enqueue(neighborNode, candidate);
                }
            }
        }

    }
    return [Infinity, []];
  }
  
  // add the necessary code here
}

var g = new WeightedGraph()
 
g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');
 
g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);
g.addEdge('Z', 'Q', 2);
g.addEdge('C', 'G', 4);
g.addEdge('D', 'Q', 8);
g.addEdge('E', 'H', 1);
g.addEdge('H', 'Q', 3);
g.addEdge('Q', 'C', 6);
g.addEdge('G', 'Q', 9);
 
console.log(g.Dijkstra('A','E')); // ["A", "Z", "Q", "H", "E"]
console.log(g.Dijkstra('A','Q')); // ["A", "Z", "Q"]
console.log(g.Dijkstra('A','G')); // ["A", "C", "G"]
console.log(g.Dijkstra('A','D')); // ["A", "Z", "Q", "D"]

// node 1.exercise.js