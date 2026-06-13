import { edgeData } from "../data/edges";
import { monsters } from "../data/monsters";
import { nodeData, nodeName } from "../data/nodes";
import { Node } from "../types";

const nodes: Map<string, Node> = new Map();
// initialize nodes from data
for (const node of nodeData) {
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
		monsters: monsters.filter((monster) => node.monsters?.includes(monster.name)).toSorted(),
		edges: [],
	});
}

let edgeId = 0;
// initialialize edges from data
for (const [fromName, edge] of Object.entries(edgeData)) {
	for (const [toName, edgeInfo] of Object.entries(edge)) {
		const fromNode = nodes.get(fromName)!;
		const toNode = nodes.get(toName)!;
		if (fromNode && toNode) if (edgeInfo.distance === Infinity) edgeInfo.distance = 100;
		fromNode.edges.push({
			originNode: fromNode,
			destinationNode: toNode,
			id: ++edgeId,
			...edgeInfo,
		});
	}
}

export { nodes };

export const startingPath: nodeName[] = [
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
