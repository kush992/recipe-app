export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const baseUrl = () => {
	let baseUrl = '';
	if (process.env.VERCEL_URL) {
		baseUrl = `https://${process.env.VERCEL_URL}`;
	} else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
		baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
	} else {
		// Fallback to localhost if environment variables are not available
		baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
	}

	return baseUrl;
};

export const fetchRecipe = async (query: string) => {
	const response = fetch(`/api/fetchRecipe?query=${query}`);

	return (await response).json();
};

export const setSearchHistory = (query: string) => {
	let existingQuery = JSON.parse(localStorage.getItem('allItems') as string);
	if (existingQuery === null) existingQuery = [];
	const history = {
		ingredientName: query,
	};

	if (query.length > 1) {
		localStorage.setItem('history', JSON.stringify(history));
		existingQuery.unshift(history);
		localStorage.setItem('allItems', JSON.stringify(existingQuery));
	}
};

const PATH_DELIMITER = '-';

export const transformStringForURL = (string: string) =>
	string
		?.normalize('NFD')
		?.replace(/[\u0300-\u036f]/g, '')
		// Remove whitespaces from start and end
		?.trim()
		// Replace all'-' and ',' chars with a space
		?.replace(/[-,]/g, ' ')
		// Replace spaces+ with '-' delimiter
		?.replace(/\s+/g, PATH_DELIMITER);

export const revertTransformStringForURL = (string: string, PATH_DELIMITER: string) =>
	string
		// Replace '-' delimiter with a space
		?.replace(new RegExp(PATH_DELIMITER, 'g'), ' ')
		// Replace spaces with ','
		?.replace(/\s/g, ',')
		// Add whitespaces to start and end
		?.trimStart()
		?.trimEnd();
