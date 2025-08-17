import { edgeInfo, InputGraph, InputNode, nodeNames, stats } from './types';

class Node {
	name: nodeNames;
	edges: (edgeInfo & {
		node: Node;
	})[];
	upgrades?: stats[];
	items?: stats[];
	constructor(node: InputNode) {
		this.name = node.name as nodeNames;
		this.edges = []; // edges to other nodes
		this.upgrades = node.upgrades;
		this.items = node.items;
	}

	addEdge(node: Node, edgeInfo: edgeInfo) {
		this.edges.push({
			node: node,
			...edgeInfo
		});
	}
}

export class Graph {
	nodes: Map<nodeNames, Node>;
	pathStack: Node['edges'];
	constructor(graph: InputGraph, _startingNode: nodeNames) {
		this.nodes = new Map();
		for (const inputNode of graph.nodes) {
			this.addNode(inputNode);
		}
		// graph.edges.forEach((inputEdge) => {
		//   this.addEdge(inputEdge.from, inputEdge.to, inputEdge.distance, inputEdge.depth)
		// })
		for (const [fromName, edge] of Object.entries(graph.edges)) {
			for (const [toName, edgeInfo] of Object.entries(edge)) {
				this.addEdge(fromName as nodeNames, toName as nodeNames, edgeInfo);
			}
		}
		this.pathStack = [
			{
				node: this.nodes.get(graph.root.name)!,
				depth: graph.root.depth,
				distance: 0
			}
		];
		console.log(graph.nodes)
		this.printPath()
	}

	addNode(node: InputNode) {
		if (!this.nodes.has(node.name as nodeNames)) {
			this.nodes.set(node.name as nodeNames, new Node(node));
		}
	}

	addEdge(from: nodeNames, to: nodeNames, edgeInfo: edgeInfo) {
		const fromNode = this.nodes.get(from);
		const toNode = this.nodes.get(to);
		if (fromNode && toNode) {
			fromNode.addEdge(toNode, edgeInfo);
		} else {
			throw new Error('Both nodes must exist before adding an edge.');
		}
	}

	get current() {
		return this.pathStack[this.pathStack.length - 1].node;
	}

	get previous() {
		return this.pathStack.length > 1 ? this.pathStack[this.pathStack.length - 2].node : null;
	}

	traverse(toName: nodeNames) {
		const toNode = this.nodes.get(toName);
		if (!toNode) throw new Error(`Node ${toName} does not exist.`);

		const edge = this.current.edges.find((edge) => edge.node.name === toName);
		if (!edge)
			throw new Error(`No edge from ${this.current.name} to ${toName}`);

		this.pathStack.push(edge);
	}

	backtrack() {
		if (this.pathStack.length > 1) {
			this.pathStack.pop();
		} else {
			throw new Error(`${this.current.name} does not have a parent node.`);
		}
	}

	printPath() {
		console.log(this.pathStack.map((edge) => edge.node.name).join(' -> '));
	}
}
