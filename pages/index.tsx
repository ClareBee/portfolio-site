import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => (
  <Layout title="Projects">
    <div className="index">
      <img style={{borderRadius: '50%'}} src={require('../images/opacity_portrait.png')} />
    </div>
  </Layout>
);

export default Index;
