import type { NextPage } from 'next'
import Head from 'next/head'
import Search from '../components/search'

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Recipe Search App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Search />
        </div>
    )
}

export default Home
