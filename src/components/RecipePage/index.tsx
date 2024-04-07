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
			<h1 className='mb-4 text-2xl font-extrabold text-gray-900 dark:text-white'>{recipeData.title}</h1>
			<div className='mb-4 md:me-4'>
				<h2 className='mb-1 text-md text-gray-900 dark:text-white'>
					By &nbsp;
					<a href={recipeData.sourceUrl} className='underline uppercase' target='__blank'>
						{recipeData.sourceName}
					</a>
				</h2>
				<div className='flex flex-wrap my-3'>
					{recipeData.dishTypes.map((dishType: string) => (
						<Badge key={dishType} title={dishType} type='green' />
					))}
				</div>
			</div>

			<Image src={recipeData.image} alt={recipeData.title} width={1312} height={600} objectFit='cover' className='rounded-lg' />

			{recipeData.summary && (
				<div className='my-4'>
					<h3 className='text-lg font-bold dark:text-white'>Summary</h3>
					<div dangerouslySetInnerHTML={{ __html: recipeData.summary }} />
				</div>
			)}

			<div className='mt-4'>
				<h2 className='mb-2 text-lg font-bold text-gray-900 dark:text-white'>Ingredients</h2>
				<ul>
					{recipeData.extendedIngredients.map((ingredient: any) => (
						<li key={ingredient.id} className='mb-1 text-gray-900 dark:text-white list-inside list-disc'>
							{ingredient.original}
						</li>
					))}
				</ul>
			</div>

			{recipeData?.instructions && (
				<div className='my-4'>
					<h3 className='text-lg font-bold dark:text-white'>Instructions</h3>
					<div dangerouslySetInnerHTML={{ __html: recipeData?.instructions }} />
				</div>
			)}

			{recipeData?.analyzedInstructions?.map((instruction: any) =>
				instruction?.steps?.map((step: any) => (
					<div key={step?.number} className='mb-4'>
						<p className='dark:text-white grid grid-cols-[auto_1fr] gap-2'>
							<span className='rounded-full h-5 w-5 p-4 flex justify-center items-center bg-[#e76182]'>{step?.number}</span>{' '}
							{step?.step}
						</p>
						{/* <div>
							<p className='mt-2 dark:text-white'>Ingredients to use:</p>
							<ul>
								{step?.ingredients?.map((ingredient: any) => (
									<li key={ingredient?.id} className='text-gray-900 dark:text-white list-disc list-inside'>
										{ingredient?.name}
									</li>
								))}
							</ul>
						</div> */}
					</div>
				)),
			)}
		</div>
	);
};

export default RecipePage;
