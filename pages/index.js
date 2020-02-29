import Link from 'next/link';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/scrollmagic'),
  { ssr: false },
);
import {
  FaGithub,
  FaDesktop,
  FaStar,
  FaArrowDown,
} from 'react-icons/fa';
// TODO lazy load this

const Index = () => {
  return (
    <Layout title="Projects">
      <DynamicComponentWithNoSSR trigger=".projects">
        <div className="index">
          <div className="introduction">
            <h2 className="heading-2" id="intro">
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
              <div className="project__video project__left">
                <img src={require('../images/barns2.jpg')} />
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
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.disappearingbarns.co.uk/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    Website
                    <FaDesktop />
                  </a>
                  <a className="project__read-more">Read more</a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__details project__left">
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
                    <li>
                      <FaStar />
                      Styling with TailwindCSS
                    </li>
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/ClareBee/front-end"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://clare-bee-blog.netlify.com/posts"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    Website
                    <FaDesktop />
                  </a>
                  <a className="project__read-more">Read more</a>
                </div>
              </div>
              <div className="project__video project__right">
                <img src={require('../images/techblog.jpg')} />
              </div>
            </div>

            <div className="project">
              <div className="project__video project__left">
                <img src={require('../images/eleventy2.jpg')} />
              </div>
              <div className="project__details project__right">
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
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/ClareBee/eleventy_layouts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://adventures-in-layouts.netlify.com/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    Website
                    <FaDesktop />
                  </a>
                  <a className="project__read-more">Read more</a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__details project__left">
                <div className="project__title">
                  <h3 className="heading-3">Jekyll Blog</h3>
                  <div className="tag-icons">
                    <span className="tag-icon">Jekyll</span>
                    <span className="tag-icon">SCSS</span>
                    <span className="tag-icon">Liquid</span>
                  </div>
                </div>
                <div className="project__description">
                  <p>
                    Markdown blog exploring Lea Verou&apos;s CSS
                    Experiments in SCSS
                  </p>
                  <ul>
                    <li>
                      <FaStar />
                      Pagination
                    </li>
                    <li>
                      <FaStar />
                      RSS Feed
                    </li>
                    <li>
                      <FaStar />
                      Contact Form with FormSpree
                    </li>
                    <li>
                      <FaStar />
                      SEO and sitemap
                    </li>
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/ClareBee/css-experiments"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                  <a
                    href="https://clarebee.github.io/css-experiments/"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    Website
                    <FaDesktop />
                  </a>
                  <a className="project__read-more">Read more</a>
                </div>
              </div>
              <div className="project__video project__right">
                <img src={require('../images/jekyll.jpg')} />
              </div>
            </div>
          </div>
        </div>
      </DynamicComponentWithNoSSR>
    </Layout>
  );
};

export default Index;
