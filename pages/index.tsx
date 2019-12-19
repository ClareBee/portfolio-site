import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import css from '../styles.scss';


// const Index = props => (
//   <Layout>
//     <h1>Batman Shows</h1>
//     // <ul>
//     //   {props.shows.map(show => (
//     //     <li key={show.id}>
//     //       <Link href="/p/[id]" as={`/p/${show.id}`}>
//     //         <a>{show.name}</a>
//     //       </Link>
//     //     </li>
//     //   ))}
//     // </ul>
//     <style jsx>{`
//       h1,
//       a {
//         font-family: 'Arial';
//       }
//
//       ul {
//         padding: 0;
//       }
//
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//
//       a {
//         text-decoration: none;
//         color: blue;
//       }
//
//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//
//   console.log(`Show data fetched. Count: ${data.length}`);
//
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1 className={css.example}>Hello world! - user agent: {userAgent}</h1>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
