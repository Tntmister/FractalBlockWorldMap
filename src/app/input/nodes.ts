import { InputNode } from "../types";

export const inputNodes = [
	{
		name: "Ying Forest",
		upgrades: ["Cannon", "Plasma", "Health"],
		interactables: ["Waypoint", "Save", "Respawn"]
	},
	{
		name: "Tutorial",
		items: ["Plasma"],
		upgrades: ["Laser", "Nuke"],
		interactables: ["Save", "Respawn", "Pink Sphere", "Pink Ring", "Blue Ring", "Waypoint"],
		secretTrophy: true
	},
	{
		name: "Tutorial Island",
		interactables: ["Pink Sphere", "Blue Ring", "Respawn", "Save"]
	},
	{
		name: "Small Yellow Flower",
		upgrades: ["Plasma", "Health"]
	},
	{
		name: "Jumbo Yellow Flower"
	},
	{
		name: "Small Black Flower",
		upgrades: ["Health", "Minigun", "Laser", "Cannon", "Plasma"],
		items: ["Armor"]
	},
	{
		name: "Small Cannon Pyramid",
		interactables: ["Pink Sphere"],
		upgrades: ["Cannon"],
		items: ["Laser", "Rocket", "Minigun", "Cannon"]
	},
	{
		name: "Small White Flower",
		interactables: ["Save", "Pink Sphere", "Pink Ring", "Blue Ring"],
		upgrades: ["Health", "Homing", "Plasma", "Nuke", "Rocket"],
		items: ["Armor", "Nuke", "Rocket", "Plasma", "Homing", "Minigun", "Dark Hole", "EMP"]
	},
	{
		name: "Upgraded Small White Flower",
		upgrades: ["Health", "Homing", "Plasma", "Nuke", "Rocket"],
		items: ["Armor", "Nuke", "Rocket", "Plasma", "Homing", "Minigun", "Dark Hole", "EMP", "Railgun", "Gold"]
	},
	{
		name: "Ying Flower",
		upgrades: ["Laser", "Cannon"],
		items: ["EXP", "Cannon", "Laser", "Rocket", "Minigun"],
		interactables: ["Waypoint", "Save", "Bookmark", "Pink Sphere"]
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
		items: ["Rocket", "Railgun"]
	},
	{
		name: "Baby Spider Air",
		items: ["Minigun", "Railgun"]
	},
	{
		name: "Orange",
		interactables: ["Pink Sphere"],
		upgrades: ["Rocket"],
		items: ["Nuke"]
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
		items: ["Health", "Minigun", "Rocket"]
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
		items: ["Rocket", "Minigun", "Cannon"],
		interactables: ["Save", "Pink Sphere"]
	},
	{
		name: "Botany Lab",
		trophy: true,
		interactables: ["Save", "Waypoint", "Pink Ring"],
		items: ["Laser", "Homing", "Minigun", "Rocket", "Cannon", "Railgun", "Gold", "Health", "Armor"]
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
		upgrades: ["Health", "Cannon", "Minigun"],
		items: ["Armor"],
		interactables: ["Save"]
	},
	{
		name: "Paper Box",
		items: ["Health", "Armor", "Dark Hole", "Nuke", "Railgun", "Minigun", "Rocket"],
		upgrades: ["Plasma", "Laser", "Minigun"],
		interactables: ["Save"]
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
		items: ["Laser", "Railgun", "Cannon", "EMP"],
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
		items: ["Gold", "Plasma"]
	},
	{
		name: "Flare Weapon Mod",
		upgrades: ["Plasma"],
		items: ["Plasma"]
	},
	{
		name: "Tommy Gun Weapon Mod",
		upgrades: ["Cannon"],
		items: ["Cannon"]
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
		items: ["Railgun"]
	},
	{
		name: "Short Rail Tower",
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
		items: ["Railgun"]
	},
	{
		name: "Mossy Cellar",
		upgrades: ["Cannon", "Railgun", "Laser", "Rocket", "EMP"]
	},
	{
		name: "Mossy Basement",
		interactables: ["Buy", "Common Sell Station", "Save", "Pink Ring"],
		items: ["Gold", "Rocket", "Minigun", "Homing", "Laser", "Cannon", "EMP", "Railgun", "Nuke"],
		upgrades: ["Cannon", "Homing", "Rocket", "EMP"],
		secretTrophy: true
	},
	{
		name: "Tau Cave Moon",
		interactables: ["Pink Sphere", "Waypoint", "Buy", "Bookmark", "Save"]
	},
	{
		name: "Imp Disco",
		items: ["Homing"]
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
		items: ["Gold", "Armor", "Nuke", "Railgun", "EMP"]
	},
	{
		name: "Outer Space 2 Debris",
		items: ["Laser"]
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
		items: ["Armor", "Rocket", "Laser"],
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy", "Common Sell Station"]
	},
	{
		name: "Clay Planet",
		upgrades: ["Nuke"],
		items: ["Armor"],
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy", "Common Sell Station"]
	},
	{
		name: "Alpha Moon",
		trophy: true,
		interactables: ["Pink Sphere", "Bookmark", "Waypoint", "Save", "Pink Ring"],
		items: ["Nuke", "Railgun", "EMP", "Rocket", "Cannon", "Health", "Armor"],
		upgrades: ["Nuke", "Railgun", "Health"]
	},
	{
		name: "Beta Moon",
		interactables: ["Pink Sphere", "Buy", "Markers", "Save"],
		items: ["Nuke", "Gold"],
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
		items: ["Armor", "Health", "Nuke"],
		upgrades: ["Laser", "Nuke", "EMP", "Cannon"]
	},
	{
		name: "Moon Debris",
		items: ["Health", "Armor", "Laser"]
	},
	{
		name: "Planet Debris",
		items: ["Health", "Armor", "Rocket"]
	},
	{
		name: "Ying Air Cube",
		monsters: ["Imp", "Grey Lamprey", "Eternal Plague"],
		interactables: ["Respawn", "Save", "Blue Ring", "Waypoint"],
		upgrades: ["Plasma Velocity", "Cannon Velocity"],
		items: ["Plasma", "Health", "Armor", "Cannon", "Gold"]
	},
	{
		name: "Ying Deep Air",
		monsters: ["Troll"]
	},
	{
		name: "Ying Deep Air Cube",
		items: ["Gold", "Railgun", "Minigun", "Laser", "Rocket", "Cannon", "Homing"],
		upgrades: ["Rocket Radius", "Homing Max Ammo"],
		interactables: ["Respawn", "Common Sell Station", "Buy", "Waypoint"],
		secretTrophy: true
	},
	{
		name: "Ying Air"
	},
	{
		name: "Ying Air Core",
		upgrades: ["Rocket"]
	},
	{
		name: "Noob Maze"
	},
	{
		name: "Ying World Library"
	},
	{
		name: "I1"
	},
	{
		name: "Williston City",
		items: ["Gold", "Armor", "Rocket", "Nuke"],
		interactables: ["Buy", "Markers", "Waypoint", "Respawn", "Save", "Common Sell Station", "Buy Nuke"],
		upgrades: ["Laser Damage"],
		trophy: true
	},
	{
		name: "Williston Field"
	},
	{
		name: "Williston Trees",
		monsters: ["Green Spider", "Bee", "Queen Bee", "Gnole", "Formidable Juggernaut", "Locust"],
		interactables: ["Waypoint", "Save", "Bookmark"],
		items: ["Gold", "Nuke", "EMP", "Railgun", "Rocket", "Laser", "Minigun"]
	},
	{
		name: "Williston Wall",
		items: ["Rocket", "Gold", "Nuke", "Dark Hole", "Cannon", "Laser", "Rocket", "Homing", "Minigun", "Railgun"],
		upgrades: [
			[
				"Plasma Max Ammo",
				"Cannon Max Ammo",
				"Rocket Max Ammo",
				"Homing Max Ammo",
				"Minigun Max Ammo",
				"Railgun Max Ammo",
				"EMP Max Ammo",
				"Nuke Max Ammo",
				"Dark Hole Max Ammo"
			]
		]
	},
	{
		name: "Williston Spiral",
		monsters: ["War Vulcan", "Small Goon"],
		items: ["Health", "Armor"],
		upgrades: ["Minigun Max Ammo", "Minigun Damage", "Minigun Fire Rate"]
	},
	{
		name: "EMP Castle",
		monsters: ["Guardian", "Green Spider", "Green Baby Spider"],
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
		name: "Blackberry"
	},
	{
		name: "I2 Well",
		interactables: ["Waypoint", "Pink Ring", "Pink Sphere"],
		upgrades: ["Laser Damage", ["Railgun Damage", "Railgun Fire Rate"], ["Dark Hole Damage", "Dark Hole Max Ammo"], "Rocket Max Ammo"],
		items: ["Rocket", "Homing", "Dark Hole", "Nuke", "Laser", "Cannon", "EMP", "Railgun", "Minigun"]
	},
	{
		name: "I2 Purple Well",
		interactables: ["Pink Ring", "Pink Sphere"],
		upgrades: ["Dark Hole Damage", ["Dark Hole Max Ammo", "Dark Hole Velocity"]],
		items: ["Rocket", "Homing", "Dark Hole", "Nuke", "Laser", "Cannon", "EMP", "Railgun", "Minigun"]
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
		name: "Imp Cave",
		monsters: ["Imp"],
		interactables: ["Save"],
		items: ["Minigun", "Homing", "Cannon", "Rocket", "EMP", "Laser"],
		upgrades: [
			[
				"Plasma Max Ammo",
				"Cannon Max Ammo",
				"Laser Max Ammo",
				"Rocket Max Ammo",
				"Homing Max Ammo",
				"Minigun Max Ammo",
				"Railgun Max Ammo",
				"Nuke Max Ammo",
				"Dark Hole Max Ammo"
			]
		],
		trophy: true
	},
	{
		name: "Gnole Cave",
		monsters: ["Gnole"],
		items: ["Minigun", "Homing", "Cannon", "Rocket", "EMP", "Laser"],
		upgrades: [
			[
				"Plasma Max Ammo",
				"Cannon Max Ammo",
				"Rocket Max Ammo",
				"Homing Max Ammo",
				"Minigun Max Ammo",
				"Railgun Max Ammo",
				"EMP Max Ammo",
				"Nuke Max Ammo",
				"Dark Hole Max Ammo"
			]
		]
	},
	{
		name: "Demon Cave",
		monsters: ["Demon"],
		items: ["Minigun", "Homing", "Cannon", "Rocket", "EMP", "Laser"],
		upgrades: [
			[
				"Plasma Max Ammo",
				"Cannon Max Ammo",
				"Rocket Max Ammo",
				"Homing Max Ammo",
				"Minigun Max Ammo",
				"Railgun Max Ammo",
				"EMP Max Ammo",
				"Nuke Max Ammo",
				"Dark Hole Max Ammo"
			],
			"Homing Damage",
			"Homing Velocity"
		]
	},
	{
		name: "Orc Cave",
		monsters: ["Orc", "Legless Great Spider"]
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
		items: ["Minigun", "Railgun", "EMP", "Nuke"],
		upgrades: ["Nuke"],
		interactables: ["Pink Sphere", "Pink Ring", "Blue Ring", "Save", "Waypoint", "Bookmark"],
		trophy: true
	},
	{
		name: "Golden Yellow Flower",
		interactables: ["Save", "Pink Ring"],
		upgrades: ["Rocket", "Rocket Weapon Mod"],
		items: ["Rocket", "Minigun", "EMP", "Dark Hole", "Nuke", "Laser", "Cannon", "Gold"]
	},
	{
		name: "I2 Spiral"
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
		upgrades: ["Nuke Radius"]
	},
	{
		name: "Fanatic Lattice",
		monsters: ["Fanatic", "Overlord", "Gnole"]
	},
	{
		name: "Fanatic Spire",
		upgrades: [
			[
				"Plasma Max Ammo",
				"Cannon Max Ammo",
				"Rocket Max Ammo",
				"Homing Max Ammo",
				"Minigun Max Ammo",
				"Railgun Max Ammo",
				"EMP Max Ammo",
				"Nuke Max Ammo",
				"Dark Hole Max Ammo"
			]
		],
		interactables: ["Waypoint", "Bookmark", "Blue Ring", "Save"]
	},
	{
		name: "Fanatic Spire Scaffold",
		upgrades: ["Rocket"]
	},
	{
		name: "Fanatic Weed"
	},
	{
		name: "EMP City",
		upgrades: ["EMP Radius", "EMP Max Ammo", "EMP Freeze Time", "Nuke Velocity"],
		items: ["Gold"],
		monsters: ["Green Spider", "Green Baby Spider", "Guardian", "Demon", "Fanatic"]
	},
	{
		name: "Weed Ring",
		interactables: ["Waypoint", "Save"],
		upgrades: ["EMP Radius", "EMP Max Ammo", "Health"],
		monsters: ["Evil Goon", "Unsavory Goon", "Immoral Goon", "Minor Rat", "Lesser Silver", "Disciple", "Mystic"],
		items: ["Rocket", "Gold", "Homing", "Key", "Nuke", "EMP", "Railgun"],
		trophy: true
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
		monsters: ["Overlord"]
	},
	{
		name: "Fanatic Caves",
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
		name: "Fanatic Vine",
		monsters: ["Goliath"],
		items: ["Gold"],
		upgrades: [
			"Railgun Damage",
			[
				"Plasma Max Ammo",
				"Cannon Max Ammo",
				"Rocket Max Ammo",
				"Homing Max Ammo",
				"Minigun Max Ammo",
				"Railgun Max Ammo",
				"EMP Max Ammo",
				"Nuke Max Ammo",
				"Dark Hole Max Ammo"
			]
		]
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
		interactables: ["Common Sell Station", "Buy", "Waypoint", "Markers", "Respawn", "Save"],
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
		upgrades: ["Laser"]
	},
	{
		name: "Outer Space 1"
	},
	{
		name: "Outer Space 1 Bunker",
		items: ["Armor", "Homing", "Rocket", "EMP"],
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
		items: ["Laser"]
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
		name: "Solar System"
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
		upgrades: ["Cannon", "Health"],
		items: ["Armor"],
		interactables: ["Waypoint", "Common Sell Station", "Buy", "Markers", "Pink Ring", "Pink Sphere"]
	},
	{
		name: "Richmond Sewers",
		upgrades: ["Cannon", "Rocket", "Homing", "Health", "EMP"],
		interactables: ["Waypoint"]
	},
	{
		name: "Richmond Building",
		interactables: ["Save", "Pink Ring", "Pink Sphere"],
		upgrades: ["Rocket", "Laser", "Minigun", "Cannon", "Plasma"],
		items: ["Gold", "Cannon", "Laser", "Rocket", "Homing", "Minigun", "Dark Hole"],
		trophy: true,
		secretTrophy: true
	},
	{
		name: "Red Cave",
		interactables: ["Save"],
		items: ["Rocket", "EXP"],
		upgrades: ["Homing", "Rocket"],
		trophy: true
	},
	{
		name: "Red Rose",
		interactables: ["Pink Ring", "Pink Sphere"],
		items: ["Gold", "Nuke", "Minigun", "Rocket", "Railgun", "Homing", "Cannon", "Laser", "EMP"],
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
		items: ["Armor"]
	},
	{
		name: "Slow Exit Maze",
		items: ["Armor"]
	},
	{
		name: "Mylantis"
	},
	{
		name: "Mylantis Caves",
		interactables: ["Waypoint", "Bookmark", "Save"]
	},
	{
		name: "RejuvenX Refinery",
		upgrades: ["RejuvenX"],
		items: ["Health", "Cannon", "Laser", "Rocket", "Minigun", "Railgun", "Nuke", "EMP", "Gold"],
		interactables: ["Save", "Buy", "Respawn"]
	},
	{
		name: "Nuclear Silo",
		items: ["Nuke"]
	},
	{
		name: "Mylantis City",
		interactables: ["Pink Sphere"]
	},
	{
		name: "Mylantis Top Garden",
		items: ["Nuke", "Gold"],
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
		name: "Laser Genesis Planet"
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
		items: ["Nuke", "Minigun", "Railgun"],
		trophy: true
	},
	{
		name: "Happy Land",
		items: ["Plasma"],
		upgrades: ["Plasma"],
		interactables: ["Blue Ring"]
	},
	{
		name: "Small Noob Flower",
		upgrades: ["Health", "Plasma"]
	},
	{
		name: "Quicksand Grass"
	},
	{
		name: "Quicksand Grass Basement",
		upgrades: ["Laser", "EMP"],
		items: ["Nuke"]
	},
	{
		name: "Purple House",
		upgrades: ["EMP", "RejuvenX"]
	},
	{
		name: "Large Cannon Pyramid",
		interactables: ["Pink Sphere"],
		upgrades: ["Cannon", "Railgun", "Health", "Nuke"],
		items: ["Laser", "Railgun"]
	},
	{
		name: "Fir Tree"
	},
	{
		name: "Alpha Cube",
		items: ["Health", "Armor"],
		upgrades: ["Laser", "Rocket", "EMP", "Dark Hole", "Railgun"]
	},
	{
		name: "Health Tower",
		interactables: ["Save"],
		upgrades: ["Health", "Laser Damage", "Minigun Fire Rate", "Minigun Damage", "Nuke Velocity", "Rocket Velocity"],
		items: ["Health", "Armor", "Minigun", "Laser", "Rocket", "Cannon", "EMP"],
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
		monsters: ["Small Goon"],
		items: ["Laser"],
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
		interactables: ["Pink Ring", "Save", "Pink Sphere"],
		trophy: true,
		upgrades: ["Health", "Plasma", "Cannon", "Laser"],
		items: ["Nuke", "Minigun", "Cannon", "EMP", "Laser", "Health", "Armor"]
	},
	{
		name: "Yellow Cube"
	},
	{
		name: "Mossy Air Cube",
		items: ["Railgun", "Minigun", "Homing", "Rocket", "Nuke", "EMP"],
		upgrades: ["EMP", "Railgun", "Laser"],
		interactables: ["Save"],
		trophy: true
	},
	{
		name: "Stoney Sanctuary",
		interactables: ["Waypoint", "Respawn", "Save", "Bookmark"],
		upgrades: ["Health", "Rocket", "Homing", "Nuke", "EMP"],
		items: ["EMP", "Nuke", "Minigun", "Railgun", "Homing", "Rocket", "Laser", "Cannon"]
	},
	{
		name: "Green Shrink Box"
	},
	{
		name: "Red Apple Tree",
		upgrades: ["Rocket", "Homing"],
		items: ["Minigun", "Homing", "Rocket", "Cannon", "Nuke", "EMP", "Railgun", "Laser"]
	},
	{
		name: "Yellow Apple Tree",
		upgrades: ["Rocket", "Homing"],
		items: ["Minigun", "Homing", "Rocket", "Cannon", "Nuke", "EMP", "Railgun", "Laser"]
	},
	{
		name: "Green Apple Tree",
		upgrades: ["Rocket", "Homing"],
		items: ["Minigun", "Homing", "Rocket", "Cannon", "Nuke", "EMP", "Railgun", "Laser"]
	},
	{
		name: "Red Apple",
		upgrades: ["EMP", "Laser", "Cannon", "Plasma"],
		items: ["EMP", "Rocket"]
	},
	{
		name: "Yellow Apple",
		upgrades: ["EMP", "Rocket"],
		items: ["EMP", "Rocket"]
	},
	{
		name: "Green Apple",
		upgrades: ["EMP"],
		items: ["Rocket"]
	},
	{
		name: "Upgrade Station",
		upgrades: ["Rocket"],
		items: ["Homing", "Rocket", "Cannon", "Minigun"]
	},
	{
		name: "Yellow Flower City"
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
		name: "Yellow Flower City Secret Treasure",
		upgrades: ["Minigun"],
		items: ["Railgun", "Rocket", "Minigun", "Laser", "Armor", "Health"]
	}
] as const satisfies readonly InputNode[];
