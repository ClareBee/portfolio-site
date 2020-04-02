import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import PromotedBlog from '../components/PromotedBlog';
import Pagination from '../layout/Pagination';
import BlogRoll from '../components/BlogRoll';
import { formatToSlug } from '../utils/format';

const PAGE_TOTAL = 2;

const Blog = ({
  allBlogs,
  currentPage,
  pagesArray,
  promotedBlog,
}) => {
  return (
    <Layout title="Blog">
      <PageTitle title="Blog" subtitle="Stuff learned en route" />
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
  pagesArray: PropTypes.array,
  promotedBlog: PropTypes.object,
};

export async function getStaticProps({ ...params }) {
  console.log('params', params);
  const siteConfig = await import(`../data/config.json`);
  const query = params.query ? params.query.page : 1;

  const blogDirectory = path.join(process.cwd(), 'blog_posts');
  const filenames = fs.readdirSync(blogDirectory);
  const startingIndex = query * PAGE_TOTAL - PAGE_TOTAL;
  const endingIndex = startingIndex + PAGE_TOTAL;
  const total = filenames.length;
  console.log(total);

  const allBlogs = filenames.map((filename, index) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    console.log('filepath', filePath);
    const needed = filenames.slice(startingIndex, endingIndex);
    // const values = needed.map(context);
    const parsedMarkdown = matter(fileContents);
    const permittedValues = ['data', 'content', 'excerpt'];
    const slug = formatToSlug(filename);
    const document = Object.keys(parsedMarkdown)
      .filter(key => permittedValues.includes(key))
      .reduce((obj, key) => {
        obj[key] = parsedMarkdown[key];
        return obj;
      }, {});
    return {
      document,
      content: document.content,
      slug,
      page: Math.ceil(PAGE_TOTAL / (index + 1)),
    };
  });
  // TODO: address case when promoted Blog not in first page batch
  const promotedBlog = allBlogs.find(
    blog => blog.document.data.promoted,
  );
  const pagesArray = Array.from(
    Array(Number(Math.ceil(allBlogs.length / PAGE_TOTAL))),
  );

  return {
    props: {
      allBlogs,
      pagesArray: [],
      promotedBlog,
      currentPage: String(query),
      ...siteConfig,
    },
  };
}

export default Blog;

// Blog.getInitialProps = async function(context) {
//   const siteConfig = await import(`../data/config.json`);
//   console.log(context);
//   const query = context.query.page ? context.query.page : 1;
//   // get total posts to display
// const startingIndex = query * PAGE_TOTAL - PAGE_TOTAL;
// const endingIndex = startingIndex + PAGE_TOTAL;
// let total;

//   //get posts & context from folder
//   const blogPosts = (context => {
//     console.log('context', context);
//     const keys = context.keys();
//     console.log('keys', keys);
//     total = keys.length;
//     // date ordering not needed as file tree orders acc to date prefix
//     const needed = context
//       .keys()
//       .reverse()
//       .slice(startingIndex, endingIndex);
//     const values = needed.map(context);
//     const data = needed.map((key, index) => {
//       // Create slug from filename
//       const slug = formatToSlug(key);

//       const value = values[index];
//       // gray-matter parses yaml metadata & markdownbody
//       const document = matter(value.default);
//       return {
//         document,
//         slug,
//         page: Math.ceil(PAGE_TOTAL / (index + 1)),
//       };
//     });
//     return data;
//   })(require.context('../blog_posts', true, /\.md$/));

//   // TODO: address case when promoted Blog not in first page batch
//   const promotedBlog = blogPosts.find(
//     blog => blog.document.data.promoted,
//   );

//   const pagesArray = Array.from(
//     Array(Number(Math.ceil(total / PAGE_TOTAL))),
//   );

//   return {
//     allBlogs: blogPosts,
//     pagesArray,
//     currentPage: String(query),
//     promotedBlog,
//     ...siteConfig,
//   };
// };
