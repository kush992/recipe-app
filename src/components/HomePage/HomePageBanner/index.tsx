import React from 'react';
import { RouteNames } from '../../../shared/Enums/RouteNames';
import Link from 'next/link';

const HomePageBanner = () => {
	return (
		<section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1550304943-4f24f54ddde9')] bg-cover rounded-lg bg-gray-700 bg-blend-multiply mb-4">
			<div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
				<h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
					We invest in the world’s health and wellness.
				</h1>
				<p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
					Here at Recipe Search, we believe in the power of food to enhance lives. We are committed to investing in the world’s health and
					wellness.
				</p>
				<div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
					<Link href={`${RouteNames.SEARCH}?query="palak paneer"`}>
						<div className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
							Get started
							<svg
								className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 10'
							>
								<path
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M1 5h12m0 0L9 1m4 4L9 9'
								/>
							</svg>
						</div>
					</Link>
					<Link
						href={RouteNames.ABOUT}
						className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
					>
						Learn more
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomePageBanner;
