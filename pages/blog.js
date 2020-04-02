import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import PromotedBlog from '../components/PromotedBlog';
import Pagination from '../layout/Pagination';
import BlogRoll from '../components/BlogRoll';
import { formatToSlug, queryFromUrl } from '../utils/format';
import { useRouter } from 'next/router';

const PAGE_TOTAL = 2;

const Blog = ({ allBlogs, pagesArray, promotedBlog }) => {
  const router = useRouter();
  // https//github.com/zeit/next.js/issues/4804
  const { page } = queryFromUrl(router.asPath);
  const startingIndex = page * PAGE_TOTAL - PAGE_TOTAL;
  const endingIndex = startingIndex + PAGE_TOTAL;
  const blogsPerPage = allBlogs.slice(startingIndex, endingIndex);

  return (
    <Layout title="Blog">
      <PageTitle title="Blog" subtitle="Stuff learned en route" />
      <div className="blog-layout">
        {page === '1' && promotedBlog && (
          <PromotedBlog blog={promotedBlog} />
        )}
        <BlogRoll allBlogs={blogsPerPage} />
        <Pagination pagesArray={pagesArray} currentPage={page} />
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  allBlogs: PropTypes.array,
  pagesArray: PropTypes.array,
  promotedBlog: PropTypes.object,
};

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`);
  const blogDirectory = path.join(process.cwd(), 'blog_posts');
  const filenames = fs.readdirSync(blogDirectory);
  const total = filenames.length;
  const pagesArray = new Array(Number(Math.ceil(total / PAGE_TOTAL)));
  const allBlogs = filenames.reverse().map((filename, index) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
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

  return {
    props: {
      allBlogs,
      pagesArray,
      promotedBlog: promotedBlog ? promotedBlog : allBlogs[0],
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
