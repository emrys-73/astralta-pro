const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const production = !process.env.ROLLUP_WATCH;

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
	],
};

module.exports = config;


