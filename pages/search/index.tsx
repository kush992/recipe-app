import React from 'react';
import Breadcrumbs from '../../src/shared/components/Breadcrumbs';
import { GetServerSidePropsContext } from 'next';
import { baseUrl } from '../../src/common/utility';
import { ApiRoutes } from '../../src/shared/Enums/ApiRoutes';
import SearchPage from '../../src/components/SearchPage';
import { SearchResult, SearchResultData, SearchResultsResponse } from '../../src/shared/types/RecipeSearchResults';

interface Props {
	searchRecipesData: SearchResultData[];
	simpleFoodsData: SearchResultData[];
	videosData: SearchResultData[];
	error: string;
	isFetching: boolean;
}

const Search = (props: Props) => {
	return (
		<div className='max-w-7xl mx-auto mt-2 p-6 h-[80vh]'>
			<Breadcrumbs />

			{props?.isFetching && <h3>Loading...</h3>}
			{props?.error && <h3>{props.error}</h3>}
			<SearchPage searchRecipesData={props.searchRecipesData} />
		</div>
	);
};

export default Search;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { query } = context;
	if (!query) {
		return {
			props: {
				error: 'Query not provided',
				recipeData: [],
			},
		};
	}

	const searchQuery = query?.toString() || '';

	try {
		const response = await fetch(`${baseUrl()}${ApiRoutes.SEARCH_RECIPES}?searchQuery=${searchQuery}`);

		if (!response.ok) {
			console.error(`Error: ${response.status} - ${response.statusText}`);
			return {
				props: {
					error: `Error: ${response.status} - ${response.statusText}`,
					recipeData: [],
				},
			};
		}
		const recipeData: SearchResultsResponse = await response.json();

		const recipes = recipeData?.searchResults
			?.filter((recipe: SearchResult) => {
				recipe.name === 'Recipes';
			})
			.map((recipe: SearchResult) => recipe.results)
			.flat();

		const simpleFoods = recipeData?.searchResults
			?.filter((recipe: SearchResult) => {
				recipe.name === 'Simple Foods';
			})
			?.map((recipe: SearchResult) => recipe.results)
			.flat();

		const videos = recipeData?.searchResults
			.filter((recipe) => recipe.name === 'Videos')
			.map((recipe) => recipe.results)
			.flat();

		return {
			props: {
				searchRecipesData: recipes,
				simpleFoodsData: simpleFoods,
				videosData: videos,
				error: '',
			},
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				error: error,
				searchRecipesData: [],
				simpleFoodsData: [],
				videosData: [],
			},
		};
	} finally {
		console.log('Search page loaded');
	}
}
