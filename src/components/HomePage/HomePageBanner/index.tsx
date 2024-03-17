import React from 'react';
import Image from 'next/image';

const HomePageBanner = () => {
	return (
		<div className='relative'>
			<div className='h-full w-full'>
				<Image
					src='https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
					alt='homepage banner image'
					height={600}
					width={1280}
					objectFit='cover'
					className='rounded-lg shadow-lg'
					priority
				/>
			</div>
		</div>
	);
};

export default HomePageBanner;
