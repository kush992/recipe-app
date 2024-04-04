import React from 'react';
import Breadcrumbs from '../../src/shared/components/Breadcrumbs';

const About = () => {
	return (
		<div className='container mx-auto px-4 py-8 max-w-7xl'>
			<Breadcrumbs />
			<h1 className='font-bold text-2xl mb-8'>About Us</h1>
			<p className='text-md leading-loose mb-8'>
				Welcome to a world of culinary inspiration! We&apos;re passionate about connecting you with delicious and diverse recipes, empowering
				you to explore the boundless possibilities in the kitchen.
			</p>
			<h2 className='text-xl font-semibold mb-4'>Born from a Love of Food</h2>
			<p className='text-md leading-loose mb-8'>
				This project began as a joyful exploration of the culinary landscape. We envisioned a platform that would not only curate exceptional
				recipes but also foster a love for cooking in everyone.
			</p>
			<h2 className='text-xl font-semibold mb-4'>Curated with Care</h2>
			<p className='text-md leading-loose mb-8'>
				We leverage the expertise of Spoonacular, a leading recipe API, to provide you with a vast and meticulously chosen collection of
				dishes. Our selection process ensures a harmonious blend of:
			</p>
			<ul className='list-disc pl-4 mb-8'>
				<li className='text-md leading-loose'>
					Culinary Delights: Discover recipes that tantalize your taste buds and ignite your culinary creativity.
				</li>
				<li className='text-md leading-loose'>
					Global Inspiration: Embark on a flavor adventure with dishes from around the world, expanding your culinary horizons.
				</li>
				<li className='text-md leading-loose'>
					Ease and Efficiency: Find recipes that cater to your skill level and schedule, from quick weeknight meals to elaborate weekend
					feasts.
				</li>
			</ul>
			<h2 className='text-xl font-semibold mb-4'>Your Culinary Companion</h2>
			<p className='text-md leading-loose mb-8'>
				We strive to be your trusted companion on your culinary journey. Whether you&apos;re a seasoned chef or a novice cook, we believe that
				everyone deserves to experience the joy and satisfaction of creating delicious meals.
			</p>
			<h2 className='text-xl font-semibold mb-4'>Join the Community</h2>
			<p className='text-md leading-loose mb-8'>
				We&apos;re constantly evolving and growing. We encourage you to explore our recipes, share your culinary creations, and be a part of
				our vibrant community of food enthusiasts.
			</p>
			<h2 className='text-xl font-semibold mb-4'>Embrace the Culinary Adventure</h2>
			<p className='text-md leading-loose'>
				Let your passion for food take center stage. With our curated collection of recipes and a love for all things culinary, let&rsquo;s
				embark on a delicious adventure together!
			</p>
		</div>
	);
};

export default About;
