"use client";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Node, Edge, interactables } from "../types";
import Image from "./Image";
import NodeInfo from "./nodeInfo";
import _ from "lodash";
import "../css/main.css";
import { inputNodes, nodeNames } from "../input/nodes";
import { inputEdges } from "../input/edges";
import { monsters } from "../input/monsters";

const nodes: Map<nodeNames, Node> = new Map();
// initialize nodes from input.ts
for (const node of inputNodes) {
	nodes.set(node.name as nodeNames, {
		name: node.name as nodeNames,
		interactables: node.interactables?.toSorted() ?? [],
		upgrades: node.upgrades?.toSorted() ?? [],
		items: node.items?.toSorted() ?? [],
		noEscape: node.noEscape ?? false,
		trophy: node.trophy ?? false,
		secretTrophy: node.secretTrophy ?? false,
		blueRingDownDestination: node.blueRingDownDestination,
		monsters: monsters.filter((monster) => node.monsters?.includes(monster.name)).toSorted(),
		edges: [],
	});
}
// initialialize edges from input.ts
for (const [fromName, edge] of Object.entries(inputEdges)) {
	for (const [toName, edgeInfo] of Object.entries(edge)) {
		const fromNode = nodes.get(fromName as nodeNames)!;
		const toNode = nodes.get(toName as nodeNames)!;
		if (fromNode && toNode)
			fromNode.edges.push({
				node: toNode,
				...edgeInfo,
			});
	}
}

const startingPath: nodeNames[] = [
	"Outer Space -1",
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
	"Tutorial Island",
	"Tutorial Chambers",
	"Tutorial 2",
	"Tutorial 1",
];

