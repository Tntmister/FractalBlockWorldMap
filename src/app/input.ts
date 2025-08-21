import { InputGraph, InputNode } from './types';

export const inputNodes = [
	{
		name: 'Ying Forest',
		upgrades: ['Cannon', 'Plasma', 'Health']
	},
	{
		name: 'Tutorial'
	},
	{
		name: 'Tutorial Island'
	},
	{
		name: 'Small Yellow Flower',
		upgrades: ['Plasma', 'Health']
	},
	{
		name: 'Jumbo Yellow Flower'
	},
	{
		name: 'Small Black Flower',
		upgrades: ['Health', 'Minigun', 'Laser', 'Cannon', 'Plasma'],
		items: ['Armor']
	},
	{
		name: 'Small Cannon Pyramid',
		upgrades: ['Cannon'],
		items: ['Laser', 'Rocket', 'Minigun', 'Cannon']
	},
	{
		name: 'Small White Flower',
		upgrades: ['Health', 'Homing', 'Plasma', 'Nuke', 'Rocket'],
		items: ['Armor', 'Nuke', 'Rocket', 'Plasma', 'Homing', 'Minigun', 'Black Hole', 'EMP']
	},
	{
		name: 'Upgraded Small White Flower',
		upgrades: ['Health', 'Homing', 'Plasma', 'Nuke', 'Rocket'],
		items: [
			'Armor',
			'Nuke',
			'Rocket',
			'Plasma',
			'Homing',
			'Minigun',
			'Black Hole',
			'EMP',
			'Railgun',
			'Gold'
		]
	},
	{
		name: 'Ying Flower'
	},
	{
		name: 'Ying Flower Shells'
	},
	{
		name: 'Ying World'
	},
	{
		name: 'Ying Cave Island'
	},
	{
		name: 'Ying Cave Island Layer 1',
		upgrades: ['Cannon', 'Plasma']
	},
	{
		name: 'Ying Cave Island Layer 2'
	},
	{
		name: 'Ying Cave Island Layer 3',
		items: ['Armor'],
		upgrades: ['Laser']
	},
	{
		name: 'Ying Cave Island Layer 4',
		upgrades: ['Health', 'Minigun']
	},
	{
		name: 'Spider Air',
		items: ['Rocket', 'Railgun']
	},
	{
		name: 'Baby Spider Air',
		items: ['Minigun', 'Railgun']
	},
	{
		name: 'Orange',
		upgrades: ['Rocket'],
		items: ['Nuke']
	},
	{
		name: 'Outer Crust A'
	},
	{
		name: 'Outer Crust B'
	},
	{
		name: 'Outer Mantle'
	},
	{
		name: 'Outer Mantle Secret',
		upgrades: ['Rocket', 'Minigun']
	},
	{
		name: 'Red-Green Elevator'
	},
	{
		name: 'Inner Crust'
	},
	{
		name: 'Inner Mantle'
	},
	{
		name: 'Huntington'
	},
	{
		name: 'Blue Bubble Gauntlet'
	},
	{
		name: 'Blue Bubble'
	},
	{
		name: 'Botany Lab'
	},
	{
		name: 'Infinity Flower'
	},
	{
		name: 'Ying Island'
	},
	{
		name: 'Menace Hive',
		items: ['Health'],
		upgrades: ['Minigun', 'Rocket', 'Cannon']
	},
	{
		name: 'Tau Cave Flower'
	},
	{
		name: 'Tau Cave Moon'
	},
	{
		name: 'Ying Air Cube',
		upgrades: ['Plasma', 'Cannon'],
		items: ['Plasma']
	},
	{
		name: 'Ying Air'
	},
	{
		name: 'Ying Air Core',
		upgrades: ['Rocket']
	},
	{
		name: 'Noob Maze'
	},
	{
		name: 'Ying World Library'
	},
	{
		name: 'I1'
	},
	{
		name: 'I2'
	},
	{
		name: 'I3'
	},
	{
		name: 'Burlington'
	},
	{
		name: 'Outer Space Level 0'
	},
	{
		name: 'Outer Space Level 1'
	},
	{
		name: 'Outer Space Level 2'
	},
	{
		name: 'Hell'
	},
	{
		name: 'Stable Singletons'
	},
	{
		name: 'Grey Lattice',
		items: ['Armor']
	},
	{
		name: 'Slow Exit Maze'
	},
	{
		name: 'Mylantis'
	},
	{
		name: 'Alpha Menger Sponge'
	},
	{
		name: 'Happy Land'
	},
	{
		name: 'Small Noob Flower',
		upgrades: ['Health', 'Plasma']
	},
	{
		name: 'Quicksand Grass'
	},
	{
		name: 'Quicksand Basement',
		upgrades: ['Laser', 'EMP'],
		items: ['Nuke']
	},
	{
		name: 'Purple House',
		upgrades: ['EMP', 'RejuvenX']
	},
	{
		name: 'Large Cannon Pyramid',
		upgrades: ['Cannon', 'Railgun', 'Health', 'Nuke'],
		items: ['Laser', 'Railgun']
	},
	{
		name: 'Fir Tree'
	},
	{
		name: 'Alpha Cube',
		items: ['Health', 'Armor'],
		upgrades: ['Laser', 'Rocket', 'EMP', 'Black Hole', 'Railgun']
	},
	{
		name: 'Health Tower',
		upgrades: ['Health', 'Laser', 'Minigun']
	},
	{
		name: 'Pure Menger Sponge'
	},
	{
		name: 'Pure Menger Sponge Treasure',
		upgrades: ['Nuke']
	},
	{
		name: 'Stoney Air'
	},
	{
		name: 'Mossy Air'
	},
	{
		name: 'Stoney Air Cave',
		upgrades: ['Health', 'Plasma', 'Cannon', 'Laser'],
		items: ['Nuke', 'Minigun', 'Cannon', 'EMP', 'Laser']
	},
	{
		name: 'Yellow Cube'
	},
	{
		name: 'Stoney Sanctuary'
	},
	{
		name: 'Green Shrink Box'
	},
	{
		name: 'Apple Tree'
	},
	{
		name: 'Apple',
		upgrades: ['EMP', 'Laser', 'Cannon', 'Plasma'],
		items: ['EMP', 'Rocket']
	},
	{
		name: 'Upgrade Station',
		upgrades: ['Rocket'],
		items: ['Homing', 'Rocket', 'Cannon', 'Minigun']
	},
	{
		name: 'Yellow Flower City'
	},
	{
		name: 'Green Cube'
	},
	{
		name: 'Gated Community'
	},
	{
		name: 'Yellow Flower City Secret Treasure',
		upgrades: ['Minigun'],
		items: ['Railgun', 'Rocket', 'Minigun', 'Laser', 'Armor', 'Health']
	}
] as const satisfies readonly InputNode[];

