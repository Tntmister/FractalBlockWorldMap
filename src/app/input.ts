import { InputGraph, InputNode } from "./types";

export const inputNodes = [
	{
		name: "Ying Forest",
		upgrades: ["Cannon", "Plasma", "Health"],
		interactables: ["Waypoint", "Save", "Respawn"]
	},
	{
		name: "Tutorial"
	},
	{
		name: "Tutorial Island"
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
		upgrades: ["Health", "Homing", "Plasma", "Nuke", "Rocket"],
		items: ["Armor", "Nuke", "Rocket", "Plasma", "Homing", "Minigun", "Dark Hole", "EMP"]
	},
	{
		name: "Upgraded Small White Flower",
		upgrades: ["Health", "Homing", "Plasma", "Nuke", "Rocket"],
		items: [
			"Armor",
			"Nuke",
			"Rocket",
			"Plasma",
			"Homing",
			"Minigun",
			"Dark Hole",
			"EMP",
			"Railgun",
			"Gold"
		]
	},
	{
		name: "Ying Flower",
		upgrades: ["Laser"],
		interactables: ["Waypoint"]
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
		name: "Outer Mantle"
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
		interactables: ["PinkRing"],
		items: ["Gold"],
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
		items: ["Rocket", "Minigun"]
	},
	{
		name: "Botany Lab"
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
		items: ["Laser", "Railgun"],
		upgrades: ["Laser", "Health"]
	},
	{
		name: "Pink Tree"
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
		upgrades: ["Plasma", "Rocket"],
		items: ["Gold", "Plasma"]
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
		name: "Railgun Tower",
		upgrades: ["Rocket", "Railgun", "Cannon"],
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
		name: "Tau Cave Moon"
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
		name: "I2"
	},
	{
		name: "I3"
	},
	{
		name: "Burlington"
	},
	{
		name: "Outer Space Level 0"
	},
	{
		name: "Outer Space Level 1"
	},
	{
		name: "Outer Space Level 2"
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
		interactables: ["Waypoint", "CommonSell", "Buy", "Markers", "PinkRing"]
	},
	{
		name: "Richmond Sewers",
		upgrades: ["Cannon", "Rocket", "Homing", "Health", "EMP"],
		interactables: ["Waypoint"]
	},
	{
		name: "Richmond Library",
		upgrades: ["Rocket"],
		interactables: ["Waypoint", "BuyNuke"]
	},
	{
		name: "Bedroom",
		interactables: ["Sleep"]
	},
	{
		name: "Hell"
	},
	{
		name: "Stable Singletons"
	},
	{
		name: "Grey Lattice",
		items: ["Armor"]
	},
	{
		name: "Slow Exit Maze"
	},
	{
		name: "Mylantis"
	},
	{
		name: "Alpha Menger Sponge"
	},
	{
		name: "Happy Land"
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
		items: ["Health", "Armor", "Minigun", "Laser", "Rocket", "Cannon"],
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
		items: ["Laser"]
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
		upgrades: ["Plasma"],
		items: ["Health"]
	},
	{
		name: "Yellow Cube Secret",
		upgrades: ["Health", "Dark Hole", "Rocket"]
	},
	{
		name: "Stoney Air Cave",
		upgrades: ["Health", "Plasma", "Cannon", "Laser"],
		items: ["Nuke", "Minigun", "Cannon", "EMP", "Laser"]
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
		upgrades: ["Health", "Rocket", "Homing", "Nuke", "EMP"],
		items: ["EMP", "Nuke", "Minigun", "Railgun", "Homing", "Rocket", "Laser", "Cannon"]
	},
	{
		name: "Green Shrink Box"
	},
	{
		name: "Red Apple Tree",
		upgrades: ["Rocket"],
		items: ["Minigun", "Homing", "Rocket", "Cannon", "Nuke", "EMP", "Railgun", "Laser"]
	},
	{
		name: "Yellow Apple Tree",
		upgrades: ["Rocket"],
		items: ["Minigun", "Homing", "Rocket", "Cannon", "Nuke", "EMP", "Railgun", "Laser"]
	},
	{
		name: "Green Apple Tree",
		upgrades: ["Rocket"],
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
				distance: Infinity
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
			"Infinity Flower": {
				distance: Infinity
			},
			"Railgun Tower": {
				distance: Infinity
			},
			"Buttercup": {
				distance: Infinity
			}
		},
		"Railgun Tower": {
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
				distance: Infinity
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
			}
		},
		"Stoney Air": {
			"Stoney Air Cave": {
				distance: 0,
				note: "Net shrink 0/1"
			},
			"Yellow Cube": {
				distance: Infinity,
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
			"Railgun Tower": {
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
			"Stoney Air": {
				distance: 0
			},
			"Alpha Cube": {
				distance: Infinity
			},
			"Type 2 Tau Cave": {
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
			"Weapon Library": {
				distance: 10
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
		"Outer Space Level 0": {
			"Outer Space Level 1": {
				distance: Infinity
			},
			"Mylantis": {
				distance: 20
			}
		},
		"Outer Space Level 1": {
			"Outer Space Level 2": {
				distance: Infinity
			}
		},
		"Outer Space Level 2": {
			"Galaxy": {
				distance: Infinity
			},
			"Alpha Menger Sponge": {
				distance: Infinity
			}
		},
		"Galaxy": {
			"Ying Flower": {
				distance: 80
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
		name: "Outer Space Level 0"
	}
};
