import React from 'react';
import { useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';
import { Draggable } from 'gsap/dist/Draggable.js';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(Draggable);

console.log('gsap', gsap);

const GsapWrapper = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    // gsap.set('.blah, .hello', { transformOrigin: '50% 50%' });
    // gsap.to('.blah, .hello', {
    //   duration: 2,
    //   rotation: 360,
    //   onUpdate: function() {
    //     console.log('updated');
    //   },
    //   onStart: function() {
    //     console.log('started');
    //   },
    //   onComplete: function() {
    //     console.log('ended');
    //   },
    // });
    // gsap.to('.blah', {
    //   duration: 3,
    //   x: 300,
    //   backgroundColor: '#fff',
    //   border: '5px solid white',
    //   borderRadius: '5px',
    //   // TODO: check gsap ease visualizer
    //   ease: 'back',
    // });
    // gsap.from('.hello', {
    //   duration: 1.5,
    //   opacity: 0,
    //   scale: 0.3,
    //   y: 'random(-200, 200)',
    //   stagger: 0.25,
    // });
    Draggable.create('#foo', {
      type: 'x',
      bounds: document.getElementById('container'),
      inertia: true,
      onClick: function() {
        console.log('clicked');
      },
      onDragEnd: function() {
        console.log('drag ended');
      },
    });
    gsap.set('.poop', {
      width: 50,
      height: 50,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: '50% 50%',
    });
    gsap.to('.poop', {
      duration: 10,
      motionPath: {
        path: '#path',
        autoRotate: true,
        start: 0,
        end: 1,
        align: '#path',
      },
    });
  }, []);

  // then we can control the whole thing easily...
  // tl.pause();
  // tl.resume();
  // tl.seek(1.5);
  // tl.reverse();
  //
  return <div>{children}</div>;
};

export default GsapWrapper;
