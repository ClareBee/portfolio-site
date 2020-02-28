import { useEffect } from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

// TODO: lazy load this
import { gsap } from 'gsap/dist/gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...

export default function About() {
  gsap.registerPlugin(MotionPathPlugin);
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.set('.blah, .hello', { transformOrigin: '50% 50%' });
    gsap.to('.blah, .hello', {
      duration: 2,
      rotation: 360,
      onUpdate: function() {
        console.log('updated');
      },
      onStart: function() {
        console.log('started');
      },
      onComplete: function() {
        console.log('ended');
      },
    });
    gsap.to('.blah', {
      duration: 3,
      x: 300,
      backgroundColor: '#fff',
      border: '5px solid white',
      borderRadius: '5px',
      // TODO: check gsap ease visualizer
      ease: 'back',
    });
    gsap.from('.hello', {
      duration: 1.5,
      opacity: 0,
      scale: 0.3,
      y: 'random(-200, 200)',
      stagger: 0.25,
    });
    gsap.set('.poop', {
      width: 50,
      height: 50,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: '50% 50%',
    });
    gsap.to('.poop', {
      duration: 5,
      motionPath: {
        path: '#path', // can also pass it array of coordinates and it will smooth it out into a curve
        autoRotate: true,
        start: 0.25,
        end: 1.5,
        align: '#path',
      },
    });
  }, []);

  return (
    <Layout title="About">
      <PageTitle title="About" subtitle="" />
      <div className="about-section">
        <p className="blah">blah</p>
        <div className="poop">poop</div>
        <div className="hello">HELLLOOO+++++++</div>
        <div className="hello">HELLLOOO+++++++</div>
        <div className="hello">HELLLOOO+++++++</div>
        <svg
          width="190"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            d="M 10 80 Q 52.5 10, 95 80 T 180 80"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>
    </Layout>
  );
}
