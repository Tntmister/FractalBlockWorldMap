import { InputEdges } from "../types";
import { nodeNames } from "./nodes";

const inputEdges: InputEdges = {
	"Tutorial 1": {
		"Happy Land": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 5,
			note: "Shrink into black cubes",
		},
	},
	"Tutorial 2": {
		"Tutorial 1": {
			distance: 0,
		},
		"EMERGENCY": {
			distance: 0,
		},
		"Safety Doppelganger": {
			distance: 0,
			note: "Non-Original Tutorial",
		},
	},
	"EMERGENCY": {
		"Stable Singletons": {
			distance: 0,
		},
		"EMERGENCY Secret": {
			distance: 20,
			note: "Shrink",
		},
	},
	"EMERGENCY Secret": {
		"Tau Cave Moon": {
			distance: 0,
		},
		"Fire Rate Moon": {
			distance: 0,
			requiresKey: "Universe Key",
		},
	},
	"Fire Rate Moon": {
		"Moon Debris": {
			distance: 0,
		},
	},
	"Safety Doppelganger": {
		"Infinity Flower": {
			distance: 15,
			note: "Instead of EMERGENCY secret",
		},
	},
	"Tutorial Chambers": {
		"Tutorial 2": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 5,
		},
		"Noob Maze Bundle": {
			distance: 5,
		},
		"Small Yellow Flower": {
			distance: 5,
		},
	},
	"Noob Maze Bundle": {
		"Large Noob Maze": {
			distance: 0,
		},
		"Noob Maze": {
			distance: 0,
		},
	},
	"Stable Singletons": {
		"I1": {
			distance: 20,
		},
		"Fanatic Lattice": {
			distance: 100,
		},
		"I3": {
			distance: 100,
		},
		"Hell": {
			distance: 100,
		},
		"Ying Forest": {
			distance: 5,
		},
	},
	"Ying Forest": {
		"Ying Air": {
			distance: 0,
		},
		"Noob Maze Flower": {
			distance: 0,
		},
		"Small Yellow Flower": {
			distance: 5,
		},
		"Small Black Flower": {
			distance: 0,
		},
		"Quicksand Grass": {
			distance: 0,
			note: "Save Points",
		},
		"Menace Hive": {
			distance: 20,
			note: "Depth 12+, hanging from branches",
		},
		"Unremembered Tower": {
			distance: 25,
			note: "Depth 31+",
		},
		"Ying Forest Depth 50+": {
			distance: 30,
		},
	},
	"Ying Forest Depth 50+": {
		"Ying Air": {
			distance: 0,
		},
		"Noob Maze Flower": {
			distance: 0,
		},
		"Small Yellow Flower": {
			distance: 0,
		},
		"Small Black Flower": {
			distance: 0,
		},
		"Quicksand Grass": {
			distance: 0,
			note: "Save Points",
		},
		"Menace Hive": {
			distance: 0,
			note: "Hanging from branches",
		},
		"Unremembered Tower": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
	},
	"Unremembered Tower": {
		"Mossy Basement": {
			distance: 15,
		},
		"Well": {
			distance: 30,
			note: "Floor 4",
		},
		"Tweedle-Dum Air": {
			distance: 30,
			note: "50% Chance",
		},
		"Spider Air": {
			distance: 30,
		},
		"Unremembered Tower Secret Totem": {
			distance: 40,
			note: "Tweedle-dum Air Anti-Plug Hole",
			requiresKey: "Yellow Key",
		},
	},
	"Unremembered Tower Secret Totem": {
		"I2 WIG Flower": {
			distance: 0,
		},
		"Rainbow Flower": {
			distance: 0,
			requiresKey: "Yellow Key",
		},
	},
	"Small Black Flower": {
		"Red Apple Tree": {
			distance: 10,
			note: "x4",
		},
		"Quicksand Grass": {
			distance: 0,
		},
	},
	"Red Apple Tree": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Red Apple": {
			distance: 20,
		},
		"Upgrade Station": {
			distance: 30,
			note: "Top of tree",
		},
	},
	"Yellow Apple Tree": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Red Apple": {
			distance: 20,
		},
		"Yellow Apple": {
			distance: 20,
		},
		"Upgrade Station": {
			distance: 30,
			note: "Top of tree",
		},
	},
	"Green Apple Tree": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Red Apple": {
			distance: 20,
		},
		"Yellow Apple": {
			distance: 20,
		},
		"Green Apple": {
			distance: 20,
		},
		"Upgrade Station": {
			distance: 30,
			note: "Top of tree",
		},
	},
	"Ying Island": {
		"Ying Forest": {
			distance: 0,
		},
		"Pure Menger Sponge": {
			distance: 5,
		},
		"Small Cannon Pyramid": {
			distance: 5,
		},
	},
	"Ying Deep Air": {
		"Ying Deep Air Cube": {
			distance: 5,
		},
	},
	"Tutorial Island": {
		"Small White Flower": {
			distance: 0,
			note: "Under Island",
		},
		"Tutorial Chambers": {
			distance: 0,
			blueRingOnly: true,
		},
		"Ying Island": {
			distance: 0,
		},
	},
	"Ying Air": {
		"Ying Air Cube": {
			distance: 1,
		},
		"Ying Deep Air": {
			distance: 10,
			note: "Shrink 10x",
		},
	},
	"Ying Air Cube": {
		"Ying Forest": {
			distance: 0,
		},
	},
	"Ying Flower": {
		"Ying Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Ying World Shell Green Island": {
			distance: 5,
			note: "Shell 2",
		},
		"Ying World": {
			distance: 5,
		},
	},
	"Ying World Shell Green Island": {
		"Jumbo Yellow Flower": {
			distance: 0,
		},
		"Small Cannon Pyramid": {
			distance: 0,
		},
		"Small Black Flower": {
			distance: 0,
		},
	},
	"Ying World": {
		"Ying Island": {
			distance: 0,
		},
		"Ying Cave Island": {
			distance: 0,
		},
		"Tutorial Island": {
			distance: 10,
		},
		"Grey Lattice": {
			distance: 0,
		},
		"Gated Community": {
			distance: 5,
		},
		"Noob Maze Bundle": {
			distance: 5,
		},
	},
	"Gated Community": {
		"Ying World Library": {
			distance: 0,
		},
		"Noob Maze Bundle": {
			distance: 0,
		},
		"Noob Maze Flower": {
			distance: 0,
		},
		"Small Cannon Pyramid": {
			distance: 0,
			note: "x3",
		},
	},
	"Ying Cave Island": {
		"Ying Cave Island Layer 1": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Ying Cave Island Layer 1": {
		"Ying Cave Island Layer 2": {
			distance: 15,
		},
	},
	"Ying Cave Island Layer 2": {
		"Ying Cave Island Layer 3": {
			distance: 15,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Jumbo Yellow Flower": {
			distance: 10,
		},
	},
	"Ying Cave Island Layer 3": {
		"Ying Cave Island Layer 4": {
			distance: 15,
		},
	},
	"Ying Cave Island Layer 4": {
		"Ying Forest": {
			distance: 0,
		},
		"Spider Air": {
			distance: 5,
		},
	},
	"Spider Air": {
		"Orange": {
			distance: 20,
			note: "x7",
		},
		"Blue Bubble Gauntlet": {
			distance: 20,
		},
		"Tau Cave Flower": {
			distance: 20,
		},
	},
	"Menace Hive": {
		"Tau Cave Flower": {
			distance: 20,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Blue Bubble Gauntlet": {
		"Blue Bubble": {
			distance: 60,
		},
		"Ying Air": {
			distance: 60,
		},
	},
	"Blue Bubble": {
		"Botany Lab": {
			distance: 10,
		},
		"Nuke Room": {
			distance: 10,
			note: "1 Per Blue Bubble",
		},
		"Black Hole Room": {
			distance: 10,
		},
		"Rocket Room": {
			distance: 10,
		},
		"Blue Bubble Lattice": {
			distance: 20,
			note: "Shrink in Black Hole Room",
		},
	},
	"Blue Bubble Lattice": {
		"Infinity Flower": {
			distance: 10,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Small Cannon Pyramid": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 5,
		},
	},
	"Rocket Room": {
		"Ying Forest": {
			distance: 0,
		},
	},
	"Nuke Room": {
		"Tau Cave Flower": {
			distance: 10,
		},
		"Stoney Air": {
			distance: 10,
		},
	},
	"Botany Lab": {
		"I1 Library": {
			distance: 5,
		},
		"Short Rail Tower": {
			distance: 0,
		},
		"Tall Rail Tower": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Botany Lab Red Cube": {
			distance: 30,
		},
		"Botany Lab Black Cube": {
			distance: 5,
		},
		"Red-Green Elevator": {
			distance: 0,
		},
		"Small Cannon Pyramid": {
			distance: 0,
		},
		"Health Tower": {
			distance: 0,
		},
		"Orange Flower": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Imp Cave": {
			distance: 5,
		},
		"Ying Flower": {
			distance: 5,
		},
		"Pink Tree": {
			distance: 5,
		},
	},
	"Buttercup": {
		"Health Tower": {
			distance: 0,
		},
	},
	"Botany Lab Black Cube": {
		"Lighthouse": {
			distance: 15,
		},
		"Red-Green Elevator": {
			distance: 10,
		},
		"Stoney Air": {
			distance: 0,
		},
	},
	"Lighthouse": {
		"Ying Forest": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Lighthouse Basement": {
			distance: 20,
		},
	},
	"Lighthouse Basement": {
		"Small Minigun Planet": {
			distance: 0,
		},
		"Ying Air": {
			distance: 0,
		},
		"Golden Yellow Flower": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Golden Yellow Flower": {
		"Ying Air": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Golden Yellow Flower": {
			distance: 0,
		},
		"Health Tower": {
			distance: 0,
		},
	},
	"I1 Library": {
		"Infinity Flower": {
			distance: 30,
		},
		"Pink Tree": {
			distance: 0,
		},
	},
	"Infinity Flower": {
		"I1": {
			distance: 20,
		},
		"Ying Air": {
			distance: 0,
		},
		"Ying Flower": {
			distance: 0,
		},
		"Small Yellow Flower": {
			distance: 0,
		},
	},
	"I1": {
		"Williston Spiral": {
			distance: 0,
		},
		"Williston Field": {
			distance: 0,
			note: "Red Pillar",
		},
	},
	"Williston Spiral": {
		"Williston Field": {
			distance: 15,
		},
		"Stoney Air": {
			distance: 0,
		},
	},
	"Bristol": {
		"I2 Spiral": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 0,
		},
		"I1": {
			distance: 0,
		},
		"Bedroom": {
			distance: 0,
		},
	},
	"I2 Spiral": {
		"Stoney Air": {
			distance: 0,
		},
		"Fanatic Lattice": {
			distance: 10,
		},
	},
	"EMP Castle": {
		"Fanatic Lattice": {
			distance: 15,
		},
		"Blackberry": {
			distance: 15,
		},
		"I1": {
			distance: 15,
		},
		"Quicksand Grass": {
			distance: 15,
		},
		"Orange Flower": {
			distance: 15,
		},
	},
	"Zubeneschamali Castle": {
		"Fanatic Lattice": {
			distance: 30,
		},
		"Quicksand Grass": {
			distance: 30,
		},
		"Stoney Air": {
			distance: 30,
		},
	},
	"Blackberry": {
		"Small White Flower": {
			distance: 25,
		},
		"Small Black Flower": {
			distance: 25,
		},
		"Pink Tree": {
			distance: 10,
			note: "Inside Orange Cubes",
		},
		"Quicksand Grass": {
			distance: 10,
			note: "Inside Orange Cubes, Layer 11",
		},
	},
	"I3": {
		"Hell": {
			distance: Infinity,
		},
		"Sagittarius Portal": {
			distance: Infinity,
		},
		"Dandelions": {
			distance: 5,
		},
		"Hard Orange Flower": {
			distance: 10,
		},
		"Colchester": {
			distance: 10,
		},
	},
	"Dandelions": {
		"Salmon Mushroom": {
			distance: Infinity,
		},
	},
	"Colchester": {
		"I3 WIG Flower": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Ying Air": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Large White Flower": {
			distance: 0,
		},
		"I3": {
			distance: 0,
		},
	},
	"Hard Orange Flower": {
		"I2 WIG Flower": {
			distance: 30,
		},
		"Scorpius Flower": {
			distance: 30,
		},
		"Fir Tree": {
			distance: 15,
		},
		"Fanatic Weed": {
			distance: 15,
		},
	},
	"Sagittarius Portal": {
		"Fanatic Lattice": {
			distance: Infinity,
		},
	},
	"Hell": {
		"Green Apple Tree": {
			distance: 10,
		},
		"Quicksand Grass": {
			distance: 10,
		},
		"Small White Flower": {
			distance: 10,
		},
		"Small Black Flower": {
			distance: 10,
		},
		"Hell Flower": {
			distance: 20,
		},
		"Below Hell": {
			distance: 20,
			requiresKey: "Universe Key",
			note: "More to Come",
		},
	},
	"Hell Flower": {
		"Boss Battle": {
			distance: 40,
		},
	},
	"Boss Battle": {
		"Ying Forest": {
			distance: 5,
		},
		"Credits": {
			distance: 40,
		},
	},
	"Credits": {
		"Small White Flower": {
			distance: 0,
		},
	},
	"Williston Field": {
		"Williston City": {
			distance: 0,
		},
		"Williston Wall": {
			distance: 5,
		},
		"Red Apple Tree": {
			distance: 0,
		},
		"Yellow Apple Tree": {
			distance: 0,
		},
		"Green Apple Tree": {
			distance: 0,
		},
		"Pink Tree": {
			distance: 5,
		},
		"Williston Trees": {
			distance: 5,
		},
		"Well": {
			distance: 0,
		},
		"Williston Purple Well": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 0,
		},
		"EMP Castle": {
			distance: 10,
		},
		"Zubeneschamali Castle": {
			distance: 15,
		},
		"Bristol": {
			distance: 10,
		},
		"I2 WIG Flower": {
			distance: 5,
		},
	},
	"Williston Trees": {
		"I1": {
			distance: 0,
		},
	},
	"Williston City": {
		"I1 Library": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Small Cannon Pyramid": {
			distance: 0,
		},
		"Large Cannon Pyramid": {
			distance: 0,
		},
		"Bedroom": {
			distance: 0,
		},
		"Yellow Apple Tree": {
			distance: 0,
		},
		"Richmond Building": {
			distance: 0,
		},
	},
	"Williston Wall": {
		"Fir Tree": {
			distance: 0,
		},
	},
	"I2 WIG Flower": {
		"I2 WIG Flower": {
			distance: 0,
			note: "Prank Flower",
		},
		"Fanatic Lattice": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Weed Ring": {
			distance: 0,
		},
		"Mystic Vine 0": {
			distance: 0,
		},
		"Blue Bubble Cave": {
			distance: 0,
		},
		"WIG Prison": {
			distance: 20,
			blueRingOnly: true,
		},
		"Prank I2 WIG Flower": {
			distance: 0,
		},
	},
	"Prank I2 WIG Flower": {
		"WIG Prison 2": {
			distance: 20,
			blueRingOnly: true,
		},
	},
	"WIG Prison 2": {
		"Large White Flower": {
			distance: 0,
		},
	},
	"Blue Bubble Cave": {
		"Fir Tree": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 5,
		},
		"Earthy Cellar": {
			distance: 10,
		},
		"Gnole Disco": {
			distance: 10,
		},
		"Small Blue Flower (Primary)": {
			distance: 10,
		},
		"Stoney Air": {
			distance: 10,
		},
		"Cardboard Box": {
			distance: 10,
			note: "Sub-Cave",
		},
		"Blackberry": {
			distance: 10,
			note: "Sub-Cave",
		},
		"I2 WIG Flower": {
			distance: 15,
		},
		"Purple Bubble Cave": {
			distance: 15,
		},
	},
	"Purple Bubble Cave": {
		"Oak Tree": {
			distance: 10,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Weed Ring": {
			distance: 0,
		},
		"Ostrich Fern": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Nuke Radius Cave": {
			distance: 5,
			note: "Inside Big Green Hanging Vine",
		},
		"I3 Common Gate": {
			distance: 0,
		},
		"Galaxy Flower": {
			distance: 10,
		},
		"Fir Tree": {
			distance: 10,
		},
		"Blue Mushroom": {
			distance: 30,
			note: "50% Chance",
		},
		"Danville": {
			distance: 30,
		},
		"Mystic Vine 0": {
			distance: 30,
		},
	},
	"Ostrich Fern": {
		"Fir Tree": {
			distance: 0,
		},
	},
	"Earthy Cellar": {
		"Green Apple Tree": {
			distance: 0,
		},
		"Catacombs 1": {
			distance: 25,
		},
	},
	"Earthy Basement": {
		"Green Apple Tree": {
			distance: 0,
		},
		"Cardboard Box": {
			distance: 10,
		},
		"Steel Box": {
			distance: 10,
		},
	},
	"Fanatic Lattice": {
		"Fanatic Weed": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 5,
		},
		"Fanatic Spire": {
			distance: 10,
		},
		"I2 Library": {
			distance: 10,
		},
		"Small White Flower": {
			distance: 10,
		},
		"Scorpius Flower": {
			distance: 10,
		},
	},
	"I3 Mirror Gate": {
		"I3": {
			distance: Infinity,
		},
	},
	"I3 Common Gate": {
		"Small White Flower": {
			distance: 15,
		},
		"Raspberry": {
			distance: 10,
		},
		"Montreal": {
			distance: 30,
		},
		"I3 WIG Flower": {
			distance: 30,
			note: "Guranteed Real",
		},
		"Hanging Fanatic Vine": {
			distance: 30,
			note: "Taurus Portal",
		},
	},
	"Nuke Radius Cave": {
		"I3 WIG Flower": {
			distance: Infinity,
		},
		"Small Cannon Gym": {
			distance: 15,
		},
		"Vine Shaft Column": {
			distance: 5,
		},
		"Infinity Flower": {
			distance: 25,
		},
	},
	"Fanatic Spire": {
		"Fanatic Lattice": {
			distance: 0,
		},
		"Fanatic Spire Scaffold": {
			distance: 5,
		},
		"Small Blue Flower (Primary)": {
			distance: 10,
		},
		"Healing Patch": {
			distance: Infinity,
		},
		"Fanatic Spire Treasure": {
			distance: 30,
		},
	},
	"Fanatic Spire Treasure": {
		"Golden Yellow Flower": {
			distance: 0,
		},
		"Montreal": {
			distance: 0,
		},
		"Fanatic Island": {
			distance: 0,
			note: "Vegetation",
		},
		"Fanatic Island Caves": {
			distance: 0,
		},
	},
	"Fanatic Spire Scaffold": {
		"Fanatic Island Caves": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Buttercup": {
			distance: 5,
			note: "Inside Grey Pillars",
		},
		"Creeping Jeni": {
			distance: 5,
		},
	},
	"Creeping Jeni": {
		"Fanatic Air": {
			distance: 0,
		},
		"Guerilla Jungle": {
			distance: 0,
		},
		"Raspberry": {
			distance: 5,
			note: "Inside Vine",
		},
		"Montreal": {
			distance: 5,
			note: "Inside Vine",
		},
		"Violet": {
			distance: 10,
		},
		"Toronto": {
			distance: 30,
		},
		"Fanatic Vine 2": {
			distance: 30,
		},
	},
	"Scorpius Flower": {
		"Scorpius Portal": {
			distance: 30,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"I2 Library": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Montreal": {
			distance: 0,
		},
		"I2 WIG Flower": {
			distance: 0,
		},
		"I3 WIG Maze Room": {
			distance: 0,
		},
	},
	"I3 WIG Maze Room": {
		"I3 WIG Flower": {
			distance: Infinity,
			note: "Guranteed Real",
		},
	},
	"I3 WIG Flower": {
		"I3 WIG Flower": {
			distance: 0,
			note: "Prank Flower",
		},
		"I3": {
			distance: 0,
		},
		"Quicksand Grass": {
			distance: 0,
		},
		"WIG Prison": {
			distance: 20,
			blueRingOnly: true,
		},
		"Prank I3 WIG Flower": {
			distance: 0,
		},
	},
	"Prank I3 WIG Flower": {
		"WIG Prison 2": {
			distance: 20,
			blueRingOnly: true,
		},
	},
	"Violet": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Fanatic Island Caves": {
			distance: 0,
		},
		"Fanatic Spire": {
			distance: Infinity,
			note: "Shell 2",
		},
		"Violet Shell 3": {
			distance: 50,
			blueRingOnly: true,
		},
	},
	"Violet Shell 3": {
		"Fanatic Island Caves": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Cannon Ammo Grab": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Violet Shell 2": {
			distance: 25,
		},
		"Blackberry": {
			distance: 15,
		},
		"Moldy Basement": {
			distance: 25,
		},
		"Large White Flower": {
			distance: 25,
		},
		"Ostrich Fern": {
			distance: 10,
		},
	},
	"Violet Shell 2": {
		"Fanatic Island Caves": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Cannon Ammo Grab": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Violet Shell 1": {
			distance: 20,
		},
		"Healing Patch": {
			distance: 10,
		},
		"Fanatic Spire": {
			distance: 10,
		},
		"Fanatic Vine 2": {
			distance: 20,
			note: "Exit",
		},
	},
	"Violet Shell 1": {
		"Fanatic Island Caves": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Cannon Ammo Grab": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Violet Shell 0": {
			distance: 15, // we take a blue ring here, but distance to leave
		},
		"Fanatic Lattice": {
			distance: 10,
		},
		"Health Tower": {
			distance: 10,
		},
		"Blue Bubble Cave": {
			distance: 10,
		},
	},
	"Moldy Basement": {
		"Colchester": {
			distance: 20,
		},
		"Green Apple Tree": {
			distance: 0,
		},
	},
	"Healing Patch": {
		"Fanatic Weed": {
			distance: 0,
		},
		"Minigun Forest": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 0,
		},
	},
	"Fanatic Weed": {
		"Fanatic Weed Caves": {
			distance: 0,
		},
		"Montreal": {
			distance: 5,
		},
		"Small Cannon Gym": {
			distance: 0,
		},
		"Weed Ring": {
			distance: 10,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Grass": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
	},
	"Hanging Fanatic Weed": {
		"Fanatic Weed Caves": {
			distance: 0,
		},
		"Hanging Fanatic Vine": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Orange Flower": {
			distance: 5,
		},
		"Nuke Radius Cave": {
			distance: 5,
		},
		"I3 Mirror Gate": {
			distance: 10,
		},
		"Scorpius Flower": {
			distance: 10,
		},
	},
	"Small Cannon Gym": {
		"Fanatic Weed": {
			distance: 10,
		},
	},
	"Weed Ring": {
		"EMP City": {
			distance: 10,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Weed": {
			distance: 5,
		},
		"Fanatic Weed Caves": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 5,
		},
		"Fanatic Vine 1": {
			distance: 5,
		},
		"Fanatic Island": {
			distance: 10,
			note: "Vegetation",
		},
		"Fanatic Vine 2": {
			distance: 10,
			note: "In Center",
		},
		"Montreal": {
			distance: 20,
			note: "In center",
		},
		"Scorpius Portal": {
			distance: 20,
			note: "In center",
		},
	},
	"Dark Willow Tree": {
		"Danville": {
			distance: Infinity,
		},
		"Montreal": {
			distance: Infinity,
		},
		"Large White Flower": {
			distance: Infinity,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 0,
		},
	},
	"Danville": {
		"Ying Forest": {
			distance: 0,
		},
		"Infinity Flower": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"I2 Library": {
			distance: 0,
		},
		"Small Yellow Flower": {
			distance: 0,
		},
		"Small Blue Flower (Primary)": {
			distance: 0,
		},
	},
	"Scorpius Portal": {
		"Cardboard Box": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"I1": {
			distance: 30,
		},
		"Ying Air": {
			distance: 30,
		},
	},
	"Small Blue Flower (Primary)": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Grass": {
			distance: 5,
		},
		"Damp Basement": {
			distance: 10,
		},
		"Health Tower": {
			distance: 10,
		},
		"Fanatic Air": {
			distance: 15,
		},
		"I2 WIG Flower": {
			distance: 15,
		},
		"I2 Library": {
			distance: 15,
		},
		"Small Blue Flower (Secondary)": {
			distance: 15,
			note: "50% Chance",
		},
	},
	"Small Blue Flower (Secondary)": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Grass": {
			distance: 5,
		},
		"Damp Basement": {
			distance: 10,
		},
		"Health Tower": {
			distance: 10,
		},
		"Fanatic Air": {
			distance: 15,
		},
		"Danville": {
			distance: 15,
		},
		"Small Blue Flower (Tertiary)": {
			distance: 15,
			note: "50% Chance",
		},
	},
	"Small Blue Flower (Tertiary)": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Grass": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 20,
		},
		"I3 WIG Flower": {
			distance: 20,
		},
		"Small Blue Flower (Quaternary)": {
			distance: 20,
			note: "50% Chance",
		},
	},
	"Small Blue Flower (Quaternary)": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Grass": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 15,
		},
	},
	"EMP City": {
		"Stoney Air": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Fanatic Weed": {
			distance: 20,
		},
		"I2 WIG Flower": {
			distance: 20,
		},
		"Fanatic Air": {
			distance: 20,
		},
	},
	"Fanatic Air": {
		"Fanatic Island": {
			distance: 0,
		},
		"Montreal": {
			distance: 0,
		},
	},
	"Fanatic Island": {
		"Fanatic Air": {
			distance: 0,
		},
		"Blackberry": {
			distance: 5,
		},
		"Montreal": {
			distance: 5,
		},
		"Raspberry": {
			distance: 10,
			note: "Library Tower",
		},
		"I2 Library": {
			distance: 15,
		},
		"Willow Tree": {
			distance: 5,
		},
		"Laboratory Vine": {
			distance: 0,
		},
		"Fanatic Vine 1": {
			distance: 0,
		},
		"Fanatic Well": {
			distance: 0,
		},
		"Fanatic Island Caves": {
			distance: 0,
		},
		"Minigun Forest Minor Pod": {
			distance: 5,
		},
		"Dark Willow Tree": {
			distance: 10,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Spruce Tree": {
			distance: 5,
		},
		"Woody Basement": {
			distance: Infinity,
		},
	},
	"Minigun Forest Minor Pod": {
		"Fanatic Air": {
			distance: 0,
		},
	},
	"Fanatic Island Caves": {
		"Fir Tree": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 5,
		},
	},
	"Woody Basement": {
		"Small Black Flower": {
			distance: Infinity,
		},
		"Small White Flower": {
			distance: Infinity,
		},
		"Green Apple Tree": {
			distance: Infinity,
		},
	},
	"Minigun Forest": {
		"Fanatic Lattice": {
			distance: 5,
		},
		"Cardboard Box": {
			distance: 5,
		},
		"Hanging Fanatic Vine": {
			distance: 0,
		},
		"Minigun Forest Hanging": {
			distance: 5,
		},
		"Minigun Forest Minor Pod": {
			distance: 5,
		},
		"Earthy Basement": {
			distance: 5,
		},
		"I3 Common Gate": {
			distance: 5,
		},
		"Ivory Pinhole Gauntlet": {
			distance: 5,
		},
		"Montreal": {
			distance: 5,
		},
		"Fanatic Weed": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Large Cannon Pyramid": {
			distance: 10,
		},
		"Healing Patch": {
			distance: 10,
		},
		"I2 Library": {
			distance: 10,
		},
	},
	"Minigun Forest Hanging": {
		"Guerilla Jungle": {
			distance: 0,
		},
		"Blue Bubble Cave": {
			distance: 0,
		},
		"Raspberry": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Minigun Forest Big Pod": {
			distance: 5,
		},
	},
	"Minigun Forest Big Pod": {
		"Small Blue Flower (Primary)": {
			distance: Infinity,
		},
		"Fanatic Weed": {
			distance: 0,
		},
	},
	"Guerilla Jungle": {
		"Alpha Cube": {
			distance: 5,
			note: "Inside Trees",
		},
		"Hanging Fanatic Vine": {
			distance: 0,
		},
		"I3 Common Gate": {
			distance: 5,
		},
		"EMP City": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Large Cannon Pyramid": {
			distance: 5,
		},
		"Fir Tree": {
			distance: 5,
		},
		"Spruce Tree": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Scorpius Portal": {
			distance: 10,
		},
		"Danville": {
			distance: 10,
		},
		"Small Cannon Gym": {
			distance: 10,
		},
	},
	"Spruce Tree": {
		"Fir Tree": {
			distance: 0,
		},
		"Spruce Tree": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 5,
			note: "Inside Trunk",
		},
		"Cannon Ammo Grab": {
			distance: 10,
			note: "Inside Inner Trunk",
		},
		"Cardboard Box": {
			distance: 10,
			note: "Inside Inner Trunk",
		},
		"Steel Box": {
			distance: 20,
		},
	},
	"Cannon Ammo Grab": {
		"Montreal": {
			distance: 0,
		},
		"Oak Tree": {
			distance: 0,
		},
		"Green Apple Tree": {
			distance: 0,
		},
	},
	"Fanatic Weed Caves": {
		"Fir Tree": {
			distance: 0,
		},
		"Spruce Tree": {
			distance: 5,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Damp Basement": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 15,
		},
		"Minigun Forest Minor Pod": {
			distance: 15,
		},
		"Hanging Fanatic Vine": {
			distance: 0,
		},
		"Fanatic Weed Caves 2": {
			distance: 10,
		},
	},
	"Fanatic Weed Caves 2": {
		"Fanatic Air": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fanatic Lattice": {
			distance: 5,
		},
		"Damp Cellar": {
			distance: 5,
		},
	},
	"Damp Cellar": {
		"Green Apple Tree": {
			distance: 5,
		},
		"Catacombs 1": {
			distance: 25,
		},
	},
	"Catacombs 1": {
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 5,
		},
		"Buttercup": {
			distance: 5,
		},
		"Catacombs 2": {
			distance: 10,
		},
	},
	"Catacombs 2": {
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 5,
		},
		"Buttercup": {
			distance: 5,
		},
		"Catacombs 3": {
			distance: 10,
		},
	},
	"Catacombs 3": {
		"Stoney Air": {
			distance: 0,
		},
		"Catacombs 4": {
			distance: 10,
		},
	},
	"Catacombs 4": {
		"Stoney Air": {
			distance: 0,
		},
		"Catacombs 5": {
			distance: 10,
		},
	},
	"Catacombs 5": {
		"Stoney Air": {
			distance: 0,
		},
		"I2 WIG Flower": {
			distance: 15,
			note: "Guranteed Real",
		},
		"Alpha Cube": {
			distance: 15,
		},
		"Galaxy Flower": {
			distance: 15,
		},
	},
	"Hanging Fanatic Vine": {
		"Fanatic Air": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Violet": {
			distance: 0,
		},
		"Fanatic Lattice": {
			distance: 0,
		},
		"Taurus Portal": {
			distance: 0,
		},
	},
	"Damp Basement": {
		"Green Apple Tree": {
			distance: 0,
		},
	},
	"Montreal": {
		"Ying Forest": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"I1 Library": {
			distance: 0,
		},
		"Infinity Flower": {
			distance: 0,
		},
		"Red Apple Tree": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 5,
			note: "Inside Maze",
		},
	},
	"Vine Shaft Column": {
		"Fir Tree": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
	},
	"Mystic Vine 0": {
		"Mystic Vine 1": {
			distance: 5,
		},
		"Fir Tree": {
			distance: 0,
		},
	},
	"Mystic Vine 1": {
		"Small Cannon Gym": {
			distance: 10,
		},
		"Vine Shaft Column": {
			distance: 10,
		},
		"Mystic Vine 2": {
			distance: 25,
		},
	},
	"Mystic Vine 2": {
		"Montreal": {
			distance: 5,
		},
		"Vine Shaft Column": {
			distance: 10,
		},
		"Mystic Vine 3": {
			distance: 20,
		},
	},
	"Mystic Vine 3": {
		"Montreal": {
			distance: 5,
		},
		"Toronto": {
			distance: 20,
		},
		"Mystic Vine 4": {
			distance: 30,
		},
	},
	"Toronto Vine": {
		"Toronto": {
			distance: Infinity,
		},
	},
	"Toronto": {
		"Ying Air": {
			distance: 0,
		},
		"I2 WIG Flower": {
			distance: 0,
		},
		"Green Apple Tree": {
			distance: 0,
		},
		"Jumbo Yellow Flower": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 0,
		},
		"Small Black Flower": {
			distance: 0,
		},
		"Small Blue Flower (Primary)": {
			distance: 0,
		},
		"Toronto Maze": {
			distance: 0,
		},
	},
	"Toronto Maze": {
		"Jackfruit": {
			distance: 20,
		},
		"Blackberry": {
			distance: 20,
		},
		"Alpha Cube": {
			distance: 20,
		},
		"Small Black Flower": {
			distance: 20,
		},
		"Small White Flower": {
			distance: 20,
		},
		"Alpha Menger Sponge": {
			distance: 20,
		},
		"Raspberry": {
			distance: 20,
		},
		"Jumbo Yellow Flower": {
			distance: 20,
		},
		"Small Blue Flower (Primary)": {
			distance: 20,
		},
		"Golden Yellow Flower": {
			distance: 30,
		},
		"Rainbow Flower": {
			distance: 30,
		},
		"Toronto Maze": {
			distance: 30,
		},
	},
	"Raspberry": {
		"Small Blue Flower (Primary)": {
			distance: 20,
		},
	},
	"Jackfruit": {
		"Small White Flower": {
			distance: 10,
		},
		"Large White Flower": {
			distance: 10,
		},
		"Small Black Flower": {
			distance: 10,
		},
		"I3 WIG Flower": {
			distance: 10,
		},
		"Quicksand Grass": {
			distance: 10,
			note: "Level 11",
		},
	},
	"Large White Flower": {
		"Great White Cavern": {
			distance: 30,
		},
	},
	"Great White Cavern": {
		"Stoney Air": {
			distance: 5,
			note: "Debris",
		},
		"Ying Forest": {
			distance: 5,
			note: "Debris",
		},
		"Rail Showdown Caves": {
			distance: 10,
		},
		"Burlington": {
			distance: 30,
		},
	},
	"Burlington": {
		"Tegan's Garden": {
			distance: 0,
		},
		"Burlington Showdown Tower": {
			distance: 40,
		},
		"Club Green Apple": {
			distance: 5,
			requiresKey: "Yellow Key",
		},
	},
	"Club Green Apple": {
		"Green Apple Tree": {
			distance: 0,
		},
		"Hell": {
			distance: 15,
			note: "Under Pyramid",
		},
	},
	"Tegan's Garden": {
		"Quicksand Grass": {
			distance: 0,
			note: "Layer 11",
		},
		"Jackfruit": {
			distance: 0,
		},
		"I3 WIG Flower": {
			distance: 0,
		},
		"I2 WIG Flower": {
			distance: 0,
		},
		"Infinity Flower": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Spruce Tree": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Noob Maze Flower": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 0,
		},
		"Large White Flower": {
			distance: 0,
		},
		"Small Black Flower": {
			distance: 0,
		},
		"Small Yellow Flower": {
			distance: 0,
		},
		"Jumbo Yellow Flower": {
			distance: 0,
		},
		"Small Blue Flower (Primary)": {
			distance: 0,
		},
		"Orange Flower": {
			distance: 0,
		},
		"Red Maze Flower": {
			distance: 0,
		},
		"Carrots": {
			distance: 0,
		},
		"Turnips": {
			distance: 0,
		},
	},
	"Red Maze Flower": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Gate Back to I2": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 15,
		},
		"Jumbo Yellow Flower": {
			distance: 15,
		},
	},
	"Gate Back to I2": {
		"Red Rose": {
			distance: 10,
		},
		"I2 WIG Flower": {
			distance: 15,
		},
	},
	"Carrots": {
		"Dandelions": {
			distance: 0,
		},
		"Salmon Mushroom": {
			distance: 5,
		},
		"Blue Mushroom": {
			distance: 5,
			note: "Rare",
		},
	},
	"Turnips": {
		"Dandelions": {
			distance: 0,
		},
		"Carrots": {
			distance: 10,
		},
		"I3 WIG Flower": {
			distance: 10,
		},
		"Beets": {
			distance: 10,
		},
		"Yellow Mushroom": {
			distance: 10,
		},
		"I3 Library": {
			distance: 10,
		},
		"Root Vegetable Basement": {
			distance: 0,
		},
	},
	"Beets": {
		"Dandelions": {
			distance: 15,
		},
		"Alpha Menger Sponge": {
			distance: 20,
		},
		"Yellow Mushroom": {
			distance: 15,
		},
		"I3 WIG Flower": {
			distance: 30,
		},
		"Root Vegetable Basement": {
			distance: 30,
		},
		"Turnips": {
			distance: 30,
		},
		"Carrots": {
			distance: 30,
		},
		"Fanatic Weed": {
			distance: 30,
		},
		"Essex": {
			distance: 30,
		},
		"Rainbow Flower": {
			distance: 30,
			note: "Not Guranteed",
		},
	},
	"Essex": {
		"Colchester": {
			distance: 0,
		},
		"I3": {
			distance: 0,
		},
		"I3 WIG Flower": {
			distance: 0,
		},
		"I2 WIG Flower": {
			distance: 0,
		},
		"Orange": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Basement Library": {
			distance: 0,
		},
	},
	"Root Vegetable Basement": {
		"Green Apple Tree": {
			distance: 10,
		},
	},
	"Yellow Mushroom": {
		"Red Mushroom": {
			distance: 5,
		},
		"Carrots": {
			distance: 5,
		},
		"Quicksand Grass": {
			distance: 10,
			note: "Level 11",
		},
		"I3 WIG Flower": {
			distance: 10,
		},
		"Steel Box": {
			distance: 10,
			note: "50% Chance",
		},
	},
	"Steel Box": {
		"Small Black Flower": {
			distance: 10,
		},
	},
	"Red Mushroom": {
		"Dandelions": {
			distance: 5,
		},
		"Yellow Mushroom": {
			distance: 15,
		},
	},
	"I2 Fast Gate": {
		"I2 WIG Flower": {
			distance: 20,
		},
	},
	"Salmon Mushroom": {
		"I3 WIG Flower": {
			distance: 35,
			note: "Tall Mushrooms, On Top",
		},
		"Quicksand Grass": {
			distance: 0,
		},
		"Black Mushroom": {
			distance: 25,
			note: "Very Rare, On Side Treasures",
		},
	},
	"Black Mushroom": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Pink Tree": {
			distance: 20,
		},
	},
	"Fanatic Well": {
		"Williston Wall": {
			distance: 5,
		},
	},
	"Fanatic Vine 1": {
		"Fanatic Vine 2": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 0,
		},
		"Pirate Vine": {
			distance: 5,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
	},
	"Fanatic Vine 2": {
		"Fanatic Vine 3": {
			distance: 10,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Pirate Vine": {
			distance: 5,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
	},
	"Fanatic Vine 3": {
		"Fanatic Vine 1": {
			distance: 5,
		},
		"Fanatic Vine 4": {
			distance: 5,
		},
		"Toronto Vine": {
			distance: Infinity,
		},
		"Laser Branch Vine": {
			distance: 10,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
	},
	"Fanatic Vine 4": {
		"Laboratory Vine Bundle": {
			distance: 5,
		},
		"Fanatic Yellow Vine": {
			distance: 10,
		},
		"Fanatic Weed": {
			distance: 0,
		},
		"Fir Tree": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
	},
	"Laser Branch Vine": {
		"Fir Tree": {
			distance: 0,
		},
		"Laser Branch Vine": {
			distance: 5,
			note: "Troll Vine",
		},
	},
	"Pirate Vine": {
		"Cannon Ammo Grab": {
			distance: 10,
		},
		"Mystic Vine 0": {
			distance: 15,
		},
		"Fanatic Weed": {
			distance: 15,
		},
		"Blackberry": {
			distance: 20,
		},
		"Fir Tree": {
			distance: 20,
		},
		"Spruce Tree": {
			distance: 20,
		},
		"I3 Common Gate": {
			distance: 20,
		},
	},
	"Fanatic Yellow Vine": {
		"Ostrich Fern": {
			distance: 0,
		},
		"Fanatic Air": {
			distance: 0,
		},
		"Blue Bubble Cave": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 5,
		},
		"Scorpius Portal": {
			distance: 5,
		},
		"Hanging Fanatic Vine": {
			distance: 5,
		},
		"Weed Ring": {
			distance: 5,
		},
	},
	"Laboratory Vine": {
		"Fanatic Air": {
			distance: 0,
		},
		"Hanging Fanatic Vine": {
			distance: 0,
		},
		"Small Black Flower": {
			distance: 0,
		},
		"Minigun Forest": {
			distance: 0,
		},
	},
	"Laboratory Vine Inside": {
		"Cannon Ammo Grab": {
			distance: 5,
		},
		"Alpha Cube": {
			distance: 5,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Vine Shaft Column": {
			distance: 10,
		},
		"Scorpius Portal": {
			distance: 30,
		},
		"Danville": {
			distance: 35,
		},
		"I3 Common Gate": {
			distance: 35,
		},
	},
	"Laboratory Vine Bundle": {
		"Fanatic Air": {
			distance: 0,
		},
		"Laboratory Vine": {
			distance: 0,
		},
		"Blue Mushroom": {
			distance: 20,
		},
		"Rainbow Flower": {
			distance: 20,
		},
		"I2 Library": {
			distance: 0,
		},
	},
	"Blue Mushroom": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Fanatic Lattice": {
			distance: 5,
		},
		"Spruce Tree": {
			distance: 10,
		},
		"Raspberry": {
			distance: 20,
		},
		"Rainbow Flower": {
			distance: 30,
		},
		"Blue Mushroom Inside": {
			distance: 50,
		},
	},
	"Blue Mushroom Inside": {
		"Fanatic Air": {
			distance: 0,
		},
		"Fanatic Weed": {
			distance: 10,
		},
		"Moldy Basement": {
			distance: 15,
		},
		"Toronto": {
			distance: 15,
		},
		"Danville": {
			distance: 15,
		},
		"I3 WIG Flower": {
			distance: 15,
		},
		"Small Blue Flower (Secondary)": {
			distance: 15,
		},
	},
	"Taurus Portal": {
		"I3": {
			distance: 30,
		},
	},
	"Rainbow Flower": {
		"Quicksand Grass": {
			distance: 0,
		},
		"I3 WIG Flower": {
			distance: 0,
			note: "Guranteed Real",
		},
		"Small White Flower": {
			distance: 0,
		},
	},
	"Fanatic Grass": {
		"Large Cannon Pyramid": {
			distance: 30,
		},
	},
	"Willow Tree": {
		"Stoney Air": {
			distance: 0,
		},
		"Mystic Vine 0": {
			distance: 0,
		},
		"EMP City": {
			distance: 5,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Vine 1": {
			distance: 5,
		},
		"Danville": {
			distance: 5,
		},
		"I3 Common Gate": {
			distance: 5,
		},
		"Gnole Disco": {
			distance: 5,
		},
	},
	"Well": {
		"Red Rose": {
			distance: 5,
		},
		"Health Tower": {
			distance: 5,
		},
	},
	"Williston Purple Well": {
		"Red Rose": {
			distance: 5,
		},
		"Health Tower": {
			distance: 5,
		},
	},
	"Imp Cave": {
		"Gnole Cave": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Orange": {
			distance: 0,
		},
		"Cardboard Box": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Gnole Cave": {
		"Demon Cave": {
			distance: 3,
		},
		"Buttercup": {
			distance: 0,
		},
		"Orange": {
			distance: 0,
		},
		"Cardboard Box": {
			distance: 0,
		},
		"Infinity Flower": {
			distance: 10,
		},
	},
	"Demon Cave": {
		"Orc Cave": {
			distance: 5,
		},
		"Infinity Flower": {
			distance: 5,
		},
		"Jumbo Yellow Flower": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Cardboard Box": {
			distance: 0,
		},
	},
	"Orc Cave": {
		"Beholder Cave": {
			distance: 7,
		},
		"Infinity Flower": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Jumbo Yellow Flower": {
			distance: 0,
		},
	},
	"Beholder Cave": {
		"Ying Flower": {
			distance: 0,
		},
		"Orange": {
			distance: 0,
		},
		"Pink Tree": {
			distance: 0,
		},
		"Cardboard Box": {
			distance: 0,
		},
	},
	"Tall Rail Tower": {
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Short Rail Tower": {
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Orange": {
		"Stoney Air": {
			distance: 0,
		},
		"Orange Ground City": {
			distance: 0,
			note: "On top",
		},
		"Outer Crust A": {
			distance: 10,
		},
	},
	"Orange Ground City": {
		"Yellow Flower City": {
			distance: 0,
		},
	},
	"Outer Crust A": {
		"Ying Air": {
			distance: 20,
		},
		"Outer Crust B": {
			distance: 20,
		},
	},
	"Outer Crust B": {
		"Outer Mantle": {
			distance: 20,
		},
	},
	"Outer Mantle": {
		"Inner Crust": {
			distance: 20,
		},
		"Blue Bubble": {
			distance: 5,
		},
		"Spider Air": {
			distance: 0,
		},
		"Red-Green Elevator": {
			distance: 5,
			note: "Net Shrink 1",
		},
		"Outer Mantle Secret": {
			distance: 30,
			note: "Yellow Cube",
		},
	},
	"Red-Green Elevator": {
		"Stoney Air": {
			distance: 0,
		},
	},
	"Inner Crust": {
		"Inner Mantle": {
			distance: 15,
		},
	},
	"Inner Mantle": {
		"Huntington": {
			distance: 15,
		},
		"Red-Green Elevator": {
			distance: 5,
			note: "Net strink 1",
		},
	},
	"Huntington": {
		"Health Tower": {
			distance: 0,
		},
		"Large Cannon Pyramid": {
			distance: 0,
		},
		"Infinity Flower": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Tau Cave Flower": {
			distance: 0,
		},
		"Camel's Hump": {
			distance: 0,
		},
		"Tommy Gun Weapon Mod": {
			distance: 0,
		},
	},
	"Stoney Air": {
		"Stoney Air Cave": {
			distance: 0,
			note: "Net shrink 0/1",
		},
		"Yellow Cube": {
			distance: 10,
			note: "Need to be small enough",
		},
		"Green Shrink Box": {
			distance: 0,
			note: "Net shrink 1(?)",
		},
	},
	"Stoney Air Cave": {
		"Stoney Air Cave": {
			distance: 10,
			note: "Deeper = more rewards",
		},
	},
	"Green Shrink Box": {
		"Small Yellow Flower": {
			distance: 20,
		},
	},
	"Yellow Cube": {
		"Mossy Air": {
			distance: 0,
		},
		"Stoney Sanctuary": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Orange Flower": {
			distance: 0,
		},
		"Small Cannon Pyramid": {
			distance: 0,
		},
		"Yellow Cube Secret": {
			distance: 5,
			note: "Under Ying Forest",
		},
	},
	"Stoney Sanctuary": {
		"Blackberry": {
			distance: Infinity,
		},
	},
	"Yellow Cube Secret": {
		"Orange Flower": {
			distance: 0,
			note: "x8",
		},
		"Noob Maze Flower": {
			distance: 0,
			note: "x86",
		},
		"Galaxy Flower": {
			distance: 0,
			note: "x4",
		},
	},
	"Galaxy Flower": {
		"Galaxy": {
			distance: 10,
		},
	},
	"Solar System": {
		"Solar System Debris": {
			distance: 10,
		},
		"Tau Cave Moon": {
			distance: 25,
		},
		"Small Minigun Planet": {
			distance: 10,
		},
		"Moon Debris": {
			distance: 10,
		},
		"Alpha Moon": {
			distance: 10,
		},
		"Ice Moon": {
			distance: 10,
		},
		"Gamma Moon": {
			distance: 10,
		},
		"Clay Planet": {
			distance: 10,
		},
		"Beta Moon": {
			distance: 10,
		},
		"Sun": {
			distance: 15,
		},
	},
	"Solar System Debris": {
		"Jericho": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Jericho": {
		"Small Cannon Pyramid": {
			distance: 0,
		},
		"Small Yellow Flower": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Mossy Air": {
		"Mossy Island": {
			distance: 0,
		},
		"Mossy Air Cube": {
			distance: 5,
		},
		"Yellow Rocket Treasure": {
			distance: 40,
		},
	},
	"Mossy Air Cube": {
		"Ying Forest": {
			distance: 0,
		},
		"Buttercup": {
			distance: 0,
		},
		"Orange": {
			distance: 0,
		},
		"Ying Flower": {
			distance: 0,
		},
		"Tweedle-Dum Air": {
			distance: 0,
		},
		"Tau Cave Flower": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 0,
		},
		"Small Black Flower": {
			distance: 0,
		},
		"Mossy Basement": {
			distance: 20,
		},
	},
	"Mossy Basement": {
		"Yellow Apple Tree": {
			distance: 5,
		},
		"Green Apple Tree": {
			distance: 5,
		},
		"Health Tower": {
			distance: 15,
		},
	},
	"Mossy Island": {
		"Tall Rail Tower": {
			distance: 5,
		},
		"Buttercup": {
			distance: 5,
		},
		"Mossy Cellar": {
			distance: 5,
		},
	},
	"Mossy Cellar": {
		"Yellow Apple Tree": {
			distance: 10,
		},
		"Green Apple Tree": {
			distance: 10,
		},
		"Richmond": {
			distance: 20,
		},
		"Ying Forest": {
			distance: 20,
		},
	},
	"Richmond": {
		"Red Apple Tree": {
			distance: 0,
		},
		"Bedroom": {
			distance: 0,
		},
		"Richmond Sewers": {
			distance: 0,
		},
		"Richmond Building": {
			distance: 10,
		},
		"Richmond Secret": {
			distance: 10,
		},
		"Ying Flower": {
			distance: 0,
		},
	},
	"Richmond Secret": {
		"Ying Forest": {
			distance: 5,
		},
		"Stoney Air": {
			distance: 0,
		},
	},
	"Richmond Building": {
		"Ying Forest": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Yellow Flower Wall": {
			distance: 0,
		},
		"Red Cave": {
			distance: 5,
			note: "1 per Richmond",
		},
	},
	"Yellow Flower Wall": {
		"Ying Forest": {
			distance: 0,
		},
	},
	"Red Cave": {
		"Jumbo Yellow Flower": {
			distance: 15,
		},
		"Red Rose": {
			distance: 15,
		},
		"Stone Corral": {
			distance: 25,
		},
	},
	"Red Rose": {
		"Red Apple Tree": {
			distance: 0,
		},
	},
	"Richmond Sewers": {
		"Ying Forest": {
			distance: 0,
		},
		"Tau Cave Flower": {
			distance: 5,
		},
		"Pink Tree": {
			distance: 5,
		},
		"Mossy Cellar": {
			distance: 5,
		},
	},
	"Richmond Library": {
		"Ying Flower": {
			distance: 5,
		},
		"Stoney Air": {
			distance: 5,
		},
	},
	"Orange Flower": {
		"Orange": {
			distance: 20,
		},
		"Fir Tree": {
			distance: 15,
			note: "Shrink in pillars",
		},
		"Ying Air": {
			distance: 20,
		},
		"Ying Flower": {
			distance: 20,
		},
	},
	"Tau Cave Flower": {
		"Tau Cave Moon": {
			distance: 20,
		},
		"Ying Forest": {
			distance: 5,
		},
		"Ying Air": {
			distance: 0,
		},
		"Jumbo Yellow Flower": {
			distance: 10,
		},
	},
	"Tau Cave Moon": {
		"Type 1 Tau Cave": {
			distance: 0,
			note: "Random",
		},
		"Type 2 Tau Cave": {
			distance: 0,
			note: "Random",
		},
		"Type 3 Tau Cave": {
			distance: 0,
			note: "Random",
		},
		"Ying Forest": {
			distance: 0,
		},
		"Imp Disco": {
			distance: 0,
		},
	},
	"Type 2 Tau Cave": {
		"Type 3 Tau Cave": {
			distance: 5,
		},
		"Oak Tree": {
			distance: 0,
			note: "Net 1 grow",
		},
		"Tweedle-Dum Air": {
			distance: 5,
		},
		"Tweedle-Dee Air": {
			distance: 5,
		},
		"Buttercup": {
			distance: 0,
		},
	},
	"Type 3 Tau Cave": {
		"Type 1 Tau Cave": {
			distance: 5,
		},
		"Oak Tree": {
			distance: 0,
			note: "Net 1 grow",
		},
		"Paper Box": {
			distance: 0,
		},
		"Cardboard Box": {
			distance: 0,
		},
		"Basic Laser Maze": {
			distance: 5,
		},
	},
	"Type 1 Tau Cave": {
		"Type 2 Tau Cave": {
			distance: 5,
		},
		"Ying Flower": {
			distance: 15,
		},
		"Ying Forest": {
			distance: 10,
		},
		"Health Tower": {
			distance: 15,
		},
		"Hard Pink Tree": {
			distance: 40,
		},
		"Alpha Cube": {
			distance: 20,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Richmond": {
			distance: 15,
		},
	},
	"Tweedle-Dum Base": {
		"Ying Forest": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
	},
	"Tweedle-Dum Air": {
		"Tweedle-Dee Air": {
			distance: 0,
		},
	},
	"Tweedle-Dee Air": {
		"Tweedle-Dum Air": {
			distance: 0,
		},
		"Tweedle-Dee Cave": {
			distance: 0,
		},
		"Noob Maze Bundle": {
			distance: 0,
		},
		"Small Laser Fort": {
			distance: 0,
		},
		"Tweedle Haunted House 1": {
			distance: 0,
		},
	},
	"Small Laser Fort": {
		"Cardboard Box": {
			distance: 5,
			note: "Outer corners",
		},
		"Ying Forest": {
			distance: 5,
			note: "Outer Corners",
		},
		"Small Laser Fort Secret": {
			distance: 15,
			note: "Shrink into blue air cubes",
		},
	},
	"Small Laser Fort Secret": {
		"Small Black Flower": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Cardboard Box": {
		"Paper Box": {
			distance: 10,
		},
		"Small Black Flower": {
			distance: 10,
			note: "In Sub-air",
		},
	},
	"Paper Box": {
		"Health Tower": {
			distance: 10,
		},
	},
	"Health Tower": {
		"Cardboard Box": {
			distance: 25,
		},
		"Quicksand Grass": {
			distance: 0,
		},
	},
	"Tweedle Haunted House 1": {
		"Tweedle Haunted House 2": {
			distance: 15,
		},
		"Tweedle Haunted House 3": {
			distance: 15,
			note: "50% chance",
		},
	},
	"Tweedle Haunted House 2": {
		"Flare Weapon Mod": {
			distance: 10,
		},
	},
	"Flare Weapon Mod": {
		"Weapon Library": {
			distance: 0,
		},
	},
	"Tommy Gun Weapon Mod": {
		"Weapon Library": {
			distance: 0,
		},
	},
	"Tweedle-Dee Cave": {
		"Ice Cube": {
			distance: 5,
		},
		"Ying Air": {
			distance: 0,
		},
		"Pink Tree": {
			distance: 0,
		},
		"Quicksand Grass": {
			distance: 0,
			note: "Layer 11",
		},
	},
	"Pink Tree": {
		"Quicksand Grass": {
			distance: 0,
		},
	},
	"Ice Cube": {
		"Blue Bubble": {
			distance: 15,
		},
		"Ying Air": {
			distance: 15,
		},
	},
	"Grey Lattice": {
		"Slow Exit Maze": {
			distance: 0,
		},
	},
	"Slow Exit Maze": {
		"Easy Minigun Tower": {
			distance: 0,
		},
	},

	"Pure Menger Sponge": {
		"Pure Menger Sponge Treasure": {
			distance: 10,
			note: "Very Deep",
		},
	},
	"Outer Space -1": {
		"Outer Space 0": {
			distance: 0,
		},
	},
	"Outer Space 0": {
		"Outer Space 1": {
			distance: 20,
		},
		"Mylantis": {
			distance: 40,
		},
		"Large Gold Asteroid": {
			distance: 5,
		},
		"Outer Space 0 Lockbox": {
			distance: 10,
			requiresKey: "Yellow Key",
		},
	},
	"Mylantis": {
		"Mylantis City": {
			distance: 0,
		},
		"Mylantis Caves": {
			distance: 0,
		},
		"Laser Genesis Planet": {
			distance: 5,
		},
		"RejuvenX Refinery": {
			distance: 0,
			note: "3 on Surface",
		},
	},
	"Laser Genesis Planet": {
		"Laser Genesis": {
			distance: Infinity,
			requiresKey: "Laser Genesis Key",
		},
	},
	"Mylantis Caves": {
		"RejuvenX Refinery": {
			distance: Infinity,
		},
	},
	"Mylantis City": {
		"Mylantis Top Garden": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Galaxy Flower": {
			distance: 10,
		},
		"The Bulk 1": {
			distance: 10,
		},
		"House of 5 Lampreys": {
			distance: 20,
			note: "Random Building, Coordinates In Buildings",
		},
	},
	"Mylantis Top Garden": {
		"Ying Forest": {
			distance: 0,
		},
		"Orange": {
			distance: 0,
		},
		"Jumbo Yellow Flower": {
			distance: 0,
		},
		"Ying Flower": {
			distance: 0,
		},
		"Small White Flower": {
			distance: 0,
		},
		"Main Branch Library": {
			distance: 5,
		},
		"Mylantis City Underground": {
			distance: 0,
			requiresKey: "Universe Key",
		},
	},
	"Main Branch Library": {
		"Orange": {
			distance: 0,
		},
	},
	"Mylantis City Underground": {
		"Beta Menger Sponge": {
			distance: 0,
		},
		"The Bulk 1": {
			distance: 0,
		},
	},
	"Beta Menger Sponge": {
		"Hinesburg": {
			distance: 10,
		},
		"Beta Sponge Town": {
			distance: 50,
			note: "Depth >100",
		},
	},
	"Beta Sponge Town": {
		"Tau Cave Moon": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Jackfruit": {
			distance: 0,
		},
	},
	"Outer Space 1": {
		"Outer Space 2": {
			distance: 20,
		},
		"Outer Space 1 Bunker": {
			distance: 5,
		},
		"Medium Gold Asteroid": {
			distance: 5,
		},
	},
	"Medium Gold Asteroid": {
		"The Bulk 1": {
			distance: 10,
		},
		"Ying Air": {
			distance: 10,
		},
	},
	"The Bulk 1": {
		"Ice Castle": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Bulk Castle": {
			distance: 5,
		},
	},
	"Bulk Castle": {
		"Quicksand Grass": {
			distance: 0,
		},
		"Orange Flower": {
			distance: 0,
		},
		"Blackberry": {
			distance: 0,
		},
		"Fake Blackberry": {
			distance: 0,
		},
		"I1": {
			distance: 10,
		},
	},
	"Ice Castle": {
		"Ice Moon": {
			distance: 40,
		},
		"Quicksand Grass": {
			distance: 20,
		},
		"Blackberry": {
			distance: 20,
		},
	},
	"Outer Space 2": {
		"Galaxy": {
			distance: 20,
		},
		"Alpha Menger Sponge": {
			distance: 5,
		},
		"Outer Space 2 Debris": {
			distance: 5,
		},
	},
	"Alpha Menger Sponge": {
		"Hinesburg": {
			distance: 5,
		},
	},
	"Outer Space 2 Debris": {
		"Hinesburg": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
	},
	"Hinesburg": {
		"Ying Forest": {
			distance: 0,
		},
		"Tau Cave Moon": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Orange": {
			distance: 0,
		},
		"Red Apple Tree": {
			distance: 0,
		},
		"Yellow Apple Tree": {
			distance: 0,
		},
		"Green Apple Tree": {
			distance: 0,
		},
	},
	"Galaxy": {
		"Solar System": {
			distance: 20,
		},
	},
	"Sun": {
		"Red-Green Elevator": {
			distance: 0,
			note: "Net Shrink 1",
		},
		"Solar System Elevator": {
			distance: 0,
			note: "Way out of Solar System",
		},
		"Infinity Flower": {
			distance: 40,
		},
	},
	"Clay Planet": {
		"Blue Bubble Gauntlet": {
			distance: 5,
		},
	},
	"Ice Moon": {
		"Ice Cube": {
			distance: 10,
		},
		"Orange": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 5,
		},
		"Jumbo Yellow Flower": {
			distance: 5,
		},
		"Ying Air": {
			distance: 0,
		},
	},
	"Gamma Moon": {
		"Orange": {
			distance: 0,
		},
	},
	"Small Minigun Planet": {
		"Ying Forest": {
			distance: 0,
		},
		"Ying Air": {
			distance: 15,
		},
		"Buttercup": {
			distance: 0,
		},
		"Orange Flower": {
			distance: 0,
			note: "Orange Pyramid",
		},
		"Jumbo Yellow Flower": {
			distance: 0,
		},
	},
	"Moon Debris": {
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Planet Debris": {
		"Richmond": {
			distance: 0,
		},
		"Stoney Air": {
			distance: 0,
		},
		"Ying Forest": {
			distance: 0,
		},
	},
	"Small Yellow Flower": {
		"Small Cannon Pyramid": {
			distance: 10,
			note: "x3",
		},
		"Ying Forest": {
			distance: 0,
		},
		"Ying Air": {
			distance: 0,
		},
		"Yellow Flower City": {
			distance: 10,
		},
		"Small Yellow Flower Secret": {
			distance: 40,
		},
	},
	"Yellow Flower City": {
		"Small Cannon Pyramid": {
			distance: 10,
			note: "Orange X towers guranteed jumbo yellow flower",
		},
		"Quicksand Grass": {
			distance: 5,
		},
		"Yellow Flower City Secret": {
			distance: 20,
			note: "Shrink until level 8",
		},
		"Pure Menger Sponge": {
			distance: 20,
			note: "Shrink until level 8",
		},
	},
	"Small Cannon Pyramid": {
		"Jumbo Yellow Flower": {
			distance: 10,
			note: "Small chance",
		},
	},
	"Jumbo Yellow Flower": {
		"Small Yellow Flower": {
			distance: 20,
			note: "x5",
		},
		"Large Cannon Pyramid": {
			distance: 20,
			note: "Waypoint Room",
		},
		"Ying Cave Island": {
			distance: 20,
		},
	},
	"Large Cannon Pyramid": {
		"Small White Flower": {
			distance: 20,
		},
		"Upgrade Station": {
			distance: 20,
		},
	},
	"Quicksand Grass": {
		"Purple House": {
			distance: 10,
			note: "Level 10",
		},
		"Quicksand Grass Basement": {
			distance: 10,
			note: "Level 11+",
		},
	},
	"Quicksand Grass Basement": {
		"Green Apple Tree": {
			distance: 30,
		},
	},
	"Purple House": {
		"Jumbo Yellow Flower": {
			distance: 5,
		},
	},
	"Small White Flower": {
		"Alpha Cube": {
			distance: 10,
			note: "Front-Right corner",
		},
		"Fir Tree": {
			distance: 10,
		},
		"Quicksand Grass": {
			distance: 0,
		},
	},
	"Alpha Cube": {
		"Small Black Flower": {
			distance: 30,
		},
		"Health Tower": {
			distance: 15,
			note: "Down-Left-Back Corner",
		},
	},
	"Fir Tree": {
		"Small White Flower": {
			distance: 10,
		},
		"Small Black Flower": {
			distance: 10,
		},
	},
};

for (const a in inputEdges) {
	for (const b in inputEdges[a as nodeNames]) {
		if (inputEdges[a as nodeNames]![b as nodeNames]!.distance == Infinity) inputEdges[a as nodeNames]![b as nodeNames]!.distance = 100;
	}
}

export { inputEdges };
