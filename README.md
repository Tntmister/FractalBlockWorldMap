An attempt at "mapping" Fractal Block World using a node graph approach, where each location is a "node", and each location you shrink down to is an "edge".

# Running locally

First, run the development server:

```bash
npm run dev
```

The page will then be availabe on [http://localhost:3000](http://localhost:3000).

# Contributing

Make sure to run

```bash
npm install && npm run prepare
```

to use the configured ESLint and Prettier rules.

# Data

All data is stored in the 'src\app\data' folder, with a respective file for each data type.

## Nodes

A node describes a general location, it's supposed to be more human-readable than printing out the path in the in-game terminal.

### Blue Active Zones

By default every node is an 'up' chunk, and blue active zones are declared at the first 'down' chunk of the blue active zone, with the terminal chunk specified in the "nodeName" property.

### Images

Screenshots must be taken using the ingame screenshot console command with no hud 'screenshot no_hud' and Steam screenshots must be disabled with the command 'set display.screenshot.use_steam false'. Screenshots must also be of format 'webp' and be well compressed. (~200-500kb)

Place images of a location on the 'public\images\nodes' location with the filename being the exact name of the node. (Support for multiple images coming soon)

## Edges

Edges can be thought of as the "transition" between 2 nodes. They don't describe an actual location, moreso the requirments for going from one place to another.

Secret locations that require a blue ring are still shown but with an icon describing that the location is not directly acessible.

### Images

If an image would help traversing an edge, you can also add an image in the 'public\images\edges' folder with the name format '$from - $to.webp' to add a tooltip image on hovering an edge.

## Monsters

I imported all monsters from the latest [Monster Manual](http://danthemanhathaway.com/ComputerGames/FractalBlockWorld/ReleaseMisc/XarMonsterManual/FBW_MonsterManual.pdf), but there might be monsters not included in there.

Right now monsters only include information about what they drop. (Maybe in the future I'll add a bestiary with more detailed information, like HP values and specific mechanics)

# Attribution

Fractal Block World by Dan Hathaway.

Special thanks to OldEclipse and the rest of the contributors to the "Inner Mapping Theory" diagram on the official Discord server, which helped me simplify parts of how i initially arranged my data.
