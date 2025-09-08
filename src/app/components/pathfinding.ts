import _ from "lodash";
import { nodeName } from "../input/nodes";
import { Edge, interactable, Node } from "../types";
import path from "path";

//Dijkstra pathfinding
// empty array = already at location, undefined = no path
export function dijkstraPathfind(
	currentNodeName: nodeName,
	targetNodeName: nodeName,
	nodes: Map<nodeName, Node>,
): Edge[] | undefined {
	if (currentNodeName == targetNodeName) return [];
	const distancesToStart = new Map<Node, number>();
	const visitedNodes = new Map<Node, number>();
	const predecessors = new Map<Node, Node>();
	// initialize distances to start, start = 0, rest = Infinity
	nodes
		.values()
		.forEach((node) =>
			distancesToStart.set(node, node.name === currentNodeName ? 0 : Infinity),
		);
	while (distancesToStart.size) {
		// get the node with the smallest distance to start
		const [currentNode, currentDistance] = distancesToStart
			.entries()
			.reduce((previousValue, currentValue) =>
				previousValue[1] < currentValue[1] ? previousValue : currentValue,
			);
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
	predecessors.get(nodes.get(targetNodeName)!);
	// create path from predecessors
	const path: Edge[] = [];
	for (
		let node = nodes.get(targetNodeName)!;
		predecessors.get(node);
		node = predecessors.get(node)!
	) {
		path.unshift(predecessors.get(node)!.edges.find((edge) => edge.node.name == node.name)!);
	}
	return path.length > 0 ? path : undefined;
}

export function pathfindTo(
	targetNodeName: nodeName,
	pathStack: Node["edges"],
	nodes: Map<nodeName, Node>,
	stableSingletons: boolean,
	keys: boolean,
) {
	const nodesCopy = _.cloneDeep(nodes);
	if (!stableSingletons)
		nodesCopy.get("EMERGENCY")!.edges.splice(
			nodesCopy
				.get("EMERGENCY")!
				.edges.findIndex((edge) => edge.node.name == "Stable Singletons"),
			1,
		);
	if (!keys) {
		nodesCopy.values().forEach((node) => {
			for (let i = node.edges.length - 1; i >= 0; i--) {
				if (node.edges[i].requiresKey == "Yellow Key") {
					node.edges.splice(i, 1);
				}
			}
		});
	}
	let path = dijkstraPathfind(pathStack.at(-1)!.node.name, targetNodeName, nodesCopy);
	if (path) {
		// if destination is only accessible thorugh a blue ring, jump to before that then pathfind to a blue ring
		const impassableEdgeIndex = path.findIndex((edge) => edge.impassable);
		if (impassableEdgeIndex > -1) {
			path = path.slice(0, impassableEdgeIndex);
			path.push(
				...pathfindToInteractable(
					"Blue Ring",
					getTraversedPath(path, pathStack, nodesCopy),
					nodesCopy,
					stableSingletons,
					keys,
				)!.slice(1),
			);
			const blueActiveZoneNode = path.findLast(
				(edge) => edge.node.blueRingDownDestination,
			)?.node;
			if (!blueActiveZoneNode) return null;
			path.push({
				node: nodesCopy.get(
					blueActiveZoneNode.blueRingDownDestination!.nodeName as nodeName,
				)!,
				distance: 0,
				blueRing: true,
				id: impassableEdgeIndex,
			});
			if (path.at(-1)?.node.name != targetNodeName) {
				path.push(
					...pathfindTo(
						targetNodeName,
						getTraversedPath(path, pathStack, nodesCopy),
						nodesCopy,
						stableSingletons,
						keys,
					)!.slice(1),
				);
			}
		}
		return [pathStack.at(-1)!, ...path];
	}
	return null;
}

export function pathfindToInteractable(
	interactable: interactable,
	pathStack: Node["edges"],
	nodes: Map<nodeName, Node>,
	stableSingletons: boolean,
	keys: boolean,
) {
	const nodesCopy = _.cloneDeep(nodes);
	if (!stableSingletons)
		nodesCopy.get("EMERGENCY")!.edges.splice(
			nodesCopy
				.get("EMERGENCY")!
				.edges.findIndex((edge) => edge.node.name == "Stable Singletons"),
			1,
		);
	if (!keys) {
		nodesCopy.values().forEach((node) => {
			for (let i = node.edges.length - 1; i >= 0; i--) {
				if (node.edges[i].requiresKey == "Yellow Key") {
					node.edges.splice(i, 1);
				}
			}
		});
	}
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
		const path = dijkstraPathfind(pathStack.at(-1)!.node.name, destination.name, nodesCopy);
		if (path) paths.push(path);
	}
	if (paths.length > 0)
		return [
			pathStack.at(-1)!,
			...paths.sort(
				(a, b) =>
					a.reduce((acc, edge) => acc + edge.distance, 0) -
					b.reduce((acc, edge) => acc + edge.distance, 0),
			)[0],
		];
	return null;
}

// returns resulting pathStack of traversing a path
export function getTraversedPath(path: Edge[], pathStack: Edge[], nodes: Map<nodeName, Node>) {
	let pathStackAux = pathStack.slice();
	for (const edge of path[0].id == pathStack.at(-1)!.id ? path.slice(1) : path) {
		if (edge.up) {
			pathStackAux = pathStackAux.slice(
				0,
				pathStackAux.findLastIndex((edge2) => edge.node.name == edge2.node.name),
			);
		} else if (edge.blueRing) {
			const blueDownChunk = pathStackAux.findLastIndex(
				(edge2) => edge2.node.blueRingDownDestination,
			);
			pathStackAux = pathStackAux.slice(0, blueDownChunk + 1);
			pathStackAux.push(
				...dijkstraPathfind(
					pathStackAux[blueDownChunk].node.name,
					pathStackAux[blueDownChunk].node.blueRingDownDestination!.nodeName as nodeName,

					nodes,
				)!,
			);
		} else pathStackAux.push(edge);
	}
	return pathStackAux;
}
