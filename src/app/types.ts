import { inputNodes } from "./input";

type weaponTypes = "Plasma" | "Cannon" | "Laser" | "Rocket" | "Homing" | "Minigun" | "Railgun" | "EMP" | "Nuke" | "Dark Hole";
type defenceTypes = "Health" | "Armor";
type items = weaponTypes | defenceTypes | "Gold" | "EXP";
type upgradeTypes = "Max Ammo" | "Regen" | "Fire Rate" | "Damage" | "Velocity" | "Radius" | "Freeze Time" | "Number" | "Weapon Mod";

export type upgrades = `${weaponTypes | defenceTypes} ${upgradeTypes}` | "RejuvenX" | "Telekinesis" | "Weapon Mod" | items; // | items temporary until upgrades everywhere are specified

export type interactables =
	| "Sleep"
	| "Common Sell Station"
	| "Scarce Sell Station"
	| "Buy"
	| "Buy Nuke"
	| "Markers"
	| "Waypoint"
	| "Bookmark"
	| "Respawn"
	| "Pink Ring"
	| "Pink Sphere"
	| "Blue Ring"
	| "Save";

export type InputNode = {
	name: string;
	upgrades?: (upgrades | upgrades[])[]; // possible upgrades (including random ones)
	items?: items[]; // possible items
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
