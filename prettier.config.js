// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	tailwindFunctions: ["cn", "cva"],
	plugins: ["prettier-plugin-tailwindcss"],
	trailingComma: "es5",
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	useTabs: true,
	bracketSpacing: true,
	printWidth: 80,
};

export default config;
