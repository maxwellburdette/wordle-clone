/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: { url: "/", static: true },
		src: { url: "/" },
	},
	plugins: [["@snowpack/plugin-typescript", "@snowpack/plugin-webpack"]],
	devOptions: {
		port: 3000,
	},
	buildOptions: {
		out: "dist",
	},
	routes: [
		/* Enable an SPA Fallback in development: */
		{ match: "routes", src: ".*", dest: "/index.html" },
	],
	optimize: {
		bundle: true,
		minify: true,
		target: "es2018",
	},
};
