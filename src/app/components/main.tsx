"use client";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Node, Edge, interactable, interactables } from "../types";
import Image from "./Image";
import NodeInfo from "./nodeInfo";
import _ from "lodash";
import "../css/main.css";
import { inputNodes, nodeName } from "../input/nodes";
import { inputEdges } from "../input/edges";
import { monsters } from "../input/monsters";
import {
	dijkstraPathfind,
	getTraversedPath,
	pathfindTo,
	pathfindToInteractable,
} from "./pathfinding";

const nodes: Map<nodeName, Node> = new Map();
// initialize nodes from input.ts
for (const node of inputNodes) {
	nodes.set(node.name as nodeName, {
		name: node.name as nodeName,
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
		const fromNode = nodes.get(fromName as nodeName)!;
		const toNode = nodes.get(toName as nodeName)!;
		if (fromNode && toNode)
			fromNode.edges.push({
				node: toNode,
				...edgeInfo,
			});
	}
}

const startingPath: nodeName[] = [
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

	const currentNode = useMemo(() => pathStack.at(-1)!.node, [pathStack]);

	const blueRingParentEdge = useMemo(() => {
		if (currentNode.interactables.includes("Blue Ring")) {
			return pathStack.findLast((edge) => edge.node.blueRingDownDestination);
		}
		return;
	}, [pathStack]);

	function traverseBlueRing() {
		pathStack = pathStack.slice(0, pathStack.lastIndexOf(blueRingParentEdge!) + 1);
		traverseTo(
			nodes.get(blueRingParentEdge!.node.blueRingDownDestination!.nodeName as nodeName)!,
		);
	}

	const pinkRingParentEdge = useMemo(() => {
		if (currentNode.interactables.includes("Pink Ring")) {
			return pathStack.findLast((edge) => edge.node.interactables.includes("Pink Sphere"));
		}
		return;
	}, [pathStack]);

	function traversePinkRing() {
		setPathStack(pathStack.slice(0, pathStack.lastIndexOf(pinkRingParentEdge!) + 1));
	}

	function traversePath(path: Edge[]) {
		setPathStack(getTraversedPath(path, pathStack, nodes));
	}

	function traverseTo(node: Node) {
		traversePath(pathfindTo(node, pathStack, nodes)!);
	}

	useEffect(() => {
		const path = document.getElementsByClassName("pathNode");
		path[path.length - 1].scrollIntoView();
		//console.log(pathfindToInteractable("Blue Ring", pathStack, nodes));
		//console.log(pathfindTo(currentNode(), nodes.get("Toronto Vine")!));
		console.log(
			getTraversedPath(
				pathfindTo(nodes.get("Violet Shell 0")!, pathStack, nodes)!,
				pathStack,
				nodes,
			),
		);
	}, [pathStack]);

	return (
		<>
			<div className='pathContainer' id='currentPathContainer'>
				<div className='pathHeader'>Path To Root</div>
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
								className={`pathNode${
									index ==
									pathStack.findLastIndex((edge) =>
										edge.node.interactables?.includes("Pink Sphere"),
									)
										? " pinkRing"
										: ""
								}${
									index ==
									pathStack.findLastIndex(
										(edge) => edge.node.blueRingDownDestination,
									)
										? " blueRing"
										: ""
								}`}
								onClick={() =>
									traversePath(
										path
											.slice(index + 1, path.length)
											.toReversed()
											.map((edge) => ({ ...edge, up: true })),
									)
								}
							>
								{edge.node.name}
							</div>
						</Fragment>
					))}
				</div>
			</div>
			<div id='nodeContainer'>
				<NodeInfo node={currentNode}></NodeInfo>

				{(currentNode.edges.length > 0 || blueRingParentEdge) && (
					<div id='edgesContainer'>
						Possible destinations:
						<div id='edgesList'>
							{currentNode.edges.map((edge, index) => (
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
										src={`./images/edges/${currentNode.name} - ${edge.node.name}.jpg`}
										alt=''
									/>
								</span>
							))}
							{blueRingParentEdge && (
								<span className='edge blueRing' onClick={traverseBlueRing}>
									<Image
										className='icon-small'
										src={`./images/icons/Blue Ring.webp`}
									/>
									{`${blueRingParentEdge.node.blueRingDownDestination!.nodeName} ${blueRingParentEdge.node.blueRingDownDestination!.note ?? ""}`}
								</span>
							)}
							{pinkRingParentEdge && (
								<span className='edge pinkRing' onClick={traversePinkRing}>
									<Image
										className='icon-small'
										src={`./images/icons/Pink Ring.webp`}
									/>
									{pinkRingParentEdge.node.name}
								</span>
							)}
						</div>
					</div>
				)}
			</div>
			<div className='pathContainer' id='pathfindContainer'>
				<div className='pathHeader'>Path To Location</div>
				<div className='pathHeader'>
					<input name='location' type='radio' />
					<input name='interactable' type='radio' />
				</div>
			</div>
		</>
	);
}
