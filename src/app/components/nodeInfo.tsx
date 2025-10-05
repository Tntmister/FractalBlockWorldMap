import { Node, upgrade, item } from "../types";
import Image from "./Image";
import "../css/nodeInfo.css";
import { Fragment, useEffect, useState } from "react";
import { labels } from "../input/labelMap";

interface NodeInfoProps {
	node: Node;
	selectedPackage: string;
}

const infoWindows = ["interactables", "items", "upgrades", "monsters", "notes"] as const;

export default function NodeInfo({ node, selectedPackage }: NodeInfoProps) {
	useEffect(() => {
		changeInfoWindow(infoWindows.find((value) => node[value]?.length ?? 0 > 0));

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

	const [currentInfoWindow, setCurrentInfoWindow] = useState<(typeof infoWindows)[number]>();

	function changeInfoWindowEvent(e: React.MouseEvent<HTMLElement>) {
		changeInfoWindow((e.target as HTMLElement).dataset.infotype! as typeof currentInfoWindow);
	}

	function changeInfoWindow(infoType: typeof currentInfoWindow) {
		setCurrentInfoWindow(infoType);
		for (const el of document.querySelectorAll<HTMLElement>("#nodeInfoHeader > span")) {
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
			<Image
				id='nodeImage'
				src={`./images/nodes/packages/${selectedPackage}/${node.name}.webp`}
				fallbackSrc={`./images/edges/packages/Classic Xar/${node.name}.webp`}
				alt=''
			/>
			<div id='nodeInfo'>
				<div id='nodeInfoHeader'>
					<span
						data-infotype={"interactables"}
						onClick={node.interactables.length > 0 ? changeInfoWindowEvent : undefined}
						className={node.interactables.length == 0 ? "unavailable" : ""}
					>
						Interactables
					</span>
					<span
						data-infotype={"monsters"}
						onClick={node.monsters.length > 0 ? changeInfoWindowEvent : undefined}
						className={node.monsters.length == 0 ? "unavailable" : ""}
					>
						Monsters
					</span>
					<span
						data-infotype={"items"}
						onClick={node.items.length > 0 ? changeInfoWindowEvent : undefined}
						className={node.items.length == 0 ? "unavailable" : ""}
					>
						Items
					</span>
					<span
						data-infotype={"upgrades"}
						onClick={node.upgrades.length > 0 ? changeInfoWindowEvent : undefined}
						className={node.upgrades.length == 0 ? "unavailable" : ""}
					>
						Upgrades
					</span>
					<span
						data-infotype={"notes"}
						onClick={node.notes ? changeInfoWindowEvent : undefined}
						className={!node.notes ? "unavailable" : ""}
					>
						Notes
					</span>
				</div>
				{currentInfoWindow && (
					<div id='nodeInfoContent'>
						{currentInfoWindow == "interactables" &&
							node.interactables.map((interactable) => (
								<div key={interactable}>
									<Image
										className='icon-small'
										src={`./images/icons/${interactable}.webp`}
									/>
									{interactable}
								</div>
							))}
						{currentInfoWindow == "monsters" &&
							node.monsters.map((monster) => (
								<div key={monster.name}>
									{monster.name}
									{monster.drop && (
										<>
											(
											<Image
												className='icon-small'
												src={`./images/icons/${labels.get(monster.drop.replace(/ x\d+$/i, "") as item | upgrade)?.imageName ?? monster.drop.replace(/^\d+ (Second )?/i, "")}.webp`}
											/>
											<div>
												{labels.get(
													monster.drop.replace(/ x\d+$/i, "") as
														| item
														| upgrade,
												)?.label ?? monster.drop}
											</div>
											)
										</>
									)}
								</div>
							))}
						{currentInfoWindow == "items" &&
							node.items.map((item) => {
								const itemAux = Array.isArray(item) ? item : [item];
								return (
									<div key={itemAux.join("")}>
										{itemAux.length > 1 && "("}
										{itemAux.map((item, index) => (
											<Fragment key={`${itemAux.join("")}|${item}`}>
												<Image
													className='icon-small'
													src={`./images/icons/${
														labels.get(
															item.replace(/ x\d+$/i, "") as item,
														)?.imageName ??
														item.replace(/^\d+ (Second )?/i, "")
													}.webp`}
												/>
												{item.includes("Ammo")
													? item.slice(item.indexOf(" ") + 1)
													: item}
											</Fragment>
										))}
									</div>
								);
							})}
						{currentInfoWindow == "upgrades" &&
							node.upgrades.map((upgrade) => {
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
														src={(() => {
															const upgradeName = upgrade.replace(
																/ x\d+$/i,
																"",
															) as upgrade;
															return `./images/icons/${
																labels.get(upgradeName)
																	?.imageName ?? upgradeName
															}.webp`;
														})()}
													/>
												)}
												{labels.get(upgrade)?.label ?? upgrade}
											</Fragment>
										))}
										{upgradeAux.length > 1 && ")"}
									</div>
								);
							})}
						{currentInfoWindow == "notes" && <div id='nodeInfoNotes'>{node.notes}</div>}
					</div>
				)}
			</div>
		</div>
	);
}
