import '../styles/globals.css';

import type { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: NextAppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export default withTRPC<AppRouter>({
//   config({ ctx }) {
//     /**
//      * If you want to use SSR, you need to use the server's full URL
//      * @link https://trpc.io/docs/ssr
//      */
//     return {
//       headers: () => ({
//         cookie: ctx?.req?.headers?.cookie ?? "",
//       }),
//       url: `${getBaseUrl()}/api/trpc`,
//       /**
//        * @link https://react-query-v3.tanstack.com/reference/QueryClient
//        */
//       // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
//     }
//   },
//   /**
//    * @link https://trpc.io/docs/ssr
//    */
//   ssr: true,
// })(App)
export default App;
