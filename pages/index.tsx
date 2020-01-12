import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => (
  <Layout title="Projects">
    <div className="index">
      <div className="portrait">
        <div className="portrait__border">
          <img className="portrait__image" src={require('../images/opacity_portrait.png')} />
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
