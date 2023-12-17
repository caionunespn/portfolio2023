import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from "next-themes"
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <ThemeProvider attribute="class">
      <main className={`${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
    </>
  );
}