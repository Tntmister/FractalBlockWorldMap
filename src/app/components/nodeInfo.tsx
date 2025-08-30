import { Node, Edge, imageTypes, weaponUpgrades } from "../types";
import Image from "./Image";
import "../css/nodeInfo.css";
import { Fragment, useEffect } from "react";

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
				console.log(tooltip);
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
					<div className='nodeInfo'>
						<div>Interactables</div>
						{node.interactables.length > 0 &&
							node.interactables.map((interactable) => (
								<div key={interactable}>
									<Image
										className='icon-small'
										src={`./images/icons/${imageTypes.filter((weaponType) => interactable.includes(weaponType))[0] ?? interactable}.webp`}
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
												src={`./images/icons/${imageTypes.filter((weaponType) => monster.drop!.includes(weaponType))[0] ?? monster.drop}.webp`}
											/>
											<div>
												{[...weaponUpgrades, "Ammo"].filter((dropType) =>
													monster.drop!.includes(dropType),
												)[0] ?? monster.drop}
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
										src={`./images/icons/${(imageTypes.filter((weaponType) => item == weaponType)[0] ?? imageTypes.filter((weaponType) => item.includes(weaponType))[0] ?? item).replaceAll("%", "%25")}.webp`}
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
														imageTypes.filter((weaponType) =>
															upgrade.includes(weaponType),
														)[0] ?? upgrade
													}.webp`}
												/>
												{weaponUpgrades.filter((weaponUpgrade) =>
													upgrade.includes(weaponUpgrade),
												)[0] ?? upgrade}
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
