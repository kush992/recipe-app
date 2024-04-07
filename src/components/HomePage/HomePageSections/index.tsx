import React from 'react';
import Card from '../../../shared/components/Card';
import { RecipeSearch } from '../../../shared/types/RecipeSearch';
import { RouteNames } from '../../../shared/Enums/RouteNames';
import { transformStringForURL } from '../../../common/utility';

type Props = {
	recipeData: RecipeSearch[];
	sectionTitle: string;
};

const HomePageSection = ({ recipeData, sectionTitle }: Props) => {
	return (
		<section>
			<h3 className='text-2xl font-bold dark:text-white'>{sectionTitle}</h3>
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
			</div>
		</section>
	);
};

export default HomePageSection;
