import { InputGraph, InputNode } from "./types";

export const inputNodes = [
  {
    name: "Ying Forest",
  },
  {
    name: "Tutorial Box",
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
  },
  {
    name: "Ying Air Cube",
  },
  {
    name: "Ying Air",
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
  {
    name: "Outer Space"
  }
] as const satisfies readonly InputNode[];

export const inputGraph: InputGraph = {
  nodes: inputNodes,
  edges: [
    {
      from: "Tutorial Box",
      to: "Ying Flower",
      distance: 0,
    },
    {
      from: "Tutorial Box",
      to: "Ying Island",
      distance: 0,
      depth: -3,
      note: "Starter Island",
    },
    {
      from: "Ying Island",
      to: "Ying Forest",
      distance: 0,
      depth: 1,
    },
    {
      from: "Ying Island",
      to: "Ying Air",
      distance: 0,
      depth: 1,
    },
    {
      from: "Ying Island",
      to: "Small White Flower",
      distance: 0,
      depth: 2,
      note: "Under starter island",
    },
    {
      from: "Ying Flower",
      to: "Ying Island",
      distance: 0,
      depth: 1,
    },
    {
      from: "Ying Air",
      to: "Ying Air Cube",
      distance: 1,
      depth: 1,
    },
  ],
  root: {
    name: "Outer Space",
    depth: 4
  }
};
