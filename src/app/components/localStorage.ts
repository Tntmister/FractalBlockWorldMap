import { Edge } from "../types";
import { nodes, startingPath } from "./data";

function nodeListToPathStack(nodeNames: string[]): Edge[] {
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

export const initStackPath = nodeListToPathStack(startingPath);

export function initLocalStorage(): Edge[] {
	console.log("a");
	const localNodeNameList = localStorage.getItem("nodeNameList");
	console.log("b");
	if (localNodeNameList) {
		return nodeListToPathStack(JSON.parse(localNodeNameList));
	} else {
		return initStackPath;
	}
}
