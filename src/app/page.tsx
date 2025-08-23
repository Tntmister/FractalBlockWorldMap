"use client";
import { Fragment, useEffect, useState } from "react";
import { nodeNames, Node, Edge } from "./types";
import Image from "./Image";
import { inputGraph } from "./input/graph";

const nodes: Map<nodeNames, Node> = new Map();
// initialize nodes from input.ts
for (const node of inputGraph.nodes) {
	nodes.set(node.name as nodeNames, {
		...node,
		edges: []
	});
}
// initialialize edges from input.ts
for (const [fromName, edge] of Object.entries(inputGraph.edges)) {
	for (const [toName, edgeInfo] of Object.entries(edge)) {
		const fromNode = nodes.get(fromName as nodeNames)!;
		const toNode = nodes.get(toName as nodeNames)!;
		fromNode.edges.push({
			node: toNode,
			...edgeInfo
		});
	}
}

const startingPath: nodeNames[] = [
	inputGraph.root.name,
	"Outer Space 0",
	"Outer Space 1",
	"Outer Space 2",
	"Galaxy",
	"Solar System",
	"Tau Cave Moon",
	"Type 2 Tau Cave",
	"Type 3 Tau Cave",
	"Type 1 Tau Cave",
	"Ying Flower",
	"Ying World",
	"Tutorial Island"
];

export default function Home() {
	// eslint-disable-next-line prefer-const
	let [pathStack, setPathStack] = useState<Node["edges"]>([
		{
			node: nodes.get(startingPath[0])!,
			distance: 0
		},
		...startingPath.slice(1).map((nodeName, index) => {
			console.log(nodeName);
			return nodes
				.get(startingPath[index])!
				.edges.find((edge) => edge.node.name == nodeName)!;
		})
	]);

	function currentNode() {
		return pathStack[pathStack.length - 1].node;
	}

	function traverseTo(node: Node, rerender: boolean = true) {
		traversePath(pathfindTo(node), rerender);
	}

	// returns resulting pathStack of traversing a path
	function getTraversedPath(path: Edge[]) {
		let pathStackAux = pathStack.slice();
		for (const edge of path) {
			if (edge.pinkRing || edge.up)
				pathStackAux = pathStackAux.slice(
					0,
					pathStackAux.findLastIndex((edge2) => edge.node.name == edge2.node.name)
				);
			else pathStackAux.push(edge);
		}
		return pathStackAux;
	}

	function traversePath(path: Edge[], rerender: boolean = true) {
		pathStack = getTraversedPath(path);
		if (rerender) setPathStack(pathStack.slice());
	}

	function pathfindTo(targetNode: Node): Edge[] {
		//Dijkstra pathfinding
		function pathfindToAux(targetNode: Node, currentPathStack: Edge[] = pathStack): Edge[] {
			const distancesToStart = new Map<Node, number>();
			const visitedNodes = new Map<Node, number>();
			const predecessors = new Map<Node, Node>();
			nodes
				.values()
				.forEach((node) =>
					distancesToStart.set(
						node,
						node.name === currentPathStack.at(-1)!.node.name ? 0 : Infinity
					)
				);
			while (distancesToStart.size) {
				// get the node with the smallest distance to start
				const [currentNode, currentDistance] = distancesToStart
					.entries()
					.reduce((previousValue, currentValue) =>
						previousValue[1] < currentValue[1] ? previousValue : currentValue
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
			// create path from predecessors
			const path: Edge[] = [];
			for (let node = targetNode; predecessors.get(node); node = predecessors.get(node)!) {
				path.unshift(
					predecessors.get(node)!.edges.find((edge) => edge.node.name == node.name)!
				);
			}
			return path;
		}

		const list: Edge[][] = [];
		// for each node in the stack, append the path from current -> stack to the path from stack -> target
		for (let i = 0; i < pathStack.length; i++) {
			const path = [
				...pathStack
					.toReversed()
					.slice(0, i)
					.map((edge) => ({ ...edge, up: true })),
				...pathfindToAux(targetNode, pathStack.slice(0, pathStack.length - i))
			];
			// if theres no path to target node, the resulting pathStacks's last element won't be the target node
			if (getTraversedPath(path).at(-1)?.node.name === targetNode.name) list.push(path);
		}
		// get path with smallest distance
		return list.sort(
			(a, b) =>
				a.reduce((acc, edge) => acc + edge.distance, 0) -
				b.reduce((acc, edge) => acc + edge.distance, 0)
		)[0];
	}

	return (
		<div id='base'>
			{pathStack.length > 1 && (
				<div id='pathContainer'>
					Path up to root:
					<div id='pathList'>
						{pathStack.map((edge, index, path) => (
							<Fragment key={`path${index}`}>
								{index != 0 ? (
									edge.oneWay ? (
										<Image
											className='icon'
											src='./images/icons/oneway.jpg'
											alt='One Way'
										/>
									) : (
										"→"
									)
								) : (
									""
								)}
								<span className={`pathNode`} onClick={() => traverseTo(edge.node)}>
									{currentNode().interactables?.includes("Pink Ring") &&
										index ==
											pathStack.findLastIndex((edge) =>
												edge.node.interactables?.includes("Pink Sphere")
											) && (
											<Image
												className='icon'
												src='./images/icons/pinkring.png'
												alt='(Pink Ring) '
											/>
										)}
									{edge.node.name}
								</span>
							</Fragment>
						))}
					</div>
				</div>
			)}
			<div id='current'>Current Area: {currentNode().name}</div>
			{currentNode().edges.length > 0 && (
				<div id='descendantsContainer'>
					Areas inside {currentNode().name}:
					<div id='descendantsList'>
						{currentNode().edges.map(
							(edge, index) =>
								!edge.pinkRing &&
								!edge.up && (
									<Fragment key={`descendant${index}`}>
										<span
											className={`descendant`}
											onClick={() => traversePath([edge])}
										>
											<div>{edge.node.name}</div>
											<div>{edge.note && ` (${edge.note})`}</div>
										</span>
										<Image
											className='descendantTooltip'
											src={`./images/descendants/${currentNode().name}-${edge.node.name}.webp`}
											fallbackSrc={edge.node.images?.[0].src}
											alt=''
										/>
									</Fragment>
								)
						)}
					</div>
				</div>
			)}
		</div>
	);
}
