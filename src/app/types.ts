import { monsters } from "./input/monsters";
import { inputNodes, nodeNames } from "./input/nodes";

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

type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	note?: string; // required keys/specifc method to enter
	up?: boolean;
};

export type InputEdges = {
	[from in nodeNames]?: {
		[to in nodeNames]?: edgeInfo;
	};
};

export interface Edge extends edgeInfo {
	node: Node;
}

export type Node = {
	name: nodeNames;
	upgrades: InputNode["upgrades"];
	items: InputNode["items"];
	interactables: InputNode["interactables"];
	deadEnd: InputNode["deadEnd"];
	images: InputNode["images"];
	trophy: InputNode["trophy"];
	secretTrophy: InputNode["secretTrophy"];
	monsters: monster[];
	edges: Edge[];
};
