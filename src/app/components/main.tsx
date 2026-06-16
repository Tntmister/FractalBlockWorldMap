"use client";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Edge } from "../types";
import NodeInfo from "./nodeInfo";
import "../css/main.css";
import {} from "./pathfinding/pathfinding";
import { nodes } from "./data";
import { initLocalStorage, initStackPath } from "./localStorage";
import Pathfinding from "./pathfinding/pathfinding";
import { getTraversedPath } from "./pathfinding/pathfindHelper";

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
											{edge.yellowBoxDevice && (
												<img
													className='icon-small'
													src={`./images/icons/Yellow Box Device.webp`}
													alt='Yellow Box Device'
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
					<Pathfinding
						loading={loading}
						pathStack={pathStack}
						traversePath={traversePath}
					/>
				</>
			)}
		</>
	);
}
