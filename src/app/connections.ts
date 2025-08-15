import { nodes } from "./nodes";

export type nodeNames = typeof nodes[number]["name"];

export type Connections = {
  [startName in nodeNames]?: {
    [destName in nodeNames]?: {
      distance: number; // how hard is it to traverse to this node
      depth?: number; // resulting depth change from traversing to this node
      note?: string; // extra information (required key, hard monsters)
      twoWay?: boolean; // connection goes both ways
    };
  };
};

const connections: Connections = {
  "Tutorial Box": {
    "Ying Flower": { distance: 0 },
    "Ying Island": { distance: 0, depth: -3, note: "Starter Island" },
  },
  "Ying Island": {
    "Ying Forest": { distance: 0, depth: 1, twoWay: true },
    "Ying Air": { distance: 0, depth: 1 },
    "Small White Flower": { distance: 0, depth: 2, twoWay: true, note: "Under starter island" },
  },
  "Ying Flower": { "Ying Island": { distance: 0, depth: 1 } },
  "Ying Air": { "Ying Air Cube": { distance: 1, depth: 1 } },
};

(Object.keys(connections) as nodeNames[]).forEach((key1) => {
  (
    Object.keys(connections[key1]!) as nodeNames[]
  ).forEach((key2) => {
    if (connections[key1]![key2]?.twoWay) {
      delete connections[key1]![key2].twoWay;
      connections[key2] = {
        ...connections[key2],
        [key1]: Object.assign(connections[key1]![key2]),
      };
      if (connections[key2]![key1]!.depth) connections[key2]![key1]!.depth *= -1;
    }
  });
});
export { connections };
