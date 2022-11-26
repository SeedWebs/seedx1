import Head from 'next/head';
import { HOME_OG_IMAGE_URL, META_DESCRIPTION } from '../lib/constants';

// Favicon, try https://realfavicongenerator.net/

export default function Meta() {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png' />
      <link rel='shortcut icon' href='favicon.ico' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta property='og:image' content='/cover.jpg' />
      <meta name='description' content={META_DESCRIPTION} />
    </Head>
  );
}
