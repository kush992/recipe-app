import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const id = req.query.id;

	if (!id) {
		res.status(400).send('Bad request - No recipe id provided');
		return;
	}

	const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

	// If the data is in the cache, use it
	if (cache.has(URL)) {
		res.status(200).json(cache.get(URL));
		return;
	}

	const response = await fetch(URL, {
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		console.error(`Error: ${response.status} - ${response.statusText}`);
		res.status(response.status).send(`Error: ${response.status} - ${response.statusText}`);
		return;
	}

	const data = await response.json();

	cache.set(URL, data);

	res.status(200).json(data);
}
