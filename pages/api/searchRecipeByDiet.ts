import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const diet = req.query.diet || 30;
	const limit = req.query.limit || 6;
	const includeIngredients = req.query.includeIngredients || '';
	const URL = `https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&apiKey=${API_KEY}&number=${limit}&includeIngredients=${includeIngredients}`;

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
