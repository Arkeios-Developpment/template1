import '@/styles/global.css';
import { AppProps } from 'next/app';
import Header from "@/components/Header/Header";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
