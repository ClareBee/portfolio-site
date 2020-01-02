import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import '../styles.scss';
const Layout = props => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Roboto&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
