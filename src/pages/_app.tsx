import '@/styles/fonts/sohne.css';
import '@/styles/fonts/inter.css';
import '@/styles/index.css';

import type { AppProps } from 'next/app';

import Nav from '@/layouts/Nav';
import Wrapper from '@/layouts/Wrapper';
import Meta from '@/components/Meta';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Meta />
         <Nav />
         <Wrapper>
            <Component {...pageProps} />
         </Wrapper>
      </>
   );
}
