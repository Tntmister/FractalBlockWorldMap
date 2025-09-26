"use client";
import { ChangeEvent, Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Node, Edge, interactable, interactables } from "../types";
import Image from "./Image";
import NodeInfo from "./nodeInfo";
import "../css/main.css";
import { inputNodes, nodeName } from "../input/nodes";
import { inputEdges } from "../input/edges";
import { monsters } from "../input/monsters";
import { getTraversedPath, pathfindTo, pathfindToInteractables } from "./pathfinding";

const nodes: Map<nodeName, Node> = new Map();
// initialize nodes from input.ts
for (const node of inputNodes) {
	nodes.set(node.name as nodeName, {
		name: node.name as nodeName,
		interactables: node.interactables?.toSorted() ?? [],
		upgrades: node.upgrades?.toSorted() ?? [],
		items: node.items?.toSorted() ?? [],
		notes: node.notes,
		noEscape: node.noEscape ?? false,
		trophy: node.trophy ?? false,
		secretTrophy: node.secretTrophy ?? false,
		blueActiveZoneDestination: node.blueActiveZoneDestination,
		pinkSphereDestination: node.pinkSphereDestination,
		monsters: monsters.filter((monster) => node.monsters?.includes(monster.name)).toSorted(),
		edges: [],
	});
}

let edgeId = 0;
// initialialize edges from input.ts
for (const [fromName, edge] of Object.entries(inputEdges)) {
	for (const [toName, edgeInfo] of Object.entries(edge)) {
		const fromNode = nodes.get(fromName as nodeName)!;
		const toNode = nodes.get(toName as nodeName)!;
		if (fromNode && toNode)
			fromNode.edges.push({
				node: toNode,
				id: ++edgeId,
				...edgeInfo,
			});
	}
}

