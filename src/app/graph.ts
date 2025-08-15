import { inputGraph } from "./input";
import { InputGraph, InputNode, nodeNames, stats } from "./types";

class Node {
  name: nodeNames;
  edges: {
    node: Node;
    distance?: number;
    depth?: number;
  }[];
  upgrades?: stats[];
  items?: stats[];
  constructor(node: InputNode) {
    this.name = node.name as nodeNames;
    this.edges = []; // edges to other nodes
    this.upgrades = node.upgrades;
    this.items = node.items;
  }

  addEdge(node: Node, distance = 0, depth?: number) {
    this.edges.push({
      node: node,
      distance: distance,
      depth: depth
    });
  }
}

class Graph {
  nodes: Map<nodeNames, Node>;
  pathStack: Node['edges'];
  constructor(graph: InputGraph, startingNode: nodeNames) {
    this.nodes = new Map();
    graph.nodes.forEach((inputNode) => {
      this.addNode(inputNode);
    })
    graph.edges.forEach((inputEdge) => {
      this.addEdge(inputEdge.from, inputEdge.to, inputEdge.distance, inputEdge.depth)
    })
    this.pathStack = [{
      node: this.nodes.get(graph.root.name)!,
      depth: graph.root.depth
    }]; 
  }

  addNode(node: InputNode) {
    if (!this.nodes.has(node.name as nodeNames)) {
      this.nodes.set(node.name as nodeNames, new Node(node));
    }
  }

  addEdge(from: nodeNames, to: nodeNames, distance = 0, depth?: number) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (fromNode && toNode) {
      fromNode.addEdge(toNode, distance, depth);
    } else {
      throw new Error("Both nodes must exist before adding an edge.");
    }
  }

  get current(){
    return this.pathStack[-1].node
  }

  traverse(toName: nodeNames) {
    const toNode = this.nodes.get(toName);
    if (!toNode) throw new Error(`Node ${toName} does not exist.`)

    const edge = this.current.edges.find(edge => edge.node.name === toName);
    if (!edge) throw new Error(`No edge from ${this.current.name} to ${toName}`);

    this.pathStack.push(edge);
  }

  backtrack() {
    if (this.pathStack.length > 1) {
      this.pathStack.pop();
    } else {
      throw new Error(`${this.current.name} does not have a parent node.`)
    }
  }

  printPath() {
    console.log(this.pathStack.map((edge) => edge.node.name).join(" -> "));
  }
}
const graph = new Graph(inputGraph, "Tutorial Box");
console.log(graph.nodes)
