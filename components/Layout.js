import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import '../styles.scss';

const Layout = ({ title, children }) => {
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
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Layout;
