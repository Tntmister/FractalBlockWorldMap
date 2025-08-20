'use client';
import { inputGraph } from './input';
import { Fragment, useEffect, useState } from 'react';
import { nodeNames, Node, Edge } from './types';
import Image from './images/Image';
import path from 'path';

const nodes: Map<nodeNames, Node> = new Map();
for (const node of inputGraph.nodes) {
	if (!nodes.has(node.name as nodeNames)) {
		nodes.set(node.name as nodeNames, {
			name: node.name as nodeNames,
			edges: [],
			info: node.info
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

const startingNode: nodeNames = 'Ying Cave Island Layer 4';

export default function Home() {
	// eslint-disable-next-line prefer-const
	let [pathStack, setPathStack] = useState<Node['edges']>([
		{
			node: nodes.get(inputGraph.root.name)!,
			distance: 0
		}
	]);

	function currentNode() {
		return pathStack[pathStack.length - 1].node;
	}

	function traverseUp(index: number) {
		if (pathStack.length == 1)
			throw new Error(`Node ${currentNode().name} does not have a parent node!`);
		setPathStack(pathStack.slice(0, index + 1));
	}

	function traverseDown(edge: Edge) {
		setPathStack([...pathStack, edge]);
	}

	function traverseTo(nodeName: nodeNames, rerender: boolean = true) {
		const path = pathfindTo(nodes.get(nodeName)!);
		for (const edge of path) {
			if (edge.pinkRing || edge.up)
				pathStack = pathStack.slice(
					0,
					pathStack.findLastIndex((edge2) => edge.node.name == edge2.node.name) + 1
				);
			else pathStack.push(edge);
		}
		if (rerender) setPathStack(pathStack.slice());
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

	useEffect(() => {
		traverseTo(startingNode);
		console.log(pathStack);
	}, []);

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
										<i className='icon-oneWay'>One Way</i>
									) : (
										'→'
									)
								) : (
									''
								)}
								<span className={`pathNode`} onClick={() => traverseUp(index)}>
									{/* {path.findLastIndex((edge) => edge.node.info?.pinkSphere) ==
										index &&
										currentNode().info?.pinkRing && (
											<i className='icon-pinkSphere'>(Pink Sphere)</i>
										)} */}
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
											onClick={() => traverseDown(edge)}
										>
											<div>{edge.node.name}</div>
											<div>{edge.note && ` (${edge.note})`}</div>
										</span>
										<Image
											className='descendantTooltip'
											src={`./images/descendants/${currentNode().name}-${edge.node.name}.webp`}
											fallbackSrc={`./images/descendants/${edge.node.name}.webp`}
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
