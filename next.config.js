/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = {
	nextConfig,
	images: {
		domains: ['spoonacular.com', 'tailwindui.com', 'images.unsplash.com', 'img.spoonacular.com'],
	},
};
