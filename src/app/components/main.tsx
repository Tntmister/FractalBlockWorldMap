"use client";
import { ChangeEvent, Fragment, useEffect, useMemo, useRef, useState } from "react";
import {
	Node,
	Edge,
	Interactable,
	interactables,
	searchableUpgrades,
	SearchableUpgrade,
} from "../types";
import NodeInfo from "./nodeInfo";
import "../css/main.css";
import {
	getTraversedPath,
	pathfindTo,
	pathfindToInteractables,
	pathfindToUpgrades,
} from "./pathfinding";
import { nodes } from "./data";
import { initLocalStorage, initStackPath } from "./localStorage";
import Image from "next/image";

export default function Main() {
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		setPathStackState(initLocalStorage());
		setLoading(false);
	}, []);
	// eslint-disable-next-line prefer-const
	let [pathStack, setPathStackState] = useState<Edge[]>(initStackPath);
	function setPathStack(pathStack: Edge[]) {
		setPathStackState(pathStack);
		localStorage.setItem(
			"nodeNameList",
			JSON.stringify(pathStack.map((edge) => edge.destinationNode.name)),
		);
	}

	const currentNode = useMemo(() => pathStack.at(-1)!.destinationNode, [pathStack]);

	// where you would go if you used the blue ring in the current node
	const blueActiveZoneEdge = useMemo(() => {
		if (currentNode.interactables.includes("Blue Ring")) {
			return pathStack.findLast((edge) => edge.destinationNode.blueActiveZoneDestination);
		}
		return;
	}, [pathStack]);

	function traverseBlueRing() {
		const destinationNode = nodes.get(
			blueActiveZoneEdge!.destinationNode.blueActiveZoneDestination!.nodeName,
		)!;
		traversePath([
			{
				originNode: currentNode,
				destinationNode: destinationNode,
				id: blueActiveZoneEdge!.id,
				distance: 0,
				blueRing: true,
			},
		]);
	}

	const pinkSphereEdge = useMemo(() => {
		if (currentNode.interactables.includes("Pink Ring")) {
			return pathStack.findLast((edge) =>
				edge.destinationNode.interactables.includes("Pink Sphere"),
			);
		}
		return;
	}, [pathStack]);

	function traversePinkRing() {
		if (pinkSphereEdge!.destinationNode.pinkSphereDestination) {
			const destinationNode = nodes.get(
				pinkSphereEdge!.destinationNode.pinkSphereDestination!.nodeName,
			)!;
			traversePath([
				{
					originNode: currentNode,
					destinationNode: destinationNode,
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
		if (!loading) {
			if (pathfindType == "interactable" || pathfindType == "upgrade")
				for (const option of (document.querySelector("#pathfindList") as HTMLSelectElement)
					.selectedOptions)
					option.selected = false;
			else if (pathfindType == "node")
				(document.querySelector("[list='pathfindList']") as HTMLInputElement).value = "";
			(document.querySelector("[name='pathfindButton']") as HTMLInputElement).classList.add(
				"disabled",
			);
		}
	}, [pathfindType]);

	const pathfindTarget = useRef<Node | Interactable[] | SearchableUpgrade[]>(null);
	const pathfindPathstack = useRef<Edge[]>(null);
	const [pathfindResult, setPathfindResult] = useState<Edge[] | null>();

	function pathfindSelectEvent(e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) {
		let enableButton = false;
		switch (pathfindType) {
			case "upgrade":
				pathfindTarget.current = Array.from(e.target.selectedOptions).map(
					(option) => option.value,
				) as SearchableUpgrade[];

				enableButton = pathfindTarget.current.every((upgrade) =>
					searchableUpgrades.includes(upgrade),
				);
				break;

			case "interactable":
				pathfindTarget.current = Array.from(e.target.selectedOptions).map(
					(option) => option.value,
				) as Interactable[];

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
					.edges.findIndex((edge) => edge.destinationNode.name == "Stable Singletons"),
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
			(pathUp
				? pathStack.findLastIndex((edge) => edge.destinationNode.noEscape)
				: pathStack.length - 2);
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
						pathfindTarget.current as SearchableUpgrade[],
						pathStack.slice(0, i + 1),
						nodesCopy,
					);
					if (pathfind) paths.push(path.concat(pathfind));
					break;
				}
				case "interactable": {
					const pathfind = pathfindToInteractables(
						pathfindTarget.current as Interactable[],
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
			{loading == false && (
				<>
					<div className='pathContainer' id='currentPathContainer'>
						<div className='pathHeader'>Path To Root</div>
						<div className='pathList'>
							{pathStack.map((edge, index, path) => (
								<Fragment key={`path${index}`}>
									{index != 0 &&
										(edge.destinationNode.noEscape ? (
											<img
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
												edge.destinationNode.interactables?.includes(
													"Pink Sphere",
												),
											)
												? " pinkRing"
												: ""
										}${
											index ==
											pathStack.findLastIndex(
												(edge) =>
													edge.destinationNode.blueActiveZoneDestination,
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
										{path[index + 1]?.requiresKey &&
											(() => {
												const key = path[index + 1].requiresKey!.includes(
													"Singleton",
												)
													? "Stable Singletons Key"
													: path[index + 1].requiresKey!;
												return (
													<img
														className='icon-small'
														src={`./images/icons/${key}.webp`}
														alt={key}
													/>
												);
											})()}
										{edge.destinationNode.name}
									</div>
								</Fragment>
							))}
						</div>
					</div>
					<div id='nodeContainer'>
						<NodeInfo node={currentNode}></NodeInfo>

						{(currentNode.edges.length > 0 || blueActiveZoneEdge || pinkSphereEdge) && (
							<div id='edgesContainer'>
								Possible destinations:
								<div id='edgesList'>
									{currentNode.edges.map((edge, index) => (
										<span
											key={`edge${index}`}
											className='edge'
											onClick={
												edge.destinationNode != currentNode
													? () => traversePath([edge])
													: undefined
											}
										>
											{edge.requiresKey && (
												<img
													className='icon-small'
													src={`./images/icons/${edge.requiresKey.includes("Singleton") ? "Stable Singletons Key" : edge.requiresKey}.webp`}
													alt='Stable Singletons Key'
												/>
											)}
											{edge.arcade && (
												<img
													className='icon-small'
													src={`./images/icons/Arcade.webp`}
													alt='Arcade'
												/>
											)}
											{edge.whiteBoxDevice && (
												<img
													className='icon-small'
													src={`./images/icons/White Box Device.webp`}
													alt='White Box Device'
												/>
											)}
											{edge.impassable && (
												<img
													className='icon-small'
													src={`./images/icons/One Way.webp`}
													alt='Impassable'
												/>
											)}
											{edge.destinationNode.name}
											{edge.note && ` (${edge.note})`}
											<img
												className='edgeTooltip'
												src={`./images/edges/${edge.originNode.name} - ${edge.destinationNode.name}.webp`}
												alt=''
											/>
										</span>
									))}
									{blueActiveZoneEdge && (
										<span className='edge blueRing' onClick={traverseBlueRing}>
											<img
												className='icon-small'
												src={`./images/icons/Blue Ring.webp`}
												alt='Blue Ring'
											/>
											{`${blueActiveZoneEdge.destinationNode.blueActiveZoneDestination!.nodeName} ${blueActiveZoneEdge.destinationNode.blueActiveZoneDestination!.note ?? ""}`}
										</span>
									)}
									{pinkSphereEdge && (
										<span className='edge pinkRing' onClick={traversePinkRing}>
											<img
												className='icon-small'
												src={`./images/icons/Pink Ring.webp`}
												alt='Pink Ring'
											/>
											{pinkSphereEdge.destinationNode.pinkSphereDestination
												? `${pinkSphereEdge.destinationNode.pinkSphereDestination.nodeName} ${pinkSphereEdge.destinationNode.pinkSphereDestination.note ?? ""}`
												: pinkSphereEdge.destinationNode.name}
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
									onChange={(e) =>
										setPathfindType(e.target.value as typeof pathfindType)
									}
								/>
							</label>
							<label>
								<span>Interactable</span>
								<input
									name='pathfindType'
									value='interactable'
									type='radio'
									onChange={(e) =>
										setPathfindType(e.target.value as typeof pathfindType)
									}
								/>
							</label>
							<label>
								<span>Upgrade</span>
								<input
									name='pathfindType'
									value='upgrade'
									type='radio'
									onChange={(e) =>
										setPathfindType(e.target.value as typeof pathfindType)
									}
								/>
							</label>
							{pathfindType == "node" && (
								<>
									<input
										list='pathfindList'
										onChange={pathfindSelectEvent}
										required
									/>
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
													{edge.destinationNode.name}
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
			)}
		</>
	);
}
