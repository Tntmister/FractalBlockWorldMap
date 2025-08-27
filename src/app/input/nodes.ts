import { InputNode } from "../types";

const INPUT_NODES = [
	{
		name: "Ying Forest",
		upgrades: ["Cannon", "Plasma", "Health"],
		interactables: ["Waypoint", "Save", "Respawn", "Bookmark", "Out-Only Waypoint"]
	},
	{
		name: "Tutorial 1",
		items: ["Gold"],
		interactables: ["Save", "Pink Sphere", "Blue Ring"]
	},
	{
		name: "Tutorial 2",
		items: ["Plasma Ammo", "Key", "Gold"],
		monsters: ["Goblin"],
		upgrades: ["Laser", "Nuke"],
		interactables: ["Pink Ring", "Respawn", "Save", "Waypoint"],
		secretTrophy: 3
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
		secretTrophy: true,
		interactables: ["Blue Ring"],
		upgrades: ["Plasma", "Health"]
	},
	{
		name: "Jumbo Yellow Flower"
	},
	{
		name: "Small Black Flower",
		monsters: ["Light Marine", "Marine", "Heavy Marine", "Menace"],
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy"],
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
			"Extra Health"
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
		interactables: ["Save", "Pink Sphere", "Pink Ring", "Blue Ring", "Buy"],
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
		name: "Unremembered Tower"
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
		items: ["Rocket Ammo", "Railgun Ammo"]
	},
	{
		name: "Baby Spider Air",
		interactables: ["Pink Ring", "Waypoint", "Out-Only Waypoint", "Save"],
		items: ["Minigun Ammo", "Railgun Ammo"]
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
		interactables: ["Waypoint", "Save", "Bookmark", "Buy"]
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
		interactables: ["Waypoint", "Bookmark", "Buy", "Save"]
	},
	{
		name: "Huntington",
		trophy: true,
		interactables: ["Pink Ring", "Save", "Scarce Sell Station", "Buy", "Markers", "Waypoint", "Respawn"],
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
		interactables: ["Pink Sphere"],
		items: ["Health", "Minigun Ammo", "Rocket Ammo"]
	},
	{
		name: "Nuke Room",
		upgrades: ["Nuke", "Minigun", "Laser", "Health"]
	},
	{
		name: "Rocket Room",
		upgrades: ["Rocket"]
	},
	{
		name: "Black Hole Room"
	},
	{
		name: "Orange Flower",
		items: ["Rocket Ammo", "Minigun Ammo", "Cannon Ammo"],
		interactables: ["Save", "Pink Sphere"]
	},
	{
		name: "Botany Lab",
		trophy: true,
		interactables: ["Save", "Waypoint", "Pink Ring"],
		items: ["Laser Ammo", "Homing Ammo", "Minigun Ammo", "Rocket Ammo", "Cannon Ammo", "Railgun Ammo", "Gold", "Health", "Armor"]
	},
	{
		name: "Galaxy Flower",
		upgrades: ["Dark Hole"]
	},
	{
		name: "Infinity Flower",
		trophy: true,
		items: ["Gold"],
		interactables: ["Pink Sphere", "Save", "Pink Ring", "Waypoint"],
		upgrades: ["Laser Damage", "Railgun Fire Rate"]
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
		items: ["Extra Health", "200% Armor", "Gold"],
		interactables: ["Save"]
	},
	{
		name: "Paper Box",
		monsters: ["Menace", "Imp", "Marine"],
		items: ["Extra Health", "150% Armor", "Dark Hole Ammo", "Nuke Ammo", "Railgun Ammo", "Minigun Ammo", "Rocket Ammo"],
		upgrades: ["Random Health", "Health Regen", "Cannon Max Ammo", "Cannon Velocity"],
		interactables: ["Save", "Buy"],
		secretTrophy: true
	},
	{
		name: "Tweedle-Dum Base"
	},
	{
		name: "Tweedle-Dum Air"
	},
	{
		name: "Tweedle-Dee Cave"
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
		interactables: ["Pink Ring"]
	},
	{
		name: "Hard Pink Tree",
		interactables: ["Pink Ring"]
	},
	{
		name: "Tweedle-Dee Air"
	},
	{
		name: "Tweedle Haunted House 1",
		upgrades: ["Plasma", "Rocket"],
		interactables: ["Pink Ring", "Save"]
	},
	{
		name: "Tweedle Haunted House 2",
		upgrades: ["Plasma", "Rocket", "Plasma Weapon Mod"],
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
		name: "Tweedle Haunted House 3"
	},
	{
		name: "Basic Laser Maze"
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
		interactables: ["Buy", "Common Sell Station", "Save", "Pink Ring"],
		items: ["Gold", "Rocket Ammo", "Minigun Ammo", "Homing Ammo", "Laser Ammo", "Cannon Ammo", "EMP Ammo", "Railgun Ammo", "Nuke Ammo"],
		upgrades: ["Cannon", "Homing", "Rocket", "EMP"],
		secretTrophy: true
	},
	{
		name: "Tau Cave Moon",
		interactables: ["Pink Sphere", "Waypoint", "Buy", "Bookmark", "Save"]
	},
	{
		name: "Imp Disco",
		items: ["Homing Ammo"]
	},
	{
		name: "Type 1 Tau Cave"
	},
	{
		name: "Type 2 Tau Cave"
	},
	{
		name: "Type 3 Tau Cave"
	},
	{
		name: "Hinesburg",
		interactables: ["Markers", "Buy", "Waypoint", "Respawn", "Save", "Common Sell Station"],
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
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy", "Common Sell Station"]
	},
	{
		name: "Clay Planet",
		upgrades: ["Nuke"],
		items: ["100% Armor"],
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy", "Common Sell Station"]
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
		interactables: ["Pink Sphere", "Buy", "Markers", "Save"],
		items: ["Nuke Ammo", "Gold"],
		upgrades: ["Dark Hole", "Minigun"],
		trophy: true
	},
	{
		name: "Ice Moon",
		interactables: ["Waypoint", "Respawn", "Save", "Buy", "Common Sell Station", "Pink Sphere"],
		items: ["Armor", "Health"],
		upgrades: ["Laser", "EMP", "Cannon"]
	},
	{
		name: "Gamma Moon",
		interactables: ["Waypoint", "Respawn", "Save", "Buy", "Common Sell Station", "Pink Sphere"],
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
		interactables: ["Respawn", "Common Sell Station", "Buy", "Waypoint"],
		secretTrophy: true
	},
	{
		name: "Ying Air",
		monsters: ["Goblin"]
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
		name: "I1"
	},
	{
		name: "Williston City",
		items: ["Gold", "100% Armor", "Rocket Ammo", "Nuke Ammo"],
		interactables: ["Buy", "Markers", "Waypoint", "Respawn", "Save", "Common Sell Station", "Buy Nuke"],
		upgrades: ["Laser Damage"],
		trophy: true
	},
	{
		name: "Williston Field",
		monsters: ["Spider", "Bee", "Queen Bee", "Gnole", "Unruly Juggernaut", "Formidable Juggernaut", "Locust"],
		items: ["Gold", "Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Rocket Ammo", "Laser Ammo", "Minigun Ammo"]
	},
	{
		name: "Williston Trees",
		interactables: ["Waypoint", "Save", "Bookmark", "Buy"],
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
		monsters: ["Guardian", "Spider", "Baby Spider"],
		interactables: ["Pink Sphere"]
	},
	{
		name: "Bristol",
		items: ["Gold", "Armor"],
		upgrades: ["Minigun Damage", "Minigun Fire Rate"],
		interactables: ["Pink Sphere", "Waypoint", "Respawn", "Common Sell Station", "Buy", "Markers"],
		trophy: true
	},
	{
		name: "Blackberry",
		upgrades: ["Rocket Radius", "EMP Radius", "Nuke Radius"],
		monsters: ["Great Spider"]
	},
	{
		name: "I2 Well",
		interactables: ["Waypoint", "Pink Ring", "Pink Sphere"],
		upgrades: ["Laser Damage", ["Railgun Damage", "Railgun Fire Rate"], ["Dark Hole Damage", "Dark Hole Max Ammo"], "Rocket Max Ammo"],
		items: ["Rocket Ammo", "Homing Ammo", "Dark Hole Ammo", "Nuke Ammo", "Laser Ammo", "Cannon Ammo", "EMP Ammo", "Railgun Ammo", "Minigun Ammo"]
	},
	{
		name: "I2 Purple Well",
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
		interactables: ["Pink Ring", "Waypoint"]
	},
	{
		name: "I1 Library",
		interactables: ["Pink Sphere", "Save", "Waypoint"],
		trophy: true
	},
	{
		name: "I2 Library",
		interactables: ["Pink Sphere", "Waypoint", "Save"],
		upgrades: ["Railgun Fire Rate"],
		trophy: true
	},
	{
		name: "Sagittarius Portal"
	},
	{
		name: "Taurus Portal"
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
		name: "Black Cube"
	},
	{
		name: "Red Cube"
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
		name: "I3 WIG Flower",
		interactables: ["Pink Sphere", "Save"]
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
		monsters: ["Fanatic", "Overlord", "Gnole"]
	},
	{
		name: "Fanatic Spire",
		upgrades: ["Non-Laser Max Ammo"],
		interactables: ["Waypoint", "Bookmark", "Blue Ring", "Save"]
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
		monsters: ["Evil Goon", "Unsavory Goon", "Immoral Goon", "Minor Rat", "Lesser Silver", "Disciple", "Mystic"],
		items: ["Rocket Ammo", "Gold", "Homing Ammo", "Key", "Nuke Ammo", "EMP Ammo", "Railgun Ammo"],
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
		name: "Scorpius Flower"
	},
	{
		name: "Scorpius Portal"
	},
	{
		name: "Fanatic Island",
		interactables: ["Common Sell Station", "Buy", "Markers"]
	},
	{
		name: "Fanatic Air",
		interactables: ["Common Sell Station", "Buy", "Markers"],
		monsters: ["Overlord", "Gnole"]
	},
	{
		name: "Fanatic Caves",
		items: ["Gold"],
		monsters: ["Disciple"]
	},
	{
		name: "Fanatic Well",
		items: ["Gold"],
		upgrades: ["Nuke Velocity", "EMP Freeze Time", "EMP Radius", "Dark Hole Velocity", "Dark Hole Max Ammo"],
		interactables: ["Pink Ring", "Pink Sphere", "Buy", "Save", "Waypoint"],
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
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy"]
	},
	{
		name: "Fanatic Vine",
		monsters: ["Goliath"],
		items: ["Gold"],
		upgrades: ["Railgun Damage", "Non-Laser Max Ammo"]
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
		interactables: ["Buy", "Common Sell Station", "Save"],
		items: ["Extra Health", "200% Armor", "Gold", "Railgun Ammo"],
		secretTrophy: true
	},
	{
		name: "Cannon Ammo Grab",
		monsters: ["Hired Gun", "Tough Juggernaut", "Mercinary"],
		interactables: ["Pink Sphere", "Pink Ring", "Buy"],
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
		interactables: ["Pink Sphere", "Save"]
	},
	{
		name: "Laboratory Vine"
	},
	{
		name: "Toronto Vine"
	},
	{
		name: "Toronto"
	},
	{
		name: "Rainbow Flower"
	},
	{
		name: "Willow Tree"
	},
	{
		name: "Mystic Vine"
	},
	{
		name: "Montreal",
		items: ["Armor", "Gold"],
		monsters: ["Major Goon", "Dissident"],
		upgrades: ["Railgun Fire Rate"],
		interactables: ["Common Sell Station", "Buy", "Waypoint", "Markers", "Respawn", "Save", "Out-Only Waypoint"],
		trophy: true
	},
	{
		name: "I3"
	},
	{
		name: "Burlington"
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
		interactables: ["Save", "Buy"]
	},
	{
		name: "Medium Gold Asteroid",
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
		upgrades: ["Laser"],
		items: ["Laser Ammo"]
	},
	{
		name: "The Bulk 1"
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
		upgrades: ["Cannon", "Health"],
		items: ["100% Armor"],
		interactables: ["Waypoint", "Save", "Common Sell Station", "Buy", "Respawn", "Markers", "Pink Ring", "Out-Only Waypoint"],
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
		interactables: ["Save", "Buy", "Respawn"]
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
		interactables: ["Buy Nuke", "Buy", "Scarce Sell Station", "Markers", "Waypoint", "Save", "Bookmark"],
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
		upgrades: ["Laser", "EMP"],
		items: ["Nuke Ammo"]
	},
	{
		name: "Purple House",
		upgrades: ["EMP", "RejuvenX"]
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
		items: ["Extra Health", "200% Armor", "1000% Armor", "Nuke Ammo", "Railgun Ammo", "EMP Ammo"],
		upgrades: ["Laser Damage", "Rocket Radius", "EMP Radius", "Dark Hole Velocity", "Railgun Fire Rate"],
		trophy: true
	},
	{
		name: "Health Tower",
		monsters: ["Goblin", "Dragoon", "Greater Non-Piercing Scourge"],
		interactables: ["Save"],
		upgrades: ["Max Health", "Health Regen", "Laser Damage", "Minigun Fire Rate", "Minigun Damage", "Nuke Velocity", "Rocket Velocity"],
		items: ["Extra Health", "200% Armor", "Minigun Ammo", "Laser Ammo", "Rocket Ammo", "Cannon Ammo", "EMP Ammo", "Railgun Ammo", "Gold"],
		secretTrophy: true,
		trophy: true
	},
	{
		name: "Country Store"
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
		upgrades: [["Plasma Regen", "Plasma Damage", "Plasma Max Ammo", "Plasma Velocity", "Health Regen"]],
		items: ["Health", "Armor"]
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
		monsters: ["Marine", "Petite Goon", "Heavy Marine", "Insurgent"]
	},
	{
		name: "Red Apple Tree",
		upgrades: ["Rocket", "Homing", "Non-Laser Max Ammo"],
		items: ["Minigun Ammo", "Homing Ammo", "Rocket Ammo", "Cannon Ammo", "Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Laser Ammo"]
	},
	{
		name: "Yellow Apple Tree",
		upgrades: ["Rocket", "Homing", "Non-Laser Max Ammo"],
		items: ["Minigun Ammo", "Homing Ammo", "Rocket Ammo", "Cannon Ammo", "Nuke Ammo", "EMP Ammo", "Railgun Ammo", "Laser Ammo"]
	},
	{
		name: "Green Apple Tree",
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
