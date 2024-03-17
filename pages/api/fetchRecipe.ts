import { NextApiRequest, NextApiResponse } from 'next';
import { API_KEY } from '../../src/common/utility';

const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const query = req.query.query || 'apple';
	const URL = `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${API_KEY}`;

	// If the data is in the cache, use it
	if (cache.has(URL)) {
		res.status(200).json(cache.get(URL));
		return;
	}

	const response = await fetch(URL);

	if (!response.ok) {
		console.error(`Error: ${response.status} - ${response.statusText}`);
		res.status(response.status).send(`Error: ${response.status} - ${response.statusText}`);
		return;
	}

	const data = await response.json();

	
	cache.set(URL, data);

	res.status(200).json(data);
}
