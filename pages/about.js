import Layout from '../components/Layout';
import { gsap } from 'gsap/dist/gsap';
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin.js";
import Spinner from '../components/Spinner';
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...

export default function About() {
  gsap.registerPlugin(MotionPathPlugin);
  console.log(typeof gsap)
  console.log('spinner', typeof Spinner)
  return (
    <Layout title="About">
    <Spinner />
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
