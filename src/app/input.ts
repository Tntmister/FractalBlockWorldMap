import { InputGraph, InputNode } from './types';

export const inputNodes = [
	{
		name: 'Ying Forest'
	},
	{
		name: 'Tutorial'
	},
	{
		name: 'Small Yellow Flower'
	},
	{
		name: 'Small White Flower',
		upgrades: ['Health'],
		items: ['Armor', 'Nuke']
	},
	{
		name: 'Ying Flower'
	},
	{
		name: 'Ying Island'
	},
	{
		name: 'Ying Air Cube'
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
		name: 'Outer Space'
	}
] as const satisfies readonly InputNode[];

export const inputGraph: InputGraph = {
	nodes: inputNodes,
	edges: {
		'Tutorial': {
			'Ying Flower': {
				distance: 0
			}
		},
		'Ying Island': {
			'Ying Air': {
				distance: 0,
				depth: 1
			},
			'Ying Forest': {
				distance: 0,
				depth: 1
			},
			'Small White Flower': {
				distance: 0,
				depth: 1,
				note: 'Under Tutorial Island'
			},
			'Tutorial': {
				distance: 0,
				note: 'Inside Tutorial Island'
			}
		},
		'Ying Air': {
			'Ying Air Cube': {
				distance: 1,
				depth: 1
			}
		},
		'Ying Flower': {
			'Ying Island': {
				distance: 0,
				depth: 1
			}
		},
		'Outer Space': {
			'Ying Flower': {
				distance: 100,
				depth: 20
			}
		}
	},
	root: {
		name: 'Outer Space',
		depth: 4
	}
};
