import matter from 'gray-matter';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PromotedBlog from '../components/PromotedBlog';
import BlogRoll from '../components/BlogRoll';


const Blog = (props) => {
  console.log('props', props.allBlogs)
  const promotedBlog = props.allBlogs.find(blog => blog.document.data.promoted);
  return (
    <Layout title="Blog">
      <PageTitle title="Blog" subtitle="Stuff learned en route from researcher to dev" />
      <div className="blog-layout">
        <PromotedBlog blog={promotedBlog} />
        <BlogRoll allBlogs={props.allBlogs}/>
      </div>
    </Layout>
  );
}

export default Blog;

Blog.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`)
   //get posts & context from folder
   const blogPosts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // gray-matter parses yaml metadata & markdownbody
      const document = matter(value.default);
      return {
        document,
        slug
      };
    });
    return data;
  })(require.context("../blog_posts", true, /\.md$/));

  return {
    allBlogs: blogPosts,
    ...siteConfig,
  }
}
