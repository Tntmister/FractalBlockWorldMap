import { Edge, Interactable, Node, Upgrade } from "../../types";

//Dijkstra pathfinding
// empty array = already at location, undefined = no path
export function dijkstraPathfind(
	currentNodeName: string,
	targetNodeName: string,
	nodes: Map<string, Node>,
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
			if (edge.distance + currentDistance < distancesToStart.get(edge.destinationNode)!) {
				distancesToStart.set(edge.destinationNode, edge.distance + currentDistance);
				predecessors.set(edge.destinationNode, edge.originNode); // set predecessor node (for backtracking to create path)
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
		path.unshift(
			predecessors.get(node)!.edges.find((edge) => edge.destinationNode.name == node.name)!,
		);
	}
	return path.length > 0 ? path : undefined;
}

export function pathfindTo(targetNodeName: string, pathStack: Edge[], nodes: Map<string, Node>) {
	let path = dijkstraPathfind(pathStack.at(-1)!.destinationNode.name, targetNodeName, nodes);
	if (path) {
		// if destination is only accessible thorugh a blue ring, jump to before that then pathfind to a blue ring
		const impassableEdgeIndex = path.findIndex((edge) => edge.impassable);
		if (impassableEdgeIndex > 0) {
			const impassableEdgeId = path[impassableEdgeIndex].id;

			// exclude current impassable edge from being included in blue ring pathfind to prevent incomplete/looping path
			const nodesCopy = structuredClone(nodes);
			nodesCopy.values().forEach((node) => {
				for (let i = node.edges.length - 1; i >= 0; i--) {
					if (node.edges[i].id == impassableEdgeId) {
						node.edges.splice(i, 1);
					}
				}
			});

			path = path.slice(0, impassableEdgeIndex);
			path.push(
				...pathfindToInteractables(
					["Blue Ring"],
					getTraversedPath(path, pathStack, nodes),
					nodesCopy,
				)!,
			);
			// index of blue active zone in path
			const blueActiveZoneNode = path.findLast(
				(edge) => edge.destinationNode.blueActiveZoneDestination,
			)?.destinationNode;
			//if pathfind started between blue active zone and impassable zone, ignore the impassable edge and return new path
			if (!blueActiveZoneNode) {
				const nodesWithoutImpassableEdge = structuredClone(nodes);
				const node = nodesWithoutImpassableEdge.get(
					path[impassableEdgeIndex].originNode.name,
				)!;
				node.edges.forEach((edge, i) => {
					if (edge.id == impassableEdgeId) {
						node.edges.splice(i, 1);
					}
				});
				return pathfindTo(targetNodeName, pathStack, nodesWithoutImpassableEdge);
			}
			// add blue ring edge to path (will be parsed to jump directly to the destination node)
			path.push({
				originNode: blueActiveZoneNode,
				destinationNode: nodes.get(blueActiveZoneNode.blueActiveZoneDestination!.nodeName)!,
				distance: 0,
				blueRing: true,
				id: impassableEdgeIndex,
			});
			// if not at the target yet
			if (path.at(-1)?.destinationNode.name != targetNodeName) {
				// check if target is between impassable edge and blue ring destination
				let traversedPath = getTraversedPath(path, pathStack, nodes);
				traversedPath = traversedPath.slice(
					traversedPath.findLastIndex((edge) => (edge.id = impassableEdgeId)) - 1,
				);
				const destinationIndex = traversedPath.findLastIndex(
					(edge) => edge.destinationNode.name == targetNodeName,
				);
				if (destinationIndex > -1) {
					path.push(
						...traversedPath
							.slice(
								traversedPath.findLastIndex(
									(edge) => edge.destinationNode.name == targetNodeName,
								),
								traversedPath.length - 1,
							)
							.toReversed()
							.map((edge) => ({ ...edge, up: true })),
					);
				}
				// if target node still isn't in the path, pathfind from the blue ring destination to the target node
				else {
					path.push(
						...pathfindTo(
							targetNodeName,
							getTraversedPath(path, pathStack, nodes),
							nodes,
						)!,
					);
				}
			}
		}
		return path;
	}
	return null;
}

