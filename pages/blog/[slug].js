import matter from 'gray-matter';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import WithHighlight from '../../components/WithHighlight';

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleString('en-GB', options);
}

const Blog = ({ data, content, siteTitle }) => {
  const frontmatter = data;
  const markdownContent = content;
  return (
    <Layout title={siteTitle}>
      <article className="blog-post">
        <div className="blog-post__header">
          <h1 className="heading-1">{frontmatter.title}</h1>
          <p>{reformatDate(frontmatter.date)}</p>
        </div>
        <hr className="divider" />
        <h4 className="heading-4 blog-post__subtitle">
          {frontmatter.subtitle}
        </h4>
        <div className="blog-post__img-container">
          <img
            src={require(`../../images/${frontmatter.banner}`)}
            alt={frontmatter.alt_text}
          />
        </div>
        <div className="blog-post__content-container">
          <ReactMarkdown
            source={markdownContent}
            renderers={{ code: WithHighlight }}
          />
        </div>
      </article>
    </Layout>
  );
};

Blog.getInitialProps = async function(context) {
  const { slug } = context.query;
  const content = await import(`../../blog_posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  // gray-matter parses yaml frontmatter from md file
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data,
  };
};

Blog.propTypes = {
  siteTitle: PropTypes.string,
  data: PropTypes.any,
  content: PropTypes.any,
};

export default Blog;
