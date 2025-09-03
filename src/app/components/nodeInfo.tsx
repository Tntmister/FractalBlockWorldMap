import { Node, Edge, weaponUpgrades, defenceItems, weaponTypes, defenceUpgrades } from "../types";
import Image from "./Image";
import "../css/nodeInfo.css";
import { Fragment, useEffect, useState } from "react";
import { labels } from "../input/labelMap";

interface NodeInfoProps {
	node: Node;
}

export default function NodeInfo({ node }: NodeInfoProps) {
	useEffect(() => {
		// make image tooltips hover top left of cursor
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

		// add "debouce" period to tooltip images, hiding them for 250ms after clicking a new node
		for (const tooltip of document.getElementsByClassName(
			"edgeTooltip",
		) as HTMLCollectionOf<HTMLImageElement>) {
			tooltip.style.visibility = "hidden";
		}
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

	const [currentInfoWindow, setCurrentInfoWindow] = useState<
		"Interactables" | "Items" | "Upgrades" | "Monsters"
	>("Interactables");

	function changeInfoWindow(e: React.MouseEvent<HTMLElement>) {
		const infoType = (e.target as HTMLElement).dataset.infotype! as typeof currentInfoWindow;
		setCurrentInfoWindow(infoType);
		for (const el of document.querySelectorAll<HTMLElement>("#nodeInfoHeader > span")) {
			console.log(el);
			el.classList.remove("active");
			if (el.dataset.infotype == infoType) {
				el.classList.add("active");
			}
		}
	}

	return (
		<div id='nodeInfoContainer'>
			<div id='nodeHeader'>
				<span>
					{node.trophy && <Image className='icon' src={`./images/icons/Trophy.webp`} />}
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
				<div id='nodeInfoHeader'>
					<span
						className='active'
						data-infotype={"Interactables"}
						onClick={changeInfoWindow}
					>
						Interactables
					</span>
					<span data-infotype={"Monsters"} onClick={changeInfoWindow}>
						Monsters
					</span>
					<span data-infotype={"Items"} onClick={changeInfoWindow}>
						Items
					</span>
					<span data-infotype={"Upgrades"} onClick={changeInfoWindow}>
						Upgrades
					</span>
				</div>
				<div id='nodeInfoContent'>
					{currentInfoWindow == "Interactables" &&
						(node.interactables.length > 0
							? node.interactables.map((interactable) => (
									<div key={interactable}>
										<Image
											className='icon-small'
											src={`./images/icons/${interactable}.webp`}
										/>
										{interactable}
									</div>
								))
							: "N/A")}
					{currentInfoWindow == "Monsters" &&
						(node.monsters.length > 0
							? node.monsters.map((monster) => (
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
								))
							: "N/A")}
					{currentInfoWindow == "Items" &&
						(node.items.length > 0
							? node.items.map((item) => (
									<div key={item}>
										<Image
											className='icon-small'
											src={`./images/icons/${labels.get(item)?.imageName ?? (item.includes("Yellow Key") ? "Yellow Key" : item)}.webp`}
										/>
										{item.includes("Ammo") ? "Ammo" : item}
									</div>
								))
							: "N/A")}
					{currentInfoWindow == "Upgrades" &&
						(node.upgrades.length > 0
							? node.upgrades.map((upgrade) => {
									const upgradeAux = Array.isArray(upgrade) ? upgrade : [upgrade];
									return (
										<div key={upgradeAux.join("")}>
											{upgradeAux.length > 1 && "("}
											{upgradeAux.map((upgrade, index) => (
												<Fragment key={`${upgradeAux.join("")}|${upgrade}`}>
													{!!index && " or "}
													{!upgrade.includes("Non-") && (
														<Image
															className='icon-small'
															src={`./images/icons/${
																labels.get(upgrade)?.imageName ??
																upgrade
															}.webp`}
														/>
													)}
													{labels.get(upgrade)?.label ?? upgrade}
												</Fragment>
											))}
											{upgradeAux.length > 1 && ")"}
										</div>
									);
								})
							: "N/A")}
				</div>
			</div>
		</div>
	);
}
