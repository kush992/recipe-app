import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-[#01040A] relative bottom-0 border-t border-gray-200 sm:mx-auto dark:border-gray-700'>
			<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<Link href='https://kushbhalodi.com/' target='__blank' className='flex items-center'>
							<div>
								<Image src='https://spoonacular.com/cdn/ingredients_100x100/tomato.png' alt='indegrients' width={50} height={50} />
								<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>KushBhalodi Recipes</span>
							</div>
						</Link>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Resources</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium'>
								<li className='mb-4'>
									<Link href='https://kushbhalodi.com/' className='hover:underline'>
										Kush Bhalodi
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Follow me</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium'>
								<li className='mb-4'>
									<Link href='https://github.com/kush992' target='__blank' className='hover:underline '>
										Github
									</Link>
								</li>
								<li className='mb-4'>
									<Link href='https://www.linkedin.com/in/kush-bhalodi-b11991184/' target='__blank' className='hover:underline '>
										LinkedIn
									</Link>
								</li>
								<li>
									<Link href='https://www.instagram.com/__kb99/' target='__blank' className='hover:underline'>
										Instagram
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© 2024{' '}
						<Link href='https://kushbhalodi.com/' target='__blank' className='hover:underline'>
							KushBhalodi™
						</Link>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
