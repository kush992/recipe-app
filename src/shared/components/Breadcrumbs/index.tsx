// components/Breadcrumbs.tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Breadcrumbs = () => {
	const router = useRouter();
	const pathSegments = router.asPath.split('/').filter((segment) => segment);
	const purifyString = (string: string) => string.replace(/[^a-zA-Z\s]/g, ' ').trim();

	return (
		<Breadcrumb separator={<ChevronRightIcon color='grey' height={12} width={12} />} className='pb-8'>
			<BreadcrumbItem>
				<BreadcrumbLink href='/' className='opacity-75 uppercase text-xs'>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>
			{pathSegments.map((segment, index) => (
				<BreadcrumbItem key={index}>
					<BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join('/')}`} className=' opacity-75 uppercase text-xs'>
						{purifyString(segment)}
					</BreadcrumbLink>
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	);
};

export default Breadcrumbs;
