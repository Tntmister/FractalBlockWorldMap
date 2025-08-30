import { InputNode } from "../types";

const INPUT_NODES = [
	{
		name: "Ying Forest",
		upgrades: ["Cannon Damage", "Plasma Damage", "Max Health"],
		interactables: ["Waypoint", "Save", "Respawn", "Bookmark", "Out-Only Waypoint"]
	},
	{
		name: "Ying Forest Depth 50+",
		monsters: ["Minor Rat"],
		items: ["200% Health 100% Armor", "Railgun Ammo", "Laser Ammo"],
		upgrades: ["Cannon Damage", "Plasma Damage", "Health"],
		interactables: ["Waypoint", "Save", "Respawn", "Bookmark", "Out-Only Waypoint"]
	},
	{
		name: "Tutorial 1",
		items: ["Gold"],
		interactables: ["Save", "Pink Sphere", "Blue Ring"]
	},
	{
		name: "Tutorial 2",
		items: ["Plasma Ammo", "40 Second Yellow Key", "Gold"],
		monsters: ["Goblin"],
		upgrades: ["Laser", "Nuke"],
		interactables: ["Pink Ring", "Respawn"],
		secretTrophy: 3
	},
	{
		name: "EMERGENCY",
		interactables: ["Save", "Waypoint"],
		items: ["Gold"]
	},
	{
		name: "EMERGENCY Secret",
		items: ["Gold", "1000% Armor", "Extra 100% Health"],
		upgrades: ["Laser Freeze Time", "Laser Max Ammo"],
		secretTrophy: true
	},
	{
		name: "Safety Doppelganger",
		interactables: ["Save", "Waypoint"],
		items: ["200% Armor"]
	},
	{
		name: "Fire Rate Moon"
	},
	{
		name: "Tutorial Chambers",
		monsters: ["Menace"],
		interactables: ["Save", "Respawn", "Pink Sphere", "Blue Ring"]
	},
	{
		name: "Tutorial Island",
		interactables: ["Respawn", "Save"]
	},
	{
		name: "Small Yellow Flower",
		trophy: true,
		monsters: ["Light Marine"],
		interactables: ["Save", "Pink Ring", "Pink Sphere"],
		items: [
			"100% Health",
			"100% Armor",
			"150% Armor",
			"Shield",
			"Plasma Ammo",
			"Cannon Ammo",
			"Extra 100% Health",
			"Minigun Ammo",
			"Rocket Ammo",
			"Laser Ammo",
			"EXP"
		],
		upgrades: ["Plasma Damage", "Plasma Regen", "Health"]
	},
	{
		name: "Small Yellow Flower Secret",
		secretTrophy: true,
		monsters: ["Blue Lamprey"],
		interactables: ["Blue Ring"]
	},
	{
		name: "Jumbo Yellow Flower",
		interactables: ["Pink Ring", "Waypoint", "Out-Only Waypoint", "Save", "Respawn"],
		items: ["EXP"],
		upgrades: ["Plasma Damage", "Plasma Max Ammo", "Cannon Fire Rate", "Cannon Velocity"],
		monsters: ["Light Marine", "Marine", "Insurgent", "Collapsed Spirit", "Collapsed Archangel"],
		trophy: true
	},
	{
		name: "Small Black Flower",
		monsters: ["Light Marine", "Marine", "Heavy Marine", "Menace"],
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy Station"],
		upgrades: [
			"Max Health",
			"Health Regen",
			"Plasma Velocity",
			"Cannon Fire Rate",
			"Cannon Damage",
			"Cannon Velocity",
			"Cannon Number",
			"Nuke Velocity",
			"Nuke Radius",
			"Plasma Damage",
			"Plasma Max Ammo",
			"Laser Freeze Time",
			"Minigun Max Ammo"
		],
		items: [
			"Plasma Ammo",
			"Minigun Ammo",
			"Rocket Ammo",
			"Railgun Ammo",
			"EMP Ammo",
			"Nuke Ammo",
			"Laser Ammo",
			"Cannon Ammo",
			"200% Health 200% Armor",
			"100% Health 100% Armor",
			"Shield",
			"200% Armor",
			"1000% Armor",
			"200% Health",
			"Gold",
			"EXP",
			"Extra 100% Health"
		],
		trophy: true
	},
	{
		name: "Small Cannon Pyramid",
		interactables: ["Pink Sphere"],
		upgrades: ["Cannon"],
		items: ["Laser Ammo", "Rocket Ammo", "Minigun Ammo", "Cannon Ammo"]
	},
	{
		name: "Small White Flower",
		monsters: ["Light Marine", "Marine", "Heavy Marine"],
		interactables: ["Save", "Pink Sphere", "Pink Ring", "Blue Ring", "Buy Station"],
		upgrades: [
			"Random Health",
			"Health Regen",
			"Max Health",
			"Homing Max Ammo",
			"Homing Velocity",
			"Plasma Damage",
			"Plasma Max Ammo",
			"Nuke Max Ammo",
			"Nuke Velocity",
			"Rocket Radius",
			"Rocket Max Ammo"
		],
		items: [
			"600% Armor",
			"Nuke Ammo",
			"Rocket Ammo",
			"Plasma Ammo",
			"Homing Ammo",
			"Minigun Ammo",
			"Dark Hole Ammo",
			"EMP Ammo",
			"Railgun Ammo",
			"Gold",
			"200% Health",
			"EXP"
		],
		trophy: true
	},
	{
		name: "Ying Flower",
		monsters: ["Arch Menace Male"],
		upgrades: ["Laser", "Cannon"],
		items: ["EXP", "Cannon Ammo", "Laser Ammo", "Rocket Ammo", "Minigun Ammo"],
		interactables: ["Waypoint", "Save", "Bookmark", "Pink Sphere", "Out-Only Waypoint"]
	},
	{
		name: "Unremembered Tower",
		interactables: ["Waypoint", "Save", "Buy Station", "Markers", "Common Sell Station"],
		monsters: ["Light Marine", "Marine", "Heavy Marine", "Menace", "Minor Rat", "Rat", "Minor Sliver"],
		items: ["Cannon Ammo", "Rocket Ammo", "Gold", "200% Health 100% Armor", "1000% Armor", "Railgun Ammo", "Laser Ammo", "Green Key"],
		upgrades: [
			"Max Health",
			"Laser Freeze Time",
			"Railgun Max Ammo",
			"Railgun Fire Rate",
			[
				"Plasma Fire Rate",
				"Cannon Max Ammo",
				"Laser Max Ammo",
				"Rocket Radius",
				"Homing Velocity",
				"Minigun Max Ammo",
				"Railgun Fire Rate",
				"EMP Radius",
				"Nuke Max Ammo",
				"Dark Hole Velocity"
			]
		],
		trophy: true
	},
	{
		name: "Unremembered Tower Secret Totem",
		items: ["1000% Armor"],
		upgrades: ["Nuke Max Ammo", "Nuke Velocity", "Railgun Fire Rate", "Railgun Max Ammo"],
		secretTrophy: true
	},
	{
		name: "Ying World"
	},
	{
		name: "Ying Cave Island"
	},
	{
		name: "Ying Cave Island Layer 1",
		upgrades: ["Cannon", "Plasma"]
	},
	{
		name: "Ying Cave Island Layer 2"
	},
	{
		name: "Ying Cave Island Layer 3",
		items: ["Armor"],
		upgrades: ["Laser"]
	},
	{
		name: "Ying Cave Island Layer 4",
		upgrades: ["Health", "Minigun"]
	},
	{
		name: "Spider Air",
		interactables: ["Save", "Buy Station", "Pink Ring", "Waypoint", "Out-Only Waypoint"],
		monsters: ["Baby Spider", "Marine", "Minor Gremlin"],
		upgrades: ["Railgun Damage", "Minigun Damage"],
		items: ["Rocket Ammo", "Railgun Ammo"],
		secretTrophy: true
	},
	{
		name: "Orange",
		interactables: ["Pink Sphere"],
		upgrades: ["Rocket"],
		items: ["Nuke Ammo"]
	},
	{
		name: "Outer Crust A"
	},
	{
		name: "Outer Crust B"
	},
	{
		name: "Outer Mantle",
		interactables: ["Waypoint", "Save", "Bookmark", "Buy Station"]
	},
	{
		name: "Outer Mantle Secret",
		upgrades: ["Rocket", "Minigun"]
	},
	{
		name: "Red-Green Elevator"
	},
	{
		name: "Inner Crust"
	},
	{
		name: "Inner Mantle",
		interactables: ["Waypoint", "Bookmark", "Buy Station", "Save"]
	},
	{
		name: "Huntington",
		trophy: true,
		interactables: ["Pink Ring", "Save", "Scarce Sell Station", "Buy Station", "Markers", "Waypoint", "Respawn"],
		items: ["Gold", "Armor"],
		upgrades: ["Health", "Telekinesis", "RejuvenX", "Railgun", "Nuke", "EMP", "Cannon Weapon Mod"]
	},
	{
		name: "Camel's Hump",
		interactables: ["Pink Sphere"]
	},
	{
		name: "Blue Bubble Gauntlet"
	},
	{
		name: "Blue Bubble",
		monsters: ["Blue Abomination", "Heavy Marine"],
		interactables: ["Pink Sphere"],
		items: ["Extra 100% Health", "Minigun Ammo", "Rocket Ammo", "Cannon Ammo", "Nuke Ammo", "Laser Ammo", "Homing Ammo", "Railgun Ammo"]
	},
	{
		name: "Blue Bubble Lattice",
		items: ["Minigun Ammo", "Rocket Ammo", "Cannon Ammo", "Nuke Ammo", "Laser Ammo", "Homing Ammo", "Railgun Ammo"],
		upgrades: ["Non-Laser Max Ammo"],
		trophy: true
	},
	{
		name: "Nuke Room",
		interactables: ["Save", "Pink Ring"],
		monsters: ["Baby Spider"],
		upgrades: ["Nuke Max Ammo", "Nuke Damage", "Minigun Max Ammo", "Minigun Damage", "Laser Damage", "Railgun Fire Rate", "Random Health"],
		items: ["Nuke Ammo", "Railgun Ammo", "200% Health 200% Armor"],
		trophy: true
	},
	{
		name: "Rocket Room",
		upgrades: [["Nuke Damage", "Nuke Radius", "Nuke Max Ammo", "Nuke Velocity"]]
	},
	{
		name: "Black Hole Room",
		interactables: ["Save", "Pink Ring", "Pink Sphere"],
		upgrades: [["Dark Hole Velocity", "Dark Hole Max Ammo"]],
		monsters: ["Insurgent", "Menace"]
	},
	{
		name: "Orange Flower",
		items: ["Rocket Ammo", "Minigun Ammo", "Cannon Ammo"],
		interactables: ["Save", "Pink Sphere"]
	},
	{
		name: "Botany Lab",
		monsters: ["Yellow Baby Spider", "Sentinel", "Insurgent"],
		upgrades: ["Random Health", "Minigun Damage"],
		trophy: true,
		interactables: ["Save", "Waypoint", "Out-Only Waypoint", "Bookmark", "Pink Ring", "Pink Sphere"],
		items: [
			"Laser Ammo",
			"Homing Ammo",
			"Minigun Ammo",
			"Rocket Ammo",
			"Cannon Ammo",
			"Railgun Ammo",
			"Gold",
			"200% Health 200% Armor",
			"200% Health 100% Armor"
		]
	},
	{
		name: "Galaxy Flower",
		upgrades: ["Dark Hole"]
	},
	{
		name: "Infinity Flower",
		trophy: true,
		items: ["Gold", "Nuke Ammo"],
		monsters: ["Baby Spider"],
		interactables: ["Pink Sphere", "Save", "Pink Ring", "Waypoint", "Out-Only Waypoint"],
		upgrades: ["Laser Damage", ["Railgun Fire Rate", "Railgun Damage"]]
	},
	{
		name: "Ying Island"
	},
	{
		name: "Menace Hive",
		items: ["Health"],
		upgrades: ["Minigun", "Rocket", "Cannon"]
	},
	{
		name: "Tau Cave Flower",
		upgrades: ["Rocket", "Laser", "Health", "Railgun"]
	},
	{
		name: "Oak Tree"
	},
	{
		name: "Cardboard Box",
		monsters: ["Imp", "Light Marine", "Marine", "Heavy Marine", "Arch Menace Male", "Menace"],
		upgrades: ["Max Health", "Cannon Velocity", "Minigun Damage", ["Minigun Damage", "Minigun Max Ammo"]],
		items: ["Extra 100% Health", "200% Armor", "Gold"],
		interactables: ["Save"]
	},
	{
		name: "Paper Box",
		monsters: ["Menace", "Imp", "Marine"],
		items: ["Extra 100% Health", "150% Armor", "Dark Hole Ammo", "Nuke Ammo", "Railgun Ammo", "Minigun Ammo", "Rocket Ammo"],
		upgrades: ["Random Health", "Health Regen", "Cannon Max Ammo", "Cannon Velocity"],
		interactables: ["Save", "Buy Station"],
		secretTrophy: true
	},
	{
		name: "Tweedle-Dum Base",
		interactables: ["Waypoint", "Out-Only Waypoint", "Respawn", "Save"],
		items: ["Plasma Ammo", "Cannon Ammo", "Laser Ammo", "200% Health 100% Armor"]
	},
	{
		name: "Tweedle-Dum Air",
		monsters: ["Marine", "Light Marine"],
		items: ["Extra 10% Health"]
	},
	{
		name: "Tweedle-Dee Cave",
		monsters: ["Imp", "Dragoon"],
		interactables: ["Save", "Pink Ring", "Pink Sphere", "Buy Station"],
		items: [
			"200% Health 100% Armor",
			"Cannon Ammo",
			"Laser Ammo",
			"Rocket Ammo",
			"Homing Ammo",
			"Railgun Ammo",
			"EMP Ammo",
			"Nuke Ammo",
			"600% Armor",
			"Gold"
		],
		upgrades: [
			"Nuke Velocity",
			"Plasma Max Ammo",
			"Minigun Damage",
			["Laser Damage", "Health", "Plasma Max Ammo", "Plasma Regen", "Plasma Damage", "Cannon Max Ammo", "Cannon Damage", "Minigun Damage"]
		],
		trophy: true
	},
	{
		name: "Ice Cube",
		trophy: true,
		interactables: ["Waypoint", "Bookmark"],
		items: ["Laser Ammo", "Railgun Ammo", "Cannon Ammo", "EMP Ammo"],
		upgrades: ["Laser", "Health", "Railgun"]
	},
	{
		name: "Pink Tree",
		interactables: ["Pink Ring", "Save", "Buy Station"],
		monsters: ["Heavy Marine"],
		upgrades: ["Plasma Regen"],
		items: ["Shield"]
	},
	{
		name: "Hard Pink Tree",
		interactables: ["Pink Ring"]
	},
	{
		name: "Tweedle-Dee Air",
		monsters: ["Menace", "Imp"]
	},
	{
		name: "Tweedle Haunted House 1",
		monsters: ["Petite Goon", "Green Yin Yang"],
		upgrades: ["Plasma Velocity", "Rocket Max Ammo", "Rocket Radius"],
		interactables: ["Pink Ring", "Pink Sphere", "Save"]
	},
	{
		name: "Tweedle Haunted House 2",
		interactables: ["Pink Ring", "Waypoint", "Out-Only Waypoint", "Bookmark", "Save"],
		upgrades: ["Plasma Velocity", "Rocket Max Ammo", "Plasma Weapon Mod"],
		items: ["Gold", "Plasma Ammo"],
		secretTrophy: true
	},
	{
		name: "Tweedle Haunted House 3",
		monsters: ["Minor Rat", "Troll", "Two Ball"],
		upgrades: ["Plasma Velocity", "Plasma Regen", "Rocket Max Ammo", "Rocket Radius"],
		items: ["Gold", "Plasma Ammo"]
	},
	{
		name: "Flare Weapon Mod",
		upgrades: ["Plasma"],
		items: ["Plasma Ammo"]
	},
	{
		name: "Tommy Gun Weapon Mod",
		upgrades: ["Cannon"],
		items: ["Cannon Ammo"]
	},
	{
		name: "Weapon Library"
	},
	{
		name: "Basic Laser Maze",
		upgrades: ["Laser Damage", "Laser Freeze Time", "Railgun Fire Rate", "Nuke Damage", "Plasma Regen", "Health Regen"],
		items: ["Rocket Ammo", "Railgun Ammo", "EMP Ammo"],
		interactables: ["Save"],
		secretTrophy: true
	},
	{
		name: "Small Laser Fort",
		upgrades: ["Laser", "Nuke", "Rocket", "Homing", "Railgun"],
		interactables: ["Save"],
		secretTrophy: true
	},
	{
		name: "Small Laser Fort Secret",
		secretTrophy: true
	},
	{
		name: "Tall Rail Tower",
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
		upgrades: ["Rocket", "Railgun", "Cannon"],
		items: ["Railgun Ammo"]
	},
	{
		name: "Short Rail Tower",
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
		items: ["Railgun Ammo"]
	},
	{
		name: "Mossy Cellar",
		upgrades: ["Cannon", "Railgun", "Laser", "Rocket", "EMP"]
	},
	{
		name: "Mossy Basement",
		interactables: ["Buy Station", "Common Sell Station", "Save", "Pink Ring"],
		items: ["Gold", "Rocket Ammo", "Minigun Ammo", "Homing Ammo", "Laser Ammo", "Cannon Ammo", "EMP Ammo", "Railgun Ammo", "Nuke Ammo"],
		upgrades: ["Cannon", "Homing", "Rocket", "EMP"],
		secretTrophy: true
	},
	{
		name: "Tau Cave Moon",
		interactables: ["Pink Sphere", "Waypoint", "Buy Station", "Bookmark", "Save"],
		upgrades: ["Laser Damage"]
	},
	{
		name: "Imp Disco",
		items: ["Homing Ammo"]
	},
	{
		name: "Type 1 Tau Cave",
		monsters: ["Overseer", "Heavy Marine", "Arch Menace Female"],
		interactables: ["Waypoint", "Out-Only Waypoint", "Bookmark", "Save", "Markers", "Buy Station", "Common Sell Station", "Respawn"],
		items: ["Cannon Ammo", "Laser Ammo", "Rocket Ammo", "Homing Ammo", "Minigun Ammo", "Railgun Ammo", "EMP Ammo", "Nuke Ammo"],
		upgrades: ["Laser Damage", "Plasma Regen", "Non-Laser Max Ammo"]
	},
	{
		name: "Type 2 Tau Cave",
		monsters: ["Marine", "Menace"],
		interactables: ["Waypoint", "Out-Only Waypoint"]
	},
	{
		name: "Type 3 Tau Cave",
		monsters: ["Gnole"],
		interactables: ["Waypoint", "Out-Only Waypoint"]
	},
	{
		name: "Hinesburg",
		interactables: ["Markers", "Buy Station", "Waypoint", "Respawn", "Save", "Common Sell Station"],
		items: ["Gold", "Armor", "Nuke Ammo", "Railgun Ammo", "EMP Ammo"]
	},
	{
		name: "Outer Space 2 Debris",
		items: ["Laser Ammo"]
	},
	{
		name: "Sun",
		interactables: [],
		upgrades: ["Health", "Rocket", "EMP", "Nuke"]
	},
	{
		name: "Solar System Elevator",
		interactables: ["Waypoint", "Bookmark", "Save"]
	},
	{
		name: "Small Minigun Planet",
		upgrades: ["Rocket", "Minigun", "Laser"],
		items: ["Armor", "Rocket Ammo", "Laser Ammo"],
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy Station", "Common Sell Station"]
	},
	{
		name: "Clay Planet",
		upgrades: ["Nuke"],
		items: ["100% Armor"],
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy Station", "Common Sell Station"]
	},
	{
		name: "Alpha Moon",
		trophy: true,
		interactables: ["Pink Sphere", "Bookmark", "Waypoint", "Save", "Pink Ring"],
		items: ["Nuke Ammo", "Railgun Ammo", "EMP Ammo", "Rocket Ammo", "Cannon Ammo", "Health", "Armor"],
		upgrades: ["Nuke", "Railgun", "Health"]
	},
	{
		name: "Beta Moon",
		interactables: ["Pink Sphere", "Buy Station", "Markers", "Save"],
		items: ["Nuke Ammo", "Gold"],
		upgrades: ["Dark Hole", "Minigun"],
		trophy: true
	},
	{
		name: "Ice Moon",
		interactables: ["Waypoint", "Respawn", "Save", "Buy Station", "Common Sell Station", "Pink Sphere"],
		items: ["Armor", "Health"],
		upgrades: ["Laser", "EMP", "Cannon"]
	},
	{
		name: "Gamma Moon",
		interactables: ["Waypoint", "Respawn", "Save", "Buy Station", "Common Sell Station", "Pink Sphere"],
		items: ["Armor", "Health", "Nuke Ammo"],
		upgrades: ["Laser", "Nuke", "EMP", "Cannon"]
	},
	{
		name: "Moon Debris",
		items: ["Health", "Armor", "Laser Ammo"]
	},
	{
		name: "Planet Debris",
		items: ["Health", "Armor", "Rocket Ammo"]
	},
	{
		name: "Ying Air Cube",
		monsters: ["Imp", "Lamprey", "Eternal Plague"],
		interactables: ["Respawn", "Save", "Blue Ring", "Waypoint"],
		upgrades: ["Plasma Velocity", "Cannon Velocity"],
		items: ["Plasma Ammo", "Health", "Armor", "Cannon Ammo", "Gold"]
	},
	{
		name: "Ying Deep Air",
		monsters: ["Troll"]
	},
	{
		name: "Ying Deep Air Cube",
		items: ["Gold", "Railgun Ammo", "Minigun Ammo", "Laser Ammo", "Rocket Ammo", "Cannon Ammo", "Homing Ammo"],
		upgrades: ["Rocket Radius", "Homing Max Ammo"],
		interactables: ["Respawn", "Common Sell Station", "Buy Station", "Waypoint"],
		secretTrophy: true
	},
	{
		name: "Ying Air",
		items: ["25% Health", "Extra 10% Health"],
		monsters: ["Heavy Marine", "Minor Gremlin", "Goblin", "Gnole", "Demon", "Orc", "Troll"]
	},
	{
		name: "Ying Air Core",
		upgrades: ["Rocket"]
	},
	{
		name: "Noob Maze",
		interactables: ["Pink Ring", "Pink Sphere"],
		upgrades: ["Plasma Max Ammo"],
		trophy: true
	},
	{
		name: "I1",
		monsters: ["Collapsed Spirit"]
	},
	{
		name: "Williston City",
		items: ["Gold", "100% Armor", "Rocket Ammo", "Nuke Ammo", "I1 Stable Singletons Key"],
		interactables: ["Buy Station", "Markers", "Waypoint", "Respawn", "Save", "Common Sell Station", "Buy Nuke"],
		upgrades: ["Laser Damage"],
		trophy: true
	},
	{
		name: "Williston Field",
		monsters: ["Spider", "Bee", "Queen Bee", "Gnole", "Unruly Juggernaut", "Formidable Juggernaut", "Locust", "Dissident"],
		items: ["Gold", "Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Rocket Ammo", "Laser Ammo", "Minigun Ammo"]
	},
	{
		name: "Williston Trees",
		interactables: ["Waypoint", "Save", "Bookmark", "Buy Station"],
		items: ["Minigun Ammo"]
	},
	{
		name: "Williston Wall",
		items: [
			"Rocket Ammo",
			"Gold",
			"Nuke Ammo",
			"Dark Hole Ammo",
			"Cannon Ammo",
			"Laser Ammo",
			"Rocket Ammo",
			"Homing Ammo",
			"Minigun Ammo",
			"Railgun Ammo"
		],
		upgrades: ["Non-Laser Max Ammo"]
	},
	{
		name: "Williston Spiral",
		monsters: ["War Vulcan", "Small Goon"],
		items: ["Health", "Armor"],
		upgrades: ["Minigun Max Ammo", "Minigun Damage", "Minigun Fire Rate"]
	},
	{
		name: "EMP Castle",
		monsters: ["Greater Non-Piercing Scourge", "Insurgent", "Dissident"],
		upgrades: ["Non-EMP Max Ammo", "Random Health", ["EMP Max Ammo", "EMP Radius", "EMP Freeze Time"], "EMP Freeze Time", "Nuke Damage"],
		items: [
			"Cannon Ammo",
			"Laser Ammo",
			"Rocket Ammo",
			"Homing Ammo",
			"Minigun Ammo",
			"Railgun Ammo",
			"EMP Ammo",
			"Nuke Ammo",
			"Dark Hole Ammo",
			"Gold",
			"100% Armor"
		],
		interactables: ["Pink Sphere", "Pink Ring", "Buy Station", "Common Sell Station", "Waypoint", "Markers"],
		trophy: true
	},
	{
		name: "Bristol",
		items: ["Gold", "Armor"],
		upgrades: ["Minigun Damage", "Minigun Fire Rate"],
		interactables: ["Pink Sphere", "Waypoint", "Respawn", "Common Sell Station", "Buy Station", "Markers"],
		trophy: true
	},
	{
		name: "Blackberry",
		items: [
			"200% Health 100% Armor",
			"200% Health 200% Armor",
			"200% Armor",
			"1000% Armor",
			"Extra 100% Health",
			"Rocket Ammo",
			"Dark Hole Ammo",
			"Homing Ammo",
			"Nuke Ammo",
			"EMP Ammo",
			"Gold",
			"140 Second Yellow Key"
		],
		upgrades: ["Rocket Radius", "EMP Radius", "EMP Max Ammo", "Nuke Radius", "Nuke Max Ammo", "Nuke Damage", "Dark Hole Max Ammo"],
		monsters: [
			"Baby Spider",
			"Great Spider",
			"Iron War Vulcan",
			"Guerrilla",
			"Insurgent",
			"Light Marine",
			"Marine",
			"Blue Abomination",
			"Science Core",
			"Vile Menace"
		],
		interactables: ["Save", "Buy Station", "Waypoint", "Bookmark", "Pink Sphere", "Pink Ring", "Out-Only Waypoint"],
		trophy: true,
		secretTrophy: true
	},
	{
		name: "Fake Blackberry",
		interactables: ["Save", "Buy Station"]
	},
	{
		name: "Well",
		interactables: ["Waypoint", "Pink Ring", "Pink Sphere", "Save"],
		upgrades: [
			"Laser Damage",
			["Railgun Damage", "Railgun Fire Rate"],
			["Dark Hole Damage", "Dark Hole Max Ammo", "Dark Hole Velocity"],
			"Rocket Max Ammo"
		],
		items: ["Rocket Ammo", "Homing Ammo", "Dark Hole Ammo", "Nuke Ammo", "Laser Ammo", "Cannon Ammo", "EMP Ammo", "Railgun Ammo", "Minigun Ammo"]
	},
	{
		name: "Williston Purple Well",
		interactables: ["Pink Ring", "Pink Sphere"],
		upgrades: ["Dark Hole Damage", ["Dark Hole Max Ammo", "Dark Hole Velocity"]],
		items: [
			"200% Health 100% Armor",
			"Rocket Ammo",
			"Homing Ammo",
			"Dark Hole Ammo",
			"Nuke Ammo",
			"Laser Ammo",
			"Cannon Ammo",
			"EMP Ammo",
			"Railgun Ammo",
			"Minigun Ammo"
		]
	},
	{
		name: "Zubeneschamali Castle",
		monsters: ["Collapsed Spirit", "Guardian"],
		items: [
			"Cannon Ammo",
			"Laser Ammo",
			"Rocket Ammo",
			"Homing Ammo",
			"Minigun Ammo",
			"Railgun Ammo",
			"EMP Ammo",
			"Nuke Ammo",
			"Dark Hole Ammo",
			"Gold",
			"20 Second Yellow Key"
		],
		upgrades: ["Non-Laser Max Ammo", "Nuke Max Ammo", "Nuke Radius", "EMP Radius", "EMP Freeze Time", "Rocket Velocity", "Nuke Damage"],
		interactables: ["Pink Ring", "Waypoint", "Save"],
		trophy: true
	},
	{
		name: "I1 Library",
		interactables: ["Pink Sphere", "Save", "Waypoint"],
		trophy: true
	},
	{
		name: "I2 Library",
		interactables: ["Waypoint", "Save"],
		upgrades: ["Railgun Fire Rate"],
		trophy: true
	},
	{
		name: "I3 WIG Maze Room",
		interactables: ["Pink Sphere"]
	},
	{
		name: "Sagittarius Portal"
	},
	{
		name: "Taurus Portal",
		monsters: ["Clockwork Watchman"]
	},
	{
		name: "Imp Cave",
		monsters: ["Imp"],
		interactables: ["Save"],
		items: ["Minigun Ammo", "Homing Ammo", "Cannon Ammo", "Rocket Ammo", "EMP Ammo", "Laser Ammo"],
		upgrades: ["Non-EMP Max Ammo"],
		trophy: true
	},
	{
		name: "Gnole Cave",
		monsters: ["Gnole"],
		items: ["Minigun Ammo", "Homing Ammo", "Cannon Ammo", "Rocket Ammo", "EMP Ammo", "Laser Ammo"],
		upgrades: ["Non-Laser Max Ammo"]
	},
	{
		name: "Demon Cave",
		monsters: ["Demon"],
		items: ["Minigun Ammo", "Homing Ammo", "Cannon Ammo", "Rocket Ammo", "EMP Ammo", "Laser Ammo"],
		upgrades: ["Non-Laser Max Ammo", "Homing Damage", "Homing Velocity"]
	},
	{
		name: "Orc Cave",
		monsters: ["Orc", "Great Spider"]
	},
	{
		name: "Beholder Cave",
		upgrades: ["Rocket Velocity", "Homing Velocity", "Nuke Velocity", "Dark Hole Velocity"]
	},
	{
		name: "Botany Lab Black Cube",
		monsters: ["Overlord"]
	},
	{
		name: "Botany Lab Red Cube",
		monsters: ["Demon"],
		upgrades: ["Homing Damage", "Homing Velocity", "Homing Max Ammo", "Homing Fire Rate", "Nuke Velocity"],
		items: ["200% Health 200% Armor"],
		secretTrophy: true
	},
	{
		name: "Lighthouse",
		upgrades: ["Minigun", "Health"],
		interactables: ["Pink Ring", "Save"]
	},
	{
		name: "Lighthouse Basement",
		items: ["Minigun Ammo", "Railgun Ammo", "EMP Ammo", "Nuke Ammo"],
		upgrades: ["Nuke"],
		interactables: ["Pink Sphere", "Pink Ring", "Blue Ring", "Save", "Waypoint", "Bookmark"],
		trophy: true
	},
	{
		name: "Golden Yellow Flower",
		interactables: ["Save", "Pink Ring"],
		upgrades: ["Rocket", "Rocket Weapon Mod"],
		items: ["Rocket Ammo", "Minigun Ammo", "EMP Ammo", "Dark Hole Ammo", "Nuke Ammo", "Laser Ammo", "Cannon Ammo", "Gold"]
	},
	{
		name: "I2 Spiral",
		noEscape: true
	},
	{
		name: "I2 WIG Flower",
		interactables: ["Pink Sphere", "Save"]
	},
	{
		name: "Green I2 WIG Flower",
		interactables: ["Pink Sphere", "Save"]
	},
	{
		name: "Red I2 WIG Flower",
		interactables: ["Pink Sphere", "Pink Ring", "Save"]
	},
	{
		name: "I3 WIG Flower",
		items: [
			"Gold",
			"150% Armor",
			"Cannon Ammo",
			"Rocket Ammo",
			"Laser Ammo",
			"Minigun Ammo",
			"Homing Ammo",
			"Railgun Ammo",
			"EMP Ammo",
			"Nuke Ammo",
			"Dark Hole Ammo"
		],
		upgrades: ["Non-Laser Freeze Time"],
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy Station", "Markers"]
	},
	{
		name: "Prank I3 WIG Flower",
		interactables: ["Pink Sphere", "Save"]
	},
	{
		name: "Hard Orange Flower",
		monsters: ["Collapsed Star", "Spider"],
		items: ["Minigun Ammo"],
		interactables: ["Pink Sphere", "Save", "Buy Station", "Waypoint", "Out-Only Waypoint", "Bookmark"],
		upgrades: ["Cannon Damage"]
	},
	{
		name: "Mirror Gate"
	},
	{
		name: "Common Gate"
	},
	{
		name: "Nuke Radius Cave",
		upgrades: ["Nuke Radius"],
		items: ["Nuke Ammo"]
	},
	{
		name: "Fanatic Lattice",
		interactables: ["Waypoint", "Bookmark", "Save"],
		upgrades: ["Cannon Damage", "Non-Laser Max Ammo"],
		monsters: ["Fanatic", "Overlord", "Demon", "Hired Gun", "Tough Juggernaut"]
	},
	{
		name: "Fanatic Lattice Treasure",
		upgrades: ["Minigun Damage", "Health Regen"],
		monsters: ["Collapsed Angel"],
		items: ["Railgun Ammo", "Minigun Ammo", "Cannon Ammo", "Extra 100% Health"],
		interactables: ["Save"]
	},
	{
		name: "Fanatic Spire",
		interactables: ["Blue Ring"]
	},
	{
		name: "Fanatic Spire Scaffold",
		upgrades: ["Rocket"]
	},
	{
		name: "Fanatic Weed",
		items: ["Minigun Ammo", "Cannon Ammo", "Railgun Ammo", "Health"],
		interactables: ["Save", "Waypoint", "Out-Only Waypoint", "Bookmark"],
		upgrades: ["Minigun Damage", "Health Regen"],
		monsters: ["Fanatic"]
	},
	{
		name: "EMP City",
		upgrades: ["EMP Radius", "EMP Max Ammo", "EMP Freeze Time", "Nuke Velocity"],
		items: ["Gold"],
		monsters: ["Spider", "Baby Spider", "Guardian", "Demon", "Fanatic"]
	},
	{
		name: "Weed Ring",
		interactables: ["Waypoint", "Save"],
		upgrades: ["EMP Radius", "EMP Max Ammo", "Max Health", "Non-Laser Max Ammo"],
		monsters: ["Evil Goon", "Unsavory Goon", "Immoral Goon", "Minor Rat", "Lesser Silver", "Disciple", "Mystic", "Pirate", "Hit Man"],
		items: ["Rocket Ammo", "Gold", "Homing Ammo", "20 Second Yellow Key", "Nuke Ammo", "EMP Ammo", "Railgun Ammo"],
		trophy: true
	},
	{
		name: "Dark Willow Tree"
	},
	{
		name: "Large White Flower"
	},
	{
		name: "Danville"
	},
	{
		name: "Scorpius Flower",
		items: ["Laser Ammo"],
		interactables: ["Save"]
	},
	{
		name: "Scorpius Vine"
	},
	{
		name: "Scorpius Portal",
		monsters: ["Blood Boy"]
	},
	{
		name: "Fanatic Island",
		interactables: ["Common Sell Station", "Buy Station", "Markers"]
	},
	{
		name: "Fanatic Air",
		interactables: ["Common Sell Station", "Buy Station", "Markers"],
		monsters: ["Overlord", "Gnole"]
	},
	{
		name: "Fanatic Caves",
		items: ["Gold"],
		monsters: ["Disciple"]
	},
	{
		name: "Small Blue Flower (Primary)",
		upgrades: [
			"Nuke Radius",
			"Non-Laser Max Ammo",
			"Max Health",
			"Nuke Radius",
			"Nuke Velocity",
			"Railgun Damage",
			"Railgun Max Ammo",
			"Railgun Fire Rate"
		],
		items: [
			"EMP Ammo",
			"Nuke Ammo",
			"Gold",
			"Dark Hole Ammo",
			"Railgun Ammo",
			"Minigun Ammo",
			"Homing Ammo",
			"Rocket Ammo",
			"Laser Ammo",
			"Cannon Ammo",
			"Plasma Ammo"
		],
		monsters: ["Sentinel", "Troll"],
		interactables: ["Buy Station", "Pink Sphere", "Save", "Waypoint", "Buy Station"],
		trophy: true
	},
	{
		name: "Small Blue Flower (Secondary)",
		upgrades: ["Nuke Max Ammo"]
	},
	{
		name: "Small Blue Flower (Tertiary)",
		upgrades: ["EMP Radius"]
	},
	{
		name: "Small Blue Flower (Quaternary)",
		upgrades: []
	},
	{
		name: "Fanatic Well",
		items: ["Gold"],
		upgrades: ["Nuke Velocity", "EMP Freeze Time", "EMP Radius", "Dark Hole Velocity", "Dark Hole Max Ammo"],
		interactables: ["Pink Ring", "Pink Sphere", "Buy Station", "Save", "Waypoint", "In-Only Waypoint"],
		monsters: ["Yellow Baby Spider", "Insurgent", "Guerrilla"]
	},
	{
		name: "Minigun Forest",
		interactables: ["Pink Sphere"]
	},
	{
		name: "Minigun Forest Minor Pod",
		items: ["Homing Ammo", "Minigun Ammo", "Nuke Ammo", "Railgun Ammo", "EMP Ammo", "Gold", "Armor", "Health"],
		upgrades: ["Random Health", "Minigun Damage"],
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy Station"]
	},
	{
		name: "Spruce Tree",
		items: ["Rocket Ammo", "EMP Ammo", "Nuke Ammo"],
		upgrades: ["Rocket Radius", "Rocket Velocity"],
		monsters: ["Troll", "Science Core", "War Vulcan"],
		interactables: ["Save", "Out-Only Waypoint", "Blue Ring"],
		secretTrophy: true
	},
	{
		name: "Steel Box",
		monsters: ["Menace", "Dissident", "Collapsed Spirit", "Collapsed Angel"],
		upgrades: ["Railgun Max Ammo", "Rocket Max Ammo", "Cannon Max Ammo"],
		interactables: ["Buy Station", "Common Sell Station", "Save"],
		items: ["Extra 100% Health", "200% Armor", "Gold", "Railgun Ammo"],
		secretTrophy: true
	},
	{
		name: "Cannon Ammo Grab",
		monsters: ["Hired Gun", "Tough Juggernaut", "Mercinary"],
		interactables: ["Pink Sphere", "Pink Ring", "Buy Station"],
		items: ["Cannon Ammo", "100% Armor", "Plasma Ammo"]
	},
	{
		name: "Fanatic Grass",
		items: [
			"Health",
			"Armor",
			"Nuke Ammo",
			"Gold",
			"Dark Hole Ammo",
			"Railgun Ammo",
			"Minigun Ammo",
			"Homing Ammo",
			"Rocket Ammo",
			"Laser Ammo",
			"Cannon Ammo",
			"Plasma Ammo"
		],
		upgrades: ["Non-Laser Max Ammo"],

		monsters: ["Fanatic"]
	},
	{
		name: "Small Cannon Gym",
		items: [
			"Health",
			"Nuke Ammo",
			"Gold",
			"Dark Hole Ammo",
			"Railgun Ammo",
			"Minigun Ammo",
			"Homing Ammo",
			"Rocket Ammo",
			"Laser Ammo",
			"Cannon Ammo",
			"Plasma Ammo"
		],
		upgrades: ["Cannon Fire Rate", "Cannon Velocity", "Plasma Velocity", "Non-Laser Max Ammo"],
		interactables: ["Pink Sphere", "Save", "Pink Ring"]
	},
	{
		name: "Laboratory Vine",
		monsters: ["Goliath"],
		items: ["Gold"],
		upgrades: ["Railgun Damage", "Non-Laser Max Ammo"]
	},
	{
		name: "Laboratory Vine Bundle"
	},
	{
		name: "Blue Mushroom"
	},
	{
		name: "Rainbow Flower",
		items: []
	},
	{
		name: "Toronto Vine"
	},
	{
		name: "Pirate Vine"
	},
	{
		name: "Laser Branch Vine"
	},
	{
		name: "Toronto",
		monsters: ["Collapsed Spirit", "Collapsed Soul", "Minor Guardian"],
		interactables: ["Waypoint", "Markers", "Buy Station", "Common Sell Station", "Scarce Sell Station"],
		upgrades: ["Cannon Weapon Mod", "Nuke Velocity", "Nuke Radius"]
	},
	{
		name: "Jackfruit",
		monsters: ["Guardian"],
		interactables: ["Pink Ring", "Pink Sphere", "Upgrade Station"],
		upgrades: ["Plasma Damage", "Plasma Regen"],
		items: ["Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Rocket Ammo", "Homing Ammo", "200% Health 200% Armor"],
		trophy: true
	},
	{
		name: "Large White Flower",
		upgrades: ["Random Health", "Plasma Regen", "Laser Max Ammo", "Homing Max Ammo", "Homing Fire Rate", "Homing Damage", "Homing Velocity", "Max Health"],
		items: ["Extra 100% Health", "Gold"],
		monsters: ["Menace", "Arch Menace Male"],
		interactables: ["Waypoint", "Save", "Pink Ring", "Pink Sphere", "Buy Station"],
		trophy: true
	},
	{
		name: "Great White Cavern",
		interactables: ["Common Sell Station", "Buy Station"],
		items: ["200% Health 100% Armor", "Laser Ammo", "Railgun Ammo", "Minigun Ammo"],
		upgrades: ["Laser Damage"],
		monsters: ["Marine", "Pirate", "Sentinel"]
	},
	{
		name: "Rail Showdown Caves",
		upgrades: ["Railgun"]
	},
	{
		name: "Burlington"
	},
	{
		name: "Red Maze Flower",
		upgrades: ["EMP Radius"]
	},
	{
		name: "Carrots",
		monsters: ["Insurgent"],
		upgrades: ["Cannon Max Ammo", "Non-Laser Max Ammo", "Rocket Damage", "Rocket Max Ammo"],
		items: [
			"Plasma Ammo",
			"Cannon Ammo",
			"Laser Ammo",
			"Rocket Ammo",
			"Homing Ammo",
			"Minigun Ammo",
			"Railgun Ammo",
			"EMP Ammo",
			"Nuke Ammo",
			"Dark Hole Ammo",
			"Gold"
		],
		interactables: ["Save", "Waypoint", "Out-Only Waypoint", "Bookmark"],
		secretTrophy: true
	},
	{
		name: "Salmon Mushroom",
		monsters: ["Minor Guardian"],
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
		items: ["Homing Ammo"],
		upgrades: ["Railgun Fire Rate", "Railgun Max Ammo", "Random Health"]
	},
	{
		name: "Black Mushroom",
		interactables: ["Black Market", "Save", "Pink Ring", "Pink Sphere"],
		monsters: ["Sentinel", "Minor Guardian"],
		items: ["Minigun Ammo", "Rocket Ammo", "Laser Ammo", "Cannon Ammo", "Gold", "200% Health 200% Armor"],
		trophy: true
	},
	{
		name: "Black Market"
	},
	{
		name: "Dandelions"
	},
	{
		name: "Turnips",
		items: ["Railgun Ammo"],
		upgrades: ["Plasma Damage", "Cannon Fire Rate", "Rocket Radius"],
		monsters: ["Arch Menace Female", "Guardian"],
		secretTrophy: true
	},
	{
		name: "Beets",
		secretTrophy: true
	},
	{
		name: "Root Vegetable Basement",
		interactables: ["Pink Sphere"]
	},
	{
		name: "Yellow Mushroom",
		monsters: ["Heavy Marine", "Collapsed Spirit"],
		interactables: ["Pink Sphere"]
	},
	{
		name: "Red Mushroom"
	},
	{
		name: "I3 Library",
		interactables: ["Pink Sphere"]
	},
	{
		name: "I2 Fast Gate",
		monsters: ["Collapsed Angel"],
		interactables: ["Pink Sphere", "Pink Ring"]
	},
	{
		name: "Tegan's Garden"
	},
	{
		name: "Willow Tree"
	},
	{
		name: "Mystic Vine 1",
		monsters: ["Troll", "Orc", "Minor Guardian", "Spider"]
	},
	{
		name: "Mystic Vine 2",
		monsters: ["Orc", "Hobgoblin", "Biblical Locust", "Blood Boy", "Spider"]
	},
	{
		name: "Mystic Vine 3",
		items: [
			"Plasma Ammo",
			"Cannon Ammo",
			"Laser Ammo",
			"Rocket Ammo",
			"Homing Ammo",
			"Minigun Ammo",
			"Railgun Ammo",
			"EMP Ammo",
			"Nuke Ammo",
			"Dark Hole Ammo",
			"Gold"
		],
		upgrades: ["Non-Laser Max Ammo"],
		monsters: ["Hobgoblin", "Ogre", "Plague", "Great Spider"]
	},
	{
		name: "Mystic Vine 4",
		interactables: ["Buy Station"],
		items: ["Extra 10% Health", "Rocket Ammo", "Dark Hole Ammo", "Nuke Ammo", "Cannon Ammo", "Gold"],
		upgrades: ["EMP Freeze Time", "Railgun Fire Rate", "Rocket Damage", "Cannon Damage", "Dark Hole Max Ammo", "Dark Hole Damage", "Rocket Max Ammo"],
		monsters: ["Mystic"],
		trophy: true
	},
	{
		name: "Mystic Vine Shaft",
		items: ["Gold", "Nuke Ammo", "Dark Hole Ammo", "EMP Ammo", "Railgun Ammo", "Rocket Ammo", "Laser Ammo", "Cannon Ammo"]
	},
	{
		name: "Montreal",
		items: ["Armor", "Gold"],
		monsters: ["Major Goon", "Dissident"],
		upgrades: ["Railgun Fire Rate"],
		interactables: ["Common Sell Station", "Buy Station", "Waypoint", "Markers", "Respawn", "Save", "Out-Only Waypoint"],
		trophy: true
	},
	{
		name: "Creeping Jeni",
		upgrades: ["Cannon"]
	},
	{
		name: "Violet",
		upgrades: ["EMP Freeze Time"]
	},
	{
		name: "I3",
		monsters: ["Goliath", "Wasp", "Satellite"],
		items: ["150% Armor", "Cannon Ammo", "Laser Ammo", "Rocket Ammo", "Minigun Ammo", "Railgun Ammo", "EMP Ammo", "Nuke Ammo", "Dark Hole Ammo"],
		upgrades: ["Non-Laser Max Ammo"]
	},
	{
		name: "Outer Space -1"
	},
	{
		name: "Outer Space 0",
		interactables: ["Out-Only Waypoint", "Waypoint"],
		monsters: ["Vile Menace", "Unruly Juggernaut", "Tough Juggernaut", "I am the Juggernaut", "Formidable Juggernaut"],
		upgrades: ["Laser", "Railgun Max Ammo", "Railgun Damage"]
	},
	{
		name: "Outer Space 0 Lockbox",
		upgrades: ["Laser Max Ammo", "Rocket Max Ammo", "Rocket Damage"]
	},
	{
		name: "Outer Space 1",
		monsters: ["Marine"]
	},
	{
		name: "Outer Space 1 Bunker",
		items: ["Armor", "Homing Ammo", "Rocket Ammo", "EMP Ammo"],
		interactables: ["Save", "Buy Station"]
	},
	{
		name: "Medium Gold Asteroid",
		monsters: ["Arch Menace Male", "Minor Gremlin"],
		items: ["Gold"]
	},
	{
		name: "Large Gold Asteroid",
		interactables: ["Save", "Pink Ring"],
		items: ["Gold"],
		secretTrophy: true
	},
	{
		name: "Ice Castle",
		interactables: ["Buy Station", "Markers"],
		monsters: ["Collapsed Star", "Lamprey", "Greater Non-Piercing Scourge"],
		upgrades: ["Laser Damage"],
		items: ["Laser Ammo"]
	},
	{
		name: "The Bulk 1",
		interactables: ["Pink Sphere", "Waypoint", "Out-Only Waypoint", "Bookmark", "Save"]
	},
	{
		name: "Bulk Castle",
		items: ["Rocket Ammo", "Nuke Ammo", "Minigun Ammo", "Railgun Ammo", "100% Armor"],
		upgrades: ["Nuke Damage", "Random Health", ["EMP Max Ammo", "EMP Radius", "EMP Freeze Time"], "EMP Freeze Time"],
		monsters: ["Baby Spider", "Insurgent", "Dissident"],
		interactables: ["Pink Ring", "Buy Station", "Common Sell Station", "Save"]
	},
	{
		name: "Outer Space 2"
	},
	{
		name: "Galaxy"
	},
	{
		name: "Solar System",
		monsters: ["Spider", "Laboratory", "Evil Goon"]
	},
	{
		name: "Solar System Debris"
	},
	{
		name: "Jericho",
		upgrades: ["Rocket"]
	},
	{
		name: "Richmond",
		monsters: ["Collapsed Spirit"],
		upgrades: ["Cannon Number", "Cannon Velocity", "Cannon Fire Rate", "Random Health"],
		items: ["100% Armor", "EXP"],
		interactables: ["Waypoint", "Save", "Common Sell Station", "Buy Station", "Respawn", "Markers", "Pink Ring", "Out-Only Waypoint"],
		trophy: true
	},
	{
		name: "Richmond Sewers",
		monsters: ["Minor Rat", "Rebel", "Arch Menace Female"],
		upgrades: ["Cannon", "Rocket", "Homing", "Health", "EMP"],
		interactables: ["Waypoint"]
	},
	{
		name: "Richmond Secret",
		interactables: ["Pink Ring", "Save", "Pink Sphere"],
		items: ["Minigun Ammo", "Rocket Ammo", "Laser Ammo", "Railgun Ammo", "EMP Ammo", "Nuke Ammo"],
		upgrades: ["Laser Freeze Time"],
		secretTrophy: true
	},
	{
		name: "Richmond Building",
		interactables: ["Pink Sphere", "Pink Ring", "Markers"],
		monsters: ["War Vulcan"],
		items: ["Minigun Ammo", "Laser Ammo", "Rocket Ammo"],
		upgrades: [["Rocket Radius", "Rocket Velocity", "Minigun Max Ammo", "Railgun Fire Rate", "Laser Freeze Time"], "Cannon Number"], // TODO: support [[["Rocket Radius", "Rocket Velocity"], "Minigun Max Ammo", "Railgun Fire Rate", "Laser Freeze Time"], "Cannon Number"]
		secretTrophy: true
	},
	{
		name: "Yellow Flower Wall",
		items: ["Gold", "Cannon Ammo", "Laser Ammo", "Rocket Ammo", "Homing Ammo", "Minigun Ammo", "Dark Hole Ammo"]
	},
	{
		name: "Red Cave",
		interactables: ["Save"],
		items: ["Rocket Ammo", "EXP"],
		upgrades: ["Homing", "Rocket"],
		trophy: true
	},
	{
		name: "Red Rose",
		interactables: ["Pink Ring", "Pink Sphere"],
		items: ["Gold", "Nuke Ammo", "Minigun Ammo", "Rocket Ammo", "Railgun Ammo", "Homing Ammo", "Cannon Ammo", "Laser Ammo", "EMP Ammo"],
		secretTrophy: true
	},
	{
		name: "Richmond Library",
		upgrades: ["Rocket"],
		interactables: ["Waypoint", "Buy Nuke", "Blue Ring"]
	},
	{
		name: "Richmond Library Arcade",
		upgrades: ["Health", "Railgun", "Laser", "Rocket"]
	},
	{
		name: "Bedroom",
		interactables: ["Sleep"]
	},
	{
		name: "Hell"
	},
	{
		name: "Hell Flower"
	},
	{
		name: "Inner Core"
	},
	{
		name: "Stable Singletons",
		interactables: ["Pink Sphere"]
	},
	{
		name: "Grey Lattice",
		items: ["Armor", "Health", "Shield", "Laser Ammo", "Minigun Ammo", "Homing Ammo", "Cannon Ammo", "Rocket Ammo"],
		upgrades: ["Plasma Velocity", "Non-Laser Max Ammo"]
	},
	{
		name: "Slow Exit Maze",
		monsters: ["Goblin", "Light Marine", "Heavy Marine", "Insurgent"],
		upgrades: ["Minigun Damage", "Minigun Max Ammo", "Laser Max Ammo"],
		interactables: ["Save", "Waypoint", "Pink Ring"],
		items: ["Armor"],
		trophy: true
	},
	{
		name: "Easy Minigun Tower",
		interactables: ["Pink Ring", "Pink Sphere"],
		items: ["Armor", "Health"],
		upgrades: ["Minigun Damage", "Minigun Max Ammo", "Laser Damage"]
	},
	{
		name: "Mylantis",
		monsters: ["Goliath"],
		interactables: ["Waypoint", "Bookmark", "Save", "Out-Only Waypoint", "Pink Sphere"]
	},
	{
		name: "Mylantis Caves"
	},
	{
		name: "RejuvenX Refinery",
		upgrades: ["RejuvenX"],
		items: ["Health", "Cannon Ammo", "Laser Ammo", "Rocket Ammo", "Minigun Ammo", "Railgun Ammo", "Nuke Ammo", "EMP Ammo", "Gold"],
		interactables: ["Save", "Buy Station", "Respawn"]
	},
	{
		name: "Nuclear Silo",
		items: ["Nuke Ammo"]
	},
	{
		name: "Mylantis City",
		interactables: ["Pink Sphere"]
	},
	{
		name: "Mylantis Top Garden",
		items: ["Nuke Ammo", "Gold"],
		upgrades: ["Plasma", "Cannon", "Laser", "Rocket", "Homing", "Minigun", "Railgun", "EMP", "Nuke", "Dark Hole", "RejuvenX"],
		interactables: ["Buy Nuke", "Buy Station", "Scarce Sell Station", "Markers", "Waypoint", "Save", "Bookmark"],
		trophy: true
	},
	{
		name: "Main Branch Library",
		upgrades: ["Telekinesis"]
	},
	{
		name: "House of 5 Lampreys"
	},
	{
		name: "Laser Genesis Planet",
		items: ["Laser Ammo"],
		interactables: ["Waypoint", "Bookmark", "Save"]
	},
	{
		name: "Laser Genesis"
	},
	{
		name: "Mylantis City Underground"
	},
	{
		name: "Beta Menger Sponge"
	},
	{
		name: "Alpha Menger Sponge",
		upgrades: ["Nuke"],
		items: ["Nuke Ammo", "Minigun Ammo", "Railgun Ammo"],
		trophy: true
	},
	{
		name: "Happy Land",
		items: ["Plasma Ammo"],
		upgrades: ["Plasma Velocity"],
		interactables: ["Blue Ring"]
	},
	{
		name: "Small Noob Flower",
		interactables: ["Pink Sphere", "Pink Ring"],
		upgrades: [["Max Health", "Plasma Max Ammo"]]
	},
	{
		name: "Ying World Library"
	},
	{
		name: "Quicksand Grass",
		noEscape: true
	},
	{
		name: "Quicksand Grass Basement",
		interactables: ["Pink Sphere", "Save", "Buy Station", "Common Sell Station"],
		monsters: ["Blue Lamprey", "War Vulcan", "Probe", "Rat"],
		upgrades: ["Laser Max Ammo", "Laser Freeze Time", "EMP Freeze Time", "EMP Radius", "Random Health", "Nuke Max Ammo"],
		items: ["Nuke Ammo", "Homing Ammo", "Laser Ammo", "Cannon Ammo", "Rocket Ammo", "Minigun Ammo", "Railgun Ammo", "EMP Ammo", "Dark Hole Ammo", "Gold"],
		secretTrophy: true
	},
	{
		name: "Purple House",
		upgrades: ["EMP Max Ammo", "EMP Velocity", "EMP Damage", "RejuvenX"]
	},
	{
		name: "Large Cannon Pyramid",
		interactables: ["Pink Sphere"],
		upgrades: ["Cannon", "Railgun", "Health", "Nuke"],
		items: ["Laser Ammo", "Railgun Ammo"]
	},
	{
		name: "Fir Tree",
		upgrades: ["Laser Damage"],
		items: ["Laser Ammo", "Cannon Ammo"],
		monsters: ["Goliath"]
	},
	{
		name: "Alpha Cube",
		monsters: ["Guerrilla", "Menace", "Vile Menace", "Heavy Marine", "War Vulcan", "Insurgent", "Rebel"],
		interactables: ["Save"],
		items: ["Extra 100% Health", "200% Armor", "1000% Armor", "Nuke Ammo", "Railgun Ammo", "EMP Ammo"],
		upgrades: ["Laser Damage", "Rocket Radius", "EMP Radius", "Dark Hole Velocity", "Railgun Fire Rate"],
		trophy: true
	},
	{
		name: "Health Tower",
		monsters: ["Goblin", "Dragoon", "Greater Non-Piercing Scourge"],
		interactables: ["Save"],
		upgrades: ["Max Health", "Health Regen", "Laser Damage", "Minigun Fire Rate", "Minigun Damage", "Nuke Velocity", "Rocket Velocity"],
		items: ["Extra 100% Health", "200% Armor", "Minigun Ammo", "Laser Ammo", "Rocket Ammo", "Cannon Ammo", "EMP Ammo", "Railgun Ammo", "Gold"],
		secretTrophy: true,
		trophy: true
	},
	{
		name: "Pure Menger Sponge"
	},
	{
		name: "Pure Menger Sponge Treasure",
		upgrades: ["Nuke"]
	},
	{
		name: "Stoney Air",
		monsters: ["Small Goon", "Goblin"],
		items: ["Laser Ammo"],
		interactables: ["Save"]
	},
	{
		name: "Mossy Air"
	},
	{
		name: "Yellow Rocket Treasure",
		upgrades: ["Rocket"],
		interactables: ["Save"]
	},
	{
		name: "Mossy Island"
	},
	{
		name: "Buttercup",
		interactables: ["Save"],
		upgrades: [
			["Plasma Regen", "Plasma Damage", "Plasma Max Ammo", "Plasma Velocity", "Health Regen"],
			["Plasma Velocity", "Random Health"]
		],
		items: ["Extra 100% Health", "200% Armor"]
	},
	{
		name: "Yellow Cube Secret",
		upgrades: ["Health", "Dark Hole", "Rocket"]
	},
	{
		name: "Stoney Air Cave",
		monsters: ["Imp", "Light Marine"],
		interactables: ["Pink Ring", "Save", "Pink Sphere"],
		trophy: true,
		upgrades: [
			["Random Health", "Plasma Max Ammo", "Plasma Velocity", "Cannon Max Ammo", "Cannon Damage", "Laser Max Ammo", "Laser Damage"],
			"Rocket Max Ammo"
		],
		items: ["Nuke Ammo", "Minigun Ammo", "Cannon Ammo", "EMP Ammo", "Laser Ammo", "200% Health", "100% Armor", "Gold"]
	},
	{
		name: "Yellow Cube"
	},
	{
		name: "Mossy Air Cube",
		items: ["Railgun Ammo", "Minigun Ammo", "Homing Ammo", "Rocket Ammo", "Nuke Ammo", "EMP Ammo"],
		upgrades: ["EMP", "Railgun", "Laser"],
		interactables: ["Save"],
		trophy: true
	},
	{
		name: "Stoney Sanctuary",
		interactables: ["Waypoint", "Respawn", "Save", "Bookmark"],
		upgrades: ["Health", "Rocket", "Homing", "Nuke", "EMP"],
		items: ["EMP Ammo", "Nuke Ammo", "Minigun Ammo", "Railgun Ammo", "Homing Ammo", "Rocket Ammo", "Laser Ammo", "Cannon Ammo"]
	},
	{
		name: "Green Shrink Box",
		interactables: ["Save"],
		items: ["Cannon Ammo", "150% Armor"],
		monsters: ["Marine", "Petite Goon", "Heavy Marine", "Insurgent"]
	},
	{
		name: "Red Apple Tree",
		monsters: ["Minor Rat", "Minor Bilge Rat", "Troll", "Ogre"],
		upgrades: ["Rocket", "Homing", "Non-Laser Max Ammo"],
		items: ["Minigun Ammo", "Homing Ammo", "Rocket Ammo", "Cannon Ammo", "Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Laser Ammo"]
	},
	{
		name: "Yellow Apple Tree",
		monsters: ["Minor Rat", "Minor Bilge Rat", "Troll", "Ogre"],
		upgrades: ["Rocket", "Homing", "Non-Laser Max Ammo"],
		items: ["Minigun Ammo", "Homing Ammo", "Rocket Ammo", "Cannon Ammo", "Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Laser Ammo"]
	},
	{
		name: "Green Apple Tree",
		monsters: ["Minor Rat", "Minor Bilge Rat", "Troll", "Ogre"],
		upgrades: ["Rocket", "Homing", "Non-Laser Max Ammo"],
		items: ["Minigun Ammo", "Homing Ammo", "Rocket Ammo", "Cannon Ammo", "Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Laser Ammo"]
	},
	{
		name: "Red Apple",
		upgrades: ["EMP", "Laser", "Cannon", "Plasma"],
		items: ["EMP Ammo", "Rocket Ammo"]
	},
	{
		name: "Yellow Apple",
		upgrades: ["EMP", "Rocket"],
		items: ["EMP Ammo", "Rocket Ammo"]
	},
	{
		name: "Green Apple",
		upgrades: ["EMP"],
		items: ["Rocket Ammo"]
	},
	{
		name: "Upgrade Station",
		upgrades: ["Rocket"],
		items: ["Homing Ammo", "Rocket Ammo", "Cannon Ammo", "Minigun Ammo"]
	},
	{
		name: "Yellow Flower City",
		interactables: ["Pink Ring"],
		monsters: ["Insurgent", "Goblin"],
		items: ["Cannon Ammo", "Plasma Ammo"]
	},
	{
		name: "Orange Ground City",
		interactables: ["Pink Ring"],
		monsters: ["Insurgent", "Goblin"],
		items: ["Cannon Ammo", "Health", "Armor"]
	},
	{
		name: "Ying World Shell Green Island",
		interactables: ["Waypoint"],
		upgrades: ["Laser", "Health"]
	},
	{
		name: "Gated Community"
	},
	{
		name: "Yellow Flower City Secret",
		upgrades: ["Minigun"],
		items: ["Railgun Ammo", "Rocket Ammo", "Minigun Ammo", "Laser Ammo", "Armor", "Health"]
	}
] as const satisfies readonly InputNode[];

export type nodeNames = (typeof INPUT_NODES)[number]["name"];

export const inputNodes = INPUT_NODES as unknown as InputNode[];
