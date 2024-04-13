import React from 'react';
import HomePageBanner from './HomePageBanner';
import { RecipeSearch } from '../../shared/types/RecipeSearch';
import HomePageSection from './HomePageSections';

interface Props {
	timeSensitiveRecipes: RecipeSearch[];
	ketoRecipes: RecipeSearch[];
	vegetarianRecipes: RecipeSearch[];
	nonVegetarianRecipes: RecipeSearch[];
	error: string;
}

const HomePage = ({ timeSensitiveRecipes, ketoRecipes, vegetarianRecipes, nonVegetarianRecipes, error }: Props) => {
	return (
		<div>
			<HomePageBanner />

			{error && <h3 className='text-red-500'>Provider Error</h3>}

			{!error &&
				timeSensitiveRecipes.length === 0 &&
				ketoRecipes.length === 0 &&
				vegetarianRecipes.length === 0 &&
				nonVegetarianRecipes.length === 0 && <h3>No recipes found</h3>}

			{!error && (
				<>
					<HomePageSection recipeData={timeSensitiveRecipes} sectionTitle='Recipes under 30mins' />

					<HomePageSection recipeData={ketoRecipes} sectionTitle='Keto Recipes' />

					<HomePageSection recipeData={vegetarianRecipes} sectionTitle='Vegetarian Recipes' />

					<HomePageSection recipeData={nonVegetarianRecipes} sectionTitle='Non-Vegetarian Recipes' />
				</>
			)}
		</div>
	);
};

export default HomePage;
