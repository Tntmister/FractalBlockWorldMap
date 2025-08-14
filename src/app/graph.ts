import { Connections, connections, nodeNames } from "./connections";

type route = {
  [dest in nodeNames]: number
}

//https://rikyperdana.medium.com/directed-graph-pathfinding-algorithm-in-functional-js-b71a39e6dec8
//above code snippet adapted for different data format and Typescript
class Graph {
  connections: Connections;
  constructor(connections: Connections) {
    this.connections = connections;
  }

  pFinder = (from: nodeNames, dest: nodeNames, path = <route>{ [from]: 1 }) => {
    const keys = Object.keys(this.connections) as (keyof typeof this.connections)[]
    return keys.filter((step) => !path[step])
      .reduce(
        (acc, next): route[] =>
          this.connections[from]?.[next]?.distance
            ? [
                ...acc,
                ...this.pFinder(next, dest, {
                  ...path,
                  [from]: this.connections[from][next].distance,
                }),
              ]
            : [...acc, ...(!acc.length && from === dest ? [path] : [])],
        []
      );
  }

  sum = (arr: Array<number>) => arr.reduce((a, b) => a + b);
  sub = ([first, ...rest]: Array<number>) => first - this.sum(rest);

  shortestPath = (from: nodeNames, dest: nodeNames): route =>
    this.pFinder(from, dest).sort((a, b) =>
      this.sub([this.sum(Object.values(a)), this.sum(Object.values(b))])
    )[0];

  longestPath = (from: nodeNames, dest: nodeNames): route =>
    this.pFinder(from, dest).sort((a, b) =>
      this.sub([this.sum(Object.values(b)), this.sum(Object.values(a))])
    )[0];
}
const graph = new Graph(connections);
console.log(graph.connections);
console.log(graph.shortestPath("Tutorial Box", "Small White Flower"));
