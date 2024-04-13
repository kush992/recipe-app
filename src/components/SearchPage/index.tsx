import React from 'react';
import { transformStringForURL } from '../../common/utility';
import { RouteNames } from '../../shared/Enums/RouteNames';
import { RecipeSearch } from '../../shared/types/RecipeSearch';
import Card from '../../shared/components/Card';

type Props = {
	recipeData: RecipeSearch[];
};

const SearchPage = ({ recipeData }: Props) => {
	return (
		<section>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
				{recipeData?.map((recipe) => (
					<Card
						key={recipe.id}
						imageAlt={recipe.title}
						imageUrl={recipe.image}
						title={recipe.title}
						redirectionLink={`${RouteNames.RECIPE}/${recipe.id}-${transformStringForURL(recipe.title)}`}
					/>
				))}

				{recipeData?.length === 0 && <h3>No recipes found</h3>}
			</div>
		</section>
	);
};

export default SearchPage;
