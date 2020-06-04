import Link from 'next/link';
import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
import PictureSet from '../components/PictureSet';
import Spinner from '../components/Spinner';
/* eslint-disable */
const DynamicComponentWithNoSSR = dynamic(
  () => import('../higher_order_components/scrollmagic'),
  { loading: () => <Spinner />, ssr: false },
);
/* eslint-enable */
import {
  FaGithub,
  FaDesktop,
  FaStar,
  FaArrowDown,
} from 'react-icons/fa';

const Index = () => {
  return (
    <Layout title="Projects">
      <DynamicComponentWithNoSSR>
        <div className="index">
          <div className="introduction">
            <h2 className="heading-2" id="intro">
              Hi! I&apos;m{' '}
              <span className="introduction__content highlight">
                <Link href="/about">
                  <a title="About page">Clare</a>
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
              <PictureSet
                pictureName="rsz_opacity_portrait.png"
                styleSelector="portrait__image"
                id="portrait"
                altText="portrait"
                width="240"
                height="223"
              />
            </div>
          </div>
          <div className="arrow">
            <FaArrowDown />
          </div>
          <div className="projects">
            <div className="project">
              <div className="project__img project__left">
                <PictureSet
                  pictureName="rsz_barns2.jpg"
                  altText="Barn site"
                />
              </div>
              <div className="project__details project__right">
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
                      Styling with Emotion
                    </li>
                    <li>
                      <FaStar />
                      Google Analytics and SEO
                    </li>
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/ClareBee/barns"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.disappearingbarns.co.uk/"
                    target="blank"
                    rel="noopener noreferrer"
                    title="DisappearingBarns live site"
                  >
                    Website
                    <FaDesktop />
                  </a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project__details project__left">
                <div className="project__title">
                  <h3 className="heading-3">SciFi Movie List</h3>
                  <div className="tag-icons">
                    <span className="tag-icon">GatsbyJS</span>
                    <span className="tag-icon">Sanity.io</span>
                    <span className="tag-icon">Webhooks</span>
                    <span className="tag-icon">Netlify Plugins</span>
                  </div>
                </div>
                <div className="project__description">
                  <p>
                    SciFi Movies from editable Sanity.io GraphQL API
                  </p>
                  <ul>
                    <li>
                      <FaStar />
                      Netlify Incremental Builds
                    </li>
                    <li>
                      <FaStar />
                      Netlify Build Plugins for Cypress.io & A11y
                    </li>
                    <li>
                      <FaStar />
                      Webhook to trigger build on Sanity updates
                    </li>
                    <li>
                      <FaStar />
                      CSS Modules
                    </li>
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/ClareBee/demo-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://demo-site-for-build-plugins.netlify.app/"
                    target="blank"
                    rel="noopener noreferrer"
                    title="SciFi site"
                  >
                    Website
                    <FaDesktop />
                  </a>
                </div>
              </div>
              <div className="project__img project__right">
                <PictureSet
                  pictureName="scifi.jpg"
                  altText="Scifi Movies"
                />
              </div>
            </div>

            <div className="project">
              <div className="project__img project__left">
                <PictureSet
                  pictureName="rsz_techblog.jpg"
                  altText="Tech blog"
                />
              </div>
              <div className="project__details project__right">
                <div className="project__title">
                  <h3 className="heading-3">Tech Blog</h3>
                  <div className="tag-icons">
                    <span className="tag-icon">GatsbyJS</span>
                    <span className="tag-icon">Strapi CMS</span>
                    <span className="tag-icon">TailwindCSS</span>
                    <span className="tag-icon">Prism.js</span>
                  </div>
                </div>
                <div className="project__description">
                  <p>Simple Gatsby blog with Strapi CMS</p>
                  <ul>
                    <li>
                      <FaStar />
                      Pagination
                    </li>
                    <li>
                      <FaStar />
                      Contact Form with GetForm
                    </li>
                    <li>
                      <FaStar />
                      Disqus comments and Social Share buttons
                    </li>
                    <li>
                      <FaStar />
                      Code syntax highlighting with Prism.js
                    </li>
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/ClareBee/front-end"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://clare-bee-blog.netlify.com/posts"
                    target="blank"
                    rel="noopener noreferrer"
                    title="Blog site"
                  >
                    Website
                    <FaDesktop />
                  </a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project__details project__left">
                <div className="project__title">
                  <h3 className="heading-3">Eleventy</h3>
                  <div className="tag-icons">
                    <span className="tag-icon">Eleventy</span>
                    <span className="tag-icon">Highlight.js</span>
                    <span className="tag-icon">Netlify</span>
                  </div>
                </div>

                <div className="project__description">
                  <p>Eleventy site exploring CSSGrid and Flexbox</p>
                  <ul>
                    <li>
                      <FaStar />
                      Customising a HTML template with Nunjucks
                    </li>
                    <li>
                      <FaStar />
                      Contact Form with Netlify
                    </li>
                    <li>
                      <FaStar />
                      Code syntax highlighting with Highlight.js
                    </li>
                    <li>
                      <FaStar />
                      In-depth studies of CSSGrid and Flexbox
                    </li>
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/ClareBee/eleventy_layouts"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://adventures-in-layouts.netlify.com/"
                    target="blank"
                    rel="noopener noreferrer"
                    title="Eleventy site"
                  >
                    Website
                    <FaDesktop />
                  </a>
                </div>
              </div>
              <div className="project__img project__right">
                <PictureSet
                  pictureName="rsz_eleventy2.jpg"
                  altText="Eleventy site"
                />
              </div>
            </div>
          </div>
        </div>
      </DynamicComponentWithNoSSR>
    </Layout>
  );
};

export default Index;
