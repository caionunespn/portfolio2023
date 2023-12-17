import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Caio Nunes</title>
    </Head>
    <main className={`${inter.variable}`}>
      <Component {...pageProps} />
    </main>
    </>
  );
}