import { inputNodes } from './input';

export type pickups =
	| 'Health'
	| 'Armor'
	| 'Plasma'
	| 'Cannon'
	| 'Laser'
	| 'Rocket'
	| 'Homing'
	| 'Minigun'
	| 'Railgun'
	| 'EMP'
	| 'Nuke'
	| 'Black Hole'
	| 'Gold';

export type InputNode = {
	name: string;
	info?: {
		upgrades?: pickups[]; // possible upgrades
		items?: pickups[]; // possible items
	};
};

export type nodeNames = (typeof inputNodes)[number]['name'];

type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	depth?: number; // actual depth ("level" number ingame)
	note?: string; // required keys/specifc method to enter
	oneWay?: boolean;
	pinkRing?: boolean; // is a pink ring -> ping sphere edge
	up?: boolean;
};

export interface InputGraph {
	nodes: readonly InputNode[];
	edges: {
		[from in nodeNames]?: {
			[to in nodeNames]?: edgeInfo;
		};
	};
	root: {
		name: nodeNames;
	};
}

export interface Edge extends edgeInfo {
	node: Node;
}

export interface Node extends InputNode {
	edges: Edge[];
}
