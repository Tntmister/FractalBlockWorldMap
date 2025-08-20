import { InputGraph, InputNode } from './types';

export const inputNodes = [
	{
		name: 'Ying Forest',
		info: {
			upgrades: ['Cannon', 'Plasma', 'Health']
		}
	},
	{
		name: 'Tutorial'
	},
	{
		name: 'Tutorial Island'
	},
	{
		name: 'Small Yellow Flower',
		info: {
			upgrades: ['Plasma', 'Health']
		}
	},
	{
		name: 'Jumbo Yellow Flower'
	},
	{
		name: 'Small Black Flower',
		info: {
			upgrades: ['Health', 'Minigun', 'Laser', 'Cannon', 'Plasma'],
			items: ['Armor']
		}
	},
	{
		name: 'Small Cannon Pyramid',
		info: {
			upgrades: ['Cannon'],
			items: ['Laser', 'Rocket', 'Minigun', 'Cannon']
		}
	},
	{
		name: 'Small White Flower',
		info: {
			upgrades: ['Health'],
			items: ['Armor', 'Nuke', 'Rocket', 'Plasma', 'Homing']
		}
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
		info: {
			upgrades: ['Cannon', 'Plasma']
		}
	},
	{
		name: 'Ying Cave Island Layer 2'
	},
	{
		name: 'Ying Cave Island Layer 3',
		info: {
			items: ['Armor'],
			upgrades: ['Laser']
		}
	},
	{
		name: 'Ying Cave Island Layer 4',
		info: {
			upgrades: ['Health', 'Minigun']
		}
	},
	{
		name: 'Spider Air',
		info: {
			items: ['Rocket', 'Railgun']
		}
	},
	{
		name: 'Baby Spider Air',
		info: {
			items: ['Minigun', 'Railgun']
		}
	},
	{
		name: 'Orange'
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
		name: 'Ying Island'
	},
	{
		name: 'Tau Cave Flower'
	},
	{
		name: 'Tau Cave Moon'
	},
	{
		name: 'Ying Air Cube',
		info: {
			items: ['Plasma']
		}
	},
	{
		name: 'Ying Air'
	},
	{
		name: 'Noob Maze'
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
		info: {
			items: ['Armor']
		}
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
		info: {
			upgrades: ['Health', 'Plasma']
		}
	},
	{
		name: 'Quicksand Grass'
	},
	{
		name: 'Quicksand Grass Basement',
		info: {
			upgrades: ['Laser', 'EMP'],
			items: ['Nuke']
		}
	},
	{
		name: 'Large Cannon Pyramid',
		info: {
			upgrades: ['Cannon', 'Railgun', 'Health'],
			items: ['Laser', 'Railgun']
		}
	},
	{
		name: 'Fir Tree'
	},
	{
		name: 'Alpha Cube',
		info: {
			items: ['Health', 'Armor'],
			upgrades: ['Laser', 'Rocket', 'EMP', 'Black Hole', 'Railgun']
		}
	},
	{
		name: 'Pure Menger Sponge'
	},
	{
		name: 'Stoney Air'
	},
	{
		name: 'Stoney Air Cave',
		info: {
			upgrades: ['Health', 'Plasma', 'Cannon', 'Laser'],
			items: ['Nuke', 'Minigun', 'Cannon', 'EMP', 'Laser']
		}
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
		info: {
			upgrades: ['EMP', 'Laser', 'Cannon', 'Plasma'],
			items: ['EMP', 'Rocket']
		}
	},
	{
		name: 'Upgrade Station',
		info: {
			upgrades: ['Rocket'],
			items: ['Homing', 'Rocket', 'Cannon', 'Minigun']
		}
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
			'Small Black Flower': {
				distance: 0
			},
			'Quicksand Grass': {
				distance: 0,
				oneWay: true,
				note: 'Around save points'
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
			'Pure Menger Sponge': {
				distance: 5
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
		'Orange': {
			'Stoney Air': {
				distance: 0
			}
		},
		'Stoney Air': {
			'Stoney Air Cave': {
				distance: 0
			},
			'Yellow Cube': {
				distance: 10,
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
			'Ying Air': {
				distance: 0
			}
		},
		'Grey Lattice': {
			'Slow Exit Maze': {
				distance: 0
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
				distance: 10,
				note: 'x5'
			},
			'Large Cannon Pyramid': {
				distance: 30,
				note: 'Secret below rocket room'
			}
		},
		'Quicksand Grass': {
			'Quicksand Grass Basement': {
				distance: 30
			}
		},
		'Small White Flower': {
			'Alpha Cube': {
				distance: 10
			},
			'Fir Tree': {
				distance: 10
			}
		},
		'Alpha Cube': {
			'Small Black Flower': {
				distance: 30
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
