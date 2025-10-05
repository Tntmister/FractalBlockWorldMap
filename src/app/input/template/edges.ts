import { edgeInfo } from "../../types";
import { nodeName } from "./nodes";

type InputEdge = {
	[from in nodeName]?: {
		[to in nodeName]?: edgeInfo;
	};
};

const inputEdges: InputEdge = {
	"Test": {
		"Test2": {
			distance: 1,
		},
	},
};

export { inputEdges };
