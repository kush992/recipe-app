import React from 'react';
import HomePageBanner from './HomePageBanner';
import { RecipeSearch } from '../../shared/types/RecipeSearch';
import HomePageSection from './HomePageSections';

interface Props {
	timeSensitiveRecipes: RecipeSearch[];
	ketoRecipes: RecipeSearch[];
	vegetarianRecipes: RecipeSearch[];
	nonVegetarianRecipes: RecipeSearch[];
}

const HomePage = ({ timeSensitiveRecipes, ketoRecipes, vegetarianRecipes, nonVegetarianRecipes }: Props) => {
	return (
		<div>
			<HomePageBanner />

			<HomePageSection recipeData={timeSensitiveRecipes} sectionTitle='Recipes under 30mins' />

			<HomePageSection recipeData={ketoRecipes} sectionTitle='Keto Recipes' />

			<HomePageSection recipeData={vegetarianRecipes} sectionTitle='Vegetarian Recipes' />

			<HomePageSection recipeData={nonVegetarianRecipes} sectionTitle='Non-Vegetarian Recipes' />
		</div>
	);
};

export default HomePage;
