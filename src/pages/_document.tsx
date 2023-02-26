import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="en">
         <Head />
         <body className="opacity-95 antialiased bg-white text-black">
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
