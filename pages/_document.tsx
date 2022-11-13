import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='stylesheet' href='/css/desktop.css?v1' media='(min-width: 1024px)' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
