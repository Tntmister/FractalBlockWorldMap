import { Edge, Node } from "../types";
import { nodes, startingPath } from "./data";

function nodeListToPathStack(nodeNames: string[]): Edge[] {
	const dummyNode: Node = {
		name: "dummy node",
		upgrades: [],
		items: [],
		monsters: [],
		get edges() {
			return [
				{
					destinationNode: nodes.get(nodeNames[0])!,
					distance: 0,
					id: -1,
					originNode: this,
				},
			];
		},
		interactables: [],
		blueActiveZoneDestination: undefined,
		pinkSphereDestination: undefined,
		noEscape: false,
		notes: undefined,
		secretTrophy: false,
		trophy: false,
	};
	return [
		dummyNode.edges[0],
		...nodeNames.slice(1).map(
			(nodeName, index, arr) =>
				nodes
					.get(nodeNames[index])!
					.edges.find((edge) => edge.destinationNode.name == nodeName) ??
				(() => {
					const error = new Error(`${nodeName} is not connected to ${arr[index - 1]}`);
					error.name = "InvalidPathError";
					throw error;
				})(),
		),
	];
}

export const initStackPath = nodeListToPathStack(startingPath);

export function initLocalStorage(): Edge[] {
	const localNodeNameList = localStorage.getItem("nodeNameList");
	if (localNodeNameList) {
		const nodeNameList = JSON.parse(localNodeNameList);
		try {
			return nodeListToPathStack(JSON.parse(localNodeNameList));
		} catch (error) {
			console.warn("Error loading local storage path: " + (error as Error).message);
			return initStackPath;
		}
	} else {
		return initStackPath;
	}
}
