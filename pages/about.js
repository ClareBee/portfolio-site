import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <p>About page</p>
      <svg id="text-container" width="129" height="115" xmlns="http://www.w3.org/2000/svg">
      <path id="text-curve" d="M24.284 15.589C52.923 13.636 97.5 23 45.5 54c-52 31 50.043 17.88 72.784 26.589" stroke="#000" fill="none"/>
        <text y="40">
          <textPath
          id="text-path"

          startOffset="200"
            href="#text-curve">ClareBlackburne is really trying this out</textPath>
        </text>
      </svg>
    </Layout>
  );
}
