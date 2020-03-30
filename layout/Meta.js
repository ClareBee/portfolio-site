import PropTypes from 'prop-types';
import Head from 'next/head';
import data from '../data/config';
import { GA_TRACKING_ID } from '../lib/gtag';

function Meta({ title }) {
  const { site, description, url, twitterHandle } = data;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={require('../images/circle.png')}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Roboto&display=swap"
        rel="stylesheet"
      />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content={site} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:creator" content={twitterHandle} />
      <link
        rel="apple-touch-icon"
        href={require('../images/circle.png')}
      />
      <meta
        property="og:image"
        content={require('../images/landing_page.jpg')}
      />
      <meta
        name="twitter:image"
        content={require('../images/landing_page.jpg')}
      />
      <link rel="canonical" href={url} />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
}

Meta.propTypes = {
  title: PropTypes.string,
};

export default Meta;
