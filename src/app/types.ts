import { monsters } from "./input/monsters";
import { nodeName } from "./input/nodes";

export type weaponType = "Plasma" | "Cannon" | "Laser" | "Rocket" | "Homing" | "Minigun" | "Railgun" | "EMP" | "Nuke" | "Dark Hole";

type weaponUpgradeType = "Max Ammo" | "Regen" | "Fire Rate" | "Damage" | "Velocity" | "Radius" | "Freeze Time" | "Count";

export type weaponUpgrade =
	| "Plasma Max Ammo"
	| "Plasma Regen"
	| "Plasma Fire Rate"
	| "Plasma Damage"
	| "Plasma Velocity"
	| "Plasma Shotgun Weapon Mod"
	| "Plasma Hyper Rapid Fire Weapon Mod"
	| "Plasma Lightning Rifle Weapon Mod"
	| "Plasma Flair Weapon Mod"
	| "Cannon Max Ammo"
	| "Cannon Fire Rate"
	| "Cannon Damage"
	| "Cannon Velocity"
	| "Cannon Num Shots"
	| "Cannon Tommy Gun Weapon Mod"
	| "Laser Max Ammo"
	| "Laser Damage"
	| "Laser Freeze Time"
	| "Laser Super Damage"
	| "Laser Freeze Ray Weapon Mod"
	| "Rocket Max Ammo"
	| "Rocket Fire Rate"
	| "Rocket Damage"
	| "Rocket Velocity"
	| "Rocket Radius"
	| "Rocket High Velocity Weapon Mod"
	| "Rocket Big Radius Weapon Mod"
	| "Rocket Progressive Weapon Mod"
	| "Homing Max Ammo"
	| "Homing Fire Rate"
	| "Homing Damage"
	| "Homing Velocity"
	| "Minigun Max Ammo"
	| "Minigun Fire Rate"
	| "Minigun Damage"
	| "Minigun Velocity"
	| "Minigun Super Damage"
	| "Railgun Max Ammo"
	| "Railgun Fire Rate"
	| "Railgun Damage"
	| "Railgun Rapid Weapon Mod"
	| "Railgun Super Vampire Weapon Mod"
	| "EMP Max Ammo"
	| "EMP Damage"
	| "EMP Radius"
	| "EMP Freeze Time"
	| "Nuke Max Ammo"
	| "Nuke Damage"
	| "Nuke Velocity"
	| "Nuke Radius"
	| "Nuke Propulsion Weapon Mod"
	| "Dark Hole Max Ammo"
	| "Dark Hole Damage"
	| "Dark Hole Velocity"
	| "Dark Hole Drive Weapon Mod";

export type defenceItem =
	| "100% Health 100% Armor"
	| "200% Health 100% Armor"
	| "200% Health 200% Armor"
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
	| "Shield";

type key =
	| "Yellow Key"
	| `${number} Second Yellow Key`
	| "Blue Key"
	| "Green Key"
	| "Laser Genesis Key"
	| "Universe Key"
	| `${"I1" | "I2" | "I3" | "Burlington" | "Hell"} Stable Singletons Key`
	| "Secret Farmhouse Key";

export type defenceUpgrade = "Random Health" | "Max Health" | "Health Regen" | "Armor Regen" | "RejuvenX";

export type item = `${weaponType} Ammo` | defenceItem | "Gold" | "EXP" | key | "Health" | "Armor"; // | "Health" | "Armor" temporary

export type upgrade = weaponUpgrade | `Non-${weaponType} ${weaponUpgradeType}` | defenceUpgrade | "Telekinesis" | weaponType | "Health"; // | weaponType | "Health" temporary

export const interactables = [
	"Sleep",
	"Common Sell Station",
	"Scarce Sell Station",
	"Rare Sell Station",
	"Buy Station",
	"Buy Nuke",
	"Markers",
	"Waypoint",
	"Bookmark",
	"Respawn",
	"Pink Ring",
	"Pink Sphere",
	"Blue Ring",
	"Save",
	"In-Only Waypoint",
	"Out-Only Waypoint",
	"Buy Blue Key",
	"Upgrade Station",
	"Black Market",
] as const;
export type interactable = (typeof interactables)[number];

export type monster = {
	name: string;
	drop?: upgrade | item;
};

export type monsterName = (typeof monsters)[number]["name"];

export type InputNode = {
	name: string;
	monsters?: monsterName[];
	upgrades?: (upgrade | upgrade[])[]; // possible upgrades (including random ones)
	items?: item[]; // possible items
	interactables?: interactable[];
	noEscape?: boolean; // if there is no way to grow out of this node
	trophy?: boolean;
	secretTrophy?: boolean | 2 | 3; // some locations have more than 1 secret trophy
	// every location by default is an "up" chunk for blue ring purposes. If declared, this location is a "down" chunk with the propery value being the name of the location of the terminal chunk
	blueRingDownDestination?: {
		nodeName: string;
		note?: string;
	};
};

type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	note?: string; // specifc method to enter
	requiresKey?: key;
	blueRingOnly?: boolean; // to indicate that the destination is only accessible blue rings (i.e. WIG Prison and Violet Shells)
	// used for pathfinding
	blueRing?: boolean;
	up?: boolean;
};

export type InputEdge = {
	[from in nodeName]?: {
		[to in nodeName]?: edgeInfo;
	};
};

export interface Edge extends edgeInfo {
	node: Node;
	id: number;
}

export type Node = {
	name: nodeName;
	upgrades: NonNullable<InputNode["upgrades"]>;
	items: NonNullable<InputNode["items"]>;
	interactables: NonNullable<InputNode["interactables"]>;
	noEscape: NonNullable<InputNode["noEscape"]>;
	trophy: NonNullable<InputNode["trophy"]>;
	secretTrophy: NonNullable<InputNode["secretTrophy"]>;
	blueRingDownDestination: InputNode["blueRingDownDestination"];
	monsters: monster[];
	edges: Edge[];
};
