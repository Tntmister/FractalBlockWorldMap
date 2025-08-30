import { monsters } from "./input/monsters";
import { inputNodes, nodeNames } from "./input/nodes";

export const imageTypes = [
	"Plasma",
	"Cannon",
	"Laser",
	"Rocket",
	"Homing",
	"Minigun",
	"Railgun",
	"EMP",
	"Nuke",
	"Dark Hole",
	"Buy",
	"Health",
	"100% Health 100% Armor",
	"200% Health 100% Armor",
	"200% Health 200% Armor",
	"5% Armor",
	"10% Armor",
	"100% Armor",
	"150% Armor",
	"200% Armor",
	"600% Armor",
	"1000% Armor",
	"25% Health",
	"100% Health",
	"200% Health",
	"Extra 10% Health",
	"Extra 100% Health"
] as const;
export const weaponTypes = ["Plasma", "Cannon", "Laser", "Rocket", "Homing", "Minigun", "Railgun", "EMP", "Nuke", "Dark Hole"] as const;
type weaponTypes = (typeof weaponTypes)[number];
export const weaponUpgrades = ["Max Ammo", "Regen", "Fire Rate", "Damage", "Velocity", "Radius", "Freeze Time", "Number", "Weapon Mod"] as const;
type weaponUpgrades = (typeof weaponUpgrades)[number];
type defenceItems =
	| "5% Armor"
	| "10% Armor"
	| "100% Armor"
	| "150% Armor"
	| "200% Armor"
	| "600% Armor"
	| "1000% Armor"
	| "25% Health"
	| "100% Health"
	| "200% Health"
	| "Extra 10% Health"
	| "Extra 100% Health"
	| "100% Health 100% Armor"
	| "200% Health 100% Armor"
	| "200% Health 200% Armor";
export const keys = ["Yellow Key", "Buy Blue Key", "Blue Key", "Green Key", "Stable Singletons Key", "Laser Genesis Key", "Universe Key"] as const;
type keyPickups = (typeof keys)[number] | `${number} Second Yellow Key` | `${"I1" | "I2" | "I3" | "Burlington" | "Hell"} Stable Singletons Key`;
type defenceUpgrades = "Max Health" | "Health Regen" | "Armor Regen" | "RejuvenX" | "Random Health";
type items = `${weaponTypes} Ammo` | defenceItems | "Gold" | "EXP" | keyPickups | "Shield" | "Health" | "Armor"; // | "Health" | "Armor" temporary until upgrades everywhere are specified

export type upgrades = `${weaponTypes} ${weaponUpgrades}` | `Non-${weaponTypes} ${weaponUpgrades}` | defenceUpgrades | "Telekinesis" | weaponTypes | "Health"; // | weaponTypes | "Health" temporary until upgrades everywhere are specified

export type interactables =
	| "Sleep"
	| "Common Sell Station"
	| "Scarce Sell Station"
	| "Rare Sell Station"
	| "Buy Station"
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
	| "Out-Only Waypoint"
	| "Buy Blue Key"
	| "Upgrade Station"
	| "Black Market";

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
	note?: string; // specifc method to enter
	requiresKey?: (typeof keys)[number];
	up?: boolean; // used for pathfinding
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
