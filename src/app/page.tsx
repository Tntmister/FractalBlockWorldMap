"use client"
import './graph';
import { Graph } from './graph';
import { inputGraph } from './input';
import { useEffect, useState } from 'react'

export default function Home() {
	const [graph, _] = useState(new Graph(inputGraph, "Tutorial Box"))
	const [render, rerender] = useState(false);
	function test(){
		rerender(!render)
	}

	return (
		<div>
			{graph.previous && <div>{graph.previous.name}</div>}
			<div>{graph.current.name}</div>
			<div>{graph.current.edges.map((edge) => <div key={edge.node.name}>{edge.node.name}</div>)}</div>
			<button onClick={test}>rerender</button>
		</div>
	);
}
