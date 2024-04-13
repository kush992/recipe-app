import React from 'react';
import { transformStringForURL } from '../../common/utility';
import { RouteNames } from '../../shared/Enums/RouteNames';
import { RecipeSearch } from '../../shared/types/RecipeSearch';
import Card from '../../shared/components/Card';
import { SearchResultData } from '../../shared/types/RecipeSearchResults';

type Props = {
	searchRecipesData: SearchResultData[];
};

const SearchPage = ({ searchRecipesData }: Props) => {
	return (
		<section>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
				{searchRecipesData?.map((recipe) => (
					<Card
						key={recipe.id}
						imageAlt={recipe.name}
						imageUrl={recipe.image}
						title={recipe?.name}
						redirectionLink={`${RouteNames.RECIPE}/${recipe.id}-${transformStringForURL(recipe.name)}`}
					/>
				))}

				{searchRecipesData?.length === 0 && <h3>No recipes found</h3>}
			</div>
		</section>
	);
};

export default SearchPage;
