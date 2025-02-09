import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Saints NYC</title>
            </Head>
            <main className="app">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
