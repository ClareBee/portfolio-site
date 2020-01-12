import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => (
  <Layout title="Projects">
    <div className="index">
      <div className="introduction">
        <p>Hi! I'm <span className="introduction__content highlight"><Link href="/about">Clare</Link></span>, a <span className="bold">ReactJS</span> developer in Scotland</p>
      </div>
      <div className="portrait">
        <div className="portrait__border">
          <img className="portrait__image" src={require('../images/opacity_portrait.png')} />
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
