import '../styles/global.css';
import { AppProps } from 'next/app';
import { Menu } from '@/components/Menu/Menu'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Menu />
        </>
    );
}

export default MyApp;
