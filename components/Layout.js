import Head from 'next/head';
import Header from './Header';
import '../styles.scss';
const Layout = props => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
