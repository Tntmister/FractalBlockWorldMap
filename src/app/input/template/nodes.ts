import { InputNode, item } from "../../types";
import { monsterNames } from "./monsters";

//custom items are typescript template literals
type CustomItems = undefined;

type InputNodeSpecific = InputNode & {
	monsters?: monsterNames[];
	items?: (item | CustomItems | (item | CustomItems)[])[];
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

export const inputNodes = INPUT_NODES as unknown as InputNodeSpecific[];

export const startingPath: nodeName[] = ["Test"];
