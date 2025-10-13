"use client";
import { ChangeEvent, Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
	Node,
	Edge,
	interactable,
	interactables,
	searchableUpgrades,
	searchableUpgrade,
	InputNode,
	InputEdgeGeneric,
	monster,
} from "../types";
import Image from "./Image";
import NodeInfo from "./nodeInfo";
import "../css/main.css";
import {
	getTraversedPath,
	pathfindTo,
	pathfindToInteractables,
	pathfindToUpgrades,
} from "./pathfinding";
import { packages } from "../input/packages";

function nodeListToPathStack(nodeNames: string[], nodes: Map<string, Node>): Edge[] {
	try {
		return [
			{
				node: nodes.get(nodeNames[0])!,
				distance: 0,
				id: -1,
			},
			...nodeNames.slice(1).map(
				(nodeName, index, arr) =>
					nodes.get(nodeNames[index])!.edges.find((edge) => edge.node.name == nodeName) ??
					(() => {
						const error = new Error(
							`${nodeName} is not connected to ${arr[index - 1]}`,
						);
						error.name = "InvalidPathError";
						throw error;
					})(),
			),
		];
	} catch (error) {
		if ((error as Error).name == "InvalidPathError")
			console.warn("Error loading local storage path: " + (error as Error).message);
		else throw error;
		return [];
	}
}

