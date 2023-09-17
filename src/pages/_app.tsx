import '@/styles/global.css';
import { AppProps } from 'next/app';
import Header from '@/components/IndexPage/Header'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
