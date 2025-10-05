import { InputNode } from "../../types";
import { monsterNames } from "./monsters";

type InputNodeSpecific = InputNode & {
	monsters?: monsterNames[];
};

const INPUT_NODES = [
	{
		name: "Test",
	},
	{
		name: "Test2",
	},
] as const satisfies readonly InputNodeSpecific[];

export type nodeName = (typeof INPUT_NODES)[number]["name"];

export const inputNodes = INPUT_NODES as unknown as InputNode[];

export const startingPath: nodeName[] = ["Test"];
