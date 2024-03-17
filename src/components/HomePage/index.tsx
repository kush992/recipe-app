import React from 'react';
import Image from 'next/image';
import HomePageBanner from './HomePageBanner';
import { RecipeSearch } from '../../shared/types/RecipeSearch';
import Card from '../../shared/components/Card';
import { RouteNames } from '../../shared/Enums/RouteNames';
import HomePageSection from './HomePageSections';

interface Props {
	recipeData: RecipeSearch[];
}

const HomePage = ({ recipeData }: Props) => {
	return (
		<div>
			<HomePageBanner />

			<HomePageSection recipeData={recipeData} sectionTitle='Recipes under 30mins' />

			<HomePageSection recipeData={recipeData} sectionTitle='Vegan Recipes' />

			<HomePageSection recipeData={recipeData} sectionTitle='Vegetarian Recipes' />

			<HomePageSection recipeData={recipeData} sectionTitle='Non-Vegetarian Recipes' />
		</div>
	);
};

export default HomePage;
