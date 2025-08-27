import { monsters } from "./input/monsters";
import { inputNodes, nodeNames } from "./input/nodes";

export const weaponTypes = ["Plasma", "Cannon", "Laser", "Rocket", "Homing", "Minigun", "Railgun", "EMP", "Nuke", "Dark Hole"] as const;
type weaponTypes = (typeof weaponTypes)[number];
type weaponUpgrades = "Max Ammo" | "Regen" | "Fire Rate" | "Damage" | "Velocity" | "Radius" | "Freeze Time" | "Number" | "Weapon Mod";
type defenceUpgrades = "Max Health" | "Health Regen" | "Armor Regen" | "RejuvenX";
type items = `${weaponTypes} Ammo` | "Gold" | "EXP" | "Key" | "Shield" | "Health" | "Armor";

export type upgrades = `${weaponTypes} ${weaponUpgrades}` | `Non-${weaponTypes} ${weaponUpgrades}` | defenceUpgrades | "Telekinesis" | weaponTypes | "Health"; // | items | "Health" temporary until upgrades everywhere are specified

export type interactables =
	| "Sleep"
	| "Common Sell Station"
	| "Scarce Sell Station"
	| "Rare Sell Station"
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
	noEscape?: boolean; // if there is no way to grow out of this node
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
	upgrades: NonNullable<InputNode["upgrades"]>;
	items: NonNullable<InputNode["items"]>;
	interactables: NonNullable<InputNode["interactables"]>;
	noEscape: NonNullable<InputNode["noEscape"]>;
	images: NonNullable<InputNode["images"]>;
	trophy: NonNullable<InputNode["trophy"]>;
	secretTrophy: NonNullable<InputNode["secretTrophy"]>;
	monsters: monster[];
	edges: Edge[];
};
