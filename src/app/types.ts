import { monsters } from "./input/monsters";
import { nodeName } from "./input/nodes";

export type weaponType = "Plasma" | "Cannon" | "Laser" | "Rocket" | "Homing" | "Minigun" | "Railgun" | "EMP" | "Nuke" | "Dark Hole";

type weaponUpgradeType = "Max Ammo" | "Regen" | "Fire Rate" | "Damage" | "Velocity" | "Radius" | "Freeze Time" | "Count";

const weaponUpgrades = [
	"Plasma Max Ammo",
	"Plasma Regen",
	"Plasma Fire Rate",
	"Plasma Damage",
	"Plasma Velocity",
	"Plasma Shotgun Weapon Mod",
	"Plasma Hyper Rapid Fire Weapon Mod",
	"Plasma Lightning Rifle Weapon Mod",
	"Plasma Flair Weapon Mod",
	"Cannon Max Ammo",
	"Cannon Fire Rate",
	"Cannon Damage",
	"Cannon Velocity",
	"Cannon Num Shots",
	"Cannon Tommy Gun Weapon Mod",
	"Laser Max Ammo",
	"Laser Damage",
	"Laser Freeze Time",
	"Laser Super Damage",
	"Laser Freeze Ray Weapon Mod",
	"Rocket Max Ammo",
	"Rocket Fire Rate",
	"Rocket Damage",
	"Rocket Velocity",
	"Rocket Radius",
	"Rocket High Velocity Weapon Mod",
	"Rocket Big Radius Weapon Mod",
	"Rocket Progressive Weapon Mod",
	"Homing Max Ammo",
	"Homing Fire Rate",
	"Homing Damage",
	"Homing Velocity",
	"Minigun Max Ammo",
	"Minigun Fire Rate",
	"Minigun Damage",
	"Minigun Velocity",
	"Minigun Super Damage",
	"Railgun Max Ammo",
	"Railgun Fire Rate",
	"Railgun Damage",
	"Railgun Rapid Weapon Mod",
	"Railgun Super Vampire Weapon Mod",
	"EMP Max Ammo",
	"EMP Damage",
	"EMP Radius",
	"EMP Freeze Time",
	"Nuke Max Ammo",
	"Nuke Damage",
	"Nuke Velocity",
	"Nuke Radius",
	"Nuke Propulsion Weapon Mod",
	"Dark Hole Max Ammo",
	"Dark Hole Damage",
	"Dark Hole Velocity",
	"Dark Hole Drive Weapon Mod",
] as const;
export type weaponUpgrade = (typeof weaponUpgrades)[number];

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
	| "Secret Farmhouse Key"
	| "Burlington Combination Lock";

const defenceUpgrades = ["Random Health", "Max Health", "Health Regen", "Armor Regen", "RejuvenX"] as const;
export type defenceUpgrade = (typeof defenceUpgrades)[number];

export const searchableUpgrades = [...weaponUpgrades, ...defenceUpgrades];
export type searchableUpgrade = (typeof searchableUpgrades)[number];

export type item = `${`${weaponType} Ammo` | defenceItem} x${number}` | `${weaponType} Ammo` | defenceItem | `${number} ${"Gold" | "EXP"}` | "EXP" | "Gold" | key;

export type upgrade =
	| `${weaponUpgrade | defenceUpgrade | `Non-${weaponType} ${weaponUpgradeType}`} x${number}`
	| weaponUpgrade
	| defenceUpgrade
	| `Non-${weaponType} ${weaponUpgradeType}`
	| "Telekinesis"
	| "Marker Cost";

export const interactables = (
	[
		"Sleep",
		"Common Sell Station",
		"Scarce Sell Station",
		"Rare Sell Station",
		"Buy Station",
		"Buy Nuke 400",
		"Buy Nuke 300",
		"Buy Nuke 250",
		"Buy Nuke 200",
		"Buy Nuke 150",
		"Buy Nuke 100",
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
		"Max Ammo Upgrade Station",
		"Upgrade Station",
		"Black Market",
	] as const
).toSorted();
export type interactable = (typeof interactables)[number];

export type monster = {
	name: string;
	drop?: upgrade | item;
};

export type monsterName = (typeof monsters)[number]["name"];

export type InputNode = {
	name: string;
	monsters?: monsterName[];
	upgrades?: (upgrade | upgrade[])[];
	items?: (item | item[])[];
	notes?: string;
	interactables?: interactable[];
	noEscape?: boolean; // no accessible grow rings
	trophy?: boolean;
	secretTrophy?: boolean | number; // some locations have more than 1 secret trophy
	// if declared, defines this node as a blue "active zone", with "nodeName" as the respective blue ring destination node
	blueActiveZoneDestination?: {
		nodeName: string;
		note?: string;
	};
	// rare case where a pink sphere in a node might be hidden inside a location at the same level (unremembered tower secret room)
	pinkSphereDestination?: {
		nodeName: string;
		note?: string;
	};
};

type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	note?: string; // specifc method to enter
	requiresKey?: key;
	whiteBoxDevice?: boolean;
	arcade?: boolean;
	impassable?: boolean; // to indicate that the destination is not directly accessible, only through waypoints/blue rings (i.e. WIG Prison and Violet Shells)
	// internal, used for pathfinding/traversal
	blueRing?: boolean;
	pinkRing?: boolean;
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
	notes: InputNode["notes"];
	noEscape: NonNullable<InputNode["noEscape"]>;
	trophy: NonNullable<InputNode["trophy"]>;
	secretTrophy: NonNullable<InputNode["secretTrophy"]>;
	blueActiveZoneDestination: InputNode["blueActiveZoneDestination"];
	pinkSphereDestination: InputNode["pinkSphereDestination"];
	monsters: monster[];
	edges: Edge[];
};
