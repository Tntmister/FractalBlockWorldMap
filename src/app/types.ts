import { inputNodes } from "./input";

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
  | "Black Hole";

export type InputNode = {
  name: string;
  upgrades?: stats[]; // possible upgrades
  items?: stats[]; // possible items
}

export type nodeNames = (typeof inputNodes)[number]["name"];

export interface InputGraph {
  nodes: readonly InputNode[];
  edges: {
    from: nodeNames;
    to: nodeNames;
    distance?: number;
    depth?: number;
    note?: string;
  }[];
  root: {
    name: nodeNames,
    depth: number
  }
}
