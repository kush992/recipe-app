import React, { useState } from 'react';
import { fetchRecipe, setSearchHistory } from '../common/utility';
import { IngredientResponseInterface } from '../common/interface';
import RecipeCard from './recipeCard';
import SearchForm from './searchForm';

const Search = () => {
	const [recipe, setRecipe] = useState<IngredientResponseInterface[]>([]);
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showHistory, setShowHistory] = useState(false);

	const disabledButton = query.length < 1;
	const onFocus = () => setShowHistory(true);

	const handleSearch = async () => {
		setShowHistory(false);
		setIsLoading(true);
		setSearchHistory(query);
		try {
			const data = await fetchRecipe(query);
			setRecipe(data.results);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	const setQueryFromHistory = (historyValue: string) => {
		setQuery(historyValue);
		setShowHistory(false);
	};

	let historyArray: any[] = [];
	if (typeof window !== 'undefined') historyArray = JSON.parse(localStorage.getItem('allItems')!);

	return (
		<div>
			<div className='search'>
				<h1 className='search__heading'>Search for your fav food</h1>
				<SearchForm
					query={query}
					showHistory={showHistory}
					disabledButton={disabledButton}
					onFocus={onFocus}
					handleSearch={() => handleSearch()}
					setQuery={(e: any) => setQuery(e.target.value)}
					historyArray={historyArray}
					setQueryFromHistory={setQueryFromHistory}
					isLoading={isLoading}
				/>
				{isLoading && <p>Hang tight, getting you right there...</p>}
			</div>
			{!isLoading && (
				<div className='ingredients__card'>
					{recipe.map((item: IngredientResponseInterface) => (
						<RecipeCard key={item.id} name={item.name} image={item.image} />
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
