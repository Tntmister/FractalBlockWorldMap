import _ from "lodash";
import { nodeNames } from "../input/nodes";
import { Edge, interactables, Node } from "../types";

//Dijkstra pathfinding
// empty array = already at location, undefined = no path
export function dijkstraPathfind(currentNode: Node, targetNode: Node, nodes: Map<nodeNames, Node>): Edge[] | undefined {
	if (currentNode == targetNode) return [];
	const distancesToStart = new Map<Node, number>();
	const visitedNodes = new Map<Node, number>();
	const predecessors = new Map<Node, Node>();
	// initialize distances to start, start = 0, rest = Infinity
	nodes.values().forEach((node) => distancesToStart.set(node, node.name === currentNode.name ? 0 : Infinity));
	while (distancesToStart.size) {
		// get the node with the smallest distance to start
		const [currentNode, currentDistance] = distancesToStart
			.entries()
			.reduce((previousValue, currentValue) => (previousValue[1] < currentValue[1] ? previousValue : currentValue));
		// remove from unvisited set and add to visited set
		distancesToStart.delete(currentNode);
		visitedNodes.set(currentNode, currentDistance);
		// iterate edge nodes, and set distance to unvisited node if smaller than current node distance to start
		for (const edge of currentNode.edges) {
			if (edge.distance + currentDistance < distancesToStart.get(edge.node)!) {
				distancesToStart.set(edge.node, edge.distance + currentDistance);
				predecessors.set(edge.node, currentNode); // set predecessor node (for backtracking to create path)
			}
		}
	}
	predecessors.get(targetNode);
	// create path from predecessors
	const path: Edge[] = [];
	for (let node = targetNode; predecessors.get(node); node = predecessors.get(node)!) {
		path.unshift(predecessors.get(node)!.edges.find((edge) => edge.node.name == node.name)!);
	}
	return path.length > 0 ? path : undefined;
}

export function pathfindTo(targetNode: Node, pathStack: Node["edges"], nodes: Map<nodeNames, Node>): Edge[] | undefined {
	let path = dijkstraPathfind(pathStack.at(-1)!.node, targetNode, nodes);
	if (path) {
		// if destination is only accessible thorugh a blue ring, jump to before that then pathfind to a blue ring
		const mustPathBlueRing = path.findIndex((edge) => edge.blueRingOnly);
		if (mustPathBlueRing > -1) {
			path = path.slice(0, mustPathBlueRing);
			path.push(...pathfindToInteractable("Blue Ring", getTraversedPath(path, pathStack, nodes), nodes));
			path.push({
				node: targetNode,
				distance: 0,
				blueRing: true,
			});
		}
	}
	return path;
}

export function pathfindToInteractable(interactable: interactables, pathStack: Node["edges"], nodes: Map<nodeNames, Node>) {
	const nodesCopy = _.cloneDeep(nodes);
	const currentNode = pathStack.at(-1)!.node;
	if (interactable == "Blue Ring") {
		nodesCopy.values().forEach((node) => {
			for (let i = node.edges.length - 1; i >= 0; i--) {
				if (node.edges[i].node.blueRingDownDestination) {
					node.edges.splice(i, 1);
				}
			}
		});
	} else if (interactable == "Pink Ring") {
		nodesCopy.values().forEach((node) => {
			for (let i = node.edges.length - 1; i >= 0; i--) {
				if (node.edges[i].node.interactables.includes("Pink Sphere")) {
					node.edges.splice(i, 1);
				}
			}
		});
	}
	const possibleDestinations = nodesCopy.values().filter((node) => {
		// small white flower only contains blue ring inside an alpha cube
		if (node.name === "Small White Flower" && interactable == "Blue Ring") {
			return !!pathStack.find((edge) => edge.node.name === "Alpha Cube");
		}
		return node.interactables.includes(interactable);
	});
	const paths: Edge[][] = [];
	for (const destination of possibleDestinations) {
		const path = dijkstraPathfind(nodesCopy.get(currentNode.name)!, destination, nodesCopy);
		if (path) paths.push(path);
	}
	return paths.sort((a, b) => a.reduce((acc, edge) => acc + edge.distance, 0) - b.reduce((acc, edge) => acc + edge.distance, 0))[0];
}

// returns resulting pathStack of traversing a path
export function getTraversedPath(path: Edge[], pathStack: Edge[], nodes: Map<nodeNames, Node>) {
	let pathStackAux = pathStack.slice();
	for (const edge of path) {
		if (edge.up) {
			pathStackAux = pathStackAux.slice(
				0,
				pathStackAux.findLastIndex((edge2) => edge.node.name == edge2.node.name),
			);
		} else if (edge.blueRing) {
			const blueDownChunk = pathStackAux.findLastIndex((edge2) => edge2.node.blueRingDownDestination);
			pathStackAux = pathStackAux.slice(0, blueDownChunk + 1);
			pathStackAux.push(
				...dijkstraPathfind(
					pathStackAux[blueDownChunk].node,
					nodes.get(pathStackAux[blueDownChunk].node.blueRingDownDestination!.nodeName as nodeNames)!,
					nodes,
				)!,
			);
		} else pathStackAux.push(edge);
	}
	return pathStackAux;
}
