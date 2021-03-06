import PropTypes from 'prop-types';
import Head from 'next/head';
import data from '../data/config';
import { GA_TRACKING_ID } from '../lib/gtag';

function Meta({
  title,
  imageUrl,
  blogTitle,
  blogDescription,
  blogDate,
}) {
  const { site, description, url, twitterHandle } = data;
  const socialMediaImg = imageUrl
    ? imageUrl
    : 'https://clarebee.com/twitter_landing_page.jpg';
  const summary = blogDescription ? blogDescription : description;
  const twitterTitle = blogTitle;
  const twitterDescription = blogDate ? blogDate : blogDescription;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=5.0"
      />
      <meta name="Description" content={summary} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={summary}
      />
      <meta property="og:site_name" content={site} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content={socialMediaImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630"></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image:alt" content="Landing page" />
      <meta name="twitter:image" content={socialMediaImg} />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta
        name="msapplication-config"
        content="/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta
        name="msapplication-config"
        content="/browserconfig.xml"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/circle.png"
      />
      <link rel="apple-touch-icon" href="/circle.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#5bbad5"
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
  imageUrl: PropTypes.string,
  blogDescription: PropTypes.string,
  blogDate: PropTypes.string,
  blogTitle: PropTypes.string,
};

export default Meta;
