import React from 'react';
import { useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';
import { Draggable } from 'gsap/dist/Draggable.js';
import { relative } from 'path';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(Draggable);

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
    const circles = document.querySelectorAll('.circle');
    const ellipses = document.getElementsByTagName('ellipse');
    const startPoint = document.getElementById('ellipse-1');
    const myPath = document.getElementById('path');
    const myRawPath = MotionPathPlugin.getRawPath(myPath);
    console.log(myRawPath);

    const ellipsesPoints = Array.from(ellipses)
      .sort((a, b) => {
        return a.id.split('-')[1] - b.id.split('-')[1];
      })
      .map(ell => {
        console.log('ell', ell);
        return ell;
      });
    console.log(ellipsesPoints);

    const progressPoints = myLittlePath => {
      const steps = [
        0,
        0.02,
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
            false,
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

    const time = (duration, proportion) => {
      return duration * proportion;
    };
    const timeline = gsap.timeline();
    const dragEvent = () => {
      Draggable.create('#dragNavigator', {
        type: 'x',
        bounds: document.getElementById('container'),
        inertia: true,
        onClick: function() {
          console.log('clicked');
        },
        onDragStart: function() {
          console.log('drag started');
          Array.from(ellipses).forEach(ellipse => {
            gsap.set(ellipse, {
              scale: 1,
              fill: '#da2497',
            });
          });
        },
        onDragEnd: function() {
          console.log('dragended');
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
                  const client = ellipse.getBoundingClientRect();
                  const parent = document
                    .getElementById('timelineSVG')
                    .getBoundingClientRect();
                  console.log('parent', parent);

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
                  if (progress === undefined) {
                    console.log('why is it undefined?');
                    return;
                  }
                  console.log('progress', progress);
                  const lengthOfAnimation = time(20, progress);
                  gsap.set('#navigator', {
                    width: 20,
                    height: 20,
                    xPercent: -50,
                    yPercent: -50,
                    transformOrigin: '50% 50%',
                  });
                  const precedingPoints = Array.from(ellipses);
                  const tl = gsap.timeline({
                    repeat: 2,
                    repeatDelay: 1,
                  });
                  tl.to([...precedingPoints], {
                    duration: 1.5,
                    scale: 0.97,
                    ease: 'back',
                    stagger: 0.3,
                  });

                  gsap.to('#navigator', {
                    duration: lengthOfAnimation,
                    motionPath: {
                      path: '#path',
                      autoRotate: true,
                      start: 0,
                      end: progress,
                      align: '#path',
                    },
                    onComplete: function() {
                      console.log('animation ended');
                      timeline.reverse();
                      gsap.set('#dragNavigator', {
                        clearProps: 'all',
                      });
                      // gsap.set('#navigator', {
                      //   clearProps: 'all',
                      // });
                    },
                  });
                }
              });
            }
          }
        },
      });
    };
    dragEvent();
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
