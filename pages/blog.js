import matter from 'gray-matter';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PromotedBlog from '../components/PromotedBlog';
import BlogRoll from '../components/BlogRoll';

const Blog = ({ allBlogs }) => {
  const promotedBlog = allBlogs.find(
    blog => blog.document.data.promoted,
  );
  return (
    <Layout title="Blog">
      <PageTitle
        title="Blog"
        subtitle="Stuff learned en route from researcher to dev"
      />
      <div className="blog-layout">
        <PromotedBlog blog={promotedBlog} />
        <BlogRoll allBlogs={allBlogs} />
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  allBlogs: PropTypes.array,
};

export default Blog;

Blog.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  //get posts & context from folder
  const blogPosts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      // gray-matter parses yaml metadata & markdownbody
      const document = matter(value.default);
      console.log('document', typeof document);
      return {
        document,
        slug,
      };
    });
    return data;
  })(require.context('../blog_posts', true, /\.md$/));

  return {
    allBlogs: blogPosts,
    ...siteConfig,
  };
};
