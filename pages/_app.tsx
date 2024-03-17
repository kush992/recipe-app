import '../styles/globals.css';
import '../styles/custom.css';
import type { AppProps } from 'next/app';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
};

export default MyApp;
