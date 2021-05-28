import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import NProgress from 'nprogress';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { Router } from 'next/router';
import ContextProviders from '../contexts/contextUtils/providers';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Ibira Web Site" />
      </Head>
      <GlobalStyles />
      <ContextProviders>
        <Component {...pageProps} />
      </ContextProviders>
    </ThemeProvider>
  );
}

export default App;