const startingPath: nodeName[] = [
	"Top of the World",
	"Edge of the World",
	"Outer Space -4",
	"Outer Space -3",
	"Outer Space -2",
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

function nodeListToPathStack(nodeNames: nodeName[]): Edge[] {
	try {
		return [
			{
				node: nodes.get(nodeNames[0])!,
				distance: 0,
				id: -1,
			},
			...nodeNames
				.slice(1)
				.map(
					(nodeName, index) =>
						nodes
							.get(nodeNames[index])!
							.edges.find((edge) => edge.node.name == nodeName)!,
				),
		];
	} catch (error) {
		console.warn("Error loading saved path:" + error);
		return [];
	}
}
const initPathStack = nodeListToPathStack(startingPath);

export default function Main() {
	// eslint-disable-next-line prefer-const
	let [pathStack, setPathStackState] = useState<Edge[]>(initPathStack);

	function setPathStack(pathStack: Edge[]) {
		setPathStackState(pathStack);
		localStorage.setItem(
			"nodeNameList",
			JSON.stringify(pathStack.map((edge) => edge.node.name)),
		);
	}

	useEffect(() => {
		document.title = "Fractal Block World Map";
		const localNodeNameList = localStorage.getItem("nodeNameList");
		const localPathStack = localNodeNameList
			? nodeListToPathStack(JSON.parse(localNodeNameList))
			: null;
		setPathStack(localPathStack && localPathStack.length > 0 ? localPathStack : initPathStack);
	}, []);

	const currentNode = useMemo(() => pathStack.at(-1)!.node, [pathStack]);

	const blueActiveZoneEdge = useMemo(() => {
		if (currentNode.interactables.includes("Blue Ring")) {
			return pathStack.findLast((edge) => edge.node.blueActiveZoneDestination);
		}
		return;
	}, [pathStack]);

	function traverseBlueRing() {
		const destinationNode = nodes.get(
			blueActiveZoneEdge!.node.blueActiveZoneDestination!.nodeName as nodeName,
		)!;
		traversePath([
			{
				node: destinationNode,
				id: blueActiveZoneEdge!.id,
				distance: 0,
				blueRing: true,
			},
		]);
	}

	const pinkSphereEdge = useMemo(() => {
		if (currentNode.interactables.includes("Pink Ring")) {
			return pathStack.findLast((edge) => edge.node.interactables.includes("Pink Sphere"));
		}
		return;
	}, [pathStack]);

	function traversePinkRing() {
		if (pinkSphereEdge!.node.pinkSphereDestination) {
			const destinationNode = nodes.get(
				pinkSphereEdge!.node.pinkSphereDestination!.nodeName as nodeName,
			)!;
			traversePath([
				{
					node: destinationNode,
					id: pinkSphereEdge!.id,
					distance: 0,
					pinkRing: true,
				},
			]);
		} else setPathStack(pathStack.slice(0, pathStack.lastIndexOf(pinkSphereEdge!) + 1));
	}

	function traversePath(path: Edge[]) {
		setPathStack(getTraversedPath(path, pathStack, nodes));
	}

	useEffect(() => {
		document
			.querySelectorAll("#currentPathContainer > .pathList > .pathNode")
			.values()
			.toArray()
			.at(-1)
			?.scrollIntoView();
		document
			.querySelectorAll("#pathfindContainer > .pathList > .current")
			.values()
			.toArray()
			.at(-1)
			?.scrollIntoView();
	}, [pathStack]);

	const [pathfindType, setPathfindType] = useState<"interactable" | "node">("node");

	useEffect(() => {
		if (pathfindType == "interactable")
			for (const option of (document.querySelector("#pathfindList") as HTMLSelectElement)
				.selectedOptions)
				option.selected = false;
		else if (pathfindType == "node")
			(document.querySelector("[list='pathfindList']") as HTMLInputElement).value = "";
		(document.querySelector("[name='pathfindButton']") as HTMLInputElement).classList.add(
			"disabled",
		);
	}, [pathfindType]);

	const pathfindTarget = useRef<Node | interactable[]>(null);
	const pathfindPathstack = useRef<Edge[]>(null);
	const [pathfindResult, setPathfindResult] = useState<Edge[] | null>();

	function pathfindSelectEvent(e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) {
		let enableButton = false;
		switch (pathfindType) {
			case "interactable":
				pathfindTarget.current = Array.from(e.target.selectedOptions).map(
					(option) => option.value,
				) as interactable[];

				enableButton = pathfindTarget.current.every((interactable) =>
					interactables.includes(interactable),
				);
				break;

			case "node":
				pathfindTarget.current = nodes.get(e.target.value as nodeName)!;
				enableButton = !!pathfindTarget.current;
				break;
			default:
				break;
		}

		if (enableButton)
			(
				document.querySelector("[name='pathfindButton']") as HTMLInputElement
			).classList.remove("disabled");
		else
			(document.querySelector("[name='pathfindButton']") as HTMLInputElement).classList.add(
				"disabled",
			);
	}

	function pathfindEvent() {
		if (
			(
				document.querySelector("[name='pathfindButton']") as HTMLInputElement
			).classList.contains("disabled")
		)
			return;
		const nodesCopy = structuredClone(nodes);
		if (
			!(document.getElementsByName("pathfindStableSingleton")[0] as HTMLInputElement).checked
		) {
			nodesCopy.get("EMERGENCY")!.edges.splice(
				nodesCopy
					.get("EMERGENCY")!
					.edges.findIndex((edge) => edge.node.name == "Stable Singletons"),
				1,
			);
		}
		if (!(document.getElementsByName("pathfindKeys")[0] as HTMLInputElement).checked) {
			nodesCopy.values().forEach((node) => {
				for (let i = node.edges.length - 1; i >= 0; i--) {
					if (
						node.edges[i].requiresKey == "Yellow Key" ||
						node.edges[i].requiresKey == "Universe Key" ||
						node.edges[i].requiresKey == "Blue Key" ||
						node.edges[i].requiresKey == "Green Key" ||
						node.edges[i].requiresKey == "Secret Farmhouse Key" ||
						node.edges[i].requiresKey == "Laser Genesis Key"
					) {
						node.edges.splice(i, 1);
					}
				}
			});
		}
		const pathUp = (document.getElementsByName("pathfindUp")[0] as HTMLInputElement).checked;
		const paths = [];
		switch (pathfindType) {
			case "interactable": {
				const interactables = pathfindTarget.current as interactable[];
				for (
					let i = pathStack.length;
					i >
					(pathUp
						? interactables.includes("Blue Ring")
							? pathStack.findLastIndex((edge) => edge.node.blueActiveZoneDestination)
							: 0
						: pathStack.length - 1);
					i--
				) {
					const path = pathStack
						.slice(i, pathStack.length)
						.toReversed()
						.map((edge): Edge => {
							return {
								...edge,
								up: true,
							};
						});
					const pathfind = pathfindToInteractables(
						interactables,
						pathStack.slice(0, i),
						nodesCopy,
					);
					if (pathfind) paths.push(path.concat(pathfind));
				}
				break;
			}
			case "node":
				for (
					let i = pathStack.length;
					i >
					(pathUp
						? pathStack.findLastIndex((edge) => edge.node.noEscape)
						: pathStack.length - 1);
					i--
				) {
					const path = pathStack
						.slice(i, pathStack.length)
						.toReversed()
						.map((edge): Edge => {
							return {
								...edge,
								up: true,
							};
						});
					const pathfind = pathfindTo(
						(pathfindTarget.current as Node).name,
						pathStack.slice(0, i),
						nodesCopy,
					);
					if (pathfind) paths.push(path.concat(pathfind));
				}
				break;
			default:
				break;
		}
		setPathfindResult(
			paths.sort(
				(a, b) =>
					a.reduce((acc, edge) => acc + edge.distance, 0) -
					b.reduce((acc, edge) => acc + edge.distance, 0),
			)[0],
		);
		pathfindPathstack.current = pathStack.slice();
	}

	function traversePathfind(path: Edge[], pathIndex: number, pathCurrentIndex: number) {
		pathStack = pathfindPathstack.current!;
		traversePath(path.slice(0, pathIndex + 1));
	}

	return (
		<>
			<div className='pathContainer' id='currentPathContainer'>
				<div className='pathHeader'>Path To Root</div>
				<div className='pathList'>
					{pathStack.map((edge, index, path) => (
						<Fragment key={`path${index}`}>
							{index != 0 &&
								(edge.node.noEscape ? (
									<Image
										className='icon'
										src='./images/icons/One Way.webp'
										alt='One Way'
									/>
								) : (
									"↑"
								))}
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
										(edge) => edge.node.blueActiveZoneDestination,
									)
										? " blueRing"
										: ""
								}`}
								onClick={() => {
									traversePath(
										path
											.slice(index + 1, path.length)
											.toReversed()
											.map((edge) => ({
												...edge,
												up: true,
											})),
									);
								}}
							>
								{path[index + 1]?.requiresKey && (
									<Image
										className='icon-small'
										src={`./images/icons/${path[index + 1].requiresKey!.includes("Singleton") ? "Stable Singletons Key" : path[index + 1].requiresKey}.webp`}
									/>
								)}
								{edge.node.name}
							</div>
						</Fragment>
					))}
				</div>
			</div>
			<div id='nodeContainer'>
				<NodeInfo node={currentNode}></NodeInfo>

				{(currentNode.edges.length > 0 || blueActiveZoneEdge) && (
					<div id='edgesContainer'>
						Possible destinations:
						<div id='edgesList'>
							{currentNode.edges.map((edge, index) => (
								<span
									key={`edge${index}`}
									className='edge'
									onClick={
										edge.node != currentNode
											? () => traversePath([edge])
											: undefined
									}
								>
									{edge.requiresKey && (
										<Image
											className='icon-small'
											src={`./images/icons/${edge.requiresKey.includes("Singleton") ? "Stable Singletons Key" : edge.requiresKey}.webp`}
										/>
									)}
									{edge.arcade && (
										<Image
											className='icon-small'
											src={`./images/icons/Arcade.webp`}
										/>
									)}
									{edge.whiteBoxDevice && (
										<Image
											className='icon-small'
											src={`./images/icons/White Box Device.webp`}
										/>
									)}
									{edge.impassable && (
										<Image
											className='icon-small'
											src={`./images/icons/One Way.webp`}
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
							{blueActiveZoneEdge && (
								<span className='edge blueRing' onClick={traverseBlueRing}>
									<Image
										className='icon-small'
										src={`./images/icons/Blue Ring.webp`}
									/>
									{`${blueActiveZoneEdge.node.blueActiveZoneDestination!.nodeName} ${blueActiveZoneEdge.node.blueActiveZoneDestination!.note ?? ""}`}
								</span>
							)}
							{pinkSphereEdge && (
								<span className='edge pinkRing' onClick={traversePinkRing}>
									<Image
										className='icon-small'
										src={`./images/icons/Pink Ring.webp`}
									/>
									{pinkSphereEdge.node.pinkSphereDestination
										? `${pinkSphereEdge.node.pinkSphereDestination.nodeName} ${pinkSphereEdge.node.pinkSphereDestination.note ?? ""}`
										: pinkSphereEdge.node.name}
								</span>
							)}
						</div>
					</div>
				)}
			</div>
			<div className='pathContainer' id='pathfindContainer'>
				<div className='pathHeader'>Path To Location</div>
				<div id='pathfindSelector'>
					<label>
						<span>Location</span>
						<input
							name='pathfindType'
							value='node'
							type='radio'
							defaultChecked
							onChange={(e) => setPathfindType(e.target.value as typeof pathfindType)}
						/>
					</label>
					<label>
						<span>Interactable</span>
						<input
							name='pathfindType'
							value='interactable'
							type='radio'
							onChange={(e) => setPathfindType(e.target.value as typeof pathfindType)}
						/>
					</label>
					{pathfindType == "node" && (
						<>
							<input list='pathfindList' onChange={pathfindSelectEvent} required />
							<datalist id='pathfindList'>
								<option disabled value=''></option>
								{nodes
									.values()
									.toArray()
									.toSorted((a, b) => a.name.localeCompare(b.name))
									.map((node) => (
										<option key={node.name} value={node.name}>
											{node.name}
										</option>
									))}
							</datalist>
						</>
					)}
					{pathfindType == "interactable" && (
						<select id='pathfindList' onChange={pathfindSelectEvent} multiple>
							{interactables.map((interactable) => (
								<option key={interactable} value={interactable}>
									{interactable}
								</option>
							))}
						</select>
					)}
					<div className='filters'>
						<label>
							<input name='pathfindStableSingleton' type='checkbox' />
							<span>Include Stable Singletons</span>
						</label>
						<label>
							<input name='pathfindKeys' type='checkbox' />
							<span>Include Key Required Paths</span>
						</label>
						<label>
							<input defaultChecked name='pathfindUp' type='checkbox' />
							<span>Include Paths Upwards</span>
						</label>
					</div>
					<button
						name='pathfindButton'
						type='button'
						className='pathNode disabled'
						onClick={pathfindEvent}
					>
						Find Path
					</button>
				</div>
				<div className='pathList'>
					{pathfindResult ? (
						<>
							{pathfindResult.map((edge, index, path) => {
								const indexOfCurrent = path.findIndex(
									(edge) => pathStack.at(-1)!.id == edge.id,
								);
								return (
									<Fragment key={`pathfind${index}`}>
										<div
											className={`pathNode${indexOfCurrent == index ? " current" : ""}`}
											onClick={() =>
												traversePathfind(
													path,
													edge.up ? index - 1 : index,
													indexOfCurrent,
												)
											}
										>
											{edge.node.name}
										</div>
										{index < path.length - 1
											? `↓${edge.up ? " (up)" : ""}`
											: ""}
									</Fragment>
								);
							})}
						</>
					) : pathfindResult === undefined ? (
						""
					) : (
						"No Path Available!"
					)}
				</div>
			</div>
		</>
	);
}
