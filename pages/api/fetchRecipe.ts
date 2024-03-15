import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Create an in-memory cache
const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const query = req.query.query || 'apple';
	const URL = `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${API_KEY}`;

	// If the data is in the cache, use it
	if (cache.has(URL)) {
		console.log('cache', cache.get(URL));
		res.status(200).json(cache.get(URL));
		return;
	}

	const response = await fetch(URL);

	if (!response.ok) {
		console.error(`Error: ${response.status} - ${response.statusText}`);
		res.status(500).send(`Error: ${response.status} - ${response.statusText}`);
		return;
	}

	const data = await response.json();

	// Store the data in the cache
	cache.set(URL, data);

	res.status(200).json(data);
}
