import React from 'react';
import Image from 'next/image';
import HomePageBanner from './HomePageBanner';

const HomePage = () => {
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
		</div>
	);
};

export default HomePage;
