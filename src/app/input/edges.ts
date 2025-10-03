import { InputEdge } from "../types";
import { nodeName } from "./nodes";

const inputEdges: InputEdge = {
	"Tutorial 1": {
		"Happy Land": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 5,
			note: "Shrink into black cubes",
		},
	},
	"Tutorial 2": {
		"Tutorial Secret": {
			distance: 5,
			requiresKey: "Yellow Key",
		},
		"Tutorial 1": {
			distance: 1,
		},
		"EMERGENCY": {
			distance: 1,
		},
		"Safety Doppelganger": {
			distance: 1,
			note: "Non-Original Tutorial",
		},
	},
	"EMERGENCY": {
		"Stable Singletons": {
			distance: 1,
		},
		"EMERGENCY Secret": {
			distance: 20,
			requiresKey: "Yellow Key",
		},
	},
	"EMERGENCY Secret": {
		"Tau Cave Moon": {
			distance: 1,
		},
		"Fire Rate Moon": {
			distance: 1,
			requiresKey: "Universe Key",
		},
	},
	"Fire Rate Moon": {
		"Moon Debris": {
			distance: 1,
		},
	},
	"Safety Doppelganger": {
		"Infinity Flower": {
			distance: 30,
			requiresKey: "Yellow Key",
		},
		"Quicksand Grass Level 11": {
			distance: 5,
		},
	},
	"Tutorial Chambers": {
		"Tutorial 2": {
			distance: 1,
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
			distance: 1,
		},
		"Noob Maze": {
			distance: 1,
		},
	},
	"Stable Singletons": {
		"Infinity Flower": {
			distance: 1,
			requiresKey: "I1 Stable Singletons Key",
		},
		"Fanatic Lattice": {
			distance: 1,
			requiresKey: "I2 Stable Singletons Key",
		},
		"I3": {
			distance: 1,
			requiresKey: "I3 Stable Singletons Key",
		},
		"Burlington": {
			distance: 1,
			requiresKey: "Burlington Stable Singletons Key",
		},
		"Hell": {
			distance: 1,
			requiresKey: "Hell Stable Singletons Key",
		},
		"Ying Forest": {
			distance: 5,
		},
	},
	"Ying Forest": {
		"Ying Air": {
			distance: 1,
		},
		"Ying Tree": {
			distance: 5,
		},
		"Noob Maze Flower": {
			distance: 1,
		},
		"Small Yellow Flower": {
			distance: 5,
		},
		"Small Black Flower": {
			distance: 1,
		},
		"Quicksand Grass": {
			distance: 1,
			note: "Save Points",
		},
		"Menace Hive": {
			distance: 20,
			note: "Depth 12+, hanging from branches",
		},
		"Unremembered Tower": {
			distance: 25,
			note: "Depth 30+",
		},
		"Ying Forest Depth 50+": {
			distance: 30,
		},
		"Orange": {
			distance: 20,
			note: "Secret Combination",
		},
	},
	"Ying Tree": {
		"Ying Forest": {
			distance: 3,
		},
		"Quicksand Grass": {
			distance: 2,
		},
		"Blackberry": {
			distance: 20,
		},
		"Deep Menger Sponge": {
			distance: 20,
		},
	},
	"Ying Forest Depth 50+": {
		"Small Yellow Flower": {
			distance: 1,
		},
		"Tau Cave Flower": {
			distance: 5,
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
			distance: 60,
			note: "Tweedle-dum Air Anti-Plug Hole",
			requiresKey: "Yellow Key",
		},
		"Unremembered Tower Secret Room": {
			distance: 30,
			impassable: true,
			note: "Pink Ring",
		},
	},
	"Unremembered Tower Secret Totem": {
		"I2 WIG Flower": {
			distance: 1,
		},
		"Rainbow Flower": {
			distance: 1,
			requiresKey: "Yellow Key",
		},
	},
	"Unremembered Tower Secret Room": {
		"Purple Gato Box": {
			distance: 1,
		},
		"Unremembered Tower Secret Shrine": {
			distance: 50,
			requiresKey: "Universe Key",
		},
	},
	"Small Black Flower": {
		"Red Apple Tree": {
			distance: 10,
			note: "x4",
		},
		"Quicksand Grass Level 11": {
			distance: 1,
		},
	},
	"Red Apple Tree": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Apple Tree Ammo": {
			distance: 5,
		},
		"Apple Tree Bottom Treasure": {
			distance: 20,
		},
		"Apple Tree Top Treasure": {
			distance: 20,
		},
		"Red Apple": {
			distance: 10,
		},
	},
	"Yellow Apple Tree": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Apple Tree Bottom Treasure": {
			distance: 20,
		},
		"Apple Tree Top Treasure": {
			distance: 20,
		},
		"Red Apple": {
			distance: 10,
		},
		"Yellow Apple": {
			distance: 10,
		},
	},
	"Green Apple Tree": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Apple Tree Bottom Treasure": {
			distance: 20,
		},
		"Apple Tree Top Treasure": {
			distance: 20,
		},
		"Red Apple": {
			distance: 10,
		},
		"Yellow Apple": {
			distance: 10,
		},
		"Green Apple": {
			distance: 15,
		},
	},
	"Ying Island": {
		"Ying Forest": {
			distance: 1,
		},
		"Pure Menger Sponge": {
			distance: 5,
		},
		"Small Cannon Pyramid": {
			distance: 5,
		},
	},
	"Ying Deep Air": {
		"Ying Air Core": {
			distance: 5,
		},
	},
	"Tutorial Island": {
		"Small White Flower": {
			distance: 1,
			note: "Under Island",
		},
		"Tutorial Chambers": {
			distance: 30,
			impassable: true,
		},
		"Ying Forest": {
			distance: 1,
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
			distance: 1,
		},
		"Imp Dungeon": {
			distance: 5,
			note: "Smaller cube above Ying Air Cube",
		},
	},
	"Imp Dungeon": {
		"Ying Forest": {
			distance: 5,
		},
	},
	"Ying Flower": {
		"Ying Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
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
			distance: 1,
		},
		"Small Cannon Pyramid": {
			distance: 1,
		},
		"Small Black Flower": {
			distance: 1,
		},
	},
	"Ying World": {
		"Ying Island": {
			distance: 1,
		},
		"Ying Cave Island": {
			distance: 1,
		},
		"Tutorial Island": {
			distance: 10,
		},
		"Grey Lattice": {
			distance: 1,
		},
		"Gated Community": {
			distance: 5,
			requiresKey: "Yellow Key",
		},
		"Noob Maze Bundle": {
			distance: 5,
		},
	},
	"Gated Community": {
		"Ying World Library": {
			distance: 1,
		},
		"Noob Maze Bundle": {
			distance: 1,
		},
		"Noob Maze Flower": {
			distance: 1,
		},
		"Small Cannon Pyramid": {
			distance: 1,
			note: "x3",
		},
	},
	"Ying Cave Island": {
		"Ying Cave Island Layer 1": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 1,
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
			distance: 1,
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
			distance: 1,
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
			distance: 1,
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
			distance: 1,
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
			distance: 1,
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
			distance: 1,
		},
		"Tall Rail Tower": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Botany Lab Red Cube": {
			distance: 30,
		},
		"Botany Lab Black Cube": {
			distance: 5,
		},
		"Red-Green Elevator": {
			distance: 1,
		},
		"Small Cannon Pyramid": {
			distance: 1,
		},
		"Health Tower": {
			distance: 1,
		},
		"Orange Flower": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
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
			distance: 1,
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
			distance: 1,
		},
	},
	"Lighthouse": {
		"Ying Forest": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Lighthouse Basement": {
			distance: 20,
		},
	},
	"Lighthouse Basement": {
		"Small Minigun Planet": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
		"Golden Yellow Flower": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Golden Yellow Flower": {
		"Ying Air": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Golden Yellow Flower": {
			distance: 1,
		},
		"Health Tower": {
			distance: 1,
		},
		"Weapon Library": {
			distance: 20,
		},
	},
	"I1 Library": {
		"Infinity Flower Vault": {
			distance: 1,
		},
		"Pink Tree": {
			distance: 1,
		},
	},
	"Infinity Flower Vault": {
		"Infinity Flower": {
			distance: 30,
		},
		"Jumbo Yellow Flower": {
			distance: 30,
			note: "Corner of floor",
		},
	},
	"Infinity Flower": {
		"I1": {
			distance: 20,
		},
		"Ying Air": {
			distance: 1,
		},
		"Ying Flower": {
			distance: 1,
		},
		"Small Yellow Flower": {
			distance: 1,
		},
		"Infinity Flower Secret": {
			distance: 10,
		},
	},
	"I1": {
		"Williston Minigun Spiral": {
			distance: 1,
		},
		"Williston Health Spiral": {
			distance: 1,
		},
		"Williston Field": {
			distance: 1,
			note: "Red Pillar",
		},
	},
	"Williston Minigun Spiral": {
		"Williston Field": {
			distance: 15,
		},
		"Stoney Air": {
			distance: 1,
		},
	},
	"Williston Health Spiral": {
		"Williston Field": {
			distance: 15,
		},
		"Stoney Air": {
			distance: 1,
		},
	},
	"Bristol": {
		"I2 Spiral": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 1,
		},
		"I1": {
			distance: 1,
		},
		"Bedroom": {
			distance: 1,
		},
	},
	"I2 Spiral": {
		"Stoney Air": {
			distance: 1,
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
		"Williston Ammo": {
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
		"I3 Air": {
			distance: 1,
		},
		"I3 Clouds": {
			distance: 15,
		},
		"Dandelions": {
			distance: 5,
		},
		"Hell": {
			distance: 15,
		},
		"Sagittarius Portal": {
			distance: 15,
		},
		"Mahogany Tree": {
			distance: 5,
		},
		"Desert": {
			distance: 15,
		},
		"Ascend Temple": {
			distance: 40,
		},
		"River": {
			distance: 10,
		},
		"Forest Museum": {
			distance: 40,
			arcade: true,
			whiteBoxDevice: true,
		},
	},
	"I3 Clouds": {
		"White Rose": {
			distance: 15,
		},
	},
	"White Rose": {
		"Red Apple Tree": {
			distance: 5,
		},
	},
	"I3 Air": {
		"Dandelions": {
			distance: 5,
		},
	},
	"River": {
		"Tangerine": {
			distance: 10,
		},
		"River Pyramid": {
			distance: 5,
		},
		"River Reed": {
			distance: 1,
		},
	},
	"River Pyramid": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Yellow Mushroom": {
			distance: 1,
		},
		"Colchester": {
			distance: 1,
		},
		"I3 Library": {
			distance: 1,
		},
		"Deep Sliver Maze": {
			distance: Infinity,
			note: "Rainbow Flower - Sagittarius Portal - Rainbow Flower - Sagittarius Portal",
		},
	},
	"Deep Sliver Maze": {
		"I3 Air": {
			distance: 5,
		},
		"Yellow Mushroom": {
			distance: 30,
		},
		"I3 WIG Flower": {
			distance: 30,
		},
	},
	"River Reed": {
		"Yellow Mushroom": {
			distance: 5,
		},
		"Wood Box": {
			distance: 5,
		},
		"I2 Fast Gate": {
			distance: 5,
		},
		"I2 Standard Gate": {
			distance: 5,
		},
		"Fir Tree": {
			distance: 5,
		},
		"Earthy Basement": {
			distance: 10,
		},
	},
	"Wood Box": {
		"Cardboard Box": {
			distance: 10,
		},
		"Small Black Flower": {
			distance: 10,
		},
	},
	"Tangerine": {
		"Blackberry": {
			distance: 10,
		},
		"I2 WIG Flower": {
			distance: 15,
		},
		"Huntington": {
			distance: 40,
		},
	},
	"Desert": {
		"Desert Cactus": {
			distance: 10,
		},
		"Desert Flower": {
			distance: 10,
		},
		"Desert Caves": {
			distance: 15,
		},
		"Desert Oasis": {
			distance: 15,
		},
		"Aladdin's Cave": {
			distance: 30,
			arcade: true,
			whiteBoxDevice: true,
		},
	},
	"Desert Oasis": {
		"River": {
			distance: 1,
		},
		"Carrots": {
			distance: 1,
		},
		"I3 Library": {
			distance: 1,
		},
	},
	"Ascend Temple": {
		"Jumbo Yellow Flower": {
			distance: 30,
		},
		"Ying Forest": {
			distance: 30,
		},
	},
	"Desert Caves": {
		"I3 WIG Flower": {
			distance: 20,
			note: "Keith's Coffee Bar",
		},
		"Rainbow Flower": {
			distance: 20,
			note: "La Belle's Bar",
		},
	},
	"Mahogany Tree": {
		"Dandelions": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Duplication Tube": {
			distance: 5,
		},
		"Large White Flower": {
			distance: 5,
		},
		"Hard Orange Flower": {
			distance: 5,
		},
		"Red Maze Flower": {
			distance: 5,
		},
		"Jackfruit": {
			distance: 5,
		},
		"Colchester": {
			distance: 5,
		},
		"I2 Standard Gate": {
			distance: 5,
		},
		"I3 WIG Flower": {
			distance: 5,
		},
		"I3": {
			distance: 5,
		},
		"I3 Library": {
			distance: 5,
		},
		"Mahogany Tree Trunk": {
			distance: 1,
		},
		"Mahogany Treetop": {
			distance: 5,
		},
	},
	"Mahogany Treetop": {
		"I3 Air": {
			distance: 1,
		},
		"Red Mushroom": {
			distance: 10,
		},
		"Yellow Mushroom": {
			distance: 10,
		},
		"Dandelions": {
			distance: 5,
		},
		"Wood Box": {
			distance: 10,
		},
		"Mahogany Treetop Center": {
			distance: 40,
		},
	},
	"Mahogany Treetop Center": {
		"Fanatic Grass": {
			distance: 1,
		},
		"Mahogany Treetop Inner Tree": {
			distance: 1,
		},
		"Mahogany Treetop Center Treasure": {
			distance: 40,
			impassable: true,
		},
	},
	"Mahogany Treetop Inner Tree": {
		"I3 Air": {
			distance: 1,
		},
		"Small Black Flower": {
			distance: 15,
		},
		"Small White Flower": {
			distance: 15,
		},
		"Wood Box": {
			distance: 5,
		},
		"I3 WIG Flower": {
			distance: 15,
		},
		"Yellow Mushroom": {
			distance: 15,
		},
		"Red Mushroom": {
			distance: 15,
		},
		"I2 Fast Gate": {
			distance: 15,
		},
		"I2 Standard Gate": {
			distance: 15,
		},
		"Carrots": {
			distance: 20,
		},
		"Hard Orange Flower": {
			distance: 20,
		},
		"Rainbow Flower": {
			distance: 20,
		},
		"Large White Flower": {
			distance: 20,
		},
		"Essex": {
			distance: 20,
		},
		"Colchester": {
			distance: 20,
		},
		"Emerald": {
			distance: 60,
		},
		"Topaz": {
			distance: 60,
		},
		"Starksboro": {
			distance: 80,
		},
		"Iolite": {
			distance: 60,
		},
		"Amethyst": {
			distance: 90,
		},
		"Mahogany Ammo": {
			distance: 15,
		},
		"Mahogany Treetop Inner Tree End Treasure": {
			distance: 60,
		},
		"Mahogany Treetop Inner Tree Weapon Mod Treasure": {
			distance: 60,
		},
	},
	"Mahogany Treetop Inner Tree Weapon Mod Treasure": {
		"Weapon Library": {
			distance: 1,
		},
	},
	"Starksboro": {
		"I1 Library": {
			distance: 1,
		},
		"I2 Library": {
			distance: 1,
		},
		"I3 Library": {
			distance: 1,
		},
		"Library Library": {
			distance: 1,
		},
		"Mahogany Basement": {
			distance: 1,
		},
		"Mahogany Cellar": {
			distance: 1,
		},
		"Small Yellow Flower": {
			distance: 1,
		},
		"Essex": {
			distance: 1,
		},
		"Rainbow Flower": {
			distance: 1,
		},
	},
	"Amethyst": {
		"Amethyst Island": {
			distance: 10,
		},
		"Amethyst Treasure": {
			distance: 30,
		},
	},
	"Amethyst Island": {
		"Jumbo Yellow Flower": {
			distance: 10,
		},
		"Small White Flower": {
			distance: 10,
		},
		"Orange": {
			distance: 10,
		},
	},
	"Emerald": {
		"Emerald Treasure": {
			distance: 30,
		},
	},
	"Emerald Treasure": {
		"Emerald Sponge": {
			distance: 1,
			requiresKey: "Yellow Key",
		},
	},
	"Emerald Sponge": {
		"Emerald City": {
			distance: 20,
			requiresKey: "Green Key",
		},
	},
	"Emerald City": {
		"Ying Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Denver Pyramid": {
			distance: 1,
		},
		"Green Apple Tree": {
			distance: 1,
		},
	},
	"Denver Pyramid": {
		"Ying Forest": {
			distance: 5,
		},
		"Ying Air": {
			distance: 5,
		},
		"Buttercup": {
			distance: 5,
		},
	},
	"Mahogany Tree Trunk": {
		"Fir Tree": {
			distance: 1,
		},
		"Colchester": {
			distance: 5,
		},
		"I3 WIG Flower": {
			distance: 5,
		},
		"Dandelions": {
			distance: 5,
			note: "On Vines",
		},
		"Alpha Cube": {
			distance: 5,
		},
		"Mahogany Basement": {
			distance: 5,
		},
		"Large Cannon Pyramid": {
			distance: 5,
		},
		"Mahogany Tree Central Shaft": {
			distance: 25,
		},
	},
	"Mahogany Tree Central Shaft": {
		"Carrots": {
			distance: 1,
		},
		"I3 WIG Flower": {
			distance: 5,
		},
		"I2 Fast Gate": {
			distance: 5,
		},
		"I2 Standard Gate": {
			distance: 5,
		},
		"Colchester": {
			distance: 5,
		},
		"Hard Orange Flower": {
			distance: 5,
		},
		"Turnips": {
			distance: 10,
		},
		"I3 Library": {
			distance: 10,
		},
		"Essex": {
			distance: 15,
		},
		"Mahogany Cellar": {
			distance: 15,
		},
		"Mahogany Core": {
			distance: 40,
		},
	},
	"Mahogany Core": {
		"Montreal": {
			distance: 15,
		},
	},
	"Mahogany Cellar": {
		"Alpha Cube": {
			distance: 15,
			note: "50% Chance",
		},
		"Green Apple Tree": {
			distance: 5,
		},
		"I2 WIG Flower": {
			distance: 15,
		},
	},
	"Mahogany Basement": {
		"Green Apple Tree": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 15,
		},
	},
	"I3 Library": {
		"I3 WIG Flower": {
			distance: 1,
		},
		"I2 Library": {
			distance: 1,
		},
		"Hell": {
			distance: 20,
			impassable: true,
		},
	},
	"Dandelions": {
		"Salmon Mushroom": {
			distance: 5,
		},
		"Yellow Mushroom": {
			distance: 5,
		},
		"Pumpkin": {
			distance: 5,
		},
	},
	"Colchester": {
		"I3 WIG Flower": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Large White Flower": {
			distance: 1,
		},
		"I3": {
			distance: 1,
		},
		"Colchester Secret": {
			distance: 20,
			impassable: true,
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
			distance: 10,
		},
		"Fanatic Weed": {
			distance: 10,
		},
		"Minigun Forest Hanging": {
			distance: 10,
		},
	},
	"Hell": {
		"Dandelions": {
			distance: 1,
		},
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
		"Hell Debug": {
			distance: 20,
			requiresKey: "Universe Key",
		},
	},
	"Hell Flower": {
		"Hell Bunker": {
			distance: 10,
		},
		"Inner Core Room": {
			distance: 40,
		},
		"Secret Wolf Forest": {
			distance: 60,
		},
	},
	"Secret Wolf Forest": {
		"Moon Flower": {
			distance: 5,
		},
		"Quicksand Grass Level 11": {
			distance: 5,
		},
	},
	"Moon Flower": {
		"Quicksand Grass Level 11": {
			distance: 1,
		},
	},
	"Inner Core Room": {
		"Ying Forest": {
			distance: 5,
		},
		"Credits": {
			distance: 40,
		},
	},
	"Credits": {
		"Small White Flower": {
			distance: 1,
		},
		"Engine": {
			distance: 1,
		},
	},
	"Williston Field": {
		"Williston Caves": {
			distance: 5,
		},
		"Williston City": {
			distance: 1,
		},
		"Williston Wall": {
			distance: 5,
		},
		"Red Apple Tree": {
			distance: 1,
		},
		"Yellow Apple Tree": {
			distance: 1,
		},
		"Green Apple Tree": {
			distance: 1,
		},
		"Pink Tree": {
			distance: 5,
		},
		"Williston Trees": {
			distance: 5,
		},
		"Well": {
			distance: 1,
		},
		"Williston Purple Well": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 1,
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
		"Imp Disco": {
			distance: 5,
		},
	},
	"Williston Caves": {
		"Well": {
			distance: 10,
		},
	},
	"Secret Cave of Jerichos": {
		"Jericho": {
			distance: 1,
		},
		"Jumbo Yellow Flower": {
			distance: 1,
		},
		"Jackfruit": {
			distance: 5,
		},
		"Red Maze Flower": {
			distance: 5,
		},
		"Ying Air": {
			distance: 1,
		},
		"Jericho Caves": {
			distance: 1,
		},
	},
	"Jericho Caves": {
		"Blackberry": {
			distance: 10,
		},
	},
	"Williston Trees": {
		"I1": {
			distance: 1,
		},
	},
	"Williston City": {
		"I1 Library": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Small Cannon Pyramid": {
			distance: 1,
		},
		"Large Cannon Pyramid": {
			distance: 1,
		},
		"Bedroom": {
			distance: 1,
		},
		"Williston Building": {
			distance: 1,
		},
	},

	"Williston Building": {
		"Yellow Apple Tree": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Yellow Flower Wall": {
			distance: 1,
		},
		"Pink Tree": {
			distance: 5,
		},
	},
	"Williston Wall": {
		"Williston Ammo": {
			distance: 2,
		},
		"Fir Tree": {
			distance: 1,
		},
	},
	"I2 WIG Flower": {
		"Fanatic Lattice": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Weed Ring": {
			distance: 1,
		},
		"Mystic Vine 0": {
			distance: 1,
		},
		"Blue Bubble Cave": {
			distance: 1,
		},
		"WIG Prison": {
			distance: 20,
			impassable: true,
		},
		"Prank I2 WIG Flower": {
			distance: 1,
		},
		"Quicksand Grass Level 11": {
			distance: 1,
		},
	},
	"WIG Prison": {
		"Toronto": {
			distance: 1,
			note: "Rainbow Flower Image",
		},
		"WIG Prison Locker": {
			distance: 1,
			note: "Rainbow Flower Image",
		},
	},
	"Prank I2 WIG Flower": {
		"WIG Prison 2": {
			distance: 20,
			impassable: true,
		},
		"Quicksand Grass": {
			distance: 1,
		},
	},
	"WIG Prison 2": {
		"Large White Flower": {
			distance: 1,
		},
	},
	"Blue Bubble Cave": {
		"Fir Tree": {
			distance: 1,
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
			distance: 1,
		},
		"Weed Ring": {
			distance: 1,
		},
		"Ostrich Fern": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
		},
		"Nuke Radius Cave": {
			distance: 5,
			note: "Inside Big Green Hanging Vine",
		},
		"I3 Common Gate": {
			distance: 1,
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
			distance: 1,
		},
	},
	"Earthy Cellar": {
		"Green Apple Tree": {
			distance: 1,
		},
		"Catacombs 1": {
			distance: 25,
		},
	},
	"Earthy Basement": {
		"Green Apple Tree": {
			distance: 1,
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
		"Fanatic Weed Ammo": {
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
		"I3 WIG Flower": {
			distance: 20,
		},
		"Montreal": {
			distance: 20,
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
			distance: 1,
		},
		"Fanatic Spire Scaffold": {
			distance: 4,
		},
		"Small Blue Flower (Primary)": {
			distance: 10,
		},
		"Fanatic Spire Mid Treasure": {
			distance: 15,
		},
		"Fanatic Spire Treasure": {
			distance: 30,
		},
	},
	"Fanatic Spire Treasure": {
		"Golden Yellow Flower": {
			distance: 1,
		},
		"Montreal": {
			distance: 1,
		},
		"Fanatic Island": {
			distance: 1,
			note: "Vegetation",
		},
		"Fanatic Island Caves": {
			distance: 1,
		},
	},
	"Fanatic Spire Scaffold": {
		"Fanatic Island Caves": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
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
			distance: 1,
		},
		"Guerilla Jungle": {
			distance: 1,
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
			distance: 1,
		},
	},
	"I2 Library": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Montreal": {
			distance: 1,
		},
		"I2 WIG Flower": {
			distance: 1,
		},
		"I3 WIG Flower Vault": {
			distance: 1,
		},
	},
	"I3 WIG Flower Vault": {
		"I3 WIG Flower": {
			distance: 25,
			note: "Guranteed Real",
		},
		"Infinity Flower": {
			distance: 25,
			note: "Corner of floor",
		},
		"Jumbo Yellow Flower": {
			distance: 25,
			note: "Corner of floor",
		},
		"Small White Flower": {
			distance: 25,
			note: "Corner of floor",
		},
	},
	"I3 WIG Flower": {
		"I3": {
			distance: 1,
		},
		"Quicksand Grass Level 11": {
			distance: 1,
		},
		"WIG Prison": {
			distance: 20,
			impassable: true,
		},
		"Prank I3 WIG Flower": {
			distance: 1,
		},
	},
	"Prank I3 WIG Flower": {
		"Quicksand Grass": {
			distance: 1,
		},
		"WIG Prison 2": {
			distance: 20,
			impassable: true,
		},
	},
	"Violet": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Fanatic Island Caves": {
			distance: 1,
		},
		"Violet Shell 3": {
			distance: 50,
			impassable: true,
		},
	},
	"Violet Shell 3": {
		"Fanatic Island Caves": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
		},
		"Cannon Ammo Grab": {
			distance: 1,
		},
		"Fir Tree": {
			distance: 1,
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
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
		},
		"Cannon Ammo Grab": {
			distance: 1,
		},
		"Fir Tree": {
			distance: 1,
		},
		"Violet Shell 1": {
			distance: 20,
		},
		"Healing Patch": {
			distance: 10,
		},
		"Fanatic Lattice": {
			distance: 10,
			note: "Walls",
		},
		"Fanatic Spire": {
			distance: 10,
		},
		"Fanatic Vine 2": {
			distance: 20,
			note: "Exit",
		},
		"Violet Shell 2 Map": {
			distance: 10,
		},
	},
	"Violet Shell 2 Map": {
		"Quicksand Grass": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 1,
		},
		"Cannon Ammo Grab": {
			distance: 1,
		},
		"Healing Patch": {
			distance: 10,
		},
		"Fanatic Spire": {
			distance: 10,
		},
		"Fanatic Lattice": {
			distance: 10,
			note: "Walls",
		},
		"Fir Tree": {
			distance: 1,
		},
		"Violet Shell 2 Map": {
			distance: 10,
		},
	},
	"Violet Shell 1": {
		"Fanatic Island Caves": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
		},
		"Cannon Ammo Grab": {
			distance: 1,
		},
		"Fir Tree": {
			distance: 1,
		},
		"Violet Shell 0": {
			distance: 15, // we take a blue ring here, but distance to leave
		},
		"Fanatic Lattice": {
			distance: 10,
			note: "Walls",
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
			distance: 1,
		},
	},
	"Healing Patch": {
		"Fanatic Weed": {
			distance: 1,
		},
		"Minigun Forest": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 1,
		},
	},
	"Fanatic Weed": {
		"Fanatic Weed Caves": {
			distance: 1,
		},
		"Montreal": {
			distance: 5,
		},
		"Small Cannon Gym": {
			distance: 1,
		},
		"Weed Ring": {
			distance: 10,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Grass": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
		},
	},
	"Hanging Fanatic Weed": {
		"Fanatic Weed Caves": {
			distance: 1,
		},
		"Hanging Fanatic Vine": {
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
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
		"Fanatic Weed Ammo": {
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
			distance: 15,
		},
		"Montreal": {
			distance: 15,
		},
		"Large White Flower": {
			distance: 15,
		},
		"Fanatic Air": {
			distance: 15,
		},
		"Laboratory Vine": {
			distance: 15,
		},
	},
	"Danville": {
		"Ying Forest": {
			distance: 5,
		},
		"Infinity Flower": {
			distance: 5,
		},
		"Stoney Air": {
			distance: 5,
		},
		"I2 Library": {
			distance: 5,
		},
		"Small Yellow Flower": {
			distance: 5,
		},
		"Small Blue Flower (Primary)": {
			distance: 5,
		},
		"Weapon Library": {
			distance: 5,
		},
	},
	"Scorpius Portal": {
		"Cardboard Box": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
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
			distance: 1,
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
			distance: 1,
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
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Weed": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 5,
		},
		"Damp Cellar": {
			distance: 10,
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
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Weed": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 5,
		},
		"Damp Cellar": {
			distance: 10,
		},
		"Alpha Menger Sponge": {
			distance: 20,
		},
		"Montreal": {
			distance: 20,
		},
		"Toronto": {
			distance: 20,
		},
		"Danville": {
			distance: 20,
		},
		"Small Blue Flower (Quinary)": {
			distance: 20,
		},
	},
	"Small Blue Flower (Quinary)": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 5,
		},
		"Fanatic Grass": {
			distance: 5,
		},
		"Fanatic Air": {
			distance: 5,
		},
		"Damp Basement": {
			distance: 10,
		},
	},
	"EMP City": {
		"Stoney Air": {
			distance: 1,
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
			distance: 1,
		},
		"Montreal": {
			distance: 1,
		},
	},
	"Fanatic Island": {
		"Fanatic Air": {
			distance: 1,
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
			distance: 1,
		},
		"Fanatic Vine 1": {
			distance: 1,
		},
		"Fanatic Well": {
			distance: 1,
		},
		"Fanatic Island Caves": {
			distance: 1,
		},
		"Minigun Forest Minor Pod": {
			distance: 5,
		},
		"Dark Willow Tree": {
			distance: 10,
			note: "Rare",
		},
		"Fir Tree": {
			distance: 1,
		},
		"Spruce Tree": {
			distance: 5,
		},
		"Woody Basement": {
			distance: 10,
		},
	},
	"Minigun Forest Minor Pod": {
		"Fanatic Air": {
			distance: 1,
		},
	},
	"Fanatic Island Caves": {
		"Fir Tree": {
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 5,
		},
		"Montreal": {
			distance: 5,
		},
		"I2 WIG Flower": {
			distance: 10,
		},
		"Woody Cellar": {
			distance: 10,
		},
		"Scorpius Portal": {
			distance: 15,
		},
	},
	"Woody Cellar": {
		"Green Apple Tree": {
			distance: 5,
		},
		"Small Black Flower": {
			distance: 5,
		},
		"Catacombs 1": {
			distance: 15,
		},
	},
	"Woody Basement": {
		"Small Black Flower": {
			distance: 15,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Green Apple Tree": {
			distance: 5,
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
			distance: 1,
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
			distance: 1,
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
		"Violet": {
			distance: 15,
		},
	},
	"Minigun Forest Hanging": {
		"Guerilla Jungle": {
			distance: 1,
		},
		"Blue Bubble Cave": {
			distance: 1,
		},
		"Raspberry": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
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
			distance: 1,
		},
	},
	"Guerilla Jungle": {
		"Guerilla Tree": {
			distance: 5,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"I2 Library": {
			distance: 10,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Large Cannon Pyramid": {
			distance: 5,
		},
		"Spruce Tree": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 5,
		},
	},
	"Guerilla Tree": {
		"Alpha Cube": {
			distance: 5,
		},
		"Cannon Ammo Grab": {
			distance: 5,
		},
		"Hanging Fanatic Vine": {
			distance: 1,
		},
		"I3 Common Gate": {
			distance: 5,
		},
		"Minigun Forest Ammo": {
			distance: 5,
		},
		"EMP City": {
			distance: 1,
		},
		"Guerilla Tree Trunk": {
			distance: 10,
		},
	},
	"Guerilla Tree Trunk": {
		"Scorpius Portal": {
			distance: 5,
		},
		"Danville": {
			distance: 10,
		},
		"Guerilla Tree Trunk Treasure": {
			distance: 10,
		},
		"Rainbow Flower": {
			distance: 40,
			note: "Rare",
		},
	},
	"Spruce Tree": {
		"Fir Tree": {
			distance: 1,
		},
		"Spruce Tree": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
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
			distance: 1,
		},
		"Oak Tree": {
			distance: 1,
		},
		"Green Apple Tree": {
			distance: 1,
		},
	},
	"Fanatic Weed Caves": {
		"Fir Tree": {
			distance: 1,
		},
		"Spruce Tree": {
			distance: 5,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Damp Basement": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 15,
		},
		"Minigun Forest Minor Pod": {
			distance: 15,
		},
		"Hanging Fanatic Vine": {
			distance: 1,
		},
		"Fanatic Weed Caves 2": {
			distance: 10,
		},
	},
	"Fanatic Weed Caves 2": {
		"Fanatic Air": {
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
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
			distance: 1,
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
			distance: 1,
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
			distance: 1,
		},
		"Catacombs 4": {
			distance: 10,
		},
	},
	"Catacombs 4": {
		"Stoney Air": {
			distance: 1,
		},
		"Catacombs 5": {
			distance: 10,
		},
	},
	"Catacombs 5": {
		"Stoney Air": {
			distance: 1,
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
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Violet": {
			distance: 1,
		},
		"Fanatic Lattice": {
			distance: 1,
		},
		"Taurus Portal": {
			distance: 1,
		},
	},
	"Damp Basement": {
		"Green Apple Tree": {
			distance: 1,
		},
	},
	"Montreal": {
		"Ying Forest": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"I1 Library": {
			distance: 1,
		},
		"Infinity Flower": {
			distance: 1,
		},
		"Red Apple Tree": {
			distance: 1,
		},
		"Fir Tree": {
			distance: 5,
			note: "Inside Maze",
		},
	},
	"Vine Shaft Column": {
		"Fir Tree": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
	},
	"Mystic Vine 0": {
		"Mystic Vine 1": {
			distance: 5,
		},
		"Fir Tree": {
			distance: 1,
		},
	},
	"Mystic Vine 1": {
		"Cannon Ammo Grab": {
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
		"Fanatic Air": {
			distance: 1,
		},
		"Vine Shaft Column": {
			distance: 5,
		},
		"Fir Tree": {
			distance: 5,
		},
		"Toronto": {
			distance: 15,
		},
	},
	"Toronto": {
		"Ying Air": {
			distance: 1,
		},
		"I2 WIG Flower": {
			distance: 1,
		},
		"Green Apple Tree": {
			distance: 1,
		},
		"Jumbo Yellow Flower": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 1,
		},
		"Small Black Flower": {
			distance: 1,
		},
		"Small Blue Flower (Primary)": {
			distance: 1,
		},
		"Toronto Maze": {
			distance: 1,
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
		"Toronto Maze Map Room Secret": {
			distance: 50,
		},
	},
	"Toronto Maze Map Room Secret": {
		"Toronto Maze": {
			distance: 5,
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
		"Quicksand Grass Level 11": {
			distance: 10,
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
		"Rail Showdown Cave": {
			distance: 10,
		},
		"Burlington": {
			distance: 30,
		},
	},
	"Rail Showdown Cave": {
		"Small Black Flower": {
			distance: 20,
		},
		"Small White Flower": {
			distance: 20,
		},
		"Small Yellow Flower": {
			distance: 20,
		},
	},
	"Burlington": {
		"Tegan's Garden": {
			distance: 1,
		},
		"Burlington Showdown Tower": {
			distance: 40,
			arcade: true,
		},
		"Club Green Apple": {
			distance: 5,
			requiresKey: "Yellow Key",
		},
		"Galaxy Flower": {
			distance: 10,
		},
		"Blue Gato Box": {
			distance: 5,
		},
		"Green Gato Box": {
			distance: 5,
		},
		"Purple Gato Box": {
			distance: 5,
		},
		"Yellow Gato Box": {
			distance: 5,
		},
		"Burlington Combination Lock Treasure": {
			distance: 25,
			note: "Combination Lock",
			//note: "Omega Box = 1, Orange Box = 2, Purple Box Under Bridges = 3",
		},
	},
	"Club Green Apple": {
		"Green Apple Tree": {
			distance: 1,
		},
		"Hell": {
			distance: 15,
			note: "Under Pyramid",
		},
	},
	"Tegan's Garden": {
		"Quicksand Grass": {
			distance: 1,
			note: "Layer 11",
		},
		"Jackfruit": {
			distance: 1,
		},
		"I3 WIG Flower": {
			distance: 1,
		},
		"I2 WIG Flower": {
			distance: 1,
		},
		"Infinity Flower": {
			distance: 1,
		},
		"Fir Tree": {
			distance: 1,
		},
		"Spruce Tree": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Noob Maze Flower": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 1,
		},
		"Large White Flower": {
			distance: 1,
		},
		"Small Black Flower": {
			distance: 1,
		},
		"Small Yellow Flower": {
			distance: 1,
		},
		"Jumbo Yellow Flower": {
			distance: 1,
		},
		"Small Blue Flower (Primary)": {
			distance: 1,
		},
		"Orange Flower": {
			distance: 1,
		},
		"Red Maze Flower": {
			distance: 1,
		},
		"Carrots": {
			distance: 1,
		},
		"Turnips": {
			distance: 1,
		},
	},
	"Red Maze Flower": {
		"Quicksand Grass": {
			distance: 1,
		},
		"I2 Standard Gate": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 15,
		},
		"Jumbo Yellow Flower": {
			distance: 15,
		},
	},
	"I2 Standard Gate": {
		"Red Rose": {
			distance: 10,
		},
		"I2 WIG Flower": {
			distance: 15,
		},
	},
	"Carrots": {
		"Dandelions": {
			distance: 1,
		},
		"Salmon Mushroom": {
			distance: 5,
		},
		"Blue Mushroom": {
			distance: 5,
			note: "Rare",
		},
		"Williston Ammo": {
			distance: 2,
		},
	},
	"Turnips": {
		"Dandelions": {
			distance: 1,
		},
		"Carrots": {
			distance: 5,
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
			distance: 10,
		},
		"I2 Fast Gate": {
			distance: 10,
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
			distance: 1,
		},
		"I3": {
			distance: 1,
		},
		"I3 WIG Flower": {
			distance: 1,
		},
		"I2 WIG Flower": {
			distance: 1,
		},
		"Orange": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Basement Library": {
			distance: 1,
		},
		"Sagittarius Portal": {
			distance: 1,
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
		"Quicksand Grass Level 11": {
			distance: 10,
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
		"Red Mushroom Small Treasure": {
			distance: 20,
		},
		"Red Mushroom Treasure": {
			distance: 25,
		},
	},
	"I2 Fast Gate": {
		"I2 WIG Flower": {
			distance: 10,
		},
	},
	"Salmon Mushroom": {
		"Salmon Mushroom Nuke Treasure": {
			distance: 35,
		},
		"Salmon Mushroom Rail Treasure": {
			distance: 25,
		},
		"Quicksand Grass": {
			distance: 1,
			note: "Floor",
		},
		"Quicksand Grass Level 11": {
			distance: 25,
		},
		"Black Mushroom": {
			distance: 25,
			note: "Very Rare, On Side Treasures",
		},
	},
	"Salmon Mushroom Nuke Treasure": {
		"I3 WIG Flower": {
			distance: 35,
		},
	},
	"Black Mushroom": {
		"Quicksand Grass": {
			distance: 1,
			note: "Floor",
		},
		"Quicksand Grass Level 11": {
			distance: 15,
		},
		"Pink Tree": {
			distance: 20,
		},
	},
	"Fanatic Well": {
		"Williston Wall": {
			distance: 5,
		},
		"Fanatic Well Secret": {
			distance: 10,
		},
	},
	"Fanatic Well Secret": {
		"Danville": {
			distance: 1,
		},
	},
	"Fanatic Vine 1": {
		"Fanatic Vine 2": {
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 1,
		},
		"Pirate Vine": {
			distance: 5,
		},
		"Fir Tree": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
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
			distance: 1,
		},
		"Fir Tree": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
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
			distance: 20,
		},
		"Laser Branch Vine": {
			distance: 10,
		},
		"Fanatic Weed": {
			distance: 1,
		},
		"Fir Tree": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
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
			distance: 1,
		},
		"Fir Tree": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
		},
	},
	"Laser Branch Vine": {
		"Fir Tree": {
			distance: 1,
		},
		"Fanatic Weed": {
			distance: 1,
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
		"Danville": {
			distance: 10,
		},
		"Ostrich Fern": {
			distance: 1,
		},
		"Fanatic Air": {
			distance: 1,
		},
		"Blue Bubble Cave": {
			distance: 1,
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
		"I3 WIG Flower": {
			distance: 5,
		},
	},
	"Laboratory Vine": {
		"Fanatic Air": {
			distance: 1,
		},
		"Hanging Fanatic Vine": {
			distance: 1,
		},
		"Small Black Flower": {
			distance: 1,
		},
		"Minigun Forest": {
			distance: 1,
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
			distance: 1,
		},
		"Laboratory Vine": {
			distance: 1,
		},
		"Blue Mushroom": {
			distance: 30,
		},
		"Rainbow Flower": {
			distance: 30,
		},
		"I2 Library": {
			distance: 5,
		},
	},
	"Blue Mushroom": {
		"Quicksand Grass": {
			distance: 1,
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
			distance: 1,
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
			distance: 1,
		},
		"I3 WIG Flower": {
			distance: 1,
			note: "Guranteed Real",
		},
		"Small White Flower": {
			distance: 1,
			note: "x4",
		},
		"Rainbow Flower Secret": {
			distance: 30,
			note: "Top of Stem",
		},
	},
	"Fanatic Grass": {
		"Large Cannon Pyramid": {
			distance: 30,
		},
		"Fanatic Weed Ammo": {
			distance: 5,
		},
	},
	"Willow Tree": {
		"Stoney Air": {
			distance: 1,
		},
		"Mystic Vine 0": {
			distance: 1,
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
		"Secret Cave of Jerichos": {
			distance: Infinity,
			note: "Well With No Pink Sphere",
		},
	},
	"Imp Cave": {
		"Gnole Cave": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Orange": {
			distance: 1,
		},
		"Cardboard Box": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Gnole Cave": {
		"Demon Cave": {
			distance: 3,
		},
		"Buttercup": {
			distance: 1,
		},
		"Orange": {
			distance: 1,
		},
		"Cardboard Box": {
			distance: 1,
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
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Cardboard Box": {
			distance: 1,
		},
	},
	"Orc Cave": {
		"Beholder Cave": {
			distance: 7,
		},
		"Infinity Flower": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Jumbo Yellow Flower": {
			distance: 1,
		},
	},
	"Beholder Cave": {
		"Ying Flower": {
			distance: 1,
		},
		"Orange": {
			distance: 1,
		},
		"Pink Tree": {
			distance: 1,
		},
		"Cardboard Box": {
			distance: 1,
		},
	},
	"Tall Rail Tower": {
		"Stoney Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Short Rail Tower": {
		"Stoney Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Orange": {
		"Stoney Air": {
			distance: 1,
		},
		"Orange Ground City": {
			distance: 1,
			note: "On top",
		},
		"Orange Outer Crust": {
			distance: 10,
		},
	},
	"Orange Ground City": {
		"Yellow Flower City": {
			distance: 1,
		},
	},
	"Orange Outer Crust": {
		"Ying Air": {
			distance: 15,
		},
		"Orange Outer Mantle": {
			distance: 25,
		},
	},
	"Orange Mantle Cave": {
		"Stoney Air": {
			distance: 3,
		},
	},
	"Orange Outer Mantle": {
		"Orange Mantle Cave": {
			distance: 5,
		},
		"Orange Inner Crust": {
			distance: 20,
		},
		"Blue Bubble": {
			distance: 5,
		},
		"Spider Air": {
			distance: 1,
		},
		"Red-Green Elevator": {
			distance: 5,
			note: "Net Shrink 1",
		},
		"Orange Outer Mantle Secret": {
			distance: 30,
			note: "Yellow Cube",
		},
	},
	"Red-Green Elevator": {
		"Stoney Air": {
			distance: 1,
		},
	},
	"Orange Inner Crust": {
		"Orange Inner Mantle": {
			distance: 15,
		},
	},
	"Orange Inner Mantle": {
		"Orange Mantle Cave": {
			distance: 5,
		},
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
			distance: 1,
		},
		"Large Cannon Pyramid": {
			distance: 1,
		},
		"Infinity Flower": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Tau Cave Flower": {
			distance: 1,
		},
		"Camel's Hump": {
			distance: 1,
		},
		"Weapon Library": {
			distance: 1,
		},
	},
	"Stoney Air": {
		"Stoney Air Cave 1": {
			distance: 1,
			note: "Net shrink 0/1",
		},
		"Yellow Cube": {
			distance: 8,
		},
		"Green Shrink Box": {
			distance: 1,
			note: "Net shrink 1	",
		},
		"Stoney Air Totem": {
			distance: 4,
		},
	},
	"Stoney Air Totem": {
		"Green Apple Tree": {
			distance: 1,
		},
		"Ying Flower": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 1,
		},
	},
	"Stoney Air Cave 1": {
		"Stoney Air Cave 2": {
			distance: 7,
			note: "Chance Based on Length",
		},
		"Blue Bubble": {
			distance: 22,
			note: "Thorugh Cave 2 Cement",
		},
	},
	"Stoney Air Cave 2": {
		"Small Black Flower": {
			distance: 5,
		},
		"Stoney Air Cave 3": {
			distance: 12,
			note: "Chance Based on Length",
		},
		"Ying Forest": {
			distance: 12,
			note: "Through Cave 3",
		},
		"Ying Flower": {
			distance: 12,
			note: "Through Cave 3",
		},
	},
	"Stoney Air Cave 3": {
		"Ying Forest": {
			distance: 10,
		},
	},
	"Green Shrink Box": {
		"Small Yellow Flower": {
			distance: 20,
		},
	},
	"Yellow Cube": {
		"Mossy Air": {
			distance: 1,
		},
		"Stoney Sanctuary": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Orange Flower": {
			distance: 1,
		},
		"Small Cannon Pyramid": {
			distance: 1,
		},
		"Yellow Cube Secret": {
			distance: 5,
		},
	},
	"Rich Yellow Cube": {
		"Mossy Air": {
			distance: 1,
		},
		"Stoney Sanctuary": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Orange Flower": {
			distance: 1,
		},
		"Small Cannon Pyramid": {
			distance: 1,
		},
		"Rich Yellow Cube Secret": {
			distance: 5,
		},
	},
	"Stoney Sanctuary": {
		"Ying Forest": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
		"Blackberry": {
			distance: 1,
		},
		"Stoney Library": {
			distance: 5,
		},
		"Mossy Cellar": {
			distance: 1,
		},
		"Orange Flower": {
			distance: 1,
		},
		"Stoney Sanctuary Pillar": {
			distance: 5,
		},
		"Stoney Sanctuary Treasure": {
			distance: 30,
		},
	},
	"Stoney Library": {
		"Stoney Library Treasure": {
			distance: 5,
			requiresKey: "Yellow Key",
		},
	},
	"Yellow Cube Secret": {
		"Small Yellow Flower": {
			distance: 1,
			note: "x24",
		},
		"Noob Maze Flower": {
			distance: 1,
			note: "x75",
		},
	},
	"Rich Yellow Cube Secret": {
		"Orange Flower": {
			distance: 1,
			note: "x8",
		},
		"Noob Maze Flower": {
			distance: 1,
			note: "x86",
		},
		"Galaxy Flower": {
			distance: 1,
			note: "x4",
		},
	},
	"Galaxy Flower": {
		"Galaxy": {
			distance: 5,
		},
		"Quicksand Grass": {
			distance: 1,
		},
	},
	"Solar System": {
		"Supermassive Black Hole": {
			distance: 30,
		},
		"Sun": {
			distance: 15,
		},
		"Solar System Debris": {
			distance: 15,
		},
		"Small Minigun Planet": {
			distance: 10,
		},
		"Clay Planet": {
			distance: 10,
		},
		"Tau Cave Moon": {
			distance: 20,
		},
		"Moon Debris": {
			distance: 10,
		},
		"Alpha Moon": {
			distance: 10,
		},
		"Beta Moon": {
			distance: 10,
		},
		"Gamma Moon": {
			distance: 10,
		},
		"Ice Moon": {
			distance: 10,
		},
		"Fire Rate Moon": {
			distance: 30,
		},
		"Blue Ring Station": {
			distance: 20,
		},
		"Space Library": {
			distance: 20,
		},
	},
	"Space Library": {
		"Galaxy Flower": {
			distance: 5,
		},
	},
	"Blue Ring Station": {
		"Ying Forest": {
			distance: 1,
		},
		"Blue Bubble Gauntlet": {
			distance: 10,
			note: "Outside Rings",
		},
	},
	"Solar System Debris": {
		"Jericho": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Jericho": {
		"Small Cannon Pyramid": {
			distance: 1,
		},
		"Small Yellow Flower": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Mossy Air": {
		"Mossy Island": {
			distance: 1,
		},
		"Mossy Air Cube": {
			distance: 5,
		},
		"Yellow Rocket Treasure": {
			distance: 25,
		},
	},
	"Mossy Air Cube": {
		"Mossy Air Cube Treasure": {
			distance: 20,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Orange": {
			distance: 5,
		},
		"Ying Flower": {
			distance: 5,
		},
		"Tweedle-Dum Air": {
			distance: 5,
		},
		"Tau Cave Moon Case": {
			distance: 5,
		},
		"Small Yellow Flower": {
			distance: 5,
		},
		"Jumbo Yellow Flower": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Small Black Flower": {
			distance: 5,
		},
		"Ying Air": {
			distance: 10,
			note: "In Between Shells",
		},
	},
	"Mossy Air Cube Treasure": {
		"Tau Caves Ammo": {
			distance: 5,
		},
		"Mossy Basement": {
			distance: 5,
		},
		"Small Yellow Flower": {
			distance: 5,
		},
		"Jumbo Yellow Flower": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 5,
		},
		"Small Black Flower": {
			distance: 5,
		},
		"Orange": {
			distance: 5,
		},
		"Ying Flower": {
			distance: 5,
		},
		"Tweedle-Dum Air": {
			distance: 5,
		},
		"Tau Cave Flower": {
			distance: 5,
		},
	},
	"Tau Cave Moon Case": {
		"Tau Cave Moon": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
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
		"Mossy Air Ammo": {
			distance: 5,
		},
		"Tall Rail Tower": {
			distance: 10,
		},
		"Buttercup": {
			distance: 2,
		},
		"Mossy Cellar": {
			distance: 2,
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
		"Tall Rail Tower": {
			distance: 20,
		},
	},
	"Richmond": {
		"Red Apple Tree": {
			distance: 1,
		},
		"Bedroom": {
			distance: 1,
		},
		"Richmond Sewers": {
			distance: 1,
		},
		"Richmond Building": {
			distance: 10,
		},
		"Richmond Info Building": {
			distance: 10,
		},
		"Richmond Secret": {
			distance: 10,
		},
		"Ying Flower": {
			distance: 1,
		},
	},
	"Richmond Secret": {
		"Ying Forest": {
			distance: 5,
		},
		"Stoney Air": {
			distance: 1,
		},
	},
	"Richmond Building": {
		"Ying Forest": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Yellow Flower Wall": {
			distance: 1,
		},
		"Richmond Red Caves": {
			distance: 5,
		},
	},
	"Richmond Info Building": {
		"Ying Forest": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Yellow Flower Wall": {
			distance: 1,
		},
	},
	"Yellow Flower Wall": {
		"Ying Forest": {
			distance: 1,
		},
		"Yellow Flower Wall Ammo": {
			distance: 2,
		},
	},
	"Richmond Red Caves": {
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
			distance: 1,
		},
	},
	"Richmond Sewers": {
		"Ying Forest": {
			distance: 1,
		},
		"Buttercup": {
			distance: 2,
		},
		"Pink Tree": {
			distance: 3,
		},
		"Tau Cave Flower": {
			distance: 5,
		},
		"Small White Flower": {
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
		"Richmond Library Arcade": {
			distance: 5,
			arcade: true,
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
		"Quicksand Grass": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 5,
		},
		"Jumbo Yellow Flower": {
			distance: 10,
		},
		"Tau Cave Flower Treasure": {
			distance: 20,
		},
	},
	"Tau Cave Flower Treasure": {
		"Tau Cave Moon": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
	},
	"Tau Cave Moon": {
		"Secret Tau Cave Moon": {
			distance: 40,
			note: "K-Chunk icon must have a dot in the O",
		},
		"Type 2 Tau Cave": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Imp Disco": {
			distance: 1,
		},
		"Tau Cave Moss": {
			distance: 1,
		},
	},
	"Secret Tau Cave Moon": {
		"Tau Cave Moon": {
			distance: 1,
		},
		"Secret Tau Cave Moon Room": {
			distance: 30,
			impassable: true,
		},
	},
	"Secret Tau Cave Moon Room": {
		"Tau Cave Moon": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
	},
	"Type 2 Tau Cave": {
		"Type 3 Tau Cave": {
			distance: 5,
		},
		"Oak Tree": {
			distance: 1,
		},
		"Tweedle-Dum Air": {
			distance: 5,
		},
		"Tweedle-Dee Air": {
			distance: 5,
		},
		"Buttercup": {
			distance: 1,
		},
	},
	"Type 3 Tau Cave": {
		"Type 1 Tau Cave": {
			distance: 5,
		},
		"Oak Tree": {
			distance: 1,
		},
		"Paper Box": {
			distance: 1,
		},
		"Cardboard Box": {
			distance: 1,
		},
		"Basic Laser Maze": {
			distance: 5,
		},
	},
	"Type 1 Tau Cave": {
		"Type 2 Tau Cave": {
			distance: 5,
		},
		"Oak Tree": {
			distance: 1,
		},
		"Ying Flower": {
			distance: 15,
		},
		"Tau Cave Moss": {
			distance: 5,
		},
		"Ying Forest": {
			distance: 10,
		},
		"Health Tower": {
			distance: 15,
		},
		"Hard Pink Tree": {
			distance: 50,
		},
		"Alpha Cube": {
			distance: 20,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Richmond": {
			distance: 15,
		},
	},
	"Oak Tree": {
		"Ying Forest": {
			distance: 1,
		},
		"Red Apple Tree": {
			distance: 3,
		},
		"Stoney Air": {
			distance: 5,
		},
		"Oak Tree Dungeon": {
			distance: 10,
		},
	},
	"Oak Tree Dungeon": {
		"Small Yellow Flower": {
			distance: 5,
		},
	},
	"Tweedle-Dum Base": {
		"Ying Forest": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
	},
	"Tweedle-Dum Air": {
		"Tweedle-Dee Air": {
			distance: 1,
		},
	},
	"Tweedle-Dee Air": {
		"Tweedle-Dum Air": {
			distance: 1,
		},
		"Tweedle-Dee Cave": {
			distance: 1,
		},
		"Noob Maze Bundle": {
			distance: 1,
		},
		"Small Laser Fort": {
			distance: 1,
		},
		"Tweedle Haunted House 1": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 5,
			note: "Walls of Forts and Mazes",
		},
	},
	"Small Laser Fort": {
		"Paper Box": {
			distance: 5,
			note: "Chance in Corners",
		},
		"Cardboard Box": {
			distance: 5,
			note: "Chance in Corners",
		},
		"Small Laser Fort Secret": {
			distance: 15,
			note: "Shrink into blue air cubes",
		},
	},
	"Small Laser Fort Secret": {
		"Small Black Flower": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
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
			distance: 1,
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
		"Weapon Library": {
			distance: 1,
		},
	},
	"Tweedle-Dee Cave": {
		"Ice Cube": {
			distance: 5,
		},
		"Ying Air": {
			distance: 1,
		},
		"Pink Tree": {
			distance: 1,
		},
		"Quicksand Grass": {
			distance: 1,
			note: "Layer 11",
		},
	},
	"Pink Tree": {
		"Quicksand Grass": {
			distance: 1,
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
		"Slow Exit Maze Island": {
			distance: 1,
		},
	},
	"Slow Exit Maze Island": {
		"Easy Minigun Tower": {
			distance: 1,
		},
		"Dummy Arcade": {
			distance: 1,
		},
		"Slow Exit Maze Treasure": {
			distance: 20,
		},
	},
	"Pure Menger Sponge": {
		"Pure Menger Sponge Treasure": {
			distance: 10,
			note: "Level 130+",
		},
	},
	"Top of the World": {
		"Edge of the World": {
			distance: 1,
			requiresKey: "Green Key",
		},
	},
	"Edge of the World": {
		"Outer Space -4": {
			distance: 1,
			requiresKey: "Yellow Key",
		},
		"Alpha Cube": {
			distance: 0,
		},
	},
	"Outer Space -4": {
		"Outer Space -3": {
			distance: 1,
		},
	},
	"Outer Space -3": {
		"Outer Space -2": {
			distance: 1,
		},
	},
	"Outer Space -2": {
		"Outer Space -1": {
			distance: 1,
		},
	},
	"Outer Space -1": {
		"Outer Space 0": {
			distance: 1,
		},
	},
	"Outer Space 0": {
		"Outer Space 1": {
			distance: 20,
		},
		"Mylantis": {
			distance: 40,
		},
		"High Gold Asteroid": {
			distance: 5,
		},
		"Lockbox": {
			distance: 5,
			requiresKey: "Yellow Key",
		},
		"Grand Lockbox": {
			distance: 20,
			requiresKey: "Yellow Key",
		},
	},
	"High Gold Asteroid": {
		"High Gold Asteroid Treasure": {
			distance: 15,
		},
	},
	"Topaz": {
		"Topaz Treasure": {
			distance: 20,
			impassable: true,
		},
	},
	"Topaz Treasure": {
		"Topaz Sponge": {
			distance: 1,
		},
	},
	"Topaz Sponge": {
		"Blackberry": {
			distance: 5,
		},
		"Small Blue Flower (Primary)": {
			distance: 5,
		},
	},
	"Iolite": {
		"Iolite Treasure": {
			distance: 25,
		},
	},
	"Iolite Treasure": {
		"Iolite Sponge": {
			distance: 1,
			requiresKey: "Yellow Key",
		},
	},
	"Iolite Sponge": {
		"Jade Museum": {
			distance: 5,
			arcade: true,
			whiteBoxDevice: true,
		},
	},
	"Jade Museum": {
		"Fir Tree": {
			distance: 2,
		},
		"Health Tower": {
			distance: 2,
		},
		"Small White Flower": {
			distance: 15,
		},
		"Quicksand Grass": {
			distance: 15,
		},
	},
	"Forest Museum": {
		"Fir Tree": {
			distance: 2,
		},
		"Health Tower": {
			distance: 2,
		},
	},
	"Mylantis": {
		"Mylantis City": {
			distance: 1,
		},
		"Mylantis Crust": {
			distance: 1,
		},
		"Laser Genesis Planet": {
			distance: 5,
		},
		"RejuvenX Refinery": {
			distance: 1,
		},
		"Grand Lockbox": {
			distance: 20,
		},
	},
	"Mylantis Crust": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Mylantis Caves 1": {
			distance: 10,
		},
	},
	"Mylantis Caves Library": {
		"I3 WIG Flower": {
			distance: 1,
		},
		"Taurus Portal": {
			distance: 1,
		},
	},
	"Mylantis Caves 1": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"RejuvenX Refinery": {
			distance: 8,
		},
		"Mylantis Caves Library": {
			distance: 5,
		},
		"Mylantis Cave Shaft": {
			distance: 15,
		},
		"Mylantis Caves 2": {
			distance: 20,
		},
	},
	"Mylantis Caves 2": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Blackberry": {
			distance: 15,
		},
		"Nuclear Silo": {
			distance: 25,
		},
		"Mylantis Caves Library": {
			distance: 5,
		},
		"RejuvenX Refinery": {
			distance: 10,
		},
		"Mylantis Cave Shaft": {
			distance: 18,
		},
		"Mylantis Caves 3": {
			distance: 25,
		},
	},
	"Mylantis Caves 3": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Alpha Menger Sponge": {
			distance: 20,
		},
		"Nuclear Silo": {
			distance: 25,
		},
		"Mylantis Caves Library": {
			distance: 8,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves 4": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 4": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Topaz": {
			distance: Infinity,
		},
		"Nuclear Silo": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves 5": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 5": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Red Maze Flower": {
			distance: Infinity,
		},
		"Nuclear Silo": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves 6": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 6": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Iolite": {
			distance: Infinity,
		},
		"Large White Flower": {
			distance: Infinity,
		},
		"Nuclear Silo": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves 7": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 7": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Jackfruit": {
			distance: Infinity,
		},
		"Nuclear Silo": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves 8": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 8": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Yellow Mushroom": {
			distance: Infinity,
		},
		"Emerald": {
			distance: Infinity,
		},
		"Nuclear Silo": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves 9": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 9": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Turnips": {
			distance: Infinity,
		},
		"Nuclear Silo": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"Mylantis Caves 10": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 10": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Hell": {
			distance: Infinity,
		},
		"Denver": {
			distance: Infinity,
		},
		"Nuclear Silo": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Caves 11": {
			distance: Infinity,
		},
	},
	"Mylantis Caves 11": {
		"I3 WIG Flower": {
			distance: 5,
		},
		"Moon Flower": {
			distance: Infinity,
		},
		"RejuvenX Refinery": {
			distance: Infinity,
		},
		"Mylantis Caves Library": {
			distance: Infinity,
		},
		"Mylantis Cave Shaft": {
			distance: Infinity,
		},
		"Mylantis Great Cavern": {
			distance: Infinity,
		},
	},
	"Mylantis Great Cavern": {
		"Mylantis Red Caves": {
			distance: Infinity,
		},
	},
	"Mylantis Red Caves": {
		"Amethyst": {
			distance: Infinity,
		},
	},
	"Denver": {
		"Denver Pyramid": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
		"Dandelions": {
			distance: 1,
		},
		"Desert": {
			distance: 1,
		},
		"Denver Green Mountain": {
			distance: 1,
		},
		"Fire Rate Moon": {
			distance: 1,
		},
		"Blue Library": {
			distance: 1,
		},
	},
	"Denver Green Mountain": {
		"Buttercup": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Laser Genesis Planet": {
		"Laser Genesis": {
			distance: 40,
			requiresKey: "Laser Genesis Key",
		},
	},
	"Laser Genesis": {
		"Sapphire": {
			distance: 1,
		},
	},
	"Sapphire": {
		"Ying Forest": {
			distance: 5,
		},
		"Orange": {
			distance: 5,
		},
		"Jumbo Yellow Flower": {
			distance: 5,
		},
		"Small White Flower": {
			distance: 5,
		},
	},
	"Mylantis City": {
		"Mylantis Top Garden": {
			distance: 1,
		},
		"Mylantis Building": {
			distance: 5,
		},
		"House of 5 Lampreys": {
			distance: 15,
			note: "U-11",
		},
		"Secret Farmhouse": {
			distance: 15,
			note: "S-10",
			requiresKey: "Secret Farmhouse Key",
		},
	},
	"Mylantis Building": {
		"Ying Forest": {
			distance: 1,
		},
		"Jumbo Yellow Flower": {
			distance: 5,
		},
		"Galaxy Flower": {
			distance: 5,
		},
		"The Bulk 1": {
			distance: 5,
		},
	},
	"Secret Farmhouse": {
		"Ying Forest": {
			distance: 1,
		},
		"Galaxy Flower": {
			distance: 5,
		},
	},
	"House of 5 Lampreys": {
		"Hell": {
			distance: 10,
		},
	},
	"Mylantis Top Garden": {
		"Ying Forest": {
			distance: 1,
		},
		"Orange": {
			distance: 1,
		},
		"Jumbo Yellow Flower": {
			distance: 1,
		},
		"Ying Flower": {
			distance: 1,
		},
		"Small White Flower": {
			distance: 1,
		},
		"Main Branch Library": {
			distance: 5,
		},
		"Mylantis City Underground": {
			distance: 1,
			requiresKey: "Universe Key",
		},
		"Large White Flower": {
			distance: 3,
			note: "Under Sell Station",
		},
		"Tau Cave Moss": {
			distance: 1,
		},
	},
	"Tau Cave Moss": {
		"Ying Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Quicksand Grass": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 5,
		},
		"Small Laser Fort": {
			distance: 5,
		},
		"Tweedle-Dum Air": {
			distance: 5,
		},
		"Tau Cave Moon": {
			distance: 5,
		},
	},
	"Main Branch Library": {
		"Orange": {
			distance: 1,
		},
	},
	"Mylantis City Underground": {
		"Beta Menger Sponge Top": {
			distance: 1,
		},
		"The Bulk 1": {
			distance: 1,
		},
	},
	"Beta Menger Sponge Top": {
		"Hinesburg": {
			distance: 10,
		},
		"Beta Sponge Town": {
			distance: 50,
			note: "Depth >100",
		},
		"Beta Menger Sponge Mid": {
			distance: 55,
			note: "Depth 110",
		},
	},
	"Beta Menger Sponge Mid": {
		"Beta Menger Sponge Bottom": {
			distance: 80,
		},
	},
	"Beta Sponge Town": {
		"Tau Cave Moon": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Jackfruit": {
			distance: 1,
		},
	},
	"Outer Space 1": {
		"Outer Space 2": {
			distance: 20,
		},
		"Outer Space Bunker": {
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
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Bulk Castle": {
			distance: 5,
		},
	},
	"Bulk Castle": {
		"Quicksand Grass": {
			distance: 1,
		},
		"Orange Flower": {
			distance: 1,
		},
		"Blackberry": {
			distance: 1,
		},
		"Fake Blackberry": {
			distance: 1,
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
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
	},
	"Hinesburg": {
		"Ying Forest": {
			distance: 1,
		},
		"Tau Cave Moon": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Orange": {
			distance: 1,
		},
		"Red Apple Tree": {
			distance: 1,
		},
		"Yellow Apple Tree": {
			distance: 1,
		},
		"Green Apple Tree": {
			distance: 1,
		},
	},
	"Galaxy": {
		"Solar System": {
			distance: 20,
		},
	},
	"Sun": {
		"Red-Green Elevator": {
			distance: 1,
			note: "Shrink",
		},
		"Solar System Elevator": {
			distance: 1,
			note: "Grow",
		},
		"Infinity Flower": {
			distance: 40,
		},
	},
	"Clay Planet": {
		"Ying Forest": {
			distance: 5,
		},
		"Ying Air": {
			distance: 1,
		},
		"Planet Surface": {
			distance: 1,
		},
		"Clay Planet Treasure": {
			distance: 20,
		},
		"Clay Planet Cavity": {
			distance: 15,
		},
	},
	"Clay Planet Treasure": {
		"The Bulk 1": {
			distance: 5,
		},
		"I3 WIG Flower": {
			distance: 5,
			note: "Guranteed Real",
		},
		"Ying Air": {
			distance: 1,
		},
	},
	"Ice Moon": {
		"Ice Cube": {
			distance: 5,
		},
		"Orange": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 5,
		},
		"Jumbo Yellow Flower": {
			distance: 5,
		},
		"Ying Air": {
			distance: 1,
		},
		"Ice Moon Treasure": {
			distance: 15,
		},
	},
	"Gamma Moon": {
		"Orange": {
			distance: 1,
		},
		"Gamma Moon Treasure": {
			distance: 20,
		},
	},
	"Small Minigun Planet": {
		"Planet Surface": {
			distance: 1,
		},
		"Ying Air": {
			distance: 15,
		},
	},
	"Planet Surface": {
		"Jumbo Yellow Flower": {
			distance: 1,
		},
		"Buttercup": {
			distance: 1,
		},
		"Jericho": {
			distance: 5,
			note: "Rare",
		},
		"Golden Yellow Flower": {
			distance: 5,
			note: "Rare",
		},
		"Blue Bubble Gauntlet": {
			distance: 5,
			note: "Rare",
		},
	},
	"Moon Debris": {
		"Stoney Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Planet Debris": {
		"Richmond": {
			distance: 1,
		},
		"Stoney Air": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
		},
	},
	"Small Yellow Flower": {
		"Small Cannon Pyramid": {
			distance: 10,
			note: "Chance for 3",
		},
		"Ying Forest": {
			distance: 1,
		},
		"Ying Air": {
			distance: 1,
		},
		"Yellow Flower City": {
			distance: 5,
		},
		"Small Yellow Flower Treasure": {
			distance: 10,
		},
		"Small Yellow Flower Meme Treasure": {
			distance: 5,
		},
		"SYF Blue Rings": {
			distance: 40,
		},
	},
	"Small Yellow Flower Meme Treasure": {
		"Moon Flower": {
			distance: 20,
		},
		"Quicksand Grass": {
			distance: 50,
		},
		"Small White Flower": {
			distance: 50,
		},
	},
	"Yellow Flower City": {
		"Small Cannon Pyramid": {
			distance: 10,
		},
		"Quicksand Grass": {
			distance: 5,
		},
		"Yellow Flower City Secret": {
			distance: 20,
		},
		"Pure Menger Sponge": {
			distance: 20,
		},
	},
	"Yellow Flower City Secret": {
		"Large Cannon Pyramid": {
			distance: 5,
		},
	},
	"Small Cannon Pyramid": {
		"Small Cannon Pyramid Treasure": {
			distance: 5,
		},
		"Small Cannon Pyramid Special Treasure": {
			distance: 15,
		},
	},
	"Small Cannon Pyramid Special Treasure": {
		"Jumbo Yellow Flower": {
			distance: 1,
		},
		"Ying Forest": {
			distance: 1,
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
		"Ying Forest": {
			distance: 1,
		},
	},
	"Quicksand Grass": {
		"Purple House": {
			distance: 10,
			note: "Level 10",
		},
		"Quicksand Grass Level 11": {
			distance: 10,
		},
	},
	"Quicksand Grass Level 11": {
		"Quicksand Grass Basement": {
			distance: 5,
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
			distance: 1,
		},
		"Small White Flower Maze": {
			distance: 20,
		},
		"Small White Flower Alpha Cube Treasure": {
			distance: 10,
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
	for (const b in inputEdges[a as nodeName]) {
		if (inputEdges[a as nodeName]![b as nodeName]!.distance == Infinity) inputEdges[a as nodeName]![b as nodeName]!.distance = 100;
	}
}

export { inputEdges };
