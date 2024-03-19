import React from 'react';
import Image from 'next/image';
import data from './data.json';
import Badge from '../../shared/components/Badge';

const RecipePage = () => {
	return (
		<div>
			<h1 className='mb-4 text-xl font-extrabold text-gray-900 dark:text-white'>
				<span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{data.title}</span>
			</h1>
			<div className='mb-4 md:me-4'>
				<h2 className='mb-1 text-md text-gray-900 dark:text-white'>
					By &nbsp;
					<a href={data.sourceUrl} className='underline uppercase'>
						{data.sourceName}{' '}
					</a>
				</h2>
				<div className='flex flex-wrap'>
					{data.dishTypes.map((dishType: string) => (
						<Badge key={dishType} title={dishType} type='green' />
					))}
				</div>
			</div>

			<Image src={data.image} alt={data.title} width={600} height={600} objectFit='cover' className='rounded-lg' />

			{data.summary && (
				<div className='my-4'>
					<h3 className='text-lg font-bold dark:text-white'>Summary</h3>
					<div dangerouslySetInnerHTML={{ __html: data.summary }} />
				</div>
			)}

			{data.instructions && (
				<div className='my-4'>
					<h3 className='text-lg font-bold dark:text-white'>Instructions</h3>
					<div dangerouslySetInnerHTML={{ __html: data.instructions }} />
				</div>
			)}

			<div className='mt-4'>
				<h2 className='mb-2 text-lg font-bold text-gray-900 dark:text-white'>Ingredients</h2>
				<ul>
					{data.extendedIngredients.map((ingredient: any) => (
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
