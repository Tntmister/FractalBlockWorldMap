import { monsters } from "./input/monsters";
import { inputNodes } from "./input/nodes";

type weaponTypes = "Plasma" | "Cannon" | "Laser" | "Rocket" | "Homing" | "Minigun" | "Railgun" | "EMP" | "Nuke" | "Dark Hole";
type weaponUpgrades = "Max Ammo" | "Regen" | "Fire Rate" | "Damage" | "Velocity" | "Radius" | "Freeze Time" | "Number" | "Weapon Mod";
type defenceUpgrades = "Max Health" | "Health Regen" | "Armor Regen" | "RejuvenX";
type items = weaponTypes | "Gold" | "EXP" | "Key" | "Shield" | "Health" | "Armor";

export type upgrades = `${weaponTypes} ${weaponUpgrades}` | defenceUpgrades | "Telekinesis" | items; // | items temporary until upgrades everywhere are specified

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
	| "Save"
	| "In-Only Waypoint"
	| "Out-Only Waypoint";

export type monster = {
	name: string;
	drop?: upgrades | items;
};

export type monsterName = (typeof monsters)[number]["name"];

export type InputNode = {
	name: string;
	monsters?: monsterName[];
	upgrades?: (upgrades | upgrades[])[]; // possible upgrades (including random ones)
	items?: items[]; // possible items
	interactables?: interactables[];
	deadEnd?: boolean; // if there is no way to grow out of this node
	images?: {
		src: string;
		info: string;
	}[];
	trophy?: boolean;
	secretTrophy?: boolean | 2 | 3; // some locations have more than 1 secret trophy
};

export type nodeNames = (typeof inputNodes)[number]["name"];

type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	note?: string; // required keys/specifc method to enter
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
