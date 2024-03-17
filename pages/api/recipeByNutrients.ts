import { NextApiRequest, NextApiResponse } from 'next';
import { API_KEY } from '../../src/common/utility';

const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const URL = `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&apiKey=${API_KEY}`;

	// If the data is in the cache, use it
	if (cache.has(URL)) {
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

	
	cache.set(URL, data);

	res.status(200).json(data);
}
