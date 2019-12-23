import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Post = () => {

  return (
    <Layout title="post">
      <Content />
    </Layout>
  );
};

export default Post;
