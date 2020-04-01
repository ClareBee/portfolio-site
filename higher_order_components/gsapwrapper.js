/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';
import { Draggable } from 'gsap/dist/Draggable.js';
gsap.registerPlugin(Draggable);

const GsapWrapper = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, Draggable);
    // ensure smooth loading
    const initialTimeline = gsap.timeline();
    initialTimeline
      .from('.introduction', {
        ease: 'linear',
        autoAlpha: 0,
      })
      .to('images', {
        autoAlpha: 0,
      });
    const circles = document.querySelectorAll('.circle');
    const overlapThreshold = '10%';
    const images = document.getElementsByClassName('placeimage');
    const names = document.getElementsByClassName('placename');

    const resetPath = () => {
      gsap.to(images, {
        duration: 0.7,
        opacity: 0,
      });
      gsap.to(names, {
        duration: 0.7,
        opacity: 0,
      });
    };

    const sortedElements = elements =>
      Array.from(elements).sort((a, b) => {
        return a.id.split('-')[1] - b.id.split('-')[1];
      });

    const journeyImages = progressNumber => {
      return sortedElements(images).slice(0, progressNumber);
    };

    const journeyNames = progressNumber => {
      return sortedElements(names).slice(0, progressNumber);
    };
    //divide path up into sections:
    const createArray = () => {
      let repeat = 1 / 0.02;
      let origin = 0;
      const myPoints = [origin];
      while (--repeat > -1) {
        myPoints.push((origin += 0.025));
      }
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
        cursor: 'pointer',
        allowContextMenu: false,
        onDragStart: function() {
          // clear places
          resetPath();
          // make path navigator visible
          gsap.set('#pathNavigator', {
            opacity: 1,
          });
        },
        onDragEnd: function() {
          // capture progress along timeline
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
          const timelineTarget = document.getElementById(
            `circle-${progressNumber}`,
          );
          if (!selectedEllipse) return;

          // mark visited place
          gsap.set('#pathNavigator', {
            width: 20,
            height: 20,
            xPercent: -50,
            yPercent: -50,
            transformOrigin: '50% 50%',
          });

          // TODO: see if gsap 3.2 has method for this
          // determine distance along path for navigator to travel:
          const path = MotionPathPlugin.getRawPath('#path');
          const length = MotionPathPlugin.getLength(path);
          console.log('length', length);

          const ellipseY = selectedEllipse.getAttribute('cy');
          const ellipseX = selectedEllipse.getAttribute('cx');
          const steps = progressPoints(path);

          const matchingStep = steps.filter(
            step =>
              withinRange(step.position.x, ellipseX, 30) &&
              withinRange(step.position.y, ellipseY, 30),
          );
          if (!matchingStep) return;
          const progress = matchingStep[0].percent;

          // calculate relative timing
          const lengthOfAnimation = time(20, progress);

          // stagger appearance of places
          const imageTimeline = gsap.timeline();
          const placesDuration =
            lengthOfAnimation > 2 ? lengthOfAnimation : 2;
          imageTimeline
            .to(journeyImages(progressNumber), {
              duration: placesDuration,
              scale: 0.97,
              autoAlpha: 1,
              ease: 'back',
              stagger: 0.35,
            })
            .to(
              journeyNames(progressNumber),
              {
                duration: placesDuration,
                scale: 0.97,
                autoAlpha: 1,
                ease: 'back',
                stagger: 0.35,
              },
              '<-1',
            );

          // motion path animation
          // TODO: include in timeline?
          gsap.to('#pathNavigator', {
            duration: lengthOfAnimation,
            motionPath: {
              path: '#path',
              autoRotate: true,
              start: 0,
              end: progress,
              align: '#path',
              alignOrigin: [0.5, 0.5],
            },
            onComplete: function() {
              // overlap previous animation?
              gsap.to('#pathNavigator', {
                duration: 1,
                opacity: 0,
                ease: 'power1',
              });
              gsap.set(selectedEllipse, {
                scale: 3,
                transformOrigin: '50% 50%',
              });
              gsap.set(timelineTarget, {
                scale: 2,
                transformOrigin: '50% 50%',
              });
              // move dragnavigator back to start
              gsap.to('#dragNavigator', {
                duration: 0.5,
                clearProps: 'all',
                ease: 'power1',
              });

              // scroll to timeline again
              gsap.to(window, {
                duration: 2.5,
                scrollTo: { y: 0, offsetY: 100 },
                delay: 1,
              });
            },
          });

          // scroll into view if below the initial points
          const scrollTarget = '#' + selectedEllipse.id;
          if (Number(progressNumber) <= 3) return;
          gsap.to(window, {
            duration: 3,
            scrollTo: { y: scrollTarget, offsetY: 200 },
            delay: 0.3,
          });
        },
      });
    };
    dragEvent();
  }, []);

  return <div>{children}</div>;
};

GsapWrapper.propTypes = {
  children: PropTypes.array,
};
export default GsapWrapper;
