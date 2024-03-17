import React from 'react';
import Image from 'next/image';
import HomePageBanner from './HomePageBanner';
import { RecipeSearch } from '../../shared/types/RecipeSearch';
import Card from '../../shared/components/Card';
import { RouteNames } from '../../shared/Enums/RouteNames';

interface Props {
	recipeData: RecipeSearch[];
}

const HomePage = ({ recipeData }: Props) => {
	return (
		<div>
			<HomePageBanner />
			<div className='flex flex-col md:flex-row gap-8 items-center justify-center p-6 w-full'>
				<a className='flex flex-col justify-center items-center gap-4 bg-seaSalt-600 hover:bg-seaSalt-400 transition-all p-3 rounded-lg text-black w-full'>
					<Image
						src='https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
						alt='homepage banner image'
						height={40}
						width={40}
						objectFit='cover'
						className='rounded-lg shadow-lg'
					/>
					<p>Save and organize recipes from any site</p>
				</a>
				<a className='flex flex-col justify-center items-center gap-4 bg-seaSalt-600 hover:bg-seaSalt-400 transition-all p-3 rounded-lg text-black w-full'>
					<Image
						src='https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
						alt='homepage banner image'
						height={40}
						width={40}
						objectFit='cover'
						className='rounded-lg shadow-lg'
					/>
					<p>Free meal planner & food tracker</p>
				</a>
				<a className='flex flex-col justify-center items-center gap-4 bg-seaSalt-600 hover:bg-seaSalt-400 transition-all p-3 rounded-lg text-black w-full'>
					<Image
						src='https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
						alt='homepage banner image'
						height={40}
						width={40}
						objectFit='cover'
						className='rounded-lg shadow-lg'
					/>
					<p>Collect your favourite products</p>
				</a>
			</div>

			<section>
				<h3 className='text-2xl font-bold dark:text-white'>Recipes under 30mins</h3>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
					{recipeData?.map((recipe) => (
						<Card
							key={recipe.id}
							imageAlt={recipe.title}
							imageUrl={recipe.image}
							title={recipe.title}
							redirectionLink={`${RouteNames.RECIPE}/${recipe.id}`}
						/>
					))}
				</div>
			</section>

			<section>
				<h3 className='text-2xl font-bold dark:text-white'>Vegan Recipes</h3>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
					{recipeData?.map((recipe) => (
						<Card
							key={recipe.id}
							imageAlt={recipe.title}
							imageUrl={recipe.image}
							title={recipe.title}
							redirectionLink={`${RouteNames.RECIPE}/${recipe.id}`}
						/>
					))}
				</div>
			</section>

			<section>
				<h3 className='text-2xl font-bold dark:text-white'>Vegetarian Recipes</h3>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
					{recipeData?.map((recipe) => (
						<Card
							key={recipe.id}
							imageAlt={recipe.title}
							imageUrl={recipe.image}
							title={recipe.title}
							redirectionLink={`${RouteNames.RECIPE}/${recipe.id}`}
						/>
					))}
				</div>
			</section>

			<section>
				<h3 className='text-2xl font-bold dark:text-white'>Non-Vegetarian Recipes</h3>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>
					{recipeData?.map((recipe) => (
						<Card
							key={recipe.id}
							imageAlt={recipe.title}
							imageUrl={recipe.image}
							title={recipe.title}
							redirectionLink={`${RouteNames.RECIPE}/${recipe.id}`}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default HomePage;
