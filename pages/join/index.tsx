import Link from 'next/link';
import React, { useState } from 'react';
import Breadcrumbs from '../../src/shared/components/Breadcrumbs';

const Join = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, name }),
			});

			if (response.ok) {
				console.log('User registered successfully!');
				// Handle success (e.g., show a success message)
			} else {
				console.error('Error registering user:', response.statusText);
				// Handle error (e.g., show an error message)
			}
		} catch (error) {
			console.error('Error registering user:', error);
			// Handle error (e.g., show an error message)
		}
	};
	return (
		<div className='container mx-auto px-4 py-8 max-w-7xl'>
			<Breadcrumbs />
			<h1 className='font-bold text-2xl mb-8'>Join Us!</h1>
			<p className='text-md leading-loose mb-8'>
				Let&rsquo;s embark on this culinary journey together! We&rsquo;d love for you to be a part of our growing community of food
				enthusiasts.
			</p>
			<h2 className='text-xl font-semibold mb-4'>Follow Us on Social Media</h2>
			<p className='text-md leading-loose mb-4'>Stay connected and discover exciting recipes, tips, and inspiration:</p>
			<div className='flex justify-center mb-8 gap-2'>
				{/* Replace with your actual social media links */}
				<Link href='https://www.facebook.com/' className='text-blue-500 hover:text-blue-700 mr-4' target='_blank' rel='noopener noreferrer'>
					Facebook
				</Link>
				<Link href='https://twitter.com/' className='text-blue-400 hover:text-blue-600 mr-4' target='_blank' rel='noopener noreferrer'>
					Twitter
				</Link>
				<Link href='https://www.instagram.com/__kb99/' className='text-red-500 hover:text-red-700' target='_blank' rel='noopener noreferrer'>
					Instagram
				</Link>
			</div>
			<h2 className='text-xl font-semibold mb-4'>Follow My Code Journey</h2>
			<p className='text-md leading-loose mb-4'>Interested in seeing the code behind the scenes? Check out my GitHub:</p>
			<div className='flex justify-center mb-8'>
				{/* Replace with your actual GitHub profile */}
				<Link href='https://github.com/' className='text-gray-800 hover:text-gray-600' target='_blank' rel='noopener noreferrer'>
					My GitHub Profile
				</Link>
			</div>
			<h2 className='text-xl font-semibold mb-4'>Build the Healthy Community</h2>
			<p className='text-md leading-loose mb-4'>
				We believe in the power of a healthy community! Share your love of cooking and inspire others:
			</p>
			<div className='flex justify-center mb-8'>
				{/* Replace with your social media sharing buttons (optional) */}
				<p className='text-gray-500'>Coming soon: Share on social media!</p>
			</div>
			<h2 className='text-xl font-semibold mb-4'>Subscribe to the Newsletter</h2>
			<p className='text-md leading-loose mb-4'>Get exclusive recipes, tips, and updates delivered straight to your inbox:</p>
			<p className='text-gray-500'>Coming soon: Newsletter signup!</p>
			<form onSubmit={handleSubmit} className='flex flex-col sm:flex-row'>
				<input
					type='email'
					placeholder='Enter your email address'
					className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto mr-4'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Enter your name'
					className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto mr-4'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button
					type='submit'
					className='inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-opacity-50'
					disabled={!email || !name}
				>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default Join;
