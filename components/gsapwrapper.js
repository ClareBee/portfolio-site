import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';
import { Draggable } from 'gsap/dist/Draggable.js';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(Draggable);

const GsapWrapper = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    const timeline = gsap.timeline();

    const circles = document.querySelectorAll('.circle');
    const overlapThreshold = '10%';
    const images = document.getElementsByTagName('rect');
    // TODO: set in css
    gsap.set(images, {
      opacity: 0,
    });

    const sortedImages = Array.from(images).sort((a, b) => {
      return a.id.split('-')[1] - b.id.split('-')[1];
    });
    console.log(sortedImages);

    const createArray = () => {
      const myPoints = [];
      let origin = 0;
      for (let i = 0; i <= 40; i++) {
        myPoints.push((origin += 0.025));
      }
      console.log('mypoints', myPoints);
      return myPoints;
    };
    const progressPoints = myLittlePath => {
      const steps = createArray();

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
          gsap.set('#navigator', {
            opacity: 1,
          });
        },
        onDragEnd: function() {
          const imageTimeline = gsap.timeline();
          // TODO: sort images NB
          imageTimeline.to(Array.from(sortedImages), {
            duration: 1.5,
            scale: 0.97,
            opacity: 1,
            ease: 'back',
            stagger: 0.3,
          });
          let i = circles.length;
          let progressNumber;

          while (--i > -1) {
            if (this.hitTest(circles[i], overlapThreshold)) {
              progressNumber = circles[i].id.split('-')[1];
            }
          }
          const selectedEllipse = document.getElementById(
            `ellipse-${progressNumber}`,
          );
          gsap.set('#navigator', {
            width: 20,
            height: 20,
            xPercent: -50,
            yPercent: -50,
            transformOrigin: '50% 50%',
          });
          const path = MotionPathPlugin.getRawPath('#path');
          console.log('path', path);
          const length = MotionPathPlugin.getLength(path);
          console.log('length', length);

          const ellipseY = selectedEllipse.getAttribute('cy');
          const ellipseX = selectedEllipse.getAttribute('cx');
          const steps = progressPoints(path);

          let progress;
          steps.forEach(step => {
            if (
              withinRange(step.position.x, ellipseX, 30) &&
              withinRange(step.position.y, ellipseY, 30)
            ) {
              console.log('matching', step);
              progress = step.percent;
            }
          });
          if (progress === undefined) {
            // TODO: handle error
            console.log('why is it undefined?');
            return;
          }
          const lengthOfAnimation = time(20, progress);

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
              gsap.to('#navigator', {
                opacity: 0,
                ease: 'power1',
              });
              gsap.set(selectedEllipse, {
                scale: 3,
              });
              console.log('animation ended');
              gsap.set('#dragNavigator', {
                clearProps: 'all',
              });
            },
          });
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

GsapWrapper.propTypes = {
  children: PropTypes.object,
};
export default GsapWrapper;
