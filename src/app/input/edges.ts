import { InputEdges } from "../types";
import { nodeNames } from "./nodes";

const inputEdges: InputEdges = {
	"Tutorial 1": {
		"Happy Land": {
			distance: 0
		},
		"Ying Forest": {
			distance: 5,
			note: "Shrink into black cubes"
		}
	},
	"Tutorial 2": {
		"Tutorial 1": {
			distance: 0
		},
		"Stable Singletons": {
			distance: 0
		}
	},
	"Tutorial Chambers": {
		"Tutorial 2": {
			distance: 0
		},
		"Ying Forest": {
			distance: 0
		},
		"Noob Maze": {
			distance: 0
		},
		"Small Yellow Flower": {
			distance: 0
		}
	},
	"Stable Singletons": {
		"I1": {
			distance: 20
		},
		"Fanatic Lattice": {
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
	"Ying Forest": {
		"Ying Air": {
			distance: 0
		},
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
			note: "Save Points"
		},
		"Menace Hive": {
			distance: 20,
			note: "Depth 12+, hanging from branches"
		},
		"Unremembered Tower": {
			distance: 20,
			note: "Depth ?+"
		}
	},
	"Unremembered Tower": {
		"Mossy Basement": {
			distance: Infinity
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
	"Ying Deep Air": {
		"Ying Deep Air Cube": {
			distance: 5
		}
	},
	"Tutorial Island": {
		"Small White Flower": {
			distance: 0,
			note: "Under Island"
		},
		"Tutorial Chambers": {
			distance: 0
		},
		"Ying Island": {
			distance: 0
		}
	},
	"Ying Air": {
		"Ying Air Cube": {
			distance: 1
		},
		"Ying Deep Air": {
			distance: 10,
			note: "Shrink 10x"
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
		}
	},
	"Ying Cave Island Layer 3": {
		"Ying Cave Island Layer 4": {
			distance: 15
		}
	},
	"Ying Cave Island Layer 4": {
		"Ying Forest": {
			distance: 0
		},
		"Spider Air": {
			distance: 5
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
	"Buttercup": {
		"Health Tower": {
			distance: 0
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
			distance: 30
		},
		"Pink Tree": {
			distance: 0
		},
		"Imp Cave": {
			distance: 0
		}
	},
	"Infinity Flower": {
		"I1": {
			distance: 20
		},
		"Ying Air": {
			distance: 0
		}
	},
	"I1": {
		"Williston Spiral": {
			distance: 0
		},
		"Williston Field": {
			distance: 0,
			note: "Red Pillar"
		}
	},
	"Williston Spiral": {
		"Williston Field": {
			distance: 15
		},
		"Stoney Air": {
			distance: 0
		}
	},
	"Bristol": {
		"I2 Spiral": {
			distance: 5
		},
		"Small White Flower": {
			distance: 0
		},
		"I1": {
			distance: 0
		},
		"Bedroom": {
			distance: 0
		}
	},
	"I2 Spiral": {
		"Stoney Air": {
			distance: 0
		},
		"Fanatic Lattice": {
			distance: 10
		}
	},
	"EMP Castle": {
		"Fanatic Lattice": {
			distance: Infinity
		},
		"Blackberry": {
			distance: Infinity
		},
		"Zubeneschamali Castle": {
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
			distance: 0
		},
		"Williston Wall": {
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
		},
		"Pink Tree": {
			distance: 5
		},
		"Williston Trees": {
			distance: 5
		},
		"I2 Well": {
			distance: 0
		},
		"I2 Purple Well": {
			distance: 5
		},
		"Small White Flower": {
			distance: 0
		},
		"EMP Castle": {
			distance: 5
		},
		"Bristol": {
			distance: 10
		}
	},
	"Williston City": {
		"I1 Library": {
			distance: 0
		},
		"Stoney Air": {
			distance: 0
		},
		"Ying Forest": {
			distance: 0
		},
		"Small Cannon Pyramid": {
			distance: 0
		}
	},
	"Williston Wall": {
		"Fir Tree": {
			distance: 0
		}
	},
	"Williston Trees": {
		"I1": {
			distance: 0
		},
		"I2 WIG Flower": {
			distance: 5
		},
		"Red Apple Tree": {
			distance: 0
		},
		"Pink Tree": {
			distance: 5
		},
		"Small White Flower": {
			distance: 0
		},
		"Bristol": {
			distance: 10
		}
	},
	"I2 WIG Flower": {
		"Fanatic Lattice": {
			distance: 0
		}
	},
	"Fanatic Lattice": {
		"Fanatic Weed": {
			distance: 5
		},
		"Fanatic Air": {
			distance: 5
		},
		"Fanatic Spire": {
			distance: 10
		},
		"Nuke Radius Cave": {
			distance: 5
		},
		"Mirror Gate": {
			distance: Infinity
		}
	},
	"Mirror Gate": {
		"I3": {
			distance: Infinity
		}
	},
	"Common Gate": {
		"I3": {
			distance: Infinity
		}
	},
	"Nuke Radius Cave": {
		"I3 WIG Flower": {
			distance: Infinity
		}
	},
	"Fanatic Spire": {
		"Fanatic Lattice": {
			distance: 0
		},
		"Scorpius Flower": {
			distance: 5
		},
		"Fanatic Spire Scaffold": {
			distance: 5
		},
		"I2 Library": {
			distance: 0
		}
	},
	"I2 Library": {
		"Quicksand Grass": {
			distance: 0
		},
		"I3": {
			distance: Infinity
		}
	},
	"Fanatic Spire Scaffold": {
		"Fanatic Caves": {
			distance: 0
		},
		"Fanatic Weed": {
			distance: 0
		},
		"Fanatic Air": {
			distance: 0
		},
		"Buttercup": {
			distance: 5,
			note: "Inside Grey Pillars"
		}
	},
	"Fanatic Weed": {
		"Orange Flower": {
			distance: 5,
			note: "On walls"
		},
		"Montreal": {
			distance: 0
		},
		"Weed Ring": {
			distance: 10
		},
		"Small Cannon Gym": {
			distance: 5,
			note: "On floor"
		},
		"Laboratory Vine": {
			distance: 5
		}
	},
	"Small Cannon Gym": {
		"Fanatic Weed": {
			distance: 10
		}
	},
	"Weed Ring": {
		"EMP City": {
			distance: 15
		},
		"Fanatic Vine": {
			distance: 5
		},
		"Fanatic Weed": {
			distance: 5
		},
		"Fanatic Caves": {
			distance: 5
		},
		"Fanatic Air": {
			distance: 5
		},
		"Fanatic Island": {
			distance: 5
		},
		"Montreal": {
			distance: 20
		},
		"Scorpius Portal": {
			distance: 20
		}
	},
	"Scorpius Portal": {
		"Cardboard Box": {
			distance: 0
		},
		"Stoney Air": {
			distance: 0
		},
		"I1": {
			distance: 30
		},
		"Ying Air": {
			distance: 30
		}
	},
	"EMP City": {
		"Stoney Air": {
			distance: 0
		},
		"Small White Flower": {
			distance: 5
		},
		"Fanatic Weed": {
			distance: 20
		},
		"I2 WIG Flower": {
			distance: 20
		},
		"Fanatic Air": {
			distance: 20
		}
	},
	"Fanatic Air": {
		"Fanatic Island": {
			distance: 0
		},
		"Montreal": {
			distance: 0
		}
	},
	"Fanatic Island": {
		"Montreal": {
			distance: 5
		},
		"I2 Library": {
			distance: Infinity
		},
		"Willow Tree": {
			distance: 0
		},
		"Fanatic Vine": {
			distance: 0
		},
		"Fanatic Well": {
			distance: 0
		},
		"Fir Tree": {
			distance: 0
		},
		"Fanatic Caves": {
			distance: 0
		}
	},
	"Fanatic Caves": {
		"Fir Tree": {
			distance: 0
		},
		"Stoney Air": {
			distance: 0
		}
	},
	"Montreal": {
		"Ying Forest": {
			distance: 0
		},
		"Stoney Air": {
			distance: 0
		},
		"I1 Library": {
			distance: 0
		},
		"Infinity Flower": {
			distance: 0
		},
		"Red Apple Tree": {
			distance: 0
		},
		"Fir Tree": {
			distance: 5,
			note: "Inside Maze"
		}
	},
	"Mystic Vine": {
		"Toronto": {
			distance: Infinity
		}
	},
	"Toronto Vine": {
		"Toronto": {
			distance: Infinity
		}
	},
	"Toronto": {
		"Rainbow Flower": {
			distance: 0
		},
		"I3": {
			distance: Infinity,
			note: "Through Maze"
		}
	},
	"Fanatic Well": {
		"Williston Wall": {
			distance: 5
		}
	},
	"Fanatic Vine": {
		"Toronto Vine": {
			distance: Infinity,
			note: "Shrink into numbers"
		},
		"Small Black Flower": {
			distance: 0
		},
		"Fanatic Weed": {
			distance: 0
		},
		"Fanatic Grass": {
			distance: 0
		},
		"Scorpius Portal": {
			distance: 10,
			note: "Inside central shaft"
		},
		"Minigun Forest": {
			distance: 0
		}
	},
	"Fanatic Grass": {
		"Large Cannon Pyramid": {
			distance: 30
		}
	},
	"Minigun Forest": {
		"EMP City": {
			distance: 0
		}
	},
	"Willow Tree": {
		"Mystic Vine": {
			distance: 0
		},
		"EMP City": {
			distance: Infinity
		}
	},
	"I2 Well": {
		"Red Rose": {
			distance: 5
		},
		"Health Tower": {
			distance: 5
		}
	},
	"I2 Purple Well": {
		"Red Rose": {
			distance: 5
		},
		"Health Tower": {
			distance: 5
		}
	},
	"Imp Cave": {
		"Gnole Cave": {
			distance: 0
		},
		"Buttercup": {
			distance: 0
		},
		"Orange": {
			distance: 0
		},
		"Cardboard Box": {
			distance: 0
		},
		"Ying Forest": {
			distance: 0
		}
	},
	"Gnole Cave": {
		"Demon Cave": {
			distance: 3
		},
		"Buttercup": {
			distance: 0
		},
		"Orange": {
			distance: 0
		},
		"Cardboard Box": {
			distance: 0
		},
		"Infinity Flower": {
			distance: 10
		}
	},
	"Demon Cave": {
		"Orc Cave": {
			distance: 5
		},
		"Infinity Flower": {
			distance: 5
		},
		"Jumbo Yellow Flower": {
			distance: 0
		},
		"Buttercup": {
			distance: 0
		},
		"Cardboard Box": {
			distance: 0
		}
	},
	"Orc Cave": {
		"Beholder Cave": {
			distance: 7
		},
		"Infinity Flower": {
			distance: 0
		},
		"Buttercup": {
			distance: 0
		},
		"Jumbo Yellow Flower": {
			distance: 0
		}
	},
	"Beholder Cave": {
		"Ying Flower": {
			distance: 0
		},
		"Orange": {
			distance: 0
		},
		"Pink Tree": {
			distance: 0
		},
		"Cardboard Box": {
			distance: 0
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
		"Orange Ground City": {
			distance: 0,
			note: "On top"
		},
		"Outer Crust A": {
			distance: 10
		}
	},
	"Orange Ground City": {
		"Yellow Flower City": {
			distance: 0
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
			distance: 20
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
	"Slow Exit Maze": {
		"Easy Minigun Tower": {
			distance: 0
		}
	},

	"Pure Menger Sponge": {
		"Pure Menger Sponge Treasure": {
			distance: 10,
			note: "Very Deep"
		}
	},
	"Outer Space -1": {
		"Outer Space 0": {
			distance: Infinity
		}
	},
	"Outer Space 0": {
		"Outer Space 1": {
			distance: 20
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
		"Yellow Flower City Secret": {
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
			note: "Waypoint Room"
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
};

for (const a in inputEdges) {
	for (const b in inputEdges[a as nodeNames]) {
		if (inputEdges[a as nodeNames]![b as nodeNames]!.distance == Infinity) inputEdges[a as nodeNames]![b as nodeNames]!.distance = 100;
	}
}

export { inputEdges };
