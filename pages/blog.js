import Layout from '../components/Layout';
import Link from 'next/link';

export default function Blog() {

  return (
    <Layout title="Blog">
      <p>Blog page</p>
      <Link href="/blog/[pid]" as="/blog/first-blogpost">
        <a>First Post</a>
      </Link>
    </Layout>
  );
}
