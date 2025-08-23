import { InputGraph, InputNode } from "./types";

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
		interactables: ["Save", "Respawn", "PinkSphere", "PinkRing", "BlueRing", "Waypoint"],
		secretTrophy: true
	},
	{
		name: "Tutorial Island",
		interactables: ["PinkSphere", "BlueRing", "Respawn", "Save"]
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
		upgrades: ["Cannon"],
		items: ["Laser", "Rocket", "Minigun", "Cannon"]
	},
	{
		name: "Small White Flower",
		interactables: ["Save", "PinkSphere", "PinkRing", "BlueRing"],
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
		interactables: ["Waypoint", "Save", "Bookmark", "PinkSphere"]
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
		interactables: ["PinkRing", "Save", "ScarceSell", "Buy", "Markers", "Waypoint", "Respawn"],
		items: ["Gold", "Armor"],
		upgrades: ["Health", "Telekinesis", "RejuvenX", "Railgun", "Nuke", "EMP"]
	},
	{
		name: "Camel's Hump",
		interactables: ["PinkSphere"]
	},
	{
		name: "Blue Bubble Gauntlet"
	},
	{
		name: "Blue Bubble",
		interactables: ["PinkSphere"],
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
		interactables: ["Save", "PinkSphere"]
	},
	{
		name: "Botany Lab",
		trophy: true,
		interactables: ["Save", "Waypoint", "PinkRing"],
		items: ["Laser", "Homing", "Minigun", "Rocket", "Cannon", "Railgun", "Gold", "Health", "Armor"]
	},
	{
		name: "Galaxy Flower",
		upgrades: ["Dark Hole"]
	},
	{
		name: "Infinity Flower",
		interactables: ["PinkSphere", "Save"],
		upgrades: ["Laser"]
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
		interactables: ["PinkRing"]
	},
	{
		name: "Hard Pink Tree",
		interactables: ["PinkRing"]
	},
	{
		name: "Tweedle-Dee Air"
	},
	{
		name: "Tweedle Haunted House 1",
		upgrades: ["Plasma", "Rocket"],
		interactables: ["PinkRing", "Save"]
	},
	{
		name: "Tweedle Haunted House 2",
		upgrades: ["Plasma", "Rocket", "WeaponMod"],
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
		interactables: ["PinkRing", "PinkSphere", "Save"],
		upgrades: ["Rocket", "Railgun", "Cannon"],
		items: ["Railgun"]
	},
	{
		name: "Short Rail Tower",
		interactables: ["PinkRing", "PinkSphere", "Save"],
		items: ["Railgun"]
	},
	{
		name: "Mossy Cellar",
		upgrades: ["Cannon", "Railgun", "Laser", "Rocket", "EMP"]
	},
	{
		name: "Mossy Basement",
		interactables: ["Buy", "CommonSell", "Save", "PinkRing"],
		items: ["Gold", "Rocket", "Minigun", "Homing", "Laser", "Cannon", "EMP", "Railgun", "Nuke"],
		upgrades: ["Cannon", "Homing", "Rocket", "EMP"],
		secretTrophy: true
	},
	{
		name: "Tau Cave Moon",
		interactables: ["PinkSphere", "Waypoint", "Buy", "Bookmark", "Save"]
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
		interactables: ["Markers", "Buy", "Waypoint", "Respawn", "Save", "CommonSell"],
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
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy", "CommonSell"]
	},
	{
		name: "Clay Planet",
		upgrades: ["Nuke"],
		items: ["Armor"],
		interactables: ["Waypoint", "Bookmark", "Save", "Markers", "Buy", "CommonSell"]
	},
	{
		name: "Alpha Moon",
		trophy: true,
		interactables: ["PinkSphere", "Bookmark", "Waypoint", "Save", "PinkRing"],
		items: ["Nuke", "Railgun", "EMP", "Rocket", "Cannon", "Health", "Armor"],
		upgrades: ["Nuke", "Railgun", "Health"]
	},
	{
		name: "Beta Moon",
		interactables: ["PinkSphere", "Buy", "Markers", "Save"],
		items: ["Nuke", "Gold"],
		upgrades: ["Dark Hole", "Minigun"],
		trophy: true
	},
	{
		name: "Ice Moon",
		interactables: ["Waypoint", "Respawn", "Save", "Buy", "CommonSell", "PinkSphere"],
		items: ["Armor", "Health"],
		upgrades: ["Laser", "EMP", "Cannon"]
	},
	{
		name: "Gamma Moon",
		interactables: ["Waypoint", "Respawn", "Save", "Buy", "CommonSell", "PinkSphere"],
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
		upgrades: ["Plasma", "Cannon"],
		items: ["Plasma"]
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
		name: "Williston City"
	},
	{
		name: "Williston Field"
	},
	{
		name: "EMP Castle"
	},
	{
		name: "Bristol"
	},
	{
		name: "Blackberry"
	},
	{
		name: "Well"
	},
	{
		name: "Purple Well"
	},
	{
		name: "Williston Tree"
	},
	{
		name: "I1 Library"
	},
	{
		name: "Imp Cave"
	},
	{
		name: "Gnole Cave"
	},
	{
		name: "Demon Cave"
	},
	{
		name: "Orc Cave"
	},
	{
		name: "Beholder Cave"
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
		interactables: ["PinkRing", "Save"]
	},
	{
		name: "Lighthouse Basement",
		items: ["Minigun", "Railgun", "EMP", "Nuke"],
		upgrades: ["Nuke"],
		interactables: ["PinkSphere", "PinkRing", "BlueRing", "Save", "Waypoint", "Bookmark"],
		trophy: true
	},
	{
		name: "Golden Yellow Flower",
		interactables: ["Save", "PinkRing"],
		upgrades: ["Rocket", "WeaponMod"],
		items: ["Rocket", "Minigun", "EMP", "Dark Hole", "Nuke", "Laser", "Cannon", "Gold"]
	},
	{
		name: "I2"
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
		interactables: ["Save", "PinkRing"],
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
		interactables: ["Waypoint", "CommonSell", "Buy", "Markers", "PinkRing", "PinkSphere"]
	},
	{
		name: "Richmond Sewers",
		upgrades: ["Cannon", "Rocket", "Homing", "Health", "EMP"],
		interactables: ["Waypoint"]
	},
	{
		name: "Richmond Building",
		interactables: ["Save", "PinkRing", "PinkSphere"],
		upgrades: ["Rocket", "Laser", "Minigun", "Cannon", "Plasma"],
		items: ["Gold", "Cannon", "Laser", "Rocket", "Homing", "Minigun", "Dark Hole"],
		trophy: true,
		secretTrophy: true
	},
	{
		name: "Red Cave",
		interactables: ["Save"],
		items: ["Rocket"],
		upgrades: ["Homing", "Rocket", "EXP"],
		trophy: true
	},
	{
		name: "Red Rose",
		interactables: ["PinkRing", "PinkSphere"],
		items: ["Gold", "Nuke", "Minigun", "Rocket", "Railgun", "Homing", "Cannon", "Laser", "EMP"],
		secretTrophy: true
	},
	{
		name: "Richmond Library",
		upgrades: ["Rocket"],
		interactables: ["Waypoint", "BuyNuke", "BlueRing"]
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
		interactables: ["PinkSphere"]
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
		interactables: ["PinkSphere"]
	},
	{
		name: "Mylantis Top Garden",
		items: ["Nuke", "Gold"],
		upgrades: ["Plasma", "Cannon", "Laser", "Rocket", "Homing", "Minigun", "Railgun", "EMP", "Nuke", "Dark Hole", "RejuvenX"],
		interactables: ["BuyNuke", "Buy", "ScarceSell", "Markers", "Waypoint", "Save", "Bookmark"],
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
		interactables: ["BlueRing"]
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
		interactables: ["PinkSphere"],
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
		upgrades: ["Health", "Laser", "Minigun", "Nuke", "Rocket"],
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
		upgrades: ["Plasma"],
		items: ["Health", "Armor"]
	},
	{
		name: "Yellow Cube Secret",
		upgrades: ["Health", "Dark Hole", "Rocket"]
	},
	{
		name: "Stoney Air Cave",
		interactables: ["PinkRing", "Save"],
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

export const inputGraph: InputGraph = {
	nodes: inputNodes,
	edges: {
		"Tutorial": {
			"Ying Forest": {
				distance: 0
			},
			"Noob Maze": {
				distance: 0
			},
			"Small Yellow Flower": {
				distance: 0
			},
			"Stable Singletons": {
				distance: 0
			},
			"Happy Land": {
				distance: 0
			}
		},
		"Stable Singletons": {
			"I1": {
				distance: 100
			},
			"I2": {
				distance: 100
			},
			"I3": {
				distance: 100
			},
			"Hell": {
				distance: 100
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"I2": {
			"Stoney Air": {
				distance: 0
			},
			"I3": {
				distance: Infinity
			}
		},
		"Ying Forest": {
			"Small Noob Flower": {
				distance: 0
			},
			"Small Yellow Flower": {
				distance: 5
			},
			"Small Black Flower": {
				distance: 0
			},
			"Quicksand Grass": {
				distance: 0,
				oneWay: true,
				note: "Around save points"
			},
			"Menace Hive": {
				distance: 20,
				note: "Depth 12+, hanging from branches"
			}
		},
		"Small Black Flower": {
			"Red Apple Tree": {
				distance: 10,
				note: "x4"
			}
		},
		"Red Apple Tree": {
			"Quicksand Grass": {
				distance: 0
			},
			"Small White Flower": {
				distance: 5
			},
			"Red Apple": {
				distance: 20
			},
			"Upgrade Station": {
				distance: 30,
				note: "Top of tree"
			}
		},
		"Yellow Apple Tree": {
			"Quicksand Grass": {
				distance: 0
			},
			"Small White Flower": {
				distance: 5
			},
			"Red Apple": {
				distance: 20
			},
			"Yellow Apple": {
				distance: 20
			},
			"Upgrade Station": {
				distance: 30,
				note: "Top of tree"
			}
		},
		"Green Apple Tree": {
			"Quicksand Grass": {
				distance: 0
			},
			"Small White Flower": {
				distance: 5
			},
			"Red Apple": {
				distance: 20
			},
			"Yellow Apple": {
				distance: 20
			},
			"Green Apple": {
				distance: 20
			},
			"Upgrade Station": {
				distance: 30,
				note: "Top of tree"
			}
		},
		"Ying Island": {
			"Ying Air": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			},
			"Pure Menger Sponge": {
				distance: 5
			},
			"Small Cannon Pyramid": {
				distance: 5
			}
		},
		"Tutorial Island": {
			"Small Cannon Pyramid": {
				distance: 5
			},
			"Small White Flower": {
				distance: 0,
				note: "Under Tutorial Island"
			},
			"Tutorial": {
				distance: 0
			}
		},
		"Ying Air": {
			"Ying Air Cube": {
				distance: 1
			},
			"Ying Air Core": {
				distance: 30,
				note: "Shrink multiple times"
			}
		},
		"Ying Air Cube": {
			"Ying Forest": {
				distance: 0
			}
		},
		"Ying Flower": {
			"Ying Air": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			},
			"Ying World Shell Green Island": {
				distance: 5,
				note: "Shell 2"
			},
			"Ying World": {
				distance: 5
			}
		},
		"Ying World Shell Green Island": {
			"Jumbo Yellow Flower": {
				distance: 0
			},
			"Small Cannon Pyramid": {
				distance: 0
			},
			"Small Black Flower": {
				distance: 0
			}
		},
		"Ying World": {
			"Ying Island": {
				distance: 0
			},
			"Ying Cave Island": {
				distance: 0
			},
			"Tutorial Island": {
				distance: 0
			},
			"Grey Lattice": {
				distance: 0
			},
			"Gated Community": {
				distance: 5
			},
			"Noob Maze": {
				distance: 5
			}
		},
		"Gated Community": {
			"Ying World Library": {
				distance: 0
			},
			"Noob Maze": {
				distance: 0
			},
			"Small Noob Flower": {
				distance: 0
			},
			"Small Cannon Pyramid": {
				distance: 0,
				note: "x3"
			}
		},
		"Ying Cave Island": {
			"Ying Cave Island Layer 1": {
				distance: 5
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Ying Cave Island Layer 1": {
			"Ying Cave Island Layer 2": {
				distance: 15
			},
			"Ying Cave Island": {
				distance: 15,
				pinkRing: true
			}
		},
		"Ying Cave Island Layer 2": {
			"Ying Cave Island Layer 3": {
				distance: 15
			},
			"Ying Forest": {
				distance: 0
			},
			"Jumbo Yellow Flower": {
				distance: 10
			},
			"Ying Cave Island": {
				distance: 15,
				pinkRing: true
			}
		},
		"Ying Cave Island Layer 3": {
			"Ying Cave Island Layer 4": {
				distance: 15
			},
			"Ying Cave Island": {
				distance: 15,
				pinkRing: true
			}
		},
		"Ying Cave Island Layer 4": {
			"Ying Forest": {
				distance: 0
			},
			"Spider Air": {
				distance: 5
			},
			"Ying Cave Island": {
				distance: 5,
				pinkRing: true
			}
		},
		"Spider Air": {
			"Baby Spider Air": {
				distance: 10
			}
		},
		"Baby Spider Air": {
			"Orange": {
				distance: 20,
				note: "x7"
			},
			"Blue Bubble Gauntlet": {
				distance: 20
			},
			"Tau Cave Flower": {
				distance: 20
			}
		},
		"Menace Hive": {
			"Tau Cave Flower": {
				distance: 20
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Blue Bubble Gauntlet": {
			"Blue Bubble": {
				distance: 60
			},
			"Ying Air": {
				distance: 60
			}
		},
		"Blue Bubble": {
			"Botany Lab": {
				distance: 10
			},
			"Nuke Room": {
				distance: 10,
				note: "1 Per Blue Bubble"
			},
			"Black Hole Room": {
				distance: 10
			},
			"Rocket Room": {
				distance: 10
			}
		},
		"Rocket Room": {
			"Ying Forest": {
				distance: 0
			}
		},
		"Nuke Room": {
			"Tau Cave Flower": {
				distance: 10
			},
			"Stoney Air": {
				distance: 10
			}
		},
		"Botany Lab": {
			"I1 Library": {
				distance: 5
			},
			"Short Rail Tower": {
				distance: 0
			},
			"Tall Rail Tower": {
				distance: 0
			},
			"Buttercup": {
				distance: 0
			},
			"Red Cube": {
				distance: Infinity
			},
			"Black Cube": {
				distance: 5
			},
			"Red-Green Elevator": {
				distance: 0
			},
			"Small Cannon Pyramid": {
				distance: 0
			},
			"Health Tower": {
				distance: 0
			},
			"Orange Flower": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			},
			"Imp Cave": {
				distance: 5
			}
		},
		"Black Cube": {
			"Lighthouse": {
				distance: 15
			},
			"Red-Green Elevator": {
				distance: 10
			},
			"Stoney Air": {
				distance: 0
			}
		},
		"Lighthouse": {
			"Ying Forest": {
				distance: 0
			},
			"Buttercup": {
				distance: 0
			},
			"Lighthouse Basement": {
				distance: 20
			}
		},
		"Lighthouse Basement": {
			"Small Minigun Planet": {
				distance: 0
			},
			"Ying Air": {
				distance: 0
			},
			"Golden Yellow Flower": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Golden Yellow Flower": {
			"Ying Air": {
				distance: 0
			},
			"Buttercup": {
				distance: 0
			},
			"Golden Yellow Flower": {
				distance: 0
			},
			"Health Tower": {
				distance: 0
			}
		},
		"I1 Library": {
			"Infinity Flower": {
				distance: 0
			},
			"Imp Cave": {
				distance: Infinity
			}
		},
		"Infinity Flower": {
			"I1": {
				distance: Infinity
			}
		},
		"I1": {
			"Williston Field": {
				distance: Infinity
			},
			"Bristol": {
				distance: Infinity
			},
			"EMP Castle": {
				distance: Infinity
			}
		},
		"Bristol": {
			"I2": {
				distance: Infinity
			}
		},
		"EMP Castle": {
			"I2": {
				distance: Infinity
			},
			"Blackberry": {
				distance: Infinity
			}
		},
		"I3": {
			"Hell": {
				distance: Infinity
			}
		},
		"Hell": {
			"Hell Flower": {
				distance: Infinity
			}
		},
		"Williston Field": {
			"Williston City": {
				distance: Infinity
			},
			"Red Apple Tree": {
				distance: Infinity
			},
			"Pink Tree": {
				distance: Infinity
			},
			"Williston Tree": {
				distance: Infinity
			},
			"Well": {
				distance: Infinity
			},
			"Purple Well": {
				distance: Infinity
			},
			"Small White Flower": {
				distance: Infinity
			}
		},
		"Imp Cave": {
			"Gnole Cave": {
				distance: Infinity
			}
		},
		"Gnole Cave": {
			"Demon Cave": {
				distance: Infinity
			}
		},
		"Demon Cave": {
			"Orc Cave": {
				distance: Infinity
			},
			"Infinity Flower": {
				distance: Infinity
			}
		},
		"Orc Cave": {
			"Beholder Cave": {
				distance: Infinity
			},
			"Infinity Flower": {
				distance: Infinity
			}
		},
		"Tall Rail Tower": {
			"Stoney Air": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Short Rail Tower": {
			"Stoney Air": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Orange": {
			"Stoney Air": {
				distance: 0
			},
			"Yellow Flower City": {
				distance: 0,
				note: "On top"
			},
			"Outer Crust A": {
				distance: 10
			}
		},
		"Outer Crust A": {
			"Ying Air": {
				distance: 20
			},
			"Outer Crust B": {
				distance: 20
			}
		},
		"Outer Crust B": {
			"Outer Mantle": {
				distance: 20
			}
		},
		"Outer Mantle": {
			"Inner Crust": {
				distance: 20
			},
			"Blue Bubble": {
				distance: 5
			},
			"Spider Air": {
				distance: 0
			},
			"Red-Green Elevator": {
				distance: 5,
				note: "Net Shrink 1"
			},
			"Outer Mantle Secret": {
				distance: 30,
				note: "Yellow Cube"
			}
		},
		"Red-Green Elevator": {
			"Stoney Air": {
				distance: 0
			}
		},
		"Inner Crust": {
			"Inner Mantle": {
				distance: 15
			}
		},
		"Inner Mantle": {
			"Huntington": {
				distance: 15
			},
			"Red-Green Elevator": {
				distance: 5,
				note: "Net strink 1"
			}
		},
		"Huntington": {
			"Health Tower": {
				distance: 0
			},
			"Large Cannon Pyramid": {
				distance: 0
			},
			"Infinity Flower": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			},
			"Tau Cave Flower": {
				distance: 0
			},
			"Camel's Hump": {
				distance: 0
			},
			"Tommy Gun Weapon Mod": {
				distance: 0
			}
		},
		"Stoney Air": {
			"Stoney Air Cave": {
				distance: 0,
				note: "Net shrink 0/1"
			},
			"Yellow Cube": {
				distance: 10,
				note: "Need to be small enough"
			},
			"Green Shrink Box": {
				distance: 0,
				note: "Net shrink 1(?)"
			}
		},
		"Stoney Air Cave": {
			"Stoney Air Cave": {
				distance: 10,
				note: "Deeper = more rewards"
			}
		},
		"Green Shrink Box": {
			"Small Yellow Flower": {
				distance: 10
			}
		},
		"Yellow Cube": {
			"Mossy Air": {
				distance: 0
			},
			"Stoney Sanctuary": {
				distance: 5
			},
			"Ying Forest": {
				distance: 0
			},
			"Orange Flower": {
				distance: 0
			},
			"Small Cannon Pyramid": {
				distance: 0
			},
			"Yellow Cube Secret": {
				distance: 5,
				note: "Under Ying Forest"
			}
		},
		"Yellow Cube Secret": {
			"Orange Flower": {
				distance: 0,
				note: "x8"
			},
			"Small Noob Flower": {
				distance: 0,
				note: "x86"
			},
			"Galaxy Flower": {
				distance: 0,
				note: "x4"
			}
		},
		"Galaxy Flower": {
			"Galaxy": {
				distance: 10
			}
		},
		"Solar System": {
			"Solar System Debris": {
				distance: 10
			},
			"Tau Cave Moon": {
				distance: 25
			},
			"Small Minigun Planet": {
				distance: 10
			},
			"Moon Debris": {
				distance: 10
			},
			"Alpha Moon": {
				distance: 10
			},
			"Ice Moon": {
				distance: 10
			},
			"Gamma Moon": {
				distance: 10
			},
			"Clay Planet": {
				distance: 10
			},
			"Beta Moon": {
				distance: 10
			},
			"Sun": {
				distance: 15
			}
		},
		"Solar System Debris": {
			"Jericho": {
				distance: 0
			},
			"Stoney Air": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Jericho": {
			"Small Cannon Pyramid": {
				distance: 0
			},
			"Small Yellow Flower": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Mossy Air": {
			"Mossy Island": {
				distance: 0
			},
			"Mossy Air Cube": {
				distance: 5
			},
			"Yellow Rocket Treasure": {
				distance: 40
			}
		},
		"Mossy Air Cube": {
			"Ying Forest": {
				distance: 0
			},
			"Buttercup": {
				distance: 0
			},
			"Orange": {
				distance: 0
			},
			"Ying Flower": {
				distance: 0
			},
			"Tweedle-Dum Air": {
				distance: 0
			},
			"Tau Cave Flower": {
				distance: 0
			},
			"Small White Flower": {
				distance: 0
			},
			"Small Black Flower": {
				distance: 0
			},
			"Mossy Basement": {
				distance: 20
			}
		},
		"Mossy Basement": {
			"Yellow Apple Tree": {
				distance: 5
			},
			"Green Apple Tree": {
				distance: 5
			},
			"Health Tower": {
				distance: 15
			}
		},
		"Mossy Island": {
			"Tall Rail Tower": {
				distance: 5
			},
			"Buttercup": {
				distance: 5
			},
			"Mossy Cellar": {
				distance: 5
			}
		},
		"Mossy Cellar": {
			"Yellow Apple Tree": {
				distance: 10
			},
			"Green Apple Tree": {
				distance: 10
			},
			"Richmond": {
				distance: 20
			},
			"Ying Forest": {
				distance: 20
			}
		},
		"Richmond": {
			"Red Apple Tree": {
				distance: 5
			},
			"Bedroom": {
				distance: 5
			},
			"Richmond Sewers": {
				distance: 5
			},
			"Richmond Building": {
				distance: 5
			}
		},
		"Richmond Building": {
			"Ying Forest": {
				distance: 5
			},
			"Stoney Air": {
				distance: 0
			},
			"Red Cave": {
				distance: 5
			}
		},
		"Red Cave": {
			"Jumbo Yellow Flower": {
				distance: 15
			},
			"Red Rose": {
				distance: 15
			}
		},
		"Richmond Sewers": {
			"Ying Forest": {
				distance: 0
			},
			"Tau Cave Flower": {
				distance: 5
			},
			"Pink Tree": {
				distance: 5
			},
			"Mossy Cellar": {
				distance: 5
			}
		},
		"Richmond Library": {
			"Ying Flower": {
				distance: 5
			},
			"Stoney Air": {
				distance: 5
			}
		},
		"Orange Flower": {
			"Orange": {
				distance: 20
			},
			"Fir Tree": {
				distance: 15,
				note: "Shrink in pillars"
			},
			"Ying Air": {
				distance: 20
			},
			"Ying Flower": {
				distance: 20
			}
		},
		"Tau Cave Flower": {
			"Tau Cave Moon": {
				distance: 20
			},
			"Ying Forest": {
				distance: 5
			},
			"Ying Air": {
				distance: 0
			},
			"Jumbo Yellow Flower": {
				distance: 10
			}
		},
		"Tau Cave Moon": {
			"Type 1 Tau Cave": {
				distance: 0,
				note: "Random"
			},
			"Type 2 Tau Cave": {
				distance: 0,
				note: "Random"
			},
			"Type 3 Tau Cave": {
				distance: 0,
				note: "Random"
			},
			"Ying Forest": {
				distance: 0
			},
			"Imp Disco": {
				distance: 0
			}
		},
		"Type 2 Tau Cave": {
			"Type 3 Tau Cave": {
				distance: Infinity
			},
			"Oak Tree": {
				distance: 0,
				note: "Net 1 grow"
			},
			"Tweedle-Dum Air": {
				distance: 5
			},
			"Tweedle-Dee Air": {
				distance: 5
			},
			"Buttercup": {
				distance: 0
			}
		},
		"Type 3 Tau Cave": {
			"Type 1 Tau Cave": {
				distance: Infinity
			},
			"Oak Tree": {
				distance: 0,
				note: "Net 1 grow"
			},
			"Paper Box": {
				distance: 0
			},
			"Cardboard Box": {
				distance: 0
			},
			"Basic Laser Maze": {
				distance: Infinity
			}
		},
		"Type 1 Tau Cave": {
			"Type 2 Tau Cave": {
				distance: Infinity
			},
			"Ying Flower": {
				distance: 20
			},
			"Hard Pink Tree": {
				distance: 40
			},
			"Stoney Air": {
				distance: 0
			},
			"Alpha Cube": {
				distance: Infinity
			}
		},
		"Tweedle-Dum Base": {
			"Ying Forest": {
				distance: 0
			},
			"Stoney Air": {
				distance: 0
			}
		},
		"Tweedle-Dum Air": {
			"Tweedle-Dee Air": {
				distance: 0
			}
		},
		"Tweedle-Dee Air": {
			"Tweedle-Dum Air": {
				distance: 0
			},
			"Tweedle-Dee Cave": {
				distance: 0
			},
			"Noob Maze": {
				distance: 0
			},
			"Small Laser Fort": {
				distance: 0
			},
			"Tweedle Haunted House 1": {
				distance: 0
			}
		},
		"Small Laser Fort": {
			"Cardboard Box": {
				distance: 5,
				note: "Outer corners"
			},
			"Ying Forest": {
				distance: 5,
				note: "Outer Corners"
			},
			"Small Laser Fort Secret": {
				distance: 15,
				note: "Shrink into blue air cubes"
			}
		},
		"Small Laser Fort Secret": {
			"Small Black Flower": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Cardboard Box": {
			"Paper Box": {
				distance: 10
			}
		},
		"Paper Box": {
			"Health Tower": {
				distance: 10
			}
		},
		"Health Tower": {
			"Cardboard Box": {
				distance: 25
			},
			"Quicksand Grass": {
				distance: 0
			},
			"Country Store": {
				distance: Infinity
			}
		},
		"Tweedle Haunted House 1": {
			"Tweedle Haunted House 2": {
				distance: 15
			},
			"Tweedle Haunted House 3": {
				distance: 15,
				note: "50% chance"
			}
		},
		"Tweedle Haunted House 2": {
			"Flare Weapon Mod": {
				distance: 10
			}
		},
		"Flare Weapon Mod": {
			"Weapon Library": {
				distance: 0
			}
		},
		"Tommy Gun Weapon Mod": {
			"Weapon Library": {
				distance: 0
			}
		},
		"Tweedle-Dee Cave": {
			"Ice Cube": {
				distance: 5
			},
			"Ying Air": {
				distance: 0
			},
			"Pink Tree": {
				distance: 0
			},
			"Quicksand Grass": {
				distance: 0,
				note: "Layer 11"
			}
		},
		"Pink Tree": {
			"Quicksand Grass": {
				distance: 0
			}
		},
		"Ice Cube": {
			"Blue Bubble": {
				distance: 15
			},
			"Ying Air": {
				distance: 15
			}
		},
		"Grey Lattice": {
			"Slow Exit Maze": {
				distance: 0
			}
		},
		"Pure Menger Sponge": {
			"Pure Menger Sponge Treasure": {
				distance: 10,
				note: "Very Deep"
			}
		},
		"Slow Exit Maze": {
			"Ying Flower": {
				distance: 15,
				pinkRing: true
			}
		},
		"Outer Space -1": {
			"Outer Space 0": {
				distance: Infinity
			}
		},
		"Outer Space 0": {
			"Outer Space 1": {
				distance: 25
			},
			"Mylantis": {
				distance: 40
			},
			"Large Gold Asteroid": {
				distance: 5
			}
		},
		"Mylantis": {
			"Mylantis City": {
				distance: 0
			},
			"Mylantis Caves": {
				distance: 0
			},
			"Laser Genesis Planet": {
				distance: Infinity
			},
			"RejuvenX Refinery": {
				distance: 5,
				note: "3 on Surface"
			}
		},
		"Mylantis Caves": {
			"RejuvenX Refinery": {
				distance: Infinity
			}
		},
		"Mylantis City": {
			"Mylantis Top Garden": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			},
			"Galaxy Flower": {
				distance: 20,
				note: "Inside Buildings"
			},
			"House of 5 Lampreys": {
				distance: Infinity
			}
		},
		"Mylantis Top Garden": {
			"Ying Forest": {
				distance: 0
			},
			"Orange": {
				distance: 0
			},
			"Jumbo Yellow Flower": {
				distance: 0
			},
			"Ying Flower": {
				distance: 0
			},
			"Small White Flower": {
				distance: 0
			},
			"Main Branch Library": {
				distance: 5
			},
			"Mylantis City Underground": {
				distance: Infinity,
				note: "Key to the Universe"
			}
		},
		"Main Branch Library": {
			"Orange": {
				distance: 0
			}
		},
		"Mylantis City Underground": {
			"Beta Menger Sponge": {
				distance: Infinity
			},
			"The Bulk 1": {
				distance: Infinity
			}
		},
		"Outer Space 1": {
			"Outer Space 2": {
				distance: 20
			},
			"Outer Space 1 Bunker": {
				distance: 5
			},
			"Medium Gold Asteroid": {
				distance: 5
			}
		},
		"Medium Gold Asteroid": {
			"The Bulk 1": {
				distance: 10
			},
			"Ying Air": {
				distance: 10
			}
		},
		"The Bulk 1": {
			"Ice Castle": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Ice Castle": {
			"Ice Moon": {
				distance: 40
			}
		},
		"Outer Space 2": {
			"Galaxy": {
				distance: 20
			},
			"Alpha Menger Sponge": {
				distance: 5
			},
			"Outer Space 2 Debris": {
				distance: 5
			}
		},
		"Alpha Menger Sponge": {
			"Hinesburg": {
				distance: 5
			}
		},
		"Outer Space 2 Debris": {
			"Hinesburg": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			},
			"Stoney Air": {
				distance: 0
			}
		},
		"Hinesburg": {
			"Ying Forest": {
				distance: 0
			},
			"Tau Cave Moon": {
				distance: 0
			},
			"Stoney Air": {
				distance: 0
			},
			"Orange": {
				distance: 0
			},
			"Red Apple Tree": {
				distance: 0
			},
			"Yellow Apple Tree": {
				distance: 0
			},
			"Green Apple Tree": {
				distance: 0
			}
		},
		"Galaxy": {
			"Solar System": {
				distance: 20
			}
		},
		"Sun": {
			"Red-Green Elevator": {
				distance: 0,
				note: "Net Shrink 1"
			},
			"Solar System Elevator": {
				distance: 0,
				note: "Way out of Solar System"
			},
			"Infinity Flower": {
				distance: 40
			}
		},
		"Clay Planet": {
			"Blue Bubble Gauntlet": {
				distance: 5
			}
		},
		"Ice Moon": {
			"Ice Cube": {
				distance: 10
			},
			"Orange": {
				distance: 0
			},
			"Ying Forest": {
				distance: 5
			},
			"Jumbo Yellow Flower": {
				distance: 5
			},
			"Ying Air": {
				distance: 0
			}
		},
		"Gamma Moon": {
			"Orange": {
				distance: 0
			}
		},
		"Small Minigun Planet": {
			"Ying Forest": {
				distance: 0
			},
			"Ying Air": {
				distance: 15
			},
			"Buttercup": {
				distance: 0
			},
			"Orange Flower": {
				distance: 0,
				note: "Orange Pyramid"
			},
			"Jumbo Yellow Flower": {
				distance: 0
			}
		},
		"Moon Debris": {
			"Stoney Air": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Planet Debris": {
			"Richmond": {
				distance: 0
			},
			"Stoney Air": {
				distance: 0
			},
			"Ying Forest": {
				distance: 0
			}
		},
		"Small Yellow Flower": {
			"Small Cannon Pyramid": {
				distance: 10,
				note: "x3"
			},
			"Ying Forest": {
				distance: 0
			},
			"Ying Air": {
				distance: 0
			},
			"Yellow Flower City": {
				distance: 10
			}
		},
		"Yellow Flower City": {
			"Small Cannon Pyramid": {
				distance: 10,
				note: "Orange X towers guranteed jumbo yellow flower"
			},
			"Quicksand Grass": {
				distance: 5
			},
			"Yellow Flower City Secret Treasure": {
				distance: 20,
				note: "Shrink until level 8"
			},
			"Pure Menger Sponge": {
				distance: 20,
				note: "Shrink until level 8"
			}
		},
		"Small Cannon Pyramid": {
			"Jumbo Yellow Flower": {
				distance: 10,
				note: "Small chance"
			}
		},
		"Jumbo Yellow Flower": {
			"Small Yellow Flower": {
				distance: 20,
				note: "x5"
			},
			"Large Cannon Pyramid": {
				distance: 20,
				note: "Shrink into waypoint room back"
			},
			"Ying Cave Island": {
				distance: 20
			}
		},
		"Large Cannon Pyramid": {
			"Small White Flower": {
				distance: 20
			},
			"Upgrade Station": {
				distance: 20
			}
		},
		"Quicksand Grass": {
			"Purple House": {
				distance: 10,
				note: "Level 10"
			},
			"Quicksand Grass Basement": {
				distance: 10,
				note: "Level 11+"
			}
		},
		"Purple House": {
			"Jumbo Yellow Flower": {
				distance: 5
			}
		},
		"Small White Flower": {
			"Alpha Cube": {
				distance: 10,
				note: "Front-Right corner"
			},
			"Fir Tree": {
				distance: 10
			},
			"Quicksand Grass": {
				distance: 0
			}
		},
		"Alpha Cube": {
			"Small Black Flower": {
				distance: 30
			},
			"Health Tower": {
				distance: 15,
				note: "Down-Left-Back Corner"
			}
		},
		"Country Store": {
			"Richmond": {
				distance: Infinity
			}
		},
		"Fir Tree": {
			"Small White Flower": {
				distance: 10
			},
			"Small Black Flower": {
				distance: 10
			}
		}
	},
	root: {
		name: "Outer Space -1"
	}
};
