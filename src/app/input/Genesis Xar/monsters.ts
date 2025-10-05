import { monster } from "../../types";

export const monsters = [
	{
		name: "Inner Core",
	},
	{
		name: "Inner Core Minion",
	},
] as const satisfies readonly monster[];

export type monsterNames = (typeof monsters)[number]["name"];
