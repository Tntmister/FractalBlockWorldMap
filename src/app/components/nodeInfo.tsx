import { Node, Edge, weaponUpgrades, defenceItems, weaponTypes, defenceUpgrades } from "../types";
import Image from "./Image";
import "../css/nodeInfo.css";
import { Fragment, useEffect } from "react";
import { labels } from "../input/labelMap";

interface NodeInfoProps {
	node: Node;
	onEdgeClick: (path: Edge[], rerender?: boolean) => void;
}

export default function NodeInfo({ node, onEdgeClick }: NodeInfoProps) {
	useEffect(() => {
		for (const tooltip of document.getElementsByClassName(
			"edgeTooltip",
		) as HTMLCollectionOf<HTMLImageElement>) {
			tooltip.style.visibility = "hidden";
		}
		const tooltipListener = (e: MouseEvent) => {
			const tooltip = document.querySelector<HTMLElement>(".edge:hover");
			if (tooltip) {
				const tooltipImage = tooltip.children[0] as HTMLImageElement;
				if (tooltipImage?.complete && tooltipImage?.offsetWidth) {
					tooltipImage.style.left = e.clientX - tooltipImage.offsetWidth - 5 + "px";
					tooltipImage.style.top = e.clientY - tooltipImage.offsetHeight - 5 + "px";
				}
			}
		};
		const tooltipTimeout = setTimeout(() => {
			for (const tooltip of document.getElementsByClassName(
				"edgeTooltip",
			) as HTMLCollectionOf<HTMLImageElement>) {
				tooltip.style.visibility = "";
			}
			window.addEventListener("mousemove", tooltipListener);
		}, 250);
		return () => {
			for (const tooltip of document.getElementsByClassName(
				"edgeTooltip",
			) as HTMLCollectionOf<HTMLImageElement>) {
				tooltip.style.visibility = "";
			}
			window.clearTimeout(tooltipTimeout);
			window.removeEventListener("mousemove", tooltipListener);
		};
	}, [node]);

	return (
		<div id='nodeContainer'>
			<div id='nodeInfoContainer'>
				<div id='nodeHeader'>
					<span>
						{node.trophy && (
							<Image className='icon' src={`./images/icons/Trophy.webp`} />
						)}
						{[...Array(Math.max(+node.trophy, +node.secretTrophy) - +node.trophy)].map(
							(_, i) => (
								<span className='icon' key={`trophy${i}Blank`} />
							),
						)}
					</span>
					<span>{node.name}</span>
					<span>
						<>
							{[...Array(+node.secretTrophy)].map((_, i) => (
								<Image
									className='icon'
									key={`secretTrophy${i}`}
									src={`./images/icons/Secret Trophy.webp`}
								/>
							))}
							{[
								...Array(
									Math.max(+node.trophy, +node.secretTrophy) - +node.secretTrophy,
								),
							].map((_, i) => (
								<span className='icon' key={`secretTrophy${i}Blank`} />
							))}
						</>
					</span>
				</div>
				<Image id='nodeImage' src={`./images/nodes/${node.name}.jpg`} alt='' />
				<div id='nodeInfo'>
					<div className='nodeInfo'>
						<div>Interactables</div>
						{node.interactables.length > 0 &&
							node.interactables.map((interactable) => (
								<div key={interactable}>
									<Image
										className='icon-small'
										src={`./images/icons/${interactable}.webp`}
									/>
									{interactable}
								</div>
							))}
					</div>
					<div className='nodeInfo'>
						<div>Monsters</div>
						{node.monsters.length > 0 &&
							node.monsters.map((monster) => (
								<div key={monster.name}>
									{monster.name}
									{monster.drop && (
										<>
											(
											<Image
												className='icon-small'
												src={`./images/icons/${labels.get(monster.drop)?.imageName ?? monster.drop}.webp`}
											/>
											<div>
												{labels.get(monster.drop)?.imageName ??
													monster.drop}
											</div>
											)
										</>
									)}
								</div>
							))}
					</div>
					<div className='nodeInfo'>
						<div>Items</div>
						{node.items.length > 0 &&
							node.items.map((item) => (
								<div key={item}>
									<Image
										className='icon-small'
										src={`./images/icons/${labels.get(item)?.imageName ?? item}.webp`}
									/>
									{item.includes("Ammo") ? "Ammo" : item}
								</div>
							))}
					</div>
					<div className='nodeInfo'>
						<div>Upgrades</div>
						{node.upgrades.length > 0 &&
							node.upgrades.map((upgrade) => {
								const upgradeAux = Array.isArray(upgrade) ? upgrade : [upgrade];
								return (
									<div key={upgradeAux.join("")}>
										{upgradeAux.map((upgrade, index) => (
											<Fragment key={`${upgradeAux.join("")}|${upgrade}`}>
												{!!index && "/"}
												<Image
													className='icon-small'
													src={`./images/icons/${
														labels.get(upgrade)?.imageName ?? upgrade
													}.webp`}
												/>
												{labels.get(upgrade)?.label ?? upgrade}
											</Fragment>
										))}
									</div>
								);
							})}
					</div>
				</div>
			</div>

			{node.edges.length > 0 && (
				<div id='edgesContainer'>
					Areas inside {node.name}:
					<div id='edgesList'>
						{node.edges.map((edge, index) => (
							<Fragment key={`edge${index}`}>
								<span className={`edge`} onClick={() => onEdgeClick([edge])}>
									{edge.requiresKey && (
										<Image
											className='icon-small'
											src={`./images/icons/${edge.requiresKey}.webp`}
										/>
									)}
									{edge.node.name}
									{edge.note && ` (${edge.note})`}
									<Image
										className='edgeTooltip'
										src={`./images/edges/${node.name} - ${edge.node.name}.jpg`}
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
