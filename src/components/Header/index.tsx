import { useState } from 'react';
import Image from 'next/image';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { RouteNames } from '../../shared/Enums/RouteNames';

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg-white dark:bg-[#01040A] shadow-lg sticky top-0 z-[999] border-b border-gray-200 sm:mx-auto dark:border-gray-700'>
			<nav className='mx-auto flex max-w-7xl items-center justify-between p-4' aria-label='Global'>
				<div className='flex lg:flex-1 cursor-pointer'>
					<Link href={RouteNames.HOME} className='-m-1.5 p-1.5 cursor-pointer'>
						<div>
							<span className='sr-only'>Kush Bhalodi Recipes</span>
							<Image src='https://spoonacular.com/cdn/ingredients_100x100/tomato.png' alt='indegrients' width={50} height={50} />
						</div>
					</Link>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<Popover.Group className='hidden lg:flex lg:gap-x-12'>
					<Link href={RouteNames.SEARCH} className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
						Search
					</Link>
					<Link href={RouteNames.JOIN} className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
						Join
					</Link>
					<Link href={RouteNames.ABOUT} className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
						About
					</Link>
				</Popover.Group>
			</nav>
			<Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<Link href={RouteNames.HOME} className='-m-1.5 p-1.5 cursor-pointer'>
							<div>
								<span className='sr-only'>Your Company</span>
								<Image src='https://spoonacular.com/cdn/ingredients_100x100/tomato.png' alt='indegrients' width={50} height={50} />
							</div>
						</Link>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='flex flex-col space-y-2 py-6'>
								<Link
									href={RouteNames.SEARCH}
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50'
								>
									Search
								</Link>
								<Link
									href={RouteNames.JOIN}
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50'
								>
									Join
								</Link>
								<Link
									href={RouteNames.ABOUT}
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50'
								>
									About
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
