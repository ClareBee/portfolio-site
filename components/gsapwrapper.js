import React from 'react';
import { useEffect, useState } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';
import { Draggable } from 'gsap/dist/Draggable.js';
import { relative } from 'path';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(Draggable);

const GsapWrapper = ({ children }) => {
  const [point, setPoint] = useState(null);
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
    const circles = document.querySelectorAll('.circle');
    const ellipses = document.getElementsByTagName('ellipse');
    const startPoint = document.getElementById('ellipse-1');
    const myPath = document.getElementById('path');
    const myRawPath = MotionPathPlugin.getRawPath(myPath);
    console.log(myRawPath);
    // let pointy = MotionPathPlugin.getPositionOnPath(
    //   rawPath,
    //   0.3,
    //   false,
    // );
    // console.log('pointy', pointy);

    const ellipsesPoints = Array.from(ellipses)
      .sort((a, b) => {
        return a.id.split('-')[1] - b.id.split('-')[1];
      })
      .map(ell => {
        return [ell.cx.baseVal.value, ell.cy.baseVal.value];
      });
    console.log(ellipsesPoints);

    const progressPoints = myLittlePath => {
      const steps = [
        0.05,
        0.1,
        0.15,
        0.2,
        0.25,
        0.3,
        0.35,
        0.4,
        0.45,
        0.55,
        0.6,
        0.65,
        0.7,
        0.75,
        0.8,
        0.85,
        0.9,
        0.95,
        1,
      ];
      const result = steps.map(step => {
        return {
          percent: step,
          position: MotionPathPlugin.getPositionOnPath(
            myLittlePath,
            step,
            true,
          ),
        };
      });
      return result;
    };
    const overlapThreshold = '10%';

    const withinRange = (
      progressPosition,
      markerPosition,
      boundary,
    ) => {
      const number = Number(markerPosition);
      return (
        progressPosition >= number - boundary &&
        progressPosition <= number + boundary
      );
    };

    Draggable.create('#dragNavigator', {
      type: 'x',
      bounds: document.getElementById('container'),
      inertia: true,
      onClick: function() {
        console.log('clicked');
      },
      onDragStart: function() {
        console.log('drag started');
        // clear styles on ellipses
      },
      onDragEnd: function() {
        let i = circles.length;
        while (--i > -1) {
          if (this.hitTest(circles[i], overlapThreshold)) {
            const progressNumber = circles[i].id.split('-')[1];
            Array.from(ellipses).forEach(ellipse => {
              if (ellipse.id.split('-')[1] === progressNumber) {
                gsap.set(ellipse, {
                  fill: 'green',
                  scale: 3,
                });
                console.log('ellipse element', ellipse);
                console.log(
                  'ellipse',
                  ellipse.getBoundingClientRect(),
                );
                const path = MotionPathPlugin.getRawPath('#path');
                const length = MotionPathPlugin.getLength(path);
                // console.log('length', length);
                // const slice = MotionPathPlugin.sliceRawPath(
                //   path,
                //   startPoint,
                //   ellipse,
                // );
                const client = ellipse.getBoundingClientRect();
                const parent = document
                  .getElementById('timelineSVG')
                  .getBoundingClientRect();
                console.log('parent', parent);
                // const relativePos = {};
                // relativePos.x = parent.x + client.x;
                // relativePos.y = parent.y + client.y;

                // console.log(relativePos);
                const ellipseY = ellipse.getAttribute('cy');
                const ellipseX = ellipse.getAttribute('cx');
                console.log('xy', ellipseX, ellipseY);
                const steps = progressPoints(path);
                let progress;
                steps.forEach(step => {
                  if (
                    withinRange(step.position.x, ellipseX, 25) &&
                    withinRange(step.position.y, ellipseY, 25)
                  ) {
                    console.log('matching', step);
                    progress = step.percent;
                  }
                });
                steps.forEach(step => {
                  console.log(step.position.x, step.position.y);
                  console.log(ellipseX, ellipseY);
                });
                console.log('progress', progress);
                // console.log(
                //   'hi',
                //   MotionPathPlugin.getRawPath('#path'),
                // );
                // let pointy = MotionPathPlugin.getPositionOnPath(
                //   path,
                //   0.3,
                //   false,
                // );
                gsap.set('#navigator', {
                  width: 20,
                  height: 20,
                  xPercent: -50,
                  yPercent: -50,
                  transformOrigin: '50% 50%',
                });
                gsap.to('#navigator', {
                  duration: 20,
                  motionPath: {
                    path: '#path',
                    autoRotate: true,
                    start: 0,
                    end: progress,
                    align: '#path',
                  },
                });
              }
            });
          }
        }
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
