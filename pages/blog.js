import matter from 'gray-matter';
import PropTypes from 'prop-types';
import Link from '../components/Link';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PromotedBlog from '../components/PromotedBlog';
import Pagination from '../components/Pagination';
import BlogRoll from '../components/BlogRoll';

const totalPerPage = 2;

const Blog = ({ allBlogs, currentPage }) => {
  // TODO: handle this in initial Props
  const totalBlogs = allBlogs.length;
  const pages = Math.ceil(totalBlogs / totalPerPage);
  const pagesArray = Array.from(Array(pages));

  const promotedBlog = allBlogs.find(
    blog => blog.document.data.promoted,
  );

  function orderByRecentFirst(blogs) {
    // TODO: check this works
    return blogs.sort(blog => blog.document.data.date).reverse();
  }
  // TODO: move into the initial request to only retrieve/parse those needed
  const pagedBlogs = currentPage => {
    return allBlogs.filter(blog => blog.page == currentPage);
  };
  return (
    <Layout title="Blog">
      <PageTitle
        title="Blog"
        subtitle="Stuff learned en route from researcher to dev"
      />
      <div className="blog-layout">
        {promotedBlog && <PromotedBlog blog={promotedBlog} />}
        <BlogRoll allBlogs={pagedBlogs(currentPage)} />
        <Pagination />
        {pagesArray.map((page, index) => (
          <Link key={index} href={`/blog?page=${index + 1}`}>
            <a>{index + 1}</a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  allBlogs: PropTypes.array,
  currentPage: PropTypes.string,
};

export default Blog;

Blog.getInitialProps = async function(context) {
  const totalPerPage = 2;
  const siteConfig = await import(`../data/config.json`);
  const query = context.query.page ? context.query.page : 1;
  // get total posts to display
  const posts = query * totalPerPage;
  const startingIndex = posts - totalPerPage;
  const endingIndex = posts;
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
      // TODO: sort by recent last
      return {
        document,
        slug,
        page: Math.ceil(totalPerPage / (index + 1)),
      };
    });
    return data;
  })(require.context('../blog_posts', true, /\.md$/));

  return {
    allBlogs: blogPosts,
    currentPage: query,
    ...siteConfig,
  };
};
