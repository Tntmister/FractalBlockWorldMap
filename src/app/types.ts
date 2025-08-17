import { inputNodes } from './input';

export type stats =
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
	| 'Black Hole';

export type InputNode = {
	name: string;
	upgrades?: stats[]; // possible upgrades
	items?: stats[]; // possible items
};

export type nodeNames = (typeof inputNodes)[number]['name'];

type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	depth?: number; // actual depth ("level" number ingame)
	note?: string; // required keys/specifc method to enter
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
		depth: number;
	};
}

export interface Edge extends edgeInfo {
	node: Node;
}

export interface Node {
	name: nodeNames;
	edges: Edge[];
	upgrades?: stats[];
	items?: stats[];
	pinkRing?: boolean;
	pinkSphere?: boolean;
}
