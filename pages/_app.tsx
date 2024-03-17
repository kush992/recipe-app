import '../styles/globals.css';
import '../styles/custom.css';
import type { AppProps } from 'next/app';

import Header from '../components/Header/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
