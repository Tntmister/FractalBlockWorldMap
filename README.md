An attempt at "mapping" the Fractal Block World map using a node graph approach, where each location is a "node", and each location you shrink down to is an "edge".

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
npm install && npm run prepare
```
to use the configured ESLint and Prettier rules.

# Data
All data is stored in the 'src\app\input' folder, with a respective file for each data type.

## Nodes
Node Type:
```typescript
type InputNode = {
	name: string;
	monsters?: monsterName[];
	upgrades?: (upgrade | upgrade[])[];
	items?: item[];
	notes?: string;
	interactables?: interactable[];
	noEscape?: boolean; // no accessible grow rings
	trophy?: boolean;
	secretTrophy?: boolean | number; // some locations have more than 1 secret trophy
	// if declared, defines this node as a blue "active zone", with "nodeName" as the respective blue ring destination node
	blueActiveZoneDestination?: {
		nodeName: string;
		note?: string;
	};
	// rare case where a pink sphere in a node might be hidden inside a location at the same level (unremembered tower secret room)
	pinkSphereDestination?: {
		nodeName: string;
		note?: string;
	};
};
```
Even if a location has multiple 'areas', such as having to shrink/grow once, they all belong in a single node as long as it doesnt make the node layout more confusing, otherwise seperate that location into 2 nodes.

### Blue Active Zones
By default every node is an 'up' chunk, and blue active zones are declared at the first 'down' chunk of the blue active zone, with the terminal chunk specified in the "nodeName" property.

### Images
Screenshots must be taken using the ingame screenshot console command with no hud 'screenshot no_hud' and Steam screenshots must be disabled with the command 'set display.screenshot.use_steam false'.
Screenshots must also be of format 'webp' and be well compressed. (~200-500kb)

Place images of a location on the 'public\images\nodes' location with the filename being the exact name of the node. (Support for multiple images coming soon)

## Edges
Edge Type:
```typescript
type edgeInfo = {
	distance: number; // how hard is it to traverse to ingame (enemy difficulty/time)
	note?: string; // specifc method to enter
	requiresKey?: key;
	whiteBoxDevice?: boolean;
	arcade?: boolean;
	impassable?: boolean; // to indicate that the destination is not directly accessible, only through waypoints/blue rings (i.e. WIG Prison and Violet Shells)
	// internal, used for pathfinding
	blueRing?: boolean;
	pinkRing?: boolean;
	up?: boolean;
};

type InputEdges = {
	[from in nodeNames]?: {
		[to in nodeNames]?: edgeInfo;
	};
};
```
Edges are declared as objects with the keys being the node names to make writing them out easier. At runtime they are converted into a proper Map.
Secret locations that require a blue ring are still shown but with an icon indicating that that location is not directly acessible.

### Images
If an image would help traversing an edge, you can also add an image in the 'public\images\edges' folder with the name format '$from - $to.webp' to add a tooltip image on hovering an edge.

## Monsters
I imported all monsters from the latest [Monster Manual](http://danthemanhathaway.com/ComputerGames/FractalBlockWorld/ReleaseMisc/XarMonsterManual/FBW_MonsterManual.pdf), but there might be monsters not included in there.

```typescript
type monster = {
	name: string;
	drop?: upgrades | items;
};
```
Right now monsters only include information about what they drop. (Maybe in the future I'll add a bestiary with more detailed information, like HP values and specific mechanics, like Lampreys bypassing armor)

# Attribution
Fractal Block World by Dan Hathaway.

Special thanks to OldEclipse and the rest of the contributors to the "Inner Mapping Theory" diagram on the official Discord server, which helped me simplify parts of how i initially arranged some nodes/edges.
