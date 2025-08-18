'use client';
import { inputGraph } from './input';
import { Fragment, useEffect, useState } from 'react';
import { nodeNames, Node, Edge } from './types';
import path from 'path';

const nodes: Map<nodeNames, Node> = new Map();
for (const node of inputGraph.nodes) {
	if (!nodes.has(node.name as nodeNames)) {
		nodes.set(node.name as nodeNames, {
			name: node.name as nodeNames,
			edges: [],
			items: node.items,
			upgrades: node.upgrades
		});
	}
}
for (const [fromName, edge] of Object.entries(inputGraph.edges)) {
	for (const [toName, edgeInfo] of Object.entries(edge)) {
		const fromNode = nodes.get(fromName as nodeNames);
		const toNode = nodes.get(toName as nodeNames);
		if (fromNode && toNode) {
			fromNode.edges.push({
				node: toNode,
				...edgeInfo
			});
		} else {
			throw new Error('Both nodes must exist before adding an edge.');
		}
	}
}

const startingNode: nodeNames = 'Tutorial';

export default function Home() {
	const [pathStack, setPathStack] = useState<Node['edges']>([
		{
			node: nodes.get(inputGraph.root.name)!,
			depth: inputGraph.root.depth,
			distance: 0
		}
	]);

	function currentNode() {
		return pathStack[pathStack.length - 1].node;
	}

	function previousNode() {
		return pathStack.length > 1 ? pathStack[pathStack.length - 2].node : null;
	}

	function traverseUp(index: number) {
		if (pathStack.length == 1)
			throw new Error(`Node ${currentNode().name} does not have a parent node!`);
		setPathStack(pathStack.slice(0, index + 1));
	}

	function traverseDown(edge: Edge) {
		setPathStack([...pathStack, edge]);
	}

	function getPinkRingDestination(): Node | undefined {
		return pathStack.findLast((stackEdge) => stackEdge.node.pinkSphere === true)?.node;
	}

	function traversePinkRing() {
		if (!currentNode().pinkRing)
			throw new Error(`Node ${currentNode().name} does not have a pink ring!`);
		const pinkSphereIndex = pathStack.findLastIndex(
			(stackEdge) => stackEdge.node.pinkSphere === true
		);
		if (pinkSphereIndex == -1)
			throw new Error(
				`No destination pink sphere found for pink ring on node ${currentNode().name}`
			);
		setPathStack(pathStack.slice(0, pinkSphereIndex + 1));
	}

	//Dijkstra pathfinding
	function pathfindTo(targetNode: Node): Edge[] {
		const distancesToStart = new Map<Node, number>();
		const visitedNodes = new Map<Node, number>();
		const predecessors = new Map<Node, Node>();
		nodes
			.values()
			.forEach((node) =>
				distancesToStart.set(node, node.name === currentNode().name ? 0 : Infinity)
			);
		while (distancesToStart.size) {
			const [currentNode, currentDistance] = distancesToStart
				.entries()
				.reduce((previousValue, currentValue) =>
					previousValue[1] < currentValue[1] ? previousValue : currentValue
				);
			distancesToStart.delete(currentNode);
			visitedNodes.set(currentNode, currentDistance);
			for (const edge of currentNode.edges) {
				if (edge.distance + currentDistance < distancesToStart.get(edge.node)!) {
					distancesToStart.set(edge.node, edge.distance + currentDistance);
					predecessors.set(edge.node, currentNode);
				}
			}
		}
		const path: Edge[] = [];
		for (let node = targetNode; predecessors.get(node); node = predecessors.get(node)!) {
			path.unshift(
				predecessors.get(node)!.edges.find((edge) => edge.node.name == node.name)!
			);
		}
		return path;
	}

	useEffect(() => {
		setPathStack([...pathStack, ...pathfindTo(nodes.get(startingNode)!)]);
	}, []);

	return (
		<div id='base'>
			{pathStack.length > 1 && (
				<div id='pathContainer'>
					Path up to root:
					<div id='pathList'>
						{pathStack.slice(0, -1).map((edge, index) => (
							<span
								className={`pathNode`}
								key={`path${index}`}
								onClick={() => traverseUp(index)}
							>
								{edge.node.name}
							</span>
						))}
					</div>
				</div>
			)}
			<div id='current'>Current Area: {currentNode().name}</div>
			{currentNode().edges.length > 0 && (
				<div id='descendantsContainer'>
					Areas inside {currentNode().name}:
					<div id='descendantsList'>
						{currentNode().edges.map((edge, index) => (
							<span
								className={`descendant`}
								onClick={() => traverseDown(edge)}
								key={`descendant${index}`}
							>
								{edge.node.name}
								{edge.note && ` (${edge.note})`}
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
