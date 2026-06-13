import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig([
	eslint.configs.recommended,
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat["jsx-runtime"],
	nextPlugin.configs.recommended,
	{
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-require-imports": "off",
		},
	},
]);
