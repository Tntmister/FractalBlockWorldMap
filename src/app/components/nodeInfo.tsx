import { Node, Edge } from "../types";
import Image from "./Image";
import "../css/nodeInfo.css";
import { Fragment } from "react";

interface NodeInfoProps {
	node: Node;
	onEdgeClick: (path: Edge[], rerender?: boolean) => void;
}

export default function NodeInfo({ node, onEdgeClick }: NodeInfoProps) {
	console.log(node.edges);
	return (
		<div id='nodeInfoContainer'>
			<div id='nodeContainer'>
				<div id='nodeHeader'>{node.name}</div>
				<Image id='nodeImage' src={`./images/nodes/${node.name}.jpg`} alt='' />
			</div>

			{node.edges.length > 0 && (
				<div id='edgesContainer'>
					Areas inside {node.name}:
					<div id='edgesList'>
						{node.edges.map((edge, index) => (
							<Fragment key={`edge${index}`}>
								<span className={`edge`} onClick={() => onEdgeClick([edge])}>
									{edge.node.name}
									{edge.note && ` (${edge.note})`}
									<Image
										className='edgeTooltip'
										src={`./images/edges/${node.name} - ${edge.node.name}.jpg`}
										fallbackSrc={edge.node.images?.[0].src}
										alt=''
									/>
								</span>
							</Fragment>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
