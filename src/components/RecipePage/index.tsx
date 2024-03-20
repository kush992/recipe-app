import React from 'react';
import Image from 'next/image';
import Badge from '../../shared/components/Badge';
import { RecipeDetailedInfo } from '../../shared/types/RecipeDetailedInfo';

type Props = {
	recipeData: RecipeDetailedInfo;
};

const RecipePage = ({ recipeData }: Props) => {
	return (
		<div>
			<h1 className='mb-4 text-xl font-extrabold text-gray-900 dark:text-white'>
				<span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{recipeData.title}</span>
			</h1>
			<div className='mb-4 md:me-4'>
				<h2 className='mb-1 text-md text-gray-900 dark:text-white'>
					By &nbsp;
					<a href={recipeData.sourceUrl} className='underline uppercase' target='__blank'>
						{recipeData.sourceName}
					</a>
				</h2>
				<div className='flex flex-wrap'>
					{recipeData.dishTypes.map((dishType: string) => (
						<Badge key={dishType} title={dishType} type='green' />
					))}
				</div>
			</div>

			<Image src={recipeData.image} alt={recipeData.title} width={600} height={600} objectFit='cover' className='rounded-lg' />

			{recipeData.summary && (
				<div className='my-4'>
					<h3 className='text-lg font-bold dark:text-white'>Summary</h3>
					<div dangerouslySetInnerHTML={{ __html: recipeData.summary }} />
				</div>
			)}

			{recipeData.instructions && (
				<div className='my-4'>
					<h3 className='text-lg font-bold dark:text-white'>Instructions</h3>
					<div dangerouslySetInnerHTML={{ __html: recipeData.instructions }} />
				</div>
			)}

			<div className='mt-4'>
				<h2 className='mb-2 text-lg font-bold text-gray-900 dark:text-white'>Ingredients</h2>
				<ul>
					{recipeData.extendedIngredients.map((ingredient: any) => (
						<li key={ingredient.id} className='mb-1 text-gray-900 dark:text-white'>
							{ingredient.original}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RecipePage;
