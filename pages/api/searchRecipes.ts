import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const searchQuery = req.query.searchQuery as string;
	const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${API_KEY}`;

	if (cache.has(URL)) {
		console.log('Cache hit', { URL });
		res.status(200).json(cache.get(URL));
		return;
	}

	const response = await fetch(URL);
	console.log('Cache miss', { URL, page: 'search page' });

	if (!response.ok) {
		console.error(`Error: ${response.status} - ${response.statusText}`);
		res.status(response.status).send(`Error: ${response.status} - ${response.statusText}`);
		return;
	}

	const data = await response.json();

	cache.set(URL, data);

	res.status(200).json(data);
}
