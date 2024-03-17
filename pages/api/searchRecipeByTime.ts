// https://api.spoonacular.com/recipes/complexSearch
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Create an in-memory cache
const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const maxReadyTime = req.query.maxReadyTime || 30;
	const limit = req.query.limit || 6;
	const URL = `https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=${maxReadyTime}&apiKey=${API_KEY}&number=${limit}`;

	// If the data is in the cache, use it
	if (cache.has(URL)) {
		console.log('Cache hit');
		res.status(200).json(cache.get(URL));
		return;
	}

	console.log('Cache miss');
	const response = await fetch(URL);

	if (!response.ok) {
		console.error(`Error: ${response.status} - ${response.statusText}`);
		res.status(500).send(`Error: ${response.status} - ${response.statusText}`);
		return;
	}

	const data = await response.json();

	// Store the data in the cache
	cache.set(URL, data);

	console.log('data', data);
	res.status(200).json(data);
}
