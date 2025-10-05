import { InputNode } from "../../types";
import { monsterNames } from "./monsters";

type InputNodeSpecific = InputNode & {
	monsters?: monsterNames[];
};

const INPUT_NODES = [
	{
		name: "Ying Forest",
		interactables: ["Waypoint", "Save", "Respawn", "Bookmark", "Out-Only Waypoint"],
		notes: "Secret combination to reach Oranges is shrinking in the sequence Floor -> Branch -> Floor -> Branch -> Floor -> Floor -> Floor",
	},
	{
		name: "Ying Tree",
		blueActiveZoneDestination: {
			nodeName: "Ying Tree",
		},
		notes: "There is a map at the same level of the Ying Forest and Sub Treasure",
	},
	{
		name: "Ying Tree Treasure",
		items: ["300 Gold"],
		interactables: [
			"Blue Ring",
			"Waypoint",
			"Save",
			"Buy Station",
			"Markers",
			"Common Sell Station",
		],
	},
	{
		name: "Ying Forest Depth 50+",
	},
	{
		name: "Tutorial 1",
		items: ["10 Gold"],
		interactables: ["Save", "Pink Ring", "Blue Ring"],
		blueActiveZoneDestination: {
			nodeName: "Tutorial 1",
		},
	},
	{
		name: "Tutorial 2",
		items: ["40 Second Yellow Key", "35 Gold"],
		interactables: ["Pink Ring", "Respawn"],
		secretTrophy: 2,
		notes: "Secret Trophy 1: Below the dark concrete in the pink ring tutorial room\nSecret Trophy 2: ",
	},
	{
		name: "Tutorial Secret",
		secretTrophy: true,
	},
	{
		name: "EMERGENCY",
		interactables: ["Save", "Waypoint"],
	},
	{
		name: "EMERGENCY Secret",
		items: ["Gold"],
		interactables: ["Waypoint", "Out-Only Waypoint"],
		secretTrophy: true,
	},
	{
		name: "Safety Doppelganger",
		interactables: ["Save", "Waypoint", "Pink Ring"],
	},
	{
		name: "Fire Rate Moon",
		interactables: ["Save", "Pink Sphere", "Buy Station", "Pink Ring", "Waypoint"],

		notes: "After using the dangerous shrink, you must pass through a White Box Device if you want to leave without going inside the moon.\nThe central shaft is much faster as you don't have to shrink and grow past the plugs, but is also filled with Red Lampreys",
	},
	{
		name: "Fire Rate Moon Treasure",
		interactables: ["Pink Ring", "Waypoint", "Save"],
		items: ["600 Gold"],
		trophy: true,
	},
	{
		name: "Tutorial Chambers",
		interactables: ["Save", "Respawn", "Pink Sphere", "Blue Ring"],
	},
	{
		name: "Tutorial Island",
		interactables: ["Respawn", "Save"],
	},
	{
		name: "Small Yellow Flower",
		interactables: ["Pink Sphere", "Save"],
		items: ["Shield"],
	},
	{
		name: "Small Yellow Flower Meme Treasure",
		interactables: ["Save"],
		notes: "How to enter: From outside the treasure, facing BACK, shrink towards the bottom left of the bottom left red bordered black cube of the glass border, then keep shrinking until the diagonal concrete block becomes cement.",
	},
	{
		name: "Small Yellow Flower Treasure",
		interactables: ["Pink Ring", "Save"],
		items: ["1000 EXP"],
		notes: "Random Health x3 and 600% Armor are a 15% chance",
		noEscape: true,
		trophy: true,
	},
	{
		name: "SYF Blue Rings",
		secretTrophy: true,
		interactables: ["Blue Ring"],
	},
	{
		name: "Jumbo Yellow Flower",
		interactables: [
			"Pink Sphere",
			"Pink Ring",
			"Waypoint",
			"Out-Only Waypoint",
			"Save",
			"Respawn",
		],
		items: ["5000 EXP"],
		trophy: true,
		secretTrophy: true,
		notes: "Secret Trophy: There is a hole on the back side of the waypoint room pyramid.",
	},
	{
		name: "Small Black Flower",
		interactables: [
			"Pink Sphere",
			"Pink Ring",
			"Save",
			"Buy Station",
			"Upgrade Station",
			"Blue Ring",
		],
		items: ["Gold", "EXP"],
		blueActiveZoneDestination: {
			nodeName: "Small Black Flower",
			note: "Secret Entrance",
		},
		trophy: true,
	},
	{
		name: "Small Cannon Pyramid",
		interactables: ["Pink Sphere"],
		notes: "Pyramids with yellow top have special treasure",
	},
	{
		name: "Small Cannon Pyramid Treasure",
		interactables: ["Pink Ring", "Save"],
		trophy: true,
		items: ["1000 EXP"],
		notes: "20% chance for bonus treasure (Cannon Num Shots x1, Cannon Fire Rate x1, Cannon Velocity x1, Cannon Damage x1)",
	},
	{
		name: "Small Cannon Pyramid Special Treasure",
		items: ["1000 EXP"],
		interactables: ["Pink Ring", "Save"],
		trophy: true,
	},
	{
		name: "Small White Flower",
		interactables: ["Save", "Pink Sphere", "Pink Ring", "Buy Station"],
		items: ["200 Gold", "10000 EXP"],
		trophy: true,
	},
	{
		name: "Small White Flower Alpha Cube Treasure",
		interactables: ["Blue Ring"],
		items: ["500 Gold"],
		notes: "More will be added here in a future version of the game",
	},
	{
		name: "Small White Flower Maze",

		secretTrophy: true,
	},
	{
		name: "Ying Flower",
		items: ["500 EXP", "100 Gold"],
		interactables: [
			"Waypoint",
			"Save",
			"Bookmark",
			"Pink Sphere",
			"Out-Only Waypoint",
			"Blue Ring",
		],
		trophy: true,
		blueActiveZoneDestination: {
			nodeName: "Tutorial 2",
		},
	},
	{
		name: "Unremembered Tower",
		interactables: [
			"Waypoint",
			"Save",
			"Buy Station",
			"Markers",
			"Common Sell Station",
			"Pink Sphere",
		],
		items: ["Gold", "Green Key"],
		pinkSphereDestination: {
			nodeName: "Unremembered Tower Secret Room",
		},
		trophy: true,
	},
	{
		name: "Unremembered Tower Secret Totem",

		secretTrophy: true,
	},
	{
		name: "Unremembered Tower Secret Room",
	},
	{
		name: "Unremembered Tower Secret Shrine",
		interactables: ["Waypoint", "Pink Ring", "Blue Ring"],
		secretTrophy: true,
	},
	{
		name: "Ying World",
		noEscape: true,
	},
	{
		name: "Ying Cave Island",
		interactables: ["Waypoint", "Out-Only Waypoint", "Pink Sphere", "Save"],
	},
	{
		name: "Ying Cave Island Layer 1",
		items: ["Gold"],
		interactables: ["Save", "Pink Ring"],
		trophy: true,
	},
	{
		name: "Ying Cave Island Layer 2",

		interactables: ["Save", "Pink Ring"],
		trophy: true,
	},
	{
		name: "Ying Cave Island Layer 3",
		items: ["Gold"],
		interactables: ["Save", "Pink Ring"],
		trophy: true,
	},
	{
		name: "Ying Cave Island Layer 4",
		items: ["Gold"],
		interactables: ["Save", "Pink Ring"],
		trophy: true,
	},
	{
		name: "Spider Air",
		interactables: ["Save", "Buy Station", "Pink Ring", "Waypoint", "Out-Only Waypoint"],

		secretTrophy: true,
	},
	{
		name: "Orange",
		interactables: ["Pink Sphere"],
		blueActiveZoneDestination: {
			nodeName: "Huntington",
		},
	},
	{
		name: "Orange Mantle Cave",
	},
	{
		name: "Orange Outer Crust",

		interactables: ["Save"],
	},
	{
		name: "Orange Outer Mantle",
		interactables: ["Waypoint", "Save", "Bookmark", "Buy Station"],
	},
	{
		name: "Orange Outer Mantle Secret",
		secretTrophy: true,
	},
	{
		name: "Red-Green Elevator",
	},
	{
		name: "Orange Inner Crust",
	},
	{
		name: "Orange Inner Mantle",
		interactables: ["Waypoint", "Out-Only Waypoint", "Bookmark", "Buy Station", "Save"],
	},
	{
		name: "Huntington",
		trophy: true,
		interactables: [
			"Pink Ring",
			"Save",
			"Scarce Sell Station",
			"Buy Station",
			"Markers",
			"Waypoint",
			"Respawn",
			"Out-Only Waypoint",
		],
		items: ["200 Gold"],
	},
	{
		name: "Camel's Hump",
		interactables: ["Pink Sphere", "Waypoint", "Pink Ring", "Save"],

		secretTrophy: true,
	},
	{
		name: "Blue Bubble Gauntlet",
	},
	{
		name: "Blue Bubble",
		interactables: ["Pink Sphere"],
	},
	{
		name: "Blue Bubble Lattice",

		trophy: true,
	},
	{
		name: "Nuke Room",
		interactables: ["Save", "Pink Ring"],

		trophy: true,
	},
	{
		name: "Rocket Room",
	},
	{
		name: "Black Hole Room",
		interactables: ["Save", "Pink Ring", "Pink Sphere"],
	},
	{
		name: "Orange Flower",
		items: ["Gold"],
		interactables: ["Save", "Pink Sphere", "Pink Ring", "Waypoint", "Bookmark"],
	},
	{
		name: "Botany Lab",
		trophy: true,
		interactables: [
			"Save",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Pink Ring",
			"Pink Sphere",
		],
		items: ["Gold"],
	},
	{
		name: "Galaxy Flower",
		blueActiveZoneDestination: {
			nodeName: "Galaxy Flower Secret",
		},
		notes: "Only Galaxy Flowers with a purple-bordered block below the galaxy both have the secret and are a blue active zone.",
	},
	{
		name: "Galaxy Flower Secret",
		secretTrophy: true,
	},
	{
		name: "Infinity Flower",
		trophy: true,
		items: ["100 Gold"],
		interactables: ["Pink Sphere", "Save", "Pink Ring", "Waypoint", "Out-Only Waypoint"],
	},
	{
		name: "Infinity Flower Secret",

		interactables: ["Save"],
		secretTrophy: true,
	},
	{
		name: "Ying Island",
	},
	{
		name: "Menace Hive",

		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Tau Cave Flower",
		interactables: ["Save", "Pink Sphere"],
	},
	{
		name: "Tau Cave Flower Treasure",
		interactables: ["Pink Ring"],
	},
	{
		name: "Oak Tree",
		items: ["400 Gold"],
		interactables: ["Save", "Waypoint", "Pink Sphere"],
	},
	{
		name: "Oak Tree Dungeon",
		interactables: ["Waypoint", "Save", "Pink Ring"],
		items: ["EXP"],
		secretTrophy: 2,
	},
	{
		name: "Cardboard Box",
		items: ["Gold"],
		interactables: ["Save"],
	},
	{
		name: "Paper Box",
		items: ["50 Gold"],
		interactables: ["Save", "Buy Station"],
		secretTrophy: true,
	},
	{
		name: "Tweedle-Dum Base",
		interactables: ["Waypoint", "Out-Only Waypoint", "Respawn", "Save"],
	},
	{
		name: "Tweedle-Dum Air",
	},
	{
		name: "Tweedle-Dee Cave",
		interactables: ["Save", "Pink Ring", "Pink Sphere", "Buy Station"],
		items: ["30 Gold"],
		trophy: true,
	},
	{
		name: "Ice Cube",
		trophy: true,
		interactables: ["Waypoint", "Bookmark", "Save", "Pink Ring"],
	},
	{
		name: "Pink Tree",
		interactables: ["Pink Ring", "Save", "Buy Station"],
		items: ["Shield"],
	},
	{
		name: "Hard Pink Tree",
		interactables: ["Pink Ring"],
	},
	{
		name: "Tweedle-Dee Air",
	},
	{
		name: "Tweedle Haunted House 1",
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
	},
	{
		name: "Tweedle Haunted House 2",
		interactables: ["Pink Ring", "Waypoint", "Out-Only Waypoint", "Bookmark", "Save"],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Tweedle Haunted House 3",
		items: ["Gold"],
	},
	{
		name: "Weapon Library",
	},
	{
		name: "Basic Laser Maze",

		interactables: ["Save"],
		secretTrophy: true,
	},
	{
		name: "Small Laser Fort",
		items: ["50 Gold"],
		interactables: ["Save"],
		secretTrophy: true,
	},
	{
		name: "Small Laser Fort Secret",
		secretTrophy: true,
	},
	{
		name: "Tall Rail Tower",
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
	},
	{
		name: "Short Rail Tower",
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
	},
	{
		name: "Mossy Cellar",
		interactables: [
			"Buy Station",
			"Common Sell Station",
			"Save",
			"Pink Ring",
			"Pink Sphere",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
		],
		items: ["240 Gold"],
		secretTrophy: true,
	},
	{
		name: "Mossy Basement",
		interactables: [
			"Buy Station",
			"Common Sell Station",
			"Save",
			"Pink Ring",
			"Pink Sphere",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
		],
		items: ["150 Gold"],
		secretTrophy: true,
	},
	{
		name: "Tau Cave Moon",
		interactables: ["Pink Sphere", "Waypoint", "Buy Station", "Bookmark", "Save", "Blue Ring"],
		blueActiveZoneDestination: {
			nodeName: "Type 3 Tau Cave",
		},
	},
	{
		name: "Secret Tau Cave Moon",
		interactables: ["Pink Sphere"],
		pinkSphereDestination: {
			nodeName: "Secret Tau Cave Moon Room",
		},
	},
	{
		name: "Secret Tau Cave Moon Room",
		interactables: ["Pink Ring"],
		secretTrophy: true,
	},
	{
		name: "Imp Disco",

		interactables: ["Save"],
	},
	{
		name: "Gnole Disco",

		interactables: ["Save"],
	},
	{
		name: "Type 1 Tau Cave",
		interactables: [
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Save",
			"Markers",
			"Buy Station",
			"Common Sell Station",
			"Respawn",
		],
	},
	{
		name: "Type 2 Tau Cave",
		interactables: ["Waypoint", "Out-Only Waypoint"],
		blueActiveZoneDestination: {
			nodeName: "Type 2 Tau Cave",
		},
	},
	{
		name: "Type 3 Tau Cave",
		interactables: ["Waypoint", "Out-Only Waypoint"],
	},
	{
		name: "Hinesburg",
		interactables: [
			"Markers",
			"Buy Station",
			"Waypoint",
			"Out-Only Waypoint",
			"Respawn",
			"Save",
			"Common Sell Station",
		],
		items: ["100 Gold"],
		blueActiveZoneDestination: {
			nodeName: "Hinesburg",
		},
	},
	{
		name: "Outer Space 2 Debris",
	},
	{
		name: "Sun",
		interactables: ["Blue Ring", "Waypoint", "Save"],
		trophy: true,
	},
	{
		name: "Solar System Elevator",
		interactables: ["Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Blue Ring Station",
		interactables: ["Blue Ring", "Waypoint"],
	},
	{
		name: "Space Library",
		interactables: ["Waypoint", "Save"],
		items: ["18 Second Yellow Key"],
		trophy: true,
		secretTrophy: 2,
		notes: "Secret Trophy 1: Behind Infinity Flower picture\nSecret Trophy 2: Behind Mylantis picture",
	},
	{
		name: "Small Minigun Planet",

		interactables: ["Waypoint", "Common Sell Station"],
		trophy: true,
	},
	{
		name: "Small Minigun Planet Treasure",
		items: ["400 Gold"],
		interactables: ["Save"],
	},
	{
		name: "Planet Surface",
		interactables: ["Waypoint", "Bookmark"],
	},
	{
		name: "Clay Planet",

		interactables: ["Waypoint", "Bookmark", "Markers", "Buy Station", "Common Sell Station"],
	},
	{
		name: "Clay Planet Cavity",
	},
	{
		name: "Clay Planet Treasure",
		interactables: ["Save"],
		items: ["6000 Gold"],
		trophy: true,
	},
	{
		name: "Alpha Moon",
		trophy: true,
		interactables: ["Pink Sphere", "Bookmark", "Waypoint", "Save", "Pink Ring", "Buy Station"],
		items: ["100 Gold"],
	},
	{
		name: "Beta Moon",
		interactables: ["Pink Sphere", "Buy Station", "Markers", "Save", "Pink Ring"],
		items: [["100 Gold", "300 Gold"]],
		trophy: true,
	},
	{
		name: "Ice Moon",
		interactables: [
			"Waypoint",
			"Respawn",
			"Save",
			"Buy Station",
			"Common Sell Station",
			"Pink Sphere",
		],
	},
	{
		name: "Ice Moon Treasure",
		interactables: ["Waypoint", "Save", "Pink Ring"],
		trophy: true,
	},
	{
		name: "Gamma Moon",
		interactables: [
			"Waypoint",
			"Respawn",
			"Save",
			"Buy Station",
			"Common Sell Station",
			"Pink Sphere",
		],
	},
	{
		name: "Gamma Moon Treasure",
		interactables: ["In-Only Waypoint", "Save"],

		trophy: true,
	},
	{
		name: "Moon Debris",
	},
	{
		name: "Planet Debris",
	},
	{
		name: "Supermassive Black Hole",
	},
	{
		name: "Ying Air Cube",
		interactables: ["Respawn", "Save", "Blue Ring", "Waypoint", "Out-Only Waypoint"],
		items: ["12 Gold"],
		blueActiveZoneDestination: {
			nodeName: "Ying Air Cube",
		},
	},
	{
		name: "Imp Dungeon",
		items: ["20 Gold"],
		interactables: ["Save", "Waypoint", "Out-Only Waypoint", "Blue Ring"],
		secretTrophy: true,
		blueActiveZoneDestination: {
			nodeName: "Imp Dungeon",
		},
	},
	{
		name: "Ying Deep Air",
	},
	{
		name: "Ying Air",
	},
	{
		name: "Ying Air Core",
		interactables: ["Buy Station", "Common Sell Station", "Waypoint"],
		items: ["100 Gold"],
		secretTrophy: true,
	},
	{
		name: "Noob Maze Bundle",
		interactables: ["Pink Sphere"],
	},
	{
		name: "Large Noob Maze",
		interactables: ["Pink Sphere", "Save"],

		secretTrophy: true,
		trophy: true,
		notes: "Trophy is the same trophy as in a normal Noob Maze",
	},
	{
		name: "I1",
	},
	{
		name: "Williston City",
		items: ["80 Gold", "I1 Stable Singletons Key"],
		interactables: [
			"Buy Station",
			"Markers",
			"Waypoint",
			"Respawn",
			"Save",
			"Common Sell Station",
			"Buy Nuke 300",
		],
		trophy: true,
		secretTrophy: true,
	},
	{
		name: "Williston Building",
		interactables: ["Markers", "Buy Station", "Save"],

		secretTrophy: true,
	},
	{
		name: "Williston Field",
		items: ["Gold"],
	},
	{
		name: "Williston Caves",
		items: ["30 Gold"],
		trophy: true,
	},
	{
		name: "Williston Cave Treasure",
		items: ["500 Gold", "45 Second Yellow Key"],
		interactables: [
			"Waypoint",
			"Bookmark",
			"Save",
			"Common Sell Station",
			"Buy Station",
			"Markers",
			"Pink Ring",
		],
	},
	{
		name: "Secret Cave of Jerichos",
		interactables: ["Pink Ring", "Waypoint", "Out-Only Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Jericho Caves",
		items: ["100 Gold"],
	},
	{
		name: "Williston Trees",
		interactables: ["Waypoint", "Out-Only Waypoint", "Save", "Bookmark", "Buy Station"],
	},
	{
		name: "Williston Wall",
		items: ["Gold"],
	},
	{
		name: "Williston Minigun Spiral",

		interactables: ["Save"],
	},
	{
		name: "Williston Health Spiral",

		interactables: ["Save"],
	},
	{
		name: "EMP Castle",
		items: [["Rocket Ammo", "Minigun Ammo"]],
		interactables: [
			"Pink Sphere",
			"Pink Ring",
			"Buy Station",
			"Common Sell Station",
			"Waypoint",
			"Markers",
		],
		trophy: true,
	},
	{
		name: "Williston Ammo",
		items: ["35 Gold"],
	},
	{
		name: "Bristol",
		items: ["100 Gold", "I1 Stable Singletons Key"],
		interactables: [
			"Pink Sphere",
			"Waypoint",
			"Out-Only Waypoint",
			"Respawn",
			"Common Sell Station",
			"Buy Station",
			"Markers",
		],
		trophy: true,
		secretTrophy: true,
		notes: "Secret trophy: Go backwards through the maze after you've grown.",
	},
	{
		name: "Blackberry",
		items: ["Gold", "140 Second Yellow Key"],
		interactables: [
			"Save",
			"Buy Station",
			"Waypoint",
			"Bookmark",
			"Pink Sphere",
			"Pink Ring",
			"Out-Only Waypoint",
		],
		trophy: true,
		secretTrophy: 2,
	},
	{
		name: "Fake Blackberry",
		interactables: ["Save", "Buy Station"],
	},
	{
		name: "Well",
		interactables: ["Waypoint", "Pink Ring", "Pink Sphere", "Save"],
	},
	{
		name: "Williston Purple Well",
		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Zubeneschamali Castle",
		items: ["Gold", "20 Second Yellow Key"],
		interactables: ["Pink Ring", "Waypoint", "Save"],
		trophy: true,
	},
	{
		name: "I1 Library",
		interactables: ["Pink Sphere", "Save", "Waypoint"],
		trophy: true,
	},
	{
		name: "Infinity Flower Vault",
		interactables: ["Pink Ring"],
		secretTrophy: true,
		notes: "Secret Trophy: There is a grow ring on a corner of the floor",
	},
	{
		name: "I2 Library",
		interactables: ["Waypoint", "Save"],
		trophy: true,
	},
	{
		name: "I3 WIG Flower Vault",
		interactables: ["Pink Sphere", "Pink Ring"],
		secretTrophy: true,
		notes: "Secret Trophy: There is a grow ring on a corner of the floor",
	},
	{
		name: "Sagittarius Portal",
		interactables: ["Save"],
	},
	{
		name: "Taurus Portal",
	},
	{
		name: "Imp Cave",
		interactables: ["Save"],

		trophy: true,
	},
	{
		name: "Gnole Cave",

		trophy: true,
	},
	{
		name: "Demon Cave",

		trophy: true,
	},
	{
		name: "Orc Cave",
		trophy: true,
	},
	{
		name: "Beholder Cave",
		trophy: true,
	},
	{
		name: "Botany Lab Black Cube",
	},
	{
		name: "Botany Lab Red Cube",

		secretTrophy: true,
	},
	{
		name: "Lighthouse",
		interactables: ["Pink Ring", "Save"],
	},
	{
		name: "Lighthouse Basement",

		interactables: [
			"Pink Sphere",
			"Pink Ring",
			"Blue Ring",
			"Save",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
		],
		trophy: true,
	},
	{
		name: "Golden Yellow Flower",
		interactables: ["Save", "Pink Ring"],
		items: ["Gold"],
		notes: "Gold Reward is 50 per 2 depth, up to 250\nDepth 5+: Rocket Velocity\nDepth 12+: Rocket Max Ammo and Rocket High Velocity Weapon Mod",
	},
	{
		name: "I2 Spiral",
		noEscape: true,
	},
	{
		name: "I2 WIG Flower",
		interactables: ["Pink Sphere", "Pink Ring", "Save"],
		blueActiveZoneDestination: {
			nodeName: "WIG Prison",
		},
	},
	{
		name: "Prank I2 WIG Flower",
		interactables: ["Pink Ring", "Pink Sphere"],
		blueActiveZoneDestination: {
			nodeName: "WIG Prison 2",
		},
	},
	{
		name: "WIG Prison",

		interactables: [
			"Rare Sell Station",
			"Buy Station",
			"Markers",
			"Buy Nuke 150",
			"Out-Only Waypoint",
			"Pink Ring",
		],
		trophy: true,
	},
	{
		name: "WIG Prison Locker",

		notes: "Corresponding Green Key comes from Starksboro",
	},
	{
		name: "Blue Bubble Cave",
		items: ["Gold"],
		interactables: ["Waypoint", "Bookmark", "Save", "Out-Only Waypoint"],
	},
	{
		name: "Purple Bubble Cave",
		items: ["Gold"],
		interactables: ["Waypoint", "Bookmark", "Save", "Out-Only Waypoint"],
		secretTrophy: true,
	},
	{
		name: "Earthy Cellar",
		items: ["Gold"],
		interactables: [
			"Pink Ring",
			"Pink Sphere",
			"Buy Station",
			"Save",
			"Common Sell Station",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
		],
		secretTrophy: true,
	},
	{
		name: "I3 WIG Flower",
		items: ["Gold"],
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy Station", "Markers"],
		blueActiveZoneDestination: {
			nodeName: "WIG Prison",
		},
	},
	{
		name: "Prank I3 WIG Flower",
		interactables: ["Pink Ring", "Pink Sphere"],
		blueActiveZoneDestination: {
			nodeName: "WIG Prison 2",
		},
	},
	{
		name: "WIG Prison 2",

		interactables: ["Rare Sell Station", "Buy Station", "Markers"],
		secretTrophy: true,
	},
	{
		name: "Hard Orange Flower",

		interactables: [
			"Pink Sphere",
			"Save",
			"Buy Station",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
		],
	},
	{
		name: "I3 Mirror Gate",
		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "I3 Common Gate",

		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Nuke Radius Cave",
		interactables: [
			"Pink Ring",
			"Pink Sphere",
			"Buy Station",
			"Markers",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Save",
		],
		items: ["Gold"],
	},
	{
		name: "Fanatic Lattice",
		interactables: ["Waypoint", "Out-Only Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Fanatic Weed Ammo",
		items: ["40 Gold"],
	},
	{
		name: "Fanatic Spire",
		interactables: ["Blue Ring", "Save"],
		items: ["Gold"],
		blueActiveZoneDestination: {
			nodeName: "Fanatic Spire",
			note: "Entrance",
		},
	},
	{
		name: "Fanatic Spire Mid Treasure",
		interactables: ["Waypoint", "Save", "Buy Station"],
		items: ["900 Gold"],
	},
	{
		name: "Fanatic Spire Treasure",
		trophy: true,
		items: ["Gold", "20 Second Yellow Key"],
		interactables: [
			"Waypoint",
			"Out-Only Waypoint",
			"Buy Station",
			"Common Sell Station",
			"Blue Ring",
			"Save",
			"Pink Ring",
		],
	},
	{
		name: "Fanatic Spire Scaffold",
	},
	{
		name: "Healing Patch",
		items: ["Gold"],
	},
	{
		name: "Fanatic Weed",
	},
	{
		name: "Hanging Fanatic Weed",
		interactables: ["Buy Station", "Markers"],
	},
	{
		name: "Fanatic Lattice Treasure",

		interactables: ["Save"],
	},
	{
		name: "EMP City",
		items: ["Gold"],
		interactables: ["Save"],
		secretTrophy: true,
	},
	{
		name: "Weed Ring",
		interactables: ["Waypoint", "Save"],
		items: ["Gold", "20 Second Yellow Key"],
		trophy: true,
	},
	{
		name: "Dark Willow Tree",

		interactables: ["Waypoint", "Buy Station"],
		trophy: true,
	},
	{
		name: "Large White Flower",
		trophy: true,
		items: ["Gold"],
		interactables: ["Rare Sell Station", "Buy Station", "Markers"],
	},
	{
		name: "Danville",
		items: ["Gold"],
		interactables: [
			"Buy Nuke 250",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Save",
			"Buy Station",
			"Common Sell Station",
			"Markers",
			"Respawn",
		],
		trophy: true,
	},
	{
		name: "Weapon Library",
	},
	{
		name: "Scorpius Flower",

		interactables: ["Save"],
	},
	{
		name: "Scorpius Portal",
	},
	{
		name: "Fanatic Island",

		interactables: ["Common Sell Station", "Buy Station", "Markers"],
		secretTrophy: true,
		notes: "Secret Trophy: Hole under the island",
	},
	{
		name: "Fanatic Island Caves",
	},
	{
		name: "Woody Cellar",
		interactables: [
			"Save",
			"Buy Station",
			"Pink Sphere",
			"Pink Ring",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
		],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Fanatic Yellow Vine",
		secretTrophy: true,
	},
	{
		name: "Woody Basement",
		interactables: [
			"Save",
			"Buy Station",
			"Pink Sphere",
			"Pink Ring",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Common Sell Station",
		],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Fanatic Air",
		interactables: ["Common Sell Station", "Buy Station", "Markers"],
	},
	{
		name: "Fanatic Weed Caves",
		interactables: ["Save"],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Fanatic Weed Caves 2",
		interactables: ["Common Sell Station", "Buy Station", "Markers"],
	},
	{
		name: "Damp Basement",
		interactables: [
			"Buy Station",
			"Save",
			"Pink Ring",
			"Pink Sphere",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
		],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Damp Cellar",
		items: ["Gold", "Gold"],
		interactables: ["Pink Ring", "Pink Sphere", "Buy Station", "Save"],
		secretTrophy: true,
	},
	{
		name: "Catacombs 1",
		items: ["Gold"],
		interactables: ["Pink Sphere", "Waypoint", "Bookmark", "Save"],
		blueActiveZoneDestination: {
			nodeName: "Catacombs 5",
			note: "Treasure Room",
		},
	},
	{
		name: "Catacombs 2",
		items: ["Gold"],
		interactables: ["Pink Ring", "Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Catacombs 3",
	},
	{
		name: "Catacombs 4",
		items: ["Gold"],
		interactables: ["Waypoint", "Bookmark", "Save", "Pink Ring"],
	},
	{
		name: "Catacombs 5",
		interactables: ["Save", "Waypoint", "Pink Ring"],
		secretTrophy: true,
		trophy: true,
	},
	{
		name: "Small Blue Flower (Primary)",
		items: ["Gold"],
		interactables: ["Buy Station", "Pink Sphere", "Pink Ring", "Save", "Waypoint"],
		trophy: true,
	},
	{
		name: "Small Blue Flower (Secondary)",
		interactables: ["Buy Station", "Pink Sphere", "Pink Ring", "Save", "Waypoint"],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "Small Blue Flower (Tertiary)",
		items: ["Gold"],
		interactables: ["Save", "Pink Ring", "Pink Sphere", "Buy Station", "Waypoint"],
	},
	{
		name: "Small Blue Flower (Quaternary)",
		interactables: ["Save", "Pink Ring", "Pink Sphere", "Buy Station", "Waypoint"],
		items: ["Gold", "Gold"],
		secretTrophy: true,
	},
	{
		name: "Small Blue Flower (Quinary)",
		interactables: ["Pink Ring", "Pink Sphere", "Buy Station"],
	},
	{
		name: "Fanatic Well",
		items: ["Gold"],
		interactables: [
			"Pink Ring",
			"Pink Sphere",
			"Buy Station",
			"Save",
			"Waypoint",
			"In-Only Waypoint",
		],
	},
	{
		name: "Fanatic Well Secret",
		interactables: ["Pink Ring"],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Spirit Pocket",
		interactables: ["Common Sell Station", "Buy Station", "Markers", "Save"],

		blueActiveZoneDestination: {
			nodeName: "Spirit Pocket",
		},
	},
	{
		name: "Minigun Forest",
		items: ["Gold"],
		interactables: [
			"Pink Sphere",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Save",
			"Common Sell Station",
			"Scarce Sell Station",
			"Buy Station",
			"Markers",
		],
	},
	{
		name: "Ivory Pinhole Gauntlet",

		interactables: ["Save"],
	},
	{
		name: "Minigun Forest Hanging",
	},
	{
		name: "Minigun Forest Big Pod",
		items: ["Gold"],
		interactables: ["Buy Station", "Save"],
		secretTrophy: true,
	},
	{
		name: "Guerilla Jungle",
		items: ["Gold"],
		interactables: ["Waypoint", "Out-Only Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Guerilla Tree",
	},
	{
		name: "Guerilla Tree Trunk",
		notes: "Contains at least 1 location",
	},
	{
		name: "Guerilla Tree Trunk Treasure",
		interactables: ["Save"],
		items: ["100 Gold"],
	},
	{
		name: "Minigun Forest Ammo",
		items: [["Nuke Ammo x1", "EMP Ammo x1"], "40 Gold"],
	},
	{
		name: "Minigun Forest Minor Pod",
		items: ["Gold"],
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy Station"],
	},
	{
		name: "Earthy Basement",
		items: ["Gold"],
		interactables: [
			"Pink Ring",
			"Pink Sphere",
			"Save",
			"Buy Station",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Common Sell Station",
		],
		secretTrophy: true,
	},
	{
		name: "Spruce Tree",

		interactables: ["Save", "Out-Only Waypoint", "Blue Ring"],
		blueActiveZoneDestination: {
			nodeName: "Spruce Tree",
			note: "Treasure",
		},
		secretTrophy: true,
	},
	{
		name: "Steel Box",
		interactables: ["Buy Station", "Common Sell Station", "Save"],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Cannon Ammo Grab",
		interactables: ["Pink Sphere", "Pink Ring", "Buy Station"],
	},
	{
		name: "Fanatic Grass",
	},
	{
		name: "Small Cannon Gym",
		items: ["10 Gold"],
		interactables: ["Pink Sphere", "Save"],
	},
	{
		name: "Laboratory Vine",
		items: ["Gold"],
		interactables: ["Buy Station", "Markers", "Save"],
	},
	{
		name: "Laboratory Vine Inside",
	},
	{
		name: "Fanatic Vine 1",
	},
	{
		name: "Fanatic Vine 2",
	},
	{
		name: "Fanatic Vine 3",
	},
	{
		name: "Fanatic Vine 4",
		items: ["Gold"],
	},
	{
		name: "Hanging Fanatic Vine",
		items: ["Gold"],
		interactables: ["Pink Sphere"],
	},
	{
		name: "Laboratory Vine Bundle",
		interactables: ["Common Sell Station", "Buy Station", "Markers"],
	},
	{
		name: "Blue Mushroom",
	},
	{
		name: "Blue Mushroom Inside",
		items: ["Gold"],
		interactables: ["Save"],
		trophy: true,
	},
	{
		name: "Rainbow Flower",
		items: ["Invulnerability"],
		interactables: ["Save", "Pink Ring", "Sleep"],
	},
	{
		name: "Rainbow Flower Secret",
		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Mahogany Ammo",
		items: ["40 Gold"],
	},
	{
		name: "Toronto Vine",
		blueActiveZoneDestination: {
			nodeName: "Toronto Vine",
		},
		secretTrophy: true,
	},
	{
		name: "Pirate Vine",
		interactables: ["Upgrade Station"],
	},
	{
		name: "Laser Branch Vine",
		interactables: ["Pink Ring", "Pink Sphere"],
		blueActiveZoneDestination: {
			nodeName: "Laser Branch Vine",
		},
	},
	{
		name: "Laser Branch Vine 1",
		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Laser Branch Vine 2",
		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Laser Branch Vine 3",
		interactables: ["Pink Ring", "Pink Sphere", "Blue Ring"],

		secretTrophy: true,
	},
	{
		name: "Toronto",

		interactables: [
			"Waypoint",
			"Buy Station",
			"Scarce Sell Station",
			"Markers",
			"Out-Only Waypoint",
			"Respawn",
			"Save",
		],
		trophy: true,
		blueActiveZoneDestination: {
			nodeName: "Toronto",
		},
	},
	{
		name: "Toronto Maze",
		items: ["Gold"],
		interactables: [
			"Waypoint",
			"Out-Only Waypoint",
			"Markers",
			"Save",
			"Scarce Sell Station",
			"Blue Ring",
		],
		trophy: true,
	},
	{
		name: "Toronto Maze Map Room Secret",
		interactables: ["Waypoint"],
		secretTrophy: 3,
		notes: "Secret trophies are at model level 1, 2 and 5",
	},
	{
		name: "Raspberry",
		items: ["Gold"],
		interactables: [
			"Save",
			"Buy Station",
			"Scarce Sell Station",
			"Pink Ring",
			"Pink Sphere",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
		],
		trophy: true,
	},
	{
		name: "Jackfruit",
		interactables: ["Pink Ring", "Pink Sphere", "Upgrade Station"],

		trophy: true,
	},
	{
		name: "Large White Flower",
		items: ["Gold"],
		interactables: ["Waypoint", "Save", "Pink Ring", "Pink Sphere", "Buy Station"],
		trophy: true,
	},
	{
		name: "Great White Cavern",
		interactables: ["Common Sell Station", "Buy Station"],
	},
	{
		name: "Rail Showdown Cave",
		interactables: ["Pink Ring", "Pink Sphere", "Save"],
		trophy: true,
	},
	{
		name: "Small Yellow Flower (Blue)",
		interactables: ["Save", "Blue Ring"],
	},
	{
		name: "Burlington",
		interactables: [
			"Waypoint",
			"Out-Only Waypoint",
			"Respawn",
			"Save",
			"Markers",
			"Buy Station",
			"Scarce Sell Station",
			"Common Sell Station",
			"Pink Ring",
			"Blue Ring",
		],
		items: ["Burlington Stable Singletons Key"],
		trophy: true,
		blueActiveZoneDestination: {
			nodeName: "Burlington",
		},
	},
	{
		name: "Burlington Building",
		interactables: ["Buy Nuke 100"],
	},
	{
		name: "Burlington Hanging Building",
	},
	{
		name: "Burlington Hanging Spiral",
	},
	{
		name: "Yellow Gato Box",
		items: ["100 Gold"],
		interactables: ["Blue Ring"],
	},
	{
		name: "Blue Gato Box",

		interactables: ["Blue Ring"],
	},
	{
		name: "Purple Gato Box",
		items: ["100 Gold"],
		interactables: ["Blue Ring"],
		blueActiveZoneDestination: {
			nodeName: "Purple Gato Box",
			note: "Entrance",
		},
	},
	{
		name: "Green Gato Box",

		interactables: ["Blue Ring"],
	},
	{
		name: "Burlington Showdown Tower",

		interactables: ["Blue Ring", "Upgrade Station", "Waypoint"],
		secretTrophy: true,
	},
	{
		name: "Dark Hole Ammo Room",
		interactables: ["Waypoint"],
	},
	{
		name: "Burlington Tower Bunker",
		items: ["20 Gold"],
		interactables: ["Buy Station"],
	},
	{
		name: "Burlington Combination Lock Treasure",
		items: ["Secret Farmhouse Key"],
	},
	{
		name: "Club Green Apple",
		interactables: ["Waypoint", "Save", "Bookmark", "Blue Ring", "Pink Ring"],

		trophy: true,
		secretTrophy: true,
		notes: "Secret trophy: Shrink into the middle of the floor of the Apple Tree forest",
	},
	{
		name: "Red Maze Flower",
		interactables: ["Waypoint", "Bookmark", "Save", "Buy Station", "Out-Only Waypoint"],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "I2 Standard Gate",
		interactables: ["Pink Sphere"],
		items: ["Gold"],
	},
	{
		name: "Carrots",
		items: ["Gold"],
		interactables: ["Save", "Waypoint", "Out-Only Waypoint", "Bookmark"],
		secretTrophy: true,
	},
	{
		name: "Salmon Mushroom",
		interactables: ["Pink Sphere", "Pink Ring"],

		notes: "The taller the mushroom, the larger the chance for the Nuke treasure",
	},
	{
		name: "Salmon Mushroom Mini Treasure",

		interactables: ["Pink Ring"],
	},
	{
		name: "Salmon Mushroom Nuke Treasure",
		interactables: ["Pink Ring", "Save"],
		trophy: true,
	},
	{
		name: "Salmon Mushroom Rail Treasure",
		interactables: ["Pink Ring", "Save"],
	},
	{
		name: "Black Mushroom",
		interactables: ["Black Market", "Save", "Pink Ring", "Pink Sphere"],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "I3 Air",
	},
	{
		name: "Dandelions",
		items: ["Gold"],
		interactables: ["Save"],
	},
	{
		name: "Desert",
	},
	{
		name: "Desert Cactus",

		interactables: ["Save"],
		trophy: true,
	},
	{
		name: "Desert Flower",
		interactables: ["Markers", "Buy Station", "Save", "Pink Ring", "Pink Sphere"],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "Desert Flower Cloud",
		interactables: ["Pink Ring", "Save"],
		secretTrophy: true,
	},
	{
		name: "Desert Oasis",
		interactables: [
			"Buy Station",
			"Common Sell Station",
			"Markers",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
			"Save",
		],
	},
	{
		name: "Desert Caves",
		items: ["Gold"],
		interactables: [
			"Save",
			"Common Sell Station",
			"Scarce Sell Station",
			"Markers",
			"Upgrade Station",
		],
		trophy: true,
	},
	{
		name: "Aladdin's Cave",
		items: ["6000 Gold"],
		interactables: ["Save", "Upgrade Station", "Pink Ring", "Pink Sphere"],
		trophy: true,
	},
	{
		name: "Mahogany Tree",
		interactables: ["Buy Station", "Markers"],
	},
	{
		name: "Mahogany Treetop",
		items: ["Gold"],
		interactables: [
			"Waypoint",
			"Save",
			"Out-Only Waypoint",
			"Bookmark",
			"Common Sell Station",
			"Buy Station",
			"Markers",
		],
	},
	{
		name: "Mahogany Treetop Center",
		interactables: ["Save", "Waypoint", "Bookmark", "Pink Sphere", "Buy Nuke 150"],
		items: ["1000 Gold"],
		trophy: true,
		pinkSphereDestination: {
			nodeName: "Mahogany Treetop Center Treasure",
		},
	},
	{
		name: "Mahogany Treetop Center Treasure",
		interactables: ["Pink Sphere"],
		notes: "You can reach this treasure by growing using a pink ring inside the Inner Tree",
	},
	{
		name: "Mahogany Treetop Inner Tree",

		interactables: ["Common Sell Station", "Buy Station", "Markers", "Save"],
		notes: "Tips of the tree contain Gemstones, Turnips, Yellow Mushrooms or the Progressive Rocket Weapon Mod",
	},
	{
		name: "Mahogany Treetop Inner Tree End Treasure",
		items: ["1000 Gold"],
		trophy: true,
		notes: "Appears alongside whatever appears at the tips of the Inner Tree",
	},
	{
		name: "Mahogany Treetop Inner Tree Weapon Mod Treasure",
	},
	{
		name: "Amethyst",
		interactables: ["Waypoint", "Out-Only Waypoint", "Bookmark", "Save", "Buy Station"],
		items: ["10 Gold"],
	},
	{
		name: "Amethyst Island",

		interactables: ["Buy Station"],
	},
	{
		name: "Amethyst Treasure",
		interactables: ["Out-Only Waypoint", "Waypoint", "Save"],
		items: ["1000 Gold"],
		trophy: true,
	},
	{
		name: "Pink Library",
		interactables: ["Waypoint"],
	},
	{
		name: "Iolite",
		interactables: ["Waypoint", "Save", "Blue Ring", "Buy Station", "Scarce Sell Station"],
		items: ["100 Gold"],
		blueActiveZoneDestination: {
			nodeName: "Iolite Sponge",
		},
	},
	{
		name: "Iolite Sponge",
		interactables: ["Markers", "Buy Station"],
		items: ["30 Second Yellow Key"],
	},
	{
		name: "Iolite Treasure",
		items: ["1400 Gold"],
		interactables: ["Scarce Sell Station", "Save", "Buy Station"],
		trophy: true,
	},
	{
		name: "Jade Museum",
		interactables: ["Pink Ring", "Pink Sphere"],

		secretTrophy: true,
		notes: "You can use the small white flower on the islands that appear sometimes in rooms to get back some laser ammo to freeze the Night Guards",
	},
	{
		name: "Forest Museum",
		interactables: ["Pink Ring", "Pink Sphere"],

		secretTrophy: true,
	},
	{
		name: "Emerald",
		interactables: ["Waypoint", "Buy Station", "Save", "Blue Ring"],
		items: ["Gold"],
		blueActiveZoneDestination: {
			nodeName: "Emerald Sponge",
		},
	},
	{
		name: "Emerald Sponge",
		items: ["30 Second Yellow Key"],
	},
	{
		name: "Emerald Treasure",
		items: ["3500 Gold", "Green Key"],
		interactables: ["Waypoint", "Save", "Buy Station", "Scarce Sell Station"],
	},
	{
		name: "Emerald City",
		interactables: [
			"Waypoint",
			"Respawn",
			"Save",
			"Buy Station",
			"Markers",
			"Common Sell Station",
			"Out-Only Waypoint",
		],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "Denver",
		items: ["Gold"],
		interactables: [
			"Waypoint",
			"Out-Only Waypoint",
			"Respawn",
			"Buy Station",
			"Scarce Sell Station",
			"Markers",
		],
		trophy: true,
	},
	{
		name: "Denver Pyramid",
	},
	{
		name: "Denver Green Mountain",
	},
	{
		name: "Blue Library",
		interactables: ["Waypoint"],
	},
	{
		name: "Sapphire",
		interactables: ["Pink Sphere", "Pink Ring", "Buy Station"],

		trophy: true,
	},
	{
		name: "Topaz",
		items: ["100 Gold"],
		interactables: ["Waypoint", "Save", "Blue Ring", "Buy Station"],
		blueActiveZoneDestination: {
			nodeName: "Topaz Sponge",
		},
	},
	{
		name: "Topaz Sponge",
	},
	{
		name: "Topaz Treasure",
		items: ["1000 Gold"],
		interactables: ["Scarce Sell Station", "Save", "Buy Station"],
		trophy: true,
	},
	{
		name: "Starksboro",
		interactables: [
			"Scarce Sell Station",
			"Buy Station",
			"Markers",
			"Waypoint",
			"Save",
			"Respawn",
			"Max Ammo Upgrade Station",
		],
		items: ["Green Key"],
	},
	{
		name: "Library Library",
		interactables: ["Waypoint"],
	},
	{
		name: "Mahogany Tree Trunk",
		items: ["Gold"],
		interactables: ["Save"],
	},
	{
		name: "Mahogany Tree Central Shaft",
		items: ["Gold"],
		interactables: ["Common Sell Station", "Buy Station", "Markers"],
		secretTrophy: true,
	},
	{
		name: "Mahogany Core",
		interactables: ["Pink Ring"],
	},
	{
		name: "Mahogany Cellar",
		interactables: [
			"Pink Ring",
			"Pink Sphere",
			"Save",
			"Buy Station",
			"Common Sell Station",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
		],
		items: ["650 Gold"],
		secretTrophy: true,
	},
	{
		name: "Duplication Tube",
	},
	{
		name: "Mahogany Basement",
		interactables: [
			"Pink Ring",
			"Pink Sphere",
			"Save",
			"Buy Station",
			"Common Sell Station",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
		],
		items: ["450 Gold"],
		secretTrophy: true,
	},
	{
		name: "Pumpkin",
		interactables: ["Save", "Buy Station", "Pink Ring", "Pink Sphere"],

		secretTrophy: true,
	},
	{
		name: "Turnips",

		secretTrophy: true,
	},
	{
		name: "Beets",
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Essex",
		items: ["200 Gold"],
		interactables: [
			"Waypoint",
			"Respawn",
			"Save",
			"Buy Station",
			"Markers",
			"Scarce Sell Station",
			"Common Sell Station",
			"Buy Nuke 200",
		],
		secretTrophy: true,
	},
	{
		name: "Basement Library",
	},
	{
		name: "Root Vegetable Basement",
		items: ["Gold"],
		interactables: ["Pink Sphere", "Pink Ring", "Buy Station", "Common Sell Station", "Save"],
		secretTrophy: true,
	},
	{
		name: "Yellow Mushroom",

		interactables: ["Pink Sphere", "Save", "Buy Station", "Common Sell Station"],
		trophy: true,
	},
	{
		name: "Red Mushroom",
		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Red Mushroom Small Treasure",
		items: ["50 Gold"],
		interactables: ["Pink Ring"],
		trophy: true,
	},
	{
		name: "Red Mushroom Treasure",
		items: ["100 Gold"],
		trophy: true,
	},
	{
		name: "I3 Library",
		interactables: ["Pink Sphere", "Save", "Waypoint"],
		trophy: true,
		pinkSphereDestination: {
			nodeName: "Hell",
		},
	},
	{
		name: "I2 Fast Gate",
		interactables: ["Pink Sphere", "Pink Ring"],
	},
	{
		name: "Tegan's Garden",
		items: ["Gold"],
		blueActiveZoneDestination: {
			nodeName: "Tegan's Garden",
			note: "Treasure Room",
		},
		trophy: true,
	},
	{
		name: "Willow Tree",

		interactables: ["Save"],
		trophy: true,
	},
	{
		name: "Mystic Vine 0",
	},
	{
		name: "Mystic Vine 1",
	},
	{
		name: "Mystic Vine 2",
	},
	{
		name: "Mystic Vine 3",
		items: ["Gold"],
	},
	{
		name: "Mystic Vine 4",
		interactables: ["Buy Station"],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "Vine Shaft Column",
		items: ["Gold"],
	},
	{
		name: "Montreal",
		items: ["100 Gold", "I2 Stable Singletons Key"],
		interactables: [
			"Common Sell Station",
			"Buy Station",
			"Waypoint",
			"Markers",
			"Respawn",
			"Save",
			"Out-Only Waypoint",
			"Buy Blue Key",
		],
		trophy: true,
	},
	{
		name: "Creeping Jeni",
		items: ["Gold", "30 Second Yellow Key"],
		interactables: [
			"Waypoint",
			"Bookmark",
			"Blue Ring",
			"Out-Only Waypoint",
			"Save",
			"Pink Ring",
		],
		blueActiveZoneDestination: {
			nodeName: "Creeping Jeni",
			note: "Entrance",
		},
	},
	{
		name: "Violet",
		interactables: ["Blue Ring"],
		blueActiveZoneDestination: {
			nodeName: "Violet Shell 0",
		},
	},
	{
		name: "Violet Shell 3",
		items: ["Gold"],
		interactables: [
			"Save",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
			"Buy Station",
			"Markers",
		],
	},
	{
		name: "Violet Shell 2",
		items: ["Gold"],
		interactables: [
			"Save",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
			"Buy Station",
			"Markers",
		],
	},
	{
		name: "Violet Shell 2 Map",
		items: ["Gold"],
		interactables: [
			"Save",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
			"Buy Station",
			"Markers",
			"Pink Ring",
			"Pink Sphere",
		],
		secretTrophy: 3,
	},
	{
		name: "Violet Shell 1",
		items: ["Gold"],
		interactables: [
			"Save",
			"Waypoint",
			"Bookmark",
			"Out-Only Waypoint",
			"Buy Station",
			"Markers",
		],
		trophy: true,
	},
	{
		name: "Violet Shell 0",
		interactables: ["Pink Sphere", "Save", "Waypoint", "Bookmark", "Out-Only Waypoint"],
		items: ["Gold"],
	},
	{
		name: "Ostrich Fern",
	},
	{
		name: "Moldy Basement",
		interactables: [
			"Pink Sphere",
			"Pink Ring",
			"Buy Station",
			"Save",
			"Waypoint",
			"Out-Only Waypoint",
			"Bookmark",
		],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "I3",
		interactables: ["Buy Station", "Waypoint", "Bookmark", "Save", "Markers", "Pink Ring"],
		items: ["60 Gold"],
	},
	{
		name: "I3 Clouds",
	},
	{
		name: "White Rose",
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "River",
		interactables: ["Buy Station", "Markers"],
		items: ["Gold"],
	},
	{
		name: "River Pyramid",

		trophy: true,
	},
	{
		name: "River Reed",
	},
	{
		name: "Deep Sliver Maze",
		interactables: ["Waypoint"],
		items: ["2000 Gold"],
		trophy: true,
	},
	{
		name: "Wood Box",
		interactables: ["Save", "Buy Station", "Scarce Sell Station"],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Tangerine",
		items: ["Gold"],
		interactables: ["Upgrade Station"],
		secretTrophy: true,
	},
	{
		name: "Ascend Temple",
		interactables: ["In-Only Waypoint", "Save", "Waypoint"],
		secretTrophy: true,
	},
	{
		name: "Colchester",
		items: ["I3 Stable Singletons Key", "100 Gold"],
		interactables: [
			"Buy Station",
			"Common Sell Station",
			"Markers",
			"Waypoint",
			"Out-Only Waypoint",
			"Respawn",
			"Save",
			"Buy Nuke 250",
		],
		trophy: true,
		blueActiveZoneDestination: {
			nodeName: "Colchester Secret",
		},
	},
	{
		name: "Colchester Secret",
		interactables: ["Waypoint", "Pink Ring"],
	},
	{
		name: "Top of the World",
		noEscape: true,
		blueActiveZoneDestination: {
			nodeName: "Mylantis Top City",
		},
		trophy: true,
		secretTrophy: true,
	},
	{
		name: "Edge of the World",
		interactables: ["Waypoint"],
		items: ["Green Key"],
		notes: "You must take the Green Key then find a waypoint inside the Alpha Cube to return to the waypoint here and reach the Top of the World",
	},
	{
		name: "Outer Space -4",
	},
	{
		name: "Outer Space -3",
	},
	{
		name: "Outer Space -2",
	},
	{
		name: "Outer Space -1",
	},
	{
		name: "Outer Space 0",
		interactables: ["Out-Only Waypoint", "Waypoint"],
	},
	{
		name: "Lockbox",
	},
	{
		name: "Grand Lockbox",
		interactables: ["Waypoint"],
		items: ["300 Gold", "Burlington Combination Lock"],
		secretTrophy: true,
	},
	{
		name: "Outer Space 1",
	},
	{
		name: "Outer Space Bunker",

		interactables: ["Save", "Buy Station"],
	},
	{
		name: "Medium Gold Asteroid",
		items: ["Gold"],
	},
	{
		name: "High Gold Asteroid",
		items: ["Gold"],
	},
	{
		name: "High Gold Asteroid Treasure",
		interactables: ["Save", "Pink Ring"],
		items: ["1500 Gold"],
		secretTrophy: true,
	},
	{
		name: "Ice Castle",
		interactables: ["Buy Station", "Markers"],
	},
	{
		name: "The Bulk 1",
		interactables: ["Pink Sphere", "Waypoint", "Out-Only Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Bulk Castle",

		interactables: ["Pink Ring", "Buy Station", "Common Sell Station", "Save"],
	},
	{
		name: "Outer Space 2",
	},
	{
		name: "Galaxy",
	},
	{
		name: "Solar System",
	},
	{
		name: "Solar System Debris",
	},
	{
		name: "Jericho",
		interactables: [
			"Markers",
			"Waypoint",
			"Out-Only Waypoint",
			"Respawn",
			"Save",
			"Common Sell Station",
		],
		items: ["100 Gold"],
		secretTrophy: true,
		notes: "Secret Trophy: Hole in the second step of the left-back corner",
	},
	{
		name: "Richmond",
		items: ["500 EXP", "80 Gold"],
		interactables: [
			"Waypoint",
			"Save",
			"Common Sell Station",
			"Buy Station",
			"Respawn",
			"Markers",
			"Pink Ring",
			"Out-Only Waypoint",
		],
		trophy: true,
		notes: "Secret is at the top of the tower with the waypoint, you must shrink at the top of a different tower and travel through the concrete to reach the secret",
	},
	{
		name: "Richmond Sewers",
		interactables: ["Pink Sphere", "Out-Only Waypoint", "Waypoint", "Save"],
		items: ["Gold", "20 Gold"],
		blueActiveZoneDestination: {
			nodeName: "Richmond Sewers",
			note: "Entrance",
		},
	},
	{
		name: "Richmond Secret",
		interactables: ["Pink Ring", "Save", "Pink Sphere"],

		secretTrophy: true,
	},
	{
		name: "Richmond Building",
		interactables: ["Pink Sphere", "Pink Ring", "Save"],

		secretTrophy: true,
	},
	{
		name: "Richmond Info Building",
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Waypoint"],
		trophy: true,
	},
	{
		name: "Yellow Flower Wall",
	},
	{
		name: "Yellow Flower Wall Ammo",
		items: ["3 Gold"],
	},
	{
		name: "Richmond Red Caves",
		interactables: ["Save", "Pink Ring", "Pink Sphere"],
		items: ["2000 EXP"],
		trophy: true,
	},
	{
		name: "Red Rose",
		interactables: ["Pink Ring", "Pink Sphere"],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Stone Corral",
		interactables: ["Waypoint", "Save", "Respawn", "Common Sell Station", "Buy Station"],
	},
	{
		name: "Richmond Library",
		interactables: ["Waypoint", "Buy Nuke 400", "Blue Ring", "Pink Sphere"],
		trophy: true,
		secretTrophy: true,
		notes: "Secret Trophy: Behind Yellow Cube image behind Stoney Air image",
	},
	{
		name: "Richmond Library Arcade",
		interactables: ["Pink Ring"],
	},
	{
		name: "Bedroom",
		interactables: ["Sleep", "Save", "Waypoint", "Respawn"],
	},
	{
		name: "Hell",
		interactables: ["Waypoint", "Bookmark", "Save"],
		items: ["Hell Stable Singletons Key"],
	},
	{
		name: "Hell Treasure",
		items: ["30 Gold"],
	},
	{
		name: "Hell Flower",
		interactables: ["Pink Sphere", "Black Market"],
		items: ["Hell Stable Singletons Key"],
		trophy: true,
	},
	{
		name: "Hell Bunker",

		interactables: ["In-Only Waypoint", "Save", "Buy Station"],
	},
	{
		name: "Secret Wolf Forest",
		interactables: ["Waypoint", "Bookmark", "Save", "Black Market"],
		items: ["2000 Gold"],
		secretTrophy: true,
	},
	{
		name: "Moon Flower",
		interactables: ["Pink Sphere", "Buy Station", "Save", "Pink Ring"],

		secretTrophy: true,
	},
	{
		name: "Hell Debug",
		notes: "More will be added here in a future version of the game",
	},
	{
		name: "Inner Core Room",
		trophy: true,
		notes: "To survive the Inner Core in Genesis, you must stack invulnerability powerups from Rainbow Flowers, then return here",
	},
	{
		name: "Inner Core Room Bunker",
		interactables: ["Waypoint", "Bookmark", "Save", "In-Only Waypoint"],
	},
	{
		name: "Credits",
		interactables: ["Waypoint", "Bookmark", "Save", "Out-Only Waypoint", "Pink Ring"],
		items: ["Universe Key"],
		trophy: true,
		secretTrophy: true,
		notes: "Secret Trophy: Behind Infinifrag image behind Zack Barth",
	},
	{
		name: "Engine",
		items: ["Universe Key"],
		interactables: ["Waypoint", "Out-Only Waypoint", "Pink Ring"],
	},
	{
		name: "Stable Singletons",
		items: ["1200 Gold"],
		interactables: ["Pink Sphere", "Save"],
	},
	{
		name: "Grey Lattice",
		items: ["Shield"],
	},
	{
		name: "Ying World Ammo",
	},
	{
		name: "Slow Exit Maze Island",
		interactables: ["Save", "Waypoint"],
	},
	{
		name: "Slow Exit Maze Treasure",
		interactables: ["Save", "Waypoint", "Pink Ring"],

		trophy: true,
	},
	{
		name: "Dummy Arcade",

		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Easy Minigun Tower",
		interactables: ["Pink Ring", "Pink Sphere"],
	},
	{
		name: "Mylantis",
		interactables: ["Waypoint", "Bookmark", "Save", "Out-Only Waypoint", "Pink Sphere"],
	},
	{
		name: "Mylantis Crust",
		interactables: ["Buy Station", "Respawn", "Out-Only Waypoint", "Save"],
		items: ["Gold"],
	},
	{
		name: "Mylantis Caves Library",
		interactables: ["Waypoint", "Pink Sphere", "Out-Only Waypoint"],
		items: ["Gold"],
		secretTrophy: true,
		notes: "Secret Trophy: There is a hole in the bottom anti-plug.",
	},
	{
		name: "Mylantis Cave Shaft",
	},
	{
		name: "Mylantis Caves 1",

		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 2",

		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 3",

		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 4",

		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 5",

		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 6",
		items: ["Gold"],
		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 7",
		items: ["Gold"],
		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 8",
		items: ["Gold"],
		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 9",
		items: ["Gold"],
		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 10",
		items: ["Gold"],
		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
	},
	{
		name: "Mylantis Caves 11",
		items: ["Gold"],
		interactables: ["Buy Station", "Save", "Waypoint", "Bookmark"],
		notes: "This is a great place to farm gold if your nuke kills lampreys in one hit.",
	},
	{
		name: "Mylantis Great Cavern",
		interactables: ["Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Mylantis Red Caves",
		notes: "More will be added here in a future version of the game",
	},
	{
		name: "RejuvenX Refinery",
		items: ["Gold"],
		interactables: ["Save", "Buy Station", "Respawn"],
	},
	{
		name: "Nuclear Silo",

		interactables: ["Out-Only Waypoint"],
	},
	{
		name: "Mylantis City",
		interactables: ["Pink Sphere", "Waypoint"],
		secretTrophy: true,
		notes: "Secret Trophy: On the left-back corner of the second floor of the city, in the right-front building of that corner chunk is the secret nuke room.\nThe right-front corner of the third floor is supposedly different (MYLANTIS_CITY_SIDE_SECRET), but doesn't contain anything yet.",
	},
	{
		name: "Mylantis Building",
		items: ["Gold"],
	},
	{
		name: "Secret Farmhouse",
		interactables: [
			"Sleep",
			"Waypoint",
			"Respawn",
			"Save",
			"Buy Station",
			"Markers",
			"Upgrade Station",
			"Rare Sell Station",
		],
		items: ["200 Second Yellow Key"],
		trophy: true,
	},
	{
		name: "Mylantis Top Garden",
		items: ["100 Gold"],
		interactables: [
			"Buy Nuke 300",
			"Buy Station",
			"Scarce Sell Station",
			"Markers",
			"Waypoint",
			"Save",
			"Bookmark",
		],
		trophy: true,
	},
	{
		name: "Tau Cave Moss",
	},
	{
		name: "Main Branch Library",
		interactables: ["Waypoint", "Out-Only Waypoint"],
	},
	{
		name: "House of 5 Lampreys",
		interactables: ["Waypoint", "Save", "Pink Sphere"],

		secretTrophy: true,
	},
	{
		name: "Laser Genesis Planet",

		interactables: ["Waypoint", "Bookmark", "Save"],
	},
	{
		name: "Laser Genesis",
		interactables: ["Waypoint", "Bookmark"],
		trophy: true,
	},
	{
		name: "Mylantis City Underground",
		interactables: ["Waypoint", "Pink Ring"],
		items: ["2000 Gold"],
		secretTrophy: true,
	},
	{
		name: "Beta Menger Sponge Top",
		interactables: ["Pink Sphere", "Pink Ring", "Black Market"],
	},
	{
		name: "Beta Menger Sponge Mid",
		notes: "This section of the sponge is 10 layers thick",
	},
	{
		name: "Beta Menger Sponge Bottom",
		interactables: ["Pink Ring"],
	},
	{
		name: "Beta Sponge Town",
		interactables: [
			"Waypoint",
			"Out-Only Waypoint",
			"Respawn",
			"Save",
			"Common Sell Station",
			"Buy Station",
			"Pink Ring",
		],
		items: ["200 Gold"],
	},
	{
		name: "Alpha Menger Sponge",

		trophy: true,
	},
	{
		name: "Deep Menger Sponge",
		interactables: ["Pink Sphere", "Blue Ring", "Pink Ring"],
		blueActiveZoneDestination: {
			nodeName: "Deep Menger Sponge",
			note: "Deeper",
		},
		notes: "There is a chance a blue ring won't find a terminal chunk and crash the game (1001 level limit)",
	},
	{
		name: "Happy Land",

		interactables: ["Blue Ring"],
	},
	{
		name: "Noob Maze Flower",
		interactables: ["Pink Sphere"],
	},
	{
		name: "Noob Maze",
		interactables: ["Pink Ring"],
		trophy: true,
	},
	{
		name: "Ying World Library",
		interactables: ["Out-Only Waypoint", "Pink Ring"],
		secretTrophy: true,
		notes: "Secret trophy: Entrance on the side of the pyramid the library is on top of",
	},
	{
		name: "Quicksand Grass",
		noEscape: true,
		notes: "Level 10 has grass with yellow tips",
	},
	{
		name: "Quicksand Grass Level 11",
		noEscape: true,
	},
	{
		name: "Quicksand Grass Basement",
		interactables: ["Pink Sphere", "Pink Ring", "Save", "Buy Station", "Common Sell Station"],
		items: ["50 Gold"],
		secretTrophy: true,
	},
	{
		name: "Purple House",
		notes: "RejuvenX behind painting",
	},
	{
		name: "Large Cannon Pyramid",
		interactables: [
			"Pink Sphere",
			"Upgrade Station",
			"Waypoint",
			"Save",
			"Pink Ring",
			"Buy Station",
		],
		items: ["Gold", "5000 EXP"],
		trophy: true,
	},
	{
		name: "Fir Tree",
	},
	{
		name: "Alpha Cube",
		interactables: ["Save", "Blue Ring"],

		trophy: true,
		blueActiveZoneDestination: {
			nodeName: "Alpha Cube",
		},
	},
	{
		name: "Health Tower",
		interactables: ["Save"],
		items: ["50 Gold", "1000 EXP"],
		secretTrophy: true,
		trophy: true,
		notes: "Secret Trophy: Above treasure room at the same size",
	},
	{
		name: "Pure Menger Sponge",
		items: ["Gold"],
		interactables: ["Pink Sphere", "Blue Ring"],
		blueActiveZoneDestination: {
			nodeName: "Pure Menger Sponge",
			note: "(Deeper)",
		},
	},
	{
		name: "Pure Menger Sponge Treasure",
		items: ["1000 EXP"],
		interactables: ["Pink Ring"],
		trophy: true,
	},
	{
		name: "Stoney Air",

		interactables: ["Save"],
	},
	{
		name: "Stoney Air Totem",
		secretTrophy: true,
	},
	{
		name: "Mossy Air",
	},
	{
		name: "Mossy Air Ammo",
	},
	{
		name: "Yellow Rocket Treasure",

		interactables: ["Save"],
	},
	{
		name: "Mossy Island",
		items: ["3 Gold"],
		interactables: ["Save"],
	},
	{
		name: "Buttercup",
		interactables: ["Save"],
	},
	{
		name: "Yellow Cube Secret",
		interactables: ["Waypoint", "Save"],
		secretTrophy: true,
	},
	{
		name: "Rich Yellow Cube Secret",
		interactables: ["Waypoint", "Save"],
		secretTrophy: true,
	},
	{
		name: "Stoney Air Cave 1",
		interactables: ["Pink Ring", "Save", "Pink Sphere"],
		trophy: true,
		items: ["Gold"],
	},
	{
		name: "Stoney Air Cave 2",
		interactables: ["Pink Ring", "Save", "Pink Sphere", "Waypoint"],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "Stoney Air Cave 3",
		interactables: ["Pink Ring", "Save", "Pink Sphere", "Waypoint"],
		items: ["Gold"],
		trophy: true,
	},
	{
		name: "Yellow Cube",
		blueActiveZoneDestination: {
			nodeName: "Yellow Cube Secret",
		},
	},
	{
		name: "Rich Yellow Cube",
		blueActiveZoneDestination: {
			nodeName: "Rich Yellow Cube Secret",
		},
	},
	{
		name: "Mossy Air Cube",
	},
	{
		name: "Mossy Air Cube Treasure",
		interactables: ["Save"],
		trophy: true,
	},
	{
		name: "Tau Caves Ammo",
	},
	{
		name: "Tau Cave Moon Case",
	},
	{
		name: "Stoney Sanctuary",
		interactables: [
			"Waypoint",
			"Respawn",
			"Save",
			"Bookmark",
			"Common Sell Station",
			"Buy Station",
			"Markers",
			"Pink Sphere",
		],
		items: ["100 Gold"],
		secretTrophy: true,
	},
	{
		name: "Stoney Sanctuary Pillar",
		interactables: ["Pink Ring", "Waypoint"],
		items: ["Gold"],
		secretTrophy: true,
	},
	{
		name: "Stoney Library",
		interactables: ["Waypoint", "Out-Only Waypoint", "Save", "Bookmark"],
		items: ["9 Second Yellow Key"],
		secretTrophy: true,
		trophy: true,
		notes: "Secret Trophy and Yellow Key: Behind fake wall behind Stoney Air picture",
	},
	{
		name: "Stoney Library Treasure",
		interactables: ["Waypoint", "Out-Only Waypoint", "Blue Ring"],
		secretTrophy: true,
	},
	{
		name: "Stoney Sanctuary Treasure",
		interactables: ["Save", "Pink Ring"],
		items: ["400 Gold"],
		secretTrophy: true,
	},
	{
		name: "Green Shrink Box",
		interactables: ["Save"],
	},
	{
		name: "Red Apple Tree",
	},
	{
		name: "Yellow Apple Tree",
	},
	{
		name: "Green Apple Tree",
	},
	{
		name: "Apple Tree Ammo",
		items: ["30 Gold", ["Nuke Ammo x1", "EMP Ammo x1"]],
	},
	{
		name: "Apple Tree Top Treasure",
		interactables: ["Upgrade Station", "Save"],
	},
	{
		name: "Apple Tree Bottom Treasure",
	},
	{
		name: "Red Apple",
		interactables: ["Buy Station", "Save"],
		items: ["5000 EXP", "50 Gold"],
		trophy: true,
	},
	{
		name: "Yellow Apple",
		interactables: ["Buy Station", "Save"],
		items: ["5000 EXP", "80 Gold"],
		trophy: true,
	},
	{
		name: "Green Apple",
		interactables: ["Buy Station", "Save"],
		items: ["5000 EXP", "120 Gold"],
		trophy: true,
	},
	{
		name: "Yellow Flower City",
		interactables: ["Pink Ring"],
		items: ["Gold"],
		notes: "Small Cannon Pyramids are in the orange towers\nSecret Trophy and Pure Menger Sponge: Shrink in the bridge then repeatedly shrink near numbers until 6.",
	},
	{
		name: "Orange Ground City",
		interactables: ["Pink Ring"],
	},
	{
		name: "Ying World Shell Green Island",
		interactables: ["Waypoint", "Pink Ring", "Save"],
		secretTrophy: true,
		notes: "Secret Trophy: Shrink into the concrete at the bottom of the island.",
	},
	{
		name: "Gated Community",
		items: ["20 Second Yellow Key"],
		interactables: ["Save", "Waypoint", "Respawn", "In-Only Waypoint", "Blue Ring", "Markers"],
	},
	{
		name: "Yellow Flower City Secret",
		items: [["Rocket Ammo x100", "Nuke Ammo x1", "Railgun Ammo x50"], "2000 EXP"],
		secretTrophy: true,
	},
] as const satisfies readonly InputNodeSpecific[];

export type nodeName = (typeof INPUT_NODES)[number]["name"];

export const inputNodes = INPUT_NODES as unknown as InputNode[];

export const startingPath: nodeName[] = [
	"Top of the World",
	"Edge of the World",
	"Outer Space -4",
	"Outer Space -3",
	"Outer Space -2",
	"Outer Space -1",
	"Outer Space 0",
	"Outer Space 1",
	"Outer Space 2",
	"Galaxy",
	"Solar System",
	"Tau Cave Moon",
	"Type 2 Tau Cave",
	"Type 3 Tau Cave",
	"Type 1 Tau Cave",
	"Ying Flower",
	"Ying World",
	"Tutorial Island",
	"Tutorial Chambers",
	"Tutorial 2",
	"Tutorial 1",
];
