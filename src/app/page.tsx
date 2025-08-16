import './graph';
import { Graph } from './graph';
import { inputGraph } from './input';

const graph = new Graph(inputGraph, 'Tutorial Box');
console.log(graph.current.edges);
export default function Home() {
	return (
		<div>
			{graph.previous && <div>{graph.previous.name}</div>}
			<div>{graph.current.name}</div>
			<div>{graph.current.edges.map((edge) => edge.node.name)}</div>
		</div>
	);
}
