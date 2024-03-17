import { NextApiRequest, NextApiResponse } from 'next';
import { API_KEY } from '../../src/common/utility';

const cache = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const maxReadyTime = req.query.maxReadyTime || 30;
	const limit = req.query.limit || 6;
	const URL = `https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=${maxReadyTime}&apiKey=${API_KEY}&number=${limit}`;

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
