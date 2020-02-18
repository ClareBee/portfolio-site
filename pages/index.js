import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => (
  <Layout title="Projects">
    <div className="index">
      <div className="introduction">
        <h2 className="heading-2">
          Hi! I&apos;m{' '}
          <span className="introduction__content highlight">
            <Link href="/about">
              <a>Clare</a>
            </Link>
          </span>
          , a <span className="bold">Software</span> Developer in
          Scotland
        </h2>
        <h3 className="heading-3 introduction__subtitle">
          ReactJS, GraphQL & the JAMstack
        </h3>
      </div>
      <div className="portrait">
        <div className="portrait__border">
          <img
            className="portrait__image"
            src={require('../images/opacity_portrait.png')}
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;