import {
	Node,
	Edge,
	Interactable,
	SearchableUpgrade,
	interactables,
	searchableUpgrades,
} from "@/app/types";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import { pathfindTo, pathfindToInteractables, pathfindToUpgrades } from "./pathfindHelper";
import { nodes } from "../data";
import "../../css/pathfinding.css";

interface PathfindingProps {
	loading: boolean;
	pathStack: Edge[];
	traversePath: (path: Edge[]) => void;
}

export default function Pathfinding({ loading, pathStack, traversePath }: PathfindingProps) {
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
		<div className='sideContainer' id='pathfindContainer'>
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
			{pathfindResult && (
				<div className='pathList'>
					{pathfindResult.length > 0 ? (
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
					) : (
						"No Path Found"
					)}
				</div>
			)}
		</div>
	);
}
