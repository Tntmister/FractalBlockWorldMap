import { inputNodes } from "./input";

export type pickups =
	| "Health"
	| "Armor"
	| "Plasma"
	| "Cannon"
	| "Laser"
	| "Rocket"
	| "Homing"
	| "Minigun"
	| "Railgun"
	| "EMP"
	| "Nuke"
	| "Dark Hole"
	| "Gold"
	| "RejuvenX"
	| "Telekinesis"
	| "WeaponMod"
	| "EXP";

export type interactables =
	| "Sleep"
	| "CommonSell"
	| "ScarceSell"
	| "Buy"
	| "BuyNuke"
	| "Markers"
	| "Waypoint"
	| "Bookmark"
	| "Respawn"
	| "PinkRing"
	| "PinkSphere"
	| "BlueRing"
	| "Save";

export type InputNode = {
	name: string;
	upgrades?: pickups[]; // possible upgrades
	items?: pickups[]; // possible items
	interactables?: interactables[];
	images?: {
		src: string;
		info: string;
	}[];
	trophy?: boolean;
	secretTrophy?: boolean;
};

export type nodeNames = (typeof inputNodes)[number]["name"];

type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	depth?: number; // actual depth ("level" number ingame)
	note?: string; // required keys/specifc method to enter
	oneWay?: boolean;
	pinkRing?: boolean; // is a pink ring -> ping sphere edge
	up?: boolean;
};

export interface InputGraph {
	nodes: readonly InputNode[];
	edges: {
		[from in nodeNames]?: {
			[to in nodeNames]?: edgeInfo;
		};
	};
	root: {
		name: nodeNames;
	};
}

export interface Edge extends edgeInfo {
	node: Node;
}

export interface Node extends InputNode {
	edges: Edge[];
}
