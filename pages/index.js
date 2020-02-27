import Layout from '../components/Layout';
import Link from 'next/link';
import {
  FaGithub,
  FaDesktop,
  FaStar,
  FaArrowDown,
} from 'react-icons/fa';

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
      <div className="arrow">
        <FaArrowDown />
      </div>
      <div className="projects">
        <div className="project">
          <div className="project__video">
            <img src="https://via.placeholder.com/300" />
          </div>
          <div className="project__details">
            <div className="project__title">
              <h3 className="heading-3">Barns</h3>
              <div className="tag-icons">
                <span className="tag-icon">GatsbyJS</span>
                <span className="tag-icon">GraphQL</span>
                <span className="tag-icon">LeafletJS</span>
              </div>
            </div>
            <div className="project__description">
              <p>Website showcasing an artist&apos;s paintings</p>
              <ul>
                <li>
                  <FaStar />
                  LeafletJS to show location of paintings
                </li>
                <li>
                  <FaStar />
                  Contact Form with Netlify
                </li>
                <li>
                  <FaStar />
                  Blahblah
                </li>
              </ul>
            </div>
            <div className="project__links">
              <span>
                GitHub
                <FaGithub />
              </span>
              <span>
                Website
                <FaDesktop />
              </span>
              <span>
                <a className="project__read-more">Read more</a>
              </span>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project__details">
            <div className="project__title">
              <h3 className="heading-3">Tech Blog</h3>
            </div>
            <div className="project__description">
              <p>blablablabla</p>
            </div>
            <div className="tag-icons">
              <span className="tag-icon">GatsbyJS</span>
              <span className="tag-icon">Strapi CMS</span>
              <span className="tag-icon">TailwindCSS</span>
            </div>
          </div>
          <div className="project__video">
            {' '}
            <img src="https://via.placeholder.com/300" />
          </div>
        </div>
        <div className="project">
          <div className="project__video">
            {' '}
            <img src="https://via.placeholder.com/300" />
          </div>
          <div className="project__details">
            <div className="project__title">
              {' '}
              <h3 className="heading-3">Eleventy</h3>
            </div>
            <div className="project__description">
              <p>blablablabla</p>
            </div>
            <div className="tag-icons">
              <span className="tag-icon">11ty</span>
              <span className="tag-icon">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
