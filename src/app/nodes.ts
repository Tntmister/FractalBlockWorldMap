export interface Node {
  name: string;
  mainBranchDepth?: number; // smallest possible number for this node to exist in
  upgrades?: stats[]; // possible upgrades
  items?: stats[]; // possible items
}

export type stats =
  | "Health"
  | "Armor"
  | "Plasma"
  | "Cannon"
  | "Laser"
  | "Rocket"
  | "Homing"
  | "Minigun"
  | "Railgun"
  | "EMP"
  | "Nuke"
  | "Black Hold";

export const nodes = [
  {
    name: "Ying Forest",
    mainBranchDepth: 26,
  },
  {
    name: "Tutorial Box",
    mainBranchDepth: 28,
  },
  {
    name: "Small Yellow Flower",
  },
  {
    name: "Small White Flower",
    upgrades: ["Health"],
    items: ["Armor", "Nuke"],
  },
  {
    name: "Ying Flower",
  },
  {
    name: "Ying Island",
    mainBranchDepth: 25,
  },
  {
    name: "Ying Air Cube",
    mainBranchDepth: 27,
  },
  {
    name: "Ying Air",
    mainBranchDepth: 26,
  },
  {
    name: "Noob Maze",
  },
  {
    name: "I1",
  },
  {
    name: "I2",
  },
  {
    name: "I3",
  },
  {
    name: "Burlington",
  },
] as const satisfies readonly Node[];
