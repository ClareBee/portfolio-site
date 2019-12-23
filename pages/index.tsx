import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

type showProps = {
  shows: Array<{id: number, name: string}>
}
const Index = ({ shows }: showProps) => (
  <Layout title="Projects">
    <h1>Batman Shows</h1>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: {show: { name: string, id: number }}) => entry.show)
  };
};
export default Index;
