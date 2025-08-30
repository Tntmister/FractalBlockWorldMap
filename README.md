An attempt at "mapping" the Fractal Block World map using a node graph approach, where each location is a "node", and each location you shrink down to is an "edge"

# Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The page will then be availabe on [http://localhost:3000](http://localhost:3000).

# Contributing

Make sure to run

```bash
npm install
```

to use the configured ESLint and Prettier rules.

# Data
All data is stored in the 'src\app\input' folder, with a respective file for each data type

## Nodes
Node Type:
```typescript
type InputNode = {
	name: string;
	monsters?: monsterName[];
	upgrades?: (upgrades | upgrades[])[]; // possible upgrades (including random ones)
	items?: items[]; // possible items
	interactables?: interactables[];
	noEscape?: boolean; // if there is no way to grow out of this node
	trophy?: boolean;
	secretTrophy?: boolean | 2 | 3; // some locations have more than 1 secret trophy
};
```
Even if a location has multiple properties spread around iself, such as having to shrink/grow once, they all belong in a single node as long as it doesnt impact the navigability of its edges, otherwise seperate that location into 2 nodes.

### Images
Place images of a location on the 'public\images\nodes' location with the filename being the exact name of the node with extension .jpg and the images will appear automatically. (Support for multiple images coming soon)

## Edges
Edge Type:
```typescript
type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	note?: string; // specifc method to enter
	requiresKey?: keyTypes;
};

type InputEdges = {
	[from in nodeNames]?: {
		[to in nodeNames]?: edgeInfo;
	};
};
```
Edges are declared as objects with the keys being the node names to make writing them out easier. At runtime they are converted into a proper Map.

### Images
If an image would help traversing an edge, you can also add an image in the 'public\images\edges' folder with the name format '$from - $to' with extension .jpg to add a tooltip image on hovering an edge.

## Monsters
I imported all monsters from the latest [Monster Manual](http://danthemanhathaway.com/ComputerGames/FractalBlockWorld/ReleaseMisc/XarMonsterManual/FBW_MonsterManual.pdf), but there might be monsters not included in there.

```typescript
type monster = {
	name: string;
	drop?: upgrades | items;
};
```
Right now monsters only include information about what they drop. (Maybe in the future I'll add a bestiary with more detailed information, like HP values and specific mechanics, like Lampreys bypassing armor)
