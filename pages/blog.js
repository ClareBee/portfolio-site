import matter from 'gray-matter';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PromotedBlog from '../components/PromotedBlog';
import Pagination from '../components/Pagination';
import BlogRoll from '../components/BlogRoll';

const PAGE_TOTAL = 2;

const Blog = ({
  allBlogs,
  currentPage,
  pagesArray,
  promotedBlog,
  total,
}) => {
  return (
    <Layout title="Blog">
      <PageTitle
        title="Blog"
        subtitle="Stuff learned en route from researcher to dev"
      />
      <div className="blog-layout">
        {promotedBlog && <PromotedBlog blog={promotedBlog} />}
        <BlogRoll allBlogs={allBlogs} />
        <Pagination
          pagesArray={pagesArray}
          currentPage={currentPage}
        />
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
  const siteConfig = await import(`../data/config.json`);
  const query = context.query.page ? context.query.page : 1;
  // get total posts to display
  const startingIndex = query * PAGE_TOTAL - PAGE_TOTAL;
  const endingIndex = startingIndex + PAGE_TOTAL;
  let total;

  //get posts & context from folder
  const blogPosts = (context => {
    const keys = context.keys();
    total = keys.length;
    const needed = context
      .keys()
      .sort(
        (a, b) =>
          new Date(Array.from(b).splice(0, 9)) -
          new Date(Array.from(a).splice(0, 9)),
      )
      .reverse()
      .slice(startingIndex, endingIndex);
    console.log(startingIndex, endingIndex);
    console.log('needed', needed);
    const values = needed.map(context);
    const data = needed.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      // gray-matter parses yaml metadata & markdownbody
      const document = matter(value.default);
      return {
        document,
        slug,
        page: Math.ceil(PAGE_TOTAL / (index + 1)),
      };
    });
    return data;
  })(require.context('../blog_posts', true, /\.md$/));

  const promotedBlog = blogPosts.find(
    blog => blog.document.data.promoted,
  );

  const pagesArray = Array.from(
    Array(Number(Math.ceil(total / PAGE_TOTAL))),
  );
  return {
    allBlogs: blogPosts,
    // pagedBlogs: pagedBlogs(query),
    pagesArray,
    total: total,
    currentPage: query,
    promotedBlog,
    ...siteConfig,
  };
};