export default function Main() {
	// eslint-disable-next-line prefer-const
	let [pathStack, setPathStack] = useState<Node["edges"]>([
		{
			node: nodes.get(startingPath[0])!,
			distance: 0,
		},
	]);

	function currentNode() {
		return pathStack.at(-1)!.node;
	}

	function traverseTo(node: Node, rerender: boolean = true) {
		traversePath(pathfindTo(node), rerender);
	}

	// returns resulting pathStack of traversing a path
	function getTraversedPath(path: Edge[]) {
		let pathStackAux = pathStack.slice();
		for (const edge of path) {
			if (edge.up)
				pathStackAux = pathStackAux.slice(
					0,
					pathStackAux.findLastIndex((edge2) => edge.node.name == edge2.node.name),
				);
			else pathStackAux.push(edge);
		}
		return pathStackAux;
	}

	function traversePath(path: Edge[], rerender: boolean = true) {
		pathStack = getTraversedPath(path);
		if (rerender) setPathStack(pathStack.slice());
	}

	//Dijkstra pathfinding
	function pathfindToAux(
		currentNode: Node,
		targetNode: Node,
		nodes: Map<nodeNames, Node>,
	): Edge[] {
		const distancesToStart = new Map<Node, number>();
		const visitedNodes = new Map<Node, number>();
		const predecessors = new Map<Node, Node>();
		// initialize distances to start, start = 0, rest = Infinity
		nodes
			.values()
			.forEach((node) =>
				distancesToStart.set(node, node.name === currentNode.name ? 0 : Infinity),
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
		predecessors.get(targetNode);
		// create path from predecessors
		const path: Edge[] = [];
		for (let node = targetNode; predecessors.get(node); node = predecessors.get(node)!) {
			path.unshift(
				predecessors.get(node)!.edges.find((edge) => edge.node.name == node.name)!,
			);
		}
		return path;
	}

	function pathfindTo(targetNode: Node, pathUp: boolean = false): Edge[] {
		if (pathUp) {
			const paths: Edge[][] = [];
			// for each node in the stack, append the path from current -> stack to the path from stack -> target
			for (let i = 0; i < pathStack.length; i++) {
				const path = [
					...pathStack
						.toReversed()
						.slice(0, i)
						.map((edge) => ({ ...edge, up: true })),
					...pathfindToAux(
						pathStack.slice(0, pathStack.length - i).at(-1)!.node,
						targetNode,
						nodes,
					),
				];
				// if theres no path to target node, the resulting pathStacks's last element won't be the target node
				if (getTraversedPath(path).at(-1)?.node.name === targetNode.name) paths.push(path);
			}
			// get path with smallest distance
			return paths.sort(
				(a, b) =>
					a.reduce((acc, edge) => acc + edge.distance, 0) -
					b.reduce((acc, edge) => acc + edge.distance, 0),
			)[0];
		} else {
			return pathfindToAux(currentNode(), targetNode, nodes);
		}
	}

	function pathfindToInteractable(interactable: interactables) {
		const nodesCopy = _.cloneDeep(nodes);
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
			if (node.name === "Small White Flower") {
				return !!pathStack.find((edge) => edge.node.name === "Alpha Cube");
			}
			return node.interactables.includes(interactable);
		});
		const paths: Edge[][] = [];
		for (const destination of possibleDestinations) {
			const path = pathfindToAux(nodesCopy.get(currentNode().name)!, destination, nodesCopy);
			if (getTraversedPath(path).at(-1)?.node.name === destination.name) paths.push(path);
		}
		return paths.sort(
			(a, b) =>
				a.reduce((acc, edge) => acc + edge.distance, 0) -
				b.reduce((acc, edge) => acc + edge.distance, 0),
		)[0];
	}

	useEffect(() => {
		document.title = "Fractal Block World Map";
		setPathStack([
			...pathStack,
			...startingPath
				.slice(1)
				.map(
					(nodeName, index) =>
						nodes
							.get(startingPath[index])!
							.edges.find((edge) => edge.node.name == nodeName)!,
				),
		]);
	}, []);

	const blueRingParentEdge = useMemo(() => {
		if (currentNode().interactables.includes("Blue Ring")) {
			for (const edge of pathStack.toReversed()) {
				if (edge.node.blueRingDownDestination) {
					return edge;
				}
			}
		}
		return;
	}, [pathStack]);

	function traverseBlueRing() {
		pathStack = pathStack.slice(0, pathStack.lastIndexOf(blueRingParentEdge!) + 1);
		traverseTo(
			nodes.get(blueRingParentEdge!.node.blueRingDownDestination!.nodeName as nodeNames)!,
		);
	}

	useEffect(() => {
		const path = document.getElementsByClassName("pathNode");
		path[path.length - 1].scrollIntoView();
		console.log(pathfindToInteractable("Blue Ring"));
		//console.log(pathfindTo(nodes.get("Small Yellow Flower")!));
	}, [pathStack]);

	return (
		<>
			<div id='pathContainer'>
				<div id='pathHeader'>Path To Root</div>
				<div id='pathList'>
					{pathStack.map((edge, index, path) => (
						<Fragment key={`path${index}`}>
							{index != 0 ? (
								edge.node.noEscape ? (
									<Image
										className='icon'
										src='./images/icons/One Way.webp'
										alt='One Way'
									/>
								) : (
									"↑"
								)
							) : (
								""
							)}
							<div
								className={`pathNode`}
								onClick={() =>
									traversePath(
										path
											.slice(index + 1, path.length)
											.toReversed()
											.map((edge) => ({ ...edge, up: true })),
									)
								}
							>
								{currentNode().interactables?.includes("Pink Ring") &&
									index ==
										pathStack.findLastIndex((edge) =>
											edge.node.interactables?.includes("Pink Sphere"),
										) && (
										<Image
											className='icon'
											src='./images/icons/Pink Ring.webp'
											alt='(Pink Ring) '
										/>
									)}
								{edge.node.name}
							</div>
						</Fragment>
					))}
				</div>
			</div>
			<div id='nodeContainer'>
				<NodeInfo node={currentNode()}></NodeInfo>

				{(currentNode().edges.length > 0 || blueRingParentEdge) && (
					<div id='edgesContainer'>
						Possible destinations:
						<div id='edgesList'>
							{currentNode().edges.map((edge, index) => (
								<span
									key={`edge${index}`}
									className='edge'
									onClick={() => traversePath([edge])}
								>
									{edge.requiresKey && (
										<Image
											className='icon-small'
											src={`./images/icons/${edge.requiresKey}.webp`}
										/>
									)}
									{edge.node.name}
									{edge.note && ` (${edge.note})`}
									<Image
										className='edgeTooltip'
										src={`./images/edges/${currentNode().name} - ${edge.node.name}.jpg`}
										alt=''
									/>
								</span>
							))}
							{blueRingParentEdge && (
								<span className='edgeBlueRing' onClick={traverseBlueRing}>
									<Image
										className='icon-small'
										src={`./images/icons/Blue Ring.webp`}
									/>
									{`${blueRingParentEdge.node.blueRingDownDestination!.nodeName} ${blueRingParentEdge.node.blueRingDownDestination!.note ?? ""}`}
								</span>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
