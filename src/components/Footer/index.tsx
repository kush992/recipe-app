import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-[#01040A] relative bottom-0 border-t border-gray-200 sm:mx-auto dark:border-gray-700'>
			<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<a href='https://flowbite.com/' className='flex items-center'>
							<Image src='https://spoonacular.com/cdn/ingredients_100x100/tomato.png' alt='indegrients' width={50} height={50} />
							<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>KushBhalodi Recipes</span>
						</a>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Resources</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium'>
								<li className='mb-4'>
									<a href='https://kushbhalodi.com/' className='hover:underline'>
										Kush Bhalodi
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Follow me</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium'>
								<li className='mb-4'>
									<a href='https://github.com/kush992' className='hover:underline '>
										Github
									</a>
								</li>
								<li className='mb-4'>
									<a href='https://www.linkedin.com/in/kush-bhalodi-b11991184/' className='hover:underline '>
										LinkedIn
									</a>
								</li>
								<li>
									<a href='https://www.instagram.com/__kb99/' className='hover:underline'>
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© 2024{' '}
						<a href='https://kushbhalodi.com/' className='hover:underline'>
							KushBhalodi™
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