export default function Main() {
	const [selectedPackage, setSelectedPackage] =
		useState<(typeof packages)[number]>("Classic Xar");

	useEffect(() => {
		document.title = "Fractal Block World Map";

		const localStoragePackage = localStorage.getItem("package") as (typeof packages)[number];
		if (localStoragePackage) setSelectedPackage(localStoragePackage);
		console.log(localStoragePackage);
	}, []);

	const nodes = useMemo(() => {
		const inputNodes = require(`../input/${selectedPackage}/nodes`).inputNodes as InputNode[];
		const inputEdges = require(`../input/${selectedPackage}/edges`)
			.inputEdges as InputEdgeGeneric;
		const monsters = require(`../input/${selectedPackage}/monsters`).monsters as monster[];
		const nodes: Map<string, Node> = new Map();
		// initialize nodes from input.ts
		for (const node of inputNodes) {
			nodes.set(node.name, {
				name: node.name,
				interactables: node.interactables?.toSorted() ?? [],
				upgrades: node.upgrades?.toSorted() ?? [],
				items: node.items?.toSorted() ?? [],
				notes: node.notes,
				noEscape: node.noEscape ?? false,
				trophy: node.trophy ?? false,
				secretTrophy: node.secretTrophy ?? false,
				blueActiveZoneDestination: node.blueActiveZoneDestination,
				pinkSphereDestination: node.pinkSphereDestination,
				monsters: monsters
					.filter((monster) => node.monsters?.includes(monster.name))
					.toSorted(),
				edges: [],
			});
		}

		let edgeId = 0;
		// initialialize edges from input.ts
		for (const [fromName, edge] of Object.entries(inputEdges)) {
			for (const [toName, edgeInfo] of Object.entries(edge)) {
				const fromNode = nodes.get(fromName)!;
				const toNode = nodes.get(toName)!;
				if (fromNode && toNode) if (edgeInfo.distance === Infinity) edgeInfo.distance = 100;
				fromNode.edges.push({
					node: toNode,
					id: ++edgeId,
					...edgeInfo,
				});
			}
		}
		return nodes;
	}, [selectedPackage]);

	const initPathStack = useMemo(
		() => nodeListToPathStack(require(`../input/${selectedPackage}/nodes`).startingPath, nodes),
		[selectedPackage],
	);
	useEffect(() => {
		const localNodeNameList = localStorage.getItem("nodeNameList");
		const localNodeNameListParsed = localNodeNameList ? JSON.parse(localNodeNameList) : null;
		const localPathStack =
			localNodeNameListParsed && localNodeNameListParsed[selectedPackage]
				? nodeListToPathStack(localNodeNameListParsed[selectedPackage], nodes)
				: null;
		setPathStack(localPathStack && localPathStack.length > 0 ? localPathStack : initPathStack);
		localStorage.setItem("package", selectedPackage);
	}, [selectedPackage]);
	// eslint-disable-next-line prefer-const
	let [pathStack, setPathStackState] = useState<Edge[]>(initPathStack);

	function setPathStack(pathStack: Edge[]) {
		setPathStackState(pathStack);
		const localNodeNameList = JSON.parse(localStorage.getItem("nodeNameList") ?? "{}");
		localStorage.setItem(
			"nodeNameList",
			JSON.stringify({
				...localNodeNameList,
				[selectedPackage]: pathStack.map((edge) => edge.node.name),
			}),
		);
	}

	const currentNode = useMemo(() => pathStack.at(-1)!.node, [pathStack]);

	const blueActiveZoneEdge = useMemo(() => {
		if (currentNode.interactables.includes("Blue Ring")) {
			return pathStack.findLast((edge) => edge.node.blueActiveZoneDestination);
		}
		return;
	}, [pathStack]);

	function traverseBlueRing() {
		const destinationNode = nodes.get(
			blueActiveZoneEdge!.node.blueActiveZoneDestination!.nodeName,
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
				pinkSphereEdge!.node.pinkSphereDestination!.nodeName,
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

	const [pathfindType, setPathfindType] = useState<"interactable" | "node" | "upgrade">("node");

	useEffect(() => {
		if (pathfindType == "interactable" || pathfindType == "upgrade")
			for (const option of (document.querySelector("#pathfindList") as HTMLSelectElement)
				.selectedOptions)
				option.selected = false;
		else if (pathfindType == "node")
			(document.querySelector("[list='pathfindList']") as HTMLInputElement).value = "";
		(document.querySelector("[name='pathfindButton']") as HTMLInputElement).classList.add(
			"disabled",
		);
	}, [pathfindType]);

	const pathfindTarget = useRef<Node | interactable[] | searchableUpgrade[]>(null);
	const pathfindPathstack = useRef<Edge[]>(null);
	const [pathfindResult, setPathfindResult] = useState<Edge[] | null>();

	function pathfindSelectEvent(e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) {
		let enableButton = false;
		switch (pathfindType) {
			case "upgrade":
				pathfindTarget.current = Array.from(e.target.selectedOptions).map(
					(option) => option.value,
				) as searchableUpgrade[];

				enableButton = pathfindTarget.current.every((upgrade) =>
					searchableUpgrades.includes(upgrade),
				);
				break;

			case "interactable":
				pathfindTarget.current = Array.from(e.target.selectedOptions).map(
					(option) => option.value,
				) as interactable[];

				enableButton = pathfindTarget.current.every((interactable) =>
					interactables.includes(interactable),
				);
				break;

			case "node":
				pathfindTarget.current = nodes.get(e.target.value)!;
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
		for (
			let i = pathStack.length - 1;
			i >
			(pathUp ? pathStack.findLastIndex((edge) => edge.node.noEscape) : pathStack.length - 2);
			i--
		) {
			// for each upward node, create an upwards path to that node before pathfinding down to the destination
			const path = pathStack
				.slice(i, pathStack.length - 1)
				.toReversed()
				.map((edge): Edge => {
					return {
						...edge,
						up: true,
					};
				});
			switch (pathfindType) {
				case "upgrade": {
					const pathfind = pathfindToUpgrades(
						pathfindTarget.current as searchableUpgrade[],
						pathStack.slice(0, i + 1),
						nodesCopy,
					);
					if (pathfind) paths.push(path.concat(pathfind));
					break;
				}
				case "interactable": {
					const pathfind = pathfindToInteractables(
						pathfindTarget.current as interactable[],
						pathStack.slice(0, i + 1),
						nodesCopy,
					);
					if (pathfind) paths.push(path.concat(pathfind));

					break;
				}
				case "node": {
					const pathfind = pathfindTo(
						(pathfindTarget.current as Node).name,
						pathStack.slice(0, i + 1),
						nodesCopy,
					);
					if (pathfind) paths.push(path.concat(pathfind));
					break;
				}
			}
		}

		setPathfindResult(
			paths.length > 0
				? [
						pathStack.at(-1)!,
						...paths.sort(
							(a, b) =>
								a.reduce((acc, edge) => acc + edge.distance, 0) -
								b.reduce((acc, edge) => acc + edge.distance, 0),
						)[0],
					]
				: [],
		);
		pathfindPathstack.current = pathStack.slice();
	}

	function traversePathfind(path: Edge[], pathIndex: number) {
		pathStack = pathfindPathstack.current!;
		traversePath(path.slice(1, pathIndex + 1));
	}

	return (
		<>
			<div className='pathContainer' id='currentPathContainer'>
				<div id='packageContainer'>
					<select
						id='packageList'
						onChange={(e) =>
							setSelectedPackage(e.target.value as (typeof packages)[number])
						}
						value={selectedPackage}
					>
						{packages.map((packageName) => (
							<option key={packageName} value={packageName}>
								{packageName}
							</option>
						))}
					</select>
				</div>
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
											.slice(index, path.length)
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
				<NodeInfo node={currentNode} selectedPackage={selectedPackage}></NodeInfo>

				{(currentNode.edges.length > 0 || blueActiveZoneEdge || pinkSphereEdge) && (
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
										src={`./images/packages/${selectedPackage}/edges/${currentNode.name} - ${edge.node.name}.webp`}
										fallbackSrc={`./images/packages/Classic Xar/edges/${currentNode.name} - ${edge.node.name}.webp`}
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
					<label>
						<span>Upgrade</span>
						<input
							name='pathfindType'
							value='upgrade'
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
					{pathfindType == "upgrade" && (
						<select id='pathfindList' onChange={pathfindSelectEvent} multiple>
							{searchableUpgrades.map((upgrade) => (
								<option key={upgrade} value={upgrade}>
									{upgrade}
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
										{index > 0 ? `↓${edge.up ? " (up)" : ""}` : ""}
										<div
											className={`pathNode${indexOfCurrent == index ? " current" : ""}`}
											onClick={() => traversePathfind(path, index)}
										>
											{edge.node.name}
										</div>
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
