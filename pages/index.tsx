import Head from 'next/head';
import HomePage from '../src/components/HomePage';
import { RecipeSearch } from '../src/shared/types/RecipeSearch';
import { DataWithPagination } from '../src/shared/types/DataWithPagination';
import { baseUrl } from '../src/common/utility';
import { GetServerSidePropsContext } from 'next';

interface Props {
	recipeData: RecipeSearch[];
}

const Home = ({ recipeData }: Props) => {
	return (
		<div className='max-w-7xl mx-auto mt-2 p-6'>
			<Head>
				<title>Recipe Search App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HomePage recipeData={recipeData} />
		</div>
	);
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

	const response = await fetch(`${baseUrl}/searchRecipeByTime?maxReadyTime=30&limit=3`);

	console.log(`${baseUrl}/searchRecipeByTime?maxReadyTime=30&limit=3`)

	if (!response.ok) {
		console.error(`Error: ${response.status} - ${response.statusText}`);
		return {
			props: {
				error: `Error: ${response.status} - ${response.statusText}`,
				recipeData: [],
			},
		};
	}

	const recipeData: DataWithPagination<RecipeSearch> = await response.json();

	return {
		props: {
			recipeData: recipeData.results,
		},
	};
}
