import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const URL = 'https://api.spoonacular.com/food/ingredients/search';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const query = req.query.query || 'apple';
	const URL = `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${API_KEY}`;

	const response = await fetch(URL);

	if (!response.ok) {
		console.error(`Error: ${response.status} - ${response.statusText}`);
		res.status(500).send(`Error: ${response.status} - ${response.statusText}`);
		return;
	}

	const data = await response.json();
	res.status(200).json(data);
}
