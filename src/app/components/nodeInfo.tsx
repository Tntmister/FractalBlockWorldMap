import { Node, Edge } from "../types";
import Image from "./Image";
import "../css/nodeInfo.css";
import { Fragment } from "react";

interface NodeInfoProps {
	node: Node;
	onEdgeClick: (path: Edge[], rerender?: boolean) => void;
}

export default function NodeInfo({ node, onEdgeClick }: NodeInfoProps) {
	return (
		<div id='nodeContainer'>
			<div id='nodeInfoContainer'>
				<div id='nodeHeader'>
					<span>
						{node.trophy && (
							<Image className='icon' src={`./images/icons/Trophy.webp`} />
						)}
					</span>
					<span>{node.name}</span>
					<span>
						{node.secretTrophy &&
							[...Array(node.secretTrophy)].map((_, i) => (
								<Image
									className='icon'
									key={i}
									src={`./images/icons/Secret Trophy.webp`}
								/>
							))}
					</span>
				</div>
				<Image id='nodeImage' src={`./images/nodes/${node.name}.jpg`} alt='' />
				<div id='nodeInfo'>
					{node.interactables.length > 0 && (
						<div className='nodeInfo'>
							<div>Interactables</div>
							{node.interactables.map((interactable) => (
								<div key={interactable}>
									<Image
										className='icon'
										src={`./images/icons/${interactable}.webp`}
									/>
									{interactable}
								</div>
							))}
						</div>
					)}
					{node.monsters.length > 0 && (
						<div className='nodeInfo'>
							{node.monsters.map((monster) => monster.name)}
						</div>
					)}
					{node.items?.length > 0 && <div className='nodeInfo'>{node.items}</div>}
					{node.upgrades?.length > 0 && <div className='nodeInfo'>{node.upgrades}</div>}
				</div>
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
										fallbackSrc={edge.node.images?.[0]?.src}
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
