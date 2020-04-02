import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Layout from '../../layout/Layout';
import Spinner from '../../components/Spinner';
import { reformatDate, formatToSlug } from '../../utils/format';
/*eslint-disable */
const glob = require('glob');
/*eslint-enable*/
const DynamicHighlight = dynamic(
  () => import('../../higher_order_components/WithHighlight'),
  { ssr: false },
);

const Blog = ({ data, content, siteTitle }) => {
  if (!data)
    return (
      <Layout title="loading">
        <Spinner />
      </Layout>
    );
  return (
    <Layout title={siteTitle}>
      <article className="blog-post">
        {data ? (
          <>
            <div className="blog-post__header">
              <h1 className="heading-1">{data.title}</h1>
              <p>{reformatDate(data.date)}</p>
            </div>
            <hr className="divider" />
            <h4 className="heading-4 blog-post__subtitle">
              {data.subtitle}
            </h4>
            <div className="blog-post__img-container">
              <img
                src={require(`../../images/${data.banner}`)}
                alt={data.alt_text}
              />
            </div>
            <div className="blog-post__content-container">
              <ReactMarkdown
                source={content}
                renderers={{ code: DynamicHighlight }}
              />
            </div>
          </>
        ) : (
          <p>loading</p>
        )}
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('src/blog_posts/**/*.md');
  const blogSlugs = blogs.map(file => formatToSlug(file));
  const paths = blogSlugs.map(slug => `/blog/${slug}`);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const content = await import(`../../blog_posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  // gray-matter parses yaml frontmatter from md file
  const data = matter(content.default);
  return {
    props: {
      siteTitle: config.site,
      data: { ...data.data },
      content: data.content,
    },
  };
}
Blog.propTypes = {
  siteTitle: PropTypes.string,
  data: PropTypes.any,
  content: PropTypes.any,
};

export default Blog;
