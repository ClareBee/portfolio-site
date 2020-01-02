import matter from 'gray-matter';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';


const Blog = (props) => {
  console.log('props', props)
  return (
    <Layout title="Blog">
      <p>Blog Page </p>
      <BlogRoll allBlogs={props.allBlogs}/>
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
