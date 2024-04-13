import React from 'react';
import Breadcrumbs from '../../src/shared/components/Breadcrumbs';
import { GetServerSidePropsContext } from 'next';
import { baseUrl } from '../../src/common/utility';
import { ApiRoutes } from '../../src/shared/Enums/ApiRoutes';
import { RecipeSearch } from '../../src/shared/types/RecipeSearch';
import { DataWithPagination } from '../../src/shared/types/DataWithPagination';
import SearchPage from '../../src/components/SearchPage';

interface Props {
	searchData: RecipeSearch[];
	error: string;
}

const Search = (props: Props) => {
	return (
		<div className='max-w-7xl mx-auto mt-2 p-6 h-[80vh]'>
			<Breadcrumbs />
			{props?.error && <h3>{props.error}</h3>}
			<SearchPage recipeData={props.searchData} />
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

	const recipeData: DataWithPagination<RecipeSearch> = await response.json();

	return {
		props: {
			searchData: recipeData.results,
		},
	};
}