export const inputGraph: InputGraph = {
	nodes: inputNodes,
	edges: {
		'Tutorial': {
			'Ying Forest': {
				distance: 0
			},
			'Noob Maze': {
				distance: 0
			},
			'Small Yellow Flower': {
				distance: 0
			},
			'Stable Singletons': {
				distance: 0
			},
			'Happy Land': {
				distance: 0
			}
		},
		'Stable Singletons': {
			'I1': {
				distance: 100
			},
			'I2': {
				distance: 100
			},
			'I3': {
				distance: 100
			},
			'Hell': {
				distance: 100
			}
		},
		'Ying Forest': {
			'Small Noob Flower': {
				distance: 0
			},
			'Small Yellow Flower': {
				distance: 5
			},
			'Small Black Flower': {
				distance: 0
			},
			'Quicksand Grass': {
				distance: 0,
				oneWay: true,
				note: 'Around save points'
			},
			'Menace Hive': {
				distance: 20,
				note: 'Depth 12+, hanging from branches'
			}
		},
		'Small Black Flower': {
			'Apple Tree': {
				distance: 10,
				note: 'x4'
			}
		},
		'Apple Tree': {
			'Small White Flower': {
				distance: 5
			},
			'Apple': {
				distance: 20
			},
			'Upgrade Station': {
				distance: 30,
				note: 'Top of tree'
			}
		},
		'Upgrade Station': {
			'Apple Tree': {
				distance: 0
			}
		},
		'Ying Island': {
			'Ying Air': {
				distance: 0
			},
			'Ying Forest': {
				distance: 0
			},
			'Pure Menger Sponge': {
				distance: 5
			},
			'Small Cannon Pyramid': {
				distance: 5
			}
		},
		'Tutorial Island': {
			'Small Cannon Pyramid': {
				distance: 5
			},
			'Small White Flower': {
				distance: 0,
				note: 'Under Tutorial Island'
			},
			'Tutorial': {
				distance: 0
			}
		},
		'Ying Air': {
			'Ying Air Cube': {
				distance: 1
			},
			'Ying Air Core': {
				distance: 30,
				note: 'Shrink multiple times'
			}
		},
		'Ying Air Cube': {
			'Ying Forest': {
				distance: 0
			}
		},
		'Ying Flower': {
			'Ying Flower Shells': {
				distance: 0
			}
		},
		'Ying Flower Shells': {
			'Ying World': {
				distance: 0
			},
			'Green Cube': {
				distance: Infinity,
				note: 'Shell 2'
			}
		},
		'Ying World': {
			'Ying Island': {
				distance: 0
			},
			'Ying Cave Island': {
				distance: 0
			},
			'Tutorial Island': {
				distance: 0
			},
			'Grey Lattice': {
				distance: 0
			},
			'Gated Community': {
				distance: 5
			}
		},
		'Gated Community': {
			'Ying World Library': {
				distance: 0
			},
			'Noob Maze': {
				distance: 0
			},
			'Small Noob Flower': {
				distance: 0
			},
			'Small Cannon Pyramid': {
				distance: 0,
				note: 'x3'
			}
		},
		'Ying Cave Island': {
			'Ying Cave Island Layer 1': {
				distance: 5
			},
			'Ying Forest': {
				distance: 0
			}
		},
		'Ying Cave Island Layer 1': {
			'Ying Cave Island Layer 2': {
				distance: 15
			},
			'Ying Cave Island': {
				distance: 15,
				pinkRing: true
			}
		},
		'Ying Cave Island Layer 2': {
			'Ying Cave Island Layer 3': {
				distance: 15
			},
			'Ying Forest': {
				distance: 0
			},
			'Jumbo Yellow Flower': {
				distance: 10
			},
			'Ying Cave Island': {
				distance: 15,
				pinkRing: true
			}
		},
		'Ying Cave Island Layer 3': {
			'Ying Cave Island Layer 4': {
				distance: 15
			},
			'Ying Cave Island': {
				distance: 15,
				pinkRing: true
			}
		},
		'Ying Cave Island Layer 4': {
			'Ying Forest': {
				distance: 0
			},
			'Spider Air': {
				distance: 5
			},
			'Ying Cave Island': {
				distance: 5,
				pinkRing: true
			}
		},
		'Spider Air': {
			'Baby Spider Air': {
				distance: 10
			}
		},
		'Baby Spider Air': {
			'Orange': {
				distance: 20,
				note: 'x7'
			},
			'Blue Bubble Gauntlet': {
				distance: 20
			},
			'Tau Cave Flower': {
				distance: 20
			}
		},
		'Menace Hive': {
			'Tau Cave Flower': {
				distance: 20
			},
			'Ying Forest': {
				distance: 0
			}
		},
		'Blue Bubble Gauntlet': {
			'Blue Bubble': {
				distance: Infinity
			}
		},
		'Blue Bubble': {
			'Botany Lab': {
				distance: Infinity
			}
		},
		'Botany Lab': {
			'Infinity Flower': {
				distance: Infinity
			}
		},
		'Orange': {
			'Stoney Air': {
				distance: 0
			},
			'Yellow Flower City': {
				distance: 0,
				note: 'On top'
			},
			'Outer Crust A': {
				distance: 10
			}
		},
		'Outer Crust A': {
			'Ying Air': {
				distance: 20
			},
			'Outer Crust B': {
				distance: 20
			}
		},
		'Outer Crust B': {
			'Outer Mantle': {
				distance: 20
			}
		},
		'Outer Mantle': {
			'Inner Crust': {
				distance: 20
			},
			'Blue Bubble': {
				distance: Infinity
			},
			'Spider Air': {
				distance: 0
			},
			'Red-Green Elevator': {
				distance: 5,
				note: 'Shrinks by 1'
			},
			'Outer Mantle Secret': {
				distance: 30,
				note: 'Yellow Cube'
			}
		},
		'Red-Green Elevator': {
			'Stoney Air': {
				distance: 0
			}
		},
		'Inner Crust': {
			'Inner Mantle': {
				distance: Infinity
			}
		},
		'Inner Mantle': {
			'Huntington': {
				distance: 30
			},
			'Red-Green Elevator': {
				distance: 5,
				note: 'Shrinks by 1'
			},
			'Spider Air': {
				distance: 0
			}
		},
		'Stoney Air': {
			'Stoney Air Cave': {
				distance: 0
			},
			'Yellow Cube': {
				distance: Infinity,
				note: 'Need to be small enough'
			},
			'Green Shrink Box': {
				distance: 0,
				note: 'Net shrink = 1'
			}
		},
		'Green Shrink Box': {
			'Small Yellow Flower': {
				distance: 10
			}
		},
		'Yellow Cube': {
			'Mossy Air': {
				distance: Infinity
			},
			'Stoney Sanctuary': {
				distance: Infinity
			},
			'Ying Forest': {
				distance: Infinity
			}
		},
		'Tau Cave Flower': {
			'Tau Cave Moon': {
				distance: Infinity
			},
			'Ying Forest': {
				distance: 5
			},
			'Ying Air': {
				distance: 0
			}
		},
		'Grey Lattice': {
			'Slow Exit Maze': {
				distance: 0
			}
		},
		'Pure Menger Sponge': {
			'Pure Menger Sponge Treasure': {
				distance: 10,
				note: 'Very Deep'
			}
		},
		'Slow Exit Maze': {
			'Ying Flower': {
				distance: 15,
				pinkRing: true
			}
		},
		'Outer Space Level 0': {
			'Outer Space Level 1': {
				distance: 10
			},
			'Mylantis': {
				distance: 10
			}
		},
		'Outer Space Level 1': {
			'Outer Space Level 2': {
				distance: 10
			}
		},
		'Outer Space Level 2': {
			'Ying Flower': {
				distance: 100
			},
			'Alpha Menger Sponge': {
				distance: 10
			}
		},
		'Small Yellow Flower': {
			'Small Cannon Pyramid': {
				distance: 10,
				note: 'x3'
			},
			'Ying Forest': {
				distance: 0
			},
			'Ying Air': {
				distance: 0
			},
			'Yellow Flower City': {
				distance: 10
			}
		},
		'Yellow Flower City': {
			'Small Cannon Pyramid': {
				distance: 10,
				note: 'Orange X towers guranteed jumbo yellow flower'
			},
			'Quicksand Grass': {
				distance: 5
			},
			'Yellow Flower City Secret Treasure': {
				distance: 20,
				note: 'Shrink until level 8'
			},
			'Pure Menger Sponge': {
				distance: 20,
				note: 'Shrink until level 8'
			}
		},
		'Small Cannon Pyramid': {
			'Jumbo Yellow Flower': {
				distance: 10,
				note: 'Small chance'
			}
		},
		'Jumbo Yellow Flower': {
			'Small Yellow Flower': {
				distance: 20,
				note: 'x5'
			},
			'Large Cannon Pyramid': {
				distance: 20,
				note: 'Shrink into waypoint room back'
			},
			'Ying Cave Island': {
				distance: 20
			}
		},
		'Large Cannon Pyramid': {
			'Small White Flower': {
				distance: 20
			},
			'Upgrade Station': {
				distance: 20
			}
		},
		'Quicksand Grass': {
			'Purple House': {
				distance: 10,
				note: 'Shrink until yellow tips on grass'
			},
			'Quicksand Basement': {
				distance: 10,
				note: 'Shrink until yellow tips on grass'
			}
		},
		'Purple House': {
			'Jumbo Yellow Flower': {
				distance: 5
			}
		},
		'Small White Flower': {
			'Alpha Cube': {
				distance: 10,
				note: 'Front-Right corner'
			},
			'Fir Tree': {
				distance: 10
			},
			'Quicksand Grass': {
				distance: 0
			}
		},
		'Alpha Cube': {
			'Small Black Flower': {
				distance: 30
			},
			'Health Tower': {
				distance: 15,
				note: 'Down-Left-Back Corner'
			}
		},
		'Health Tower': {
			'Quicksand Grass': {
				distance: 0
			}
		},
		'Fir Tree': {
			'Small White Flower': {
				distance: 10
			},
			'Small Black Flower': {
				distance: 10
			}
		}
	},
	root: {
		name: 'Outer Space Level 0'
	}
};
