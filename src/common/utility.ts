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
