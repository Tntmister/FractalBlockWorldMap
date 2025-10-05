import { monster } from "../../types";

export const monsters = [
	{
		name: "Test",
		drop: "1 Gold",
	},
] as const satisfies readonly monster[];

export type monsterNames = (typeof monsters)[number]["name"];
