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
    const slug = formatToSlug(filename);
    const parsedMarkdown = matter(fileContents);
    // grey-matter inserts non-json-friendly orig property so needs whitelisting
    const permittedValues = ['data', 'content', 'excerpt'];
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