export function pathfindToUpgrades(
	upgrades: Upgrade[],
	pathStack: Node["edges"],
	nodes: Map<string, Node>,
) {
	const nodesCopy = structuredClone(nodes);
	const possibleDestinations = nodesCopy.values().filter((node) => {
		return upgrades.every((upgrade) =>
			node.upgrades.some((nodeUpgrade) =>
				Array.isArray(nodeUpgrade)
					? nodeUpgrade.some(
							(nodeUpgrade2) => nodeUpgrade2.replace(/ x\d+$/i, "") == upgrade,
						)
					: nodeUpgrade.replace(/ x\d+$/i, "") == upgrade,
			),
		);
	});
	const paths: Edge[][] = [];
	for (const destination of possibleDestinations) {
		const path = pathfindTo(destination.name, pathStack, nodesCopy);
		if (path) paths.push(path);
	}
	if (paths.length > 0)
		return paths.sort(
			(a, b) =>
				a.reduce((acc, edge) => acc + edge.distance, 0) -
				b.reduce((acc, edge) => acc + edge.distance, 0),
		)[0];
	return null;
}

export function pathfindToInteractables(
	interactables: Interactable[],
	pathStack: Node["edges"],
	nodes: Map<string, Node>,
) {
	const nodesCopy = structuredClone(nodes);
	// if pathfinding to a blue/pink ring, don't pathfind into a new active zone
	if (interactables.includes("Blue Ring")) {
		nodesCopy.values().forEach((node) => {
			for (let i = node.edges.length - 1; i >= 0; i--) {
				if (node.edges[i].destinationNode.blueActiveZoneDestination) {
					node.edges.splice(i, 1);
				}
			}
		});
	} else if (interactables.includes("Pink Ring")) {
		nodesCopy.values().forEach((node) => {
			for (let i = node.edges.length - 1; i >= 0; i--) {
				if (node.edges[i].destinationNode.interactables.includes("Pink Sphere")) {
					node.edges.splice(i, 1);
				}
			}
		});
	}
	// pathfind to every destination with the desired interactable
	const possibleDestinations = nodesCopy.values().filter((node) => {
		// small white flower only contains blue ring inside an alpha cube
		if (
			node.name === "Small White Flower Alpha Cube Treasure" &&
			interactables.includes("Blue Ring")
		) {
			return !!pathStack.find((edge) => edge.destinationNode.name === "Alpha Cube");
		}
		return interactables.every((interactable) => node.interactables.includes(interactable));
	});
	const paths: Edge[][] = [];
	for (const destination of possibleDestinations) {
		const path = pathfindTo(destination.name, pathStack, nodesCopy);
		if (path) paths.push(path);
	}
	if (paths.length > 0)
		return paths.sort(
			(a, b) =>
				a.reduce((acc, edge) => acc + edge.distance, 0) -
				b.reduce((acc, edge) => acc + edge.distance, 0),
		)[0];
	return null;
}

// returns resulting pathStack of traversing a path
export function getTraversedPath(path: Edge[], pathStack: Edge[], nodes: Map<string, Node>) {
	let pathStackAux = pathStack.slice();
	for (const edge of path) {
		if (edge.id == pathStackAux.at(-1)!.id && !edge.up && !edge.blueRing) continue;
		if (edge.up) {
			pathStackAux = pathStackAux.slice(
				0,
				pathStackAux.findLastIndex(
					(edge2) => edge.destinationNode.name == edge2.destinationNode.name,
				) + 1,
			);
		} else if (edge.blueRing) {
			const blueDownChunk = pathStackAux.findLastIndex(
				(edge2) => edge2.destinationNode.blueActiveZoneDestination,
			);
			pathStackAux = pathStackAux.slice(0, blueDownChunk + 1);
			pathStackAux.push(
				...dijkstraPathfind(
					pathStackAux[blueDownChunk].destinationNode.name,
					pathStackAux[blueDownChunk].destinationNode.blueActiveZoneDestination!.nodeName,

					nodes,
				)!,
			);
		} else if (edge.pinkRing) {
			const pinkSphereChunk = pathStackAux.findLastIndex(
				(edge2) => edge2.destinationNode.pinkSphereDestination,
			);
			pathStackAux = pathStackAux.slice(0, pinkSphereChunk + 1);
			pathStackAux.push(
				...dijkstraPathfind(
					pathStackAux[pinkSphereChunk].destinationNode.name,
					pathStackAux[pinkSphereChunk].destinationNode.pinkSphereDestination!.nodeName,

					nodes,
				)!,
			);
		} else pathStackAux.push(edge);
	}
	return pathStackAux;
}
