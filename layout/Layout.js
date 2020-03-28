import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import '../styles.scss';
import { CSSTransition } from 'react-transition-group';
import { GA_TRACKING_ID } from '../lib/gtag';

const Layout = ({ title, children }) => {
  const [pageTitle, setPageTitle] = useState('');
  const [footerVisibility, setFooterVisibility] = useState(false);
  useEffect(() => {
    setPageTitle(title);
    setFooterVisibility(true);
  }, [pageTitle]);
  return (
    <div className="container">
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
      <Header />
      <CSSTransition
        in={!!pageTitle}
        timeout={200}
        classNames="my-node"
        unmountOnExit
      >
        <div className="content">{children}</div>
      </CSSTransition>
      <Footer footerVisibility={footerVisibility} />
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Layout;