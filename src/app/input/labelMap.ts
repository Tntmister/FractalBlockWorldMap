// maps items/upgrades to their respective images
// if not specified, use self string

import { weaponUpgrade, defenceItem, defenceUpgrade, weaponType, upgrade, item } from "../types";

export const labels: Map<item | upgrade, { label?: string; imageName?: string }> = new Map(
	Object.entries({
		"100% Health 100% Armor": {
			imageName: "100%25 Health 100%25 Armor",
		},
		"200% Health 100% Armor": {
			imageName: "200%25 Health 100%25 Armor",
		},
		"200% Health 200% Armor": {
			imageName: "200%25 Health 200%25 Armor",
		},
		"5% Armor": {
			imageName: "5%25 Armor",
		},
		"10% Armor": {
			imageName: "10%25 Armor",
		},
		"100% Armor": {
			imageName: "100%25 Armor",
		},
		"150% Armor": {
			imageName: "150%25 Armor",
		},
		"200% Armor": {
			imageName: "200%25 Armor",
		},
		"600% Armor": {
			imageName: "600%25 Armor",
		},
		"1000% Armor": {
			imageName: "1000%25 Armor",
		},
		"25% Health": {
			imageName: "25%25 Health",
		},
		"100% Health": {
			imageName: "100%25 Health",
		},
		"200% Health": {
			imageName: "200%25 Health",
		},
		"Extra 10% Health": {
			imageName: "Extra 10%25 Health",
		},
		"Extra 100% Health": {
			imageName: "Extra 100%25 Health",
		},
		"Plasma Max Ammo": {
			label: "Max Ammo",
			imageName: "Plasma",
		},
		"Plasma Regen": {
			label: "Regen",
			imageName: "Plasma",
		},
		"Plasma Fire Rate": {
			label: "Fire Rate",
			imageName: "Plasma",
		},
		"Plasma Damage": {
			label: "Damage",
			imageName: "Plasma",
		},
		"Plasma Velocity": {
			label: "Velocity",
			imageName: "Plasma",
		},
		"Plasma Shotgun Weapon Mod": {
			label: "Shotgun Weapon Mod",
			imageName: "Plasma",
		},
		"Plasma Hyper Rapid Fire Weapon Mod": {
			label: "Hyper Rapid Fire Weapon Mod",
			imageName: "Plasma",
		},
		"Plasma Lightning Rifle Weapon Mod": {
			label: "Lightning Rifle Weapon Mod",
			imageName: "Plasma",
		},
		"Plasma Flair Weapon Mod": {
			label: "Flair Weapon Mod",
			imageName: "Plasma",
		},
		"Cannon Max Ammo": {
			label: "Max Ammo",
			imageName: "Cannon",
		},
		"Cannon Fire Rate": {
			label: "Fire Rate",
			imageName: "Cannon",
		},
		"Cannon Damage": {
			label: "Damage",
			imageName: "Cannon",
		},
		"Cannon Velocity": {
			label: "Velocity",
			imageName: "Cannon",
		},
		"Cannon Num Shots": {
			label: "Num Shots",
			imageName: "Cannon",
		},
		"Cannon Tommy Gun Weapon Mod": {
			label: "Tommy Gun Weapon Mod",
			imageName: "Cannon",
		},
		"Laser Max Ammo": {
			label: "Max Ammo",
			imageName: "Laser",
		},
		"Laser Damage": {
			label: "Damage",
			imageName: "Laser",
		},
		"Laser Freeze Time": {
			label: "Freeze Time",
			imageName: "Laser",
		},
		"Laser Super Damage": {
			label: "Super Damage",
			imageName: "Laser Super",
		},
		"Laser Freeze Ray Weapon Mod": {
			label: "Freeze Ray Weapon Mod",
			imageName: "Laser",
		},
		"Rocket Max Ammo": {
			label: "Max Ammo",
			imageName: "Rocket",
		},
		"Rocket Fire Rate": {
			label: "Fire Rate",
			imageName: "Rocket",
		},
		"Rocket Damage": {
			label: "Damage",
			imageName: "Rocket",
		},
		"Rocket Velocity": {
			label: "Velocity",
			imageName: "Rocket",
		},
		"Rocket Radius": {
			label: "Radius",
			imageName: "Rocket",
		},
		"Rocket High Velocity Weapon Mod": {
			label: "High Velocity Weapon Mod",
			imageName: "Rocket",
		},
		"Rocket Big Radius Weapon Mod": {
			label: "Big Radius Weapon Mod",
			imageName: "Rocket",
		},
		"Rocket Progressive Weapon Mod": {
			label: "Progressive Weapon Mod",
			imageName: "Rocket",
		},
		"Homing Max Ammo": {
			label: "Max Ammo",
			imageName: "Homing",
		},
		"Homing Fire Rate": {
			label: "Fire Rate",
			imageName: "Homing",
		},
		"Homing Damage": {
			label: "Damage",
			imageName: "Homing",
		},
		"Homing Velocity": {
			label: "Velocity",
			imageName: "Homing",
		},
		"Minigun Max Ammo": {
			label: "Max Ammo",
			imageName: "Minigun",
		},
		"Minigun Fire Rate": {
			label: "Fire Rate",
			imageName: "Minigun",
		},
		"Minigun Damage": {
			label: "Damage",
			imageName: "Minigun",
		},
		"Minigun Velocity": {
			label: "Velocity",
			imageName: "Minigun",
		},
		"Minigun Super Damage": {
			label: "Super Damage",
			imageName: "Minigun",
		},
		"Railgun Max Ammo": {
			label: "Max Ammo",
			imageName: "Railgun",
		},
		"Railgun Fire Rate": {
			label: "Fire Rate",
			imageName: "Railgun",
		},
		"Railgun Damage": {
			label: "Damage",
			imageName: "Railgun",
		},
		"Railgun Rapid Weapon Mod": {
			label: "Rapid Weapon Mod",
			imageName: "Railgun",
		},
		"Railgun Super Vampire Weapon Mod": {
			label: "Super Vampire Weapon Mod",
			imageName: "Railgun",
		},
		"EMP Max Ammo": {
			label: "Max Ammo",
			imageName: "EMP",
		},
		"EMP Damage": {
			label: "Damage",
			imageName: "EMP",
		},
		"EMP Radius": {
			label: "Radius",
			imageName: "EMP",
		},
		"EMP Freeze Time": {
			label: "Freeze Time",
			imageName: "EMP",
		},
		"Nuke Max Ammo": {
			label: "Max Ammo",
			imageName: "Nuke",
		},
		"Nuke Damage": {
			label: "Damage",
			imageName: "Nuke",
		},
		"Nuke Velocity": {
			label: "Velocity",
			imageName: "Nuke",
		},
		"Nuke Radius": {
			label: "Radius",
			imageName: "Nuke",
		},
		"Nuke Propulsion Weapon Mod": {
			label: "Propulsion Weapon Mod",
			imageName: "Nuke",
		},
		"Dark Hole Max Ammo": {
			label: "Max Ammo",
			imageName: "Dark Hole",
		},
		"Dark Hole Damage": {
			label: "Damage",
			imageName: "Dark Hole",
		},
		"Dark Hole Velocity": {
			label: "Velocity",
			imageName: "Dark Hole",
		},
		"Dark Hole Drive Weapon Mod": {
			label: "Drive Weapon Mod",
			imageName: "Dark Hole",
		},
		"Max Health": {
			imageName: "100%25 Health",
		},
		"Health Regen": {
			imageName: "100%25 Health",
		},
		"Armor Regen": {
			imageName: "10%25 Armor",
		},
		"Plasma Ammo": {
			imageName: "Plasma",
			label: "Ammo",
		},
		"Cannon Ammo": {
			imageName: "Cannon",
			label: "Ammo",
		},
		"Laser Ammo": {
			imageName: "Laser",
			label: "Ammo",
		},
		"Rocket Ammo": {
			imageName: "Rocket",
			label: "Ammo",
		},
		"Homing Ammo": {
			imageName: "Homing",
			label: "Ammo",
		},
		"Minigun Ammo": {
			imageName: "Minigun",
			label: "Ammo",
		},
		"Railgun Ammo": {
			imageName: "Railgun",
			label: "Ammo",
		},
		"EMP Ammo": {
			imageName: "EMP",
			label: "Ammo",
		},
		"Nuke Ammo": {
			imageName: "Nuke",
			label: "Ammo",
		},
		"Dark Hole Ammo": {
			imageName: "Dark Hole",
			label: "Ammo",
		},
		"Burlington Combination Lock": {
			imageName: "Omega",
		},
	}) as [item | upgrade, { label?: string; imageName?: string }][],
);
