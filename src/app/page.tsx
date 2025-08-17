'use client';
import { inputGraph } from './input';
import { useEffect, useState } from 'react';
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

	function traverseUp() {
		if (pathStack.length == 1)
			throw new Error(
				`Node ${currentNode().name} does not have a parent node!`
			);
		setPathStack(pathStack.slice(0, pathStack.length - 1));
	}

	function traverseDown(edge: Edge) {
		setPathStack([...pathStack, edge]);
	}

	function getPinkRingDestination(): Node | undefined {
		return pathStack.findLast((stackEdge) => stackEdge.node.pinkSphere === true)
			?.node;
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

	function printPath() {
		console.log(pathStack.map((edge) => edge.node.name).join(' -> '));
	}

	useEffect(() => {
		console.log(nodes);
		printPath();
	}, []);

	return (
		<div>
			{currentNode().pinkRing && (
				<div onClick={traversePinkRing}>
					Pink Ring to: {getPinkRingDestination()!.name}
				</div>
			)}
			{previousNode() && (
				<div onClick={traverseUp}>Parent: {previousNode()!.name}</div>
			)}
			<div>Current: {currentNode().name}</div>
			<div>
				{currentNode().edges.map((edge) => (
					<div onClick={() => traverseDown(edge)} key={edge.node.name}>
						{edge.node.name}
					</div>
				))}
			</div>
		</div>
	);
}
