import React from 'react';
import { useEffect } from 'react';

import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap/dist/gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

console.log('gsap', gsap);
ScrollMagicPluginGsap(ScrollMagic, gsap);

const ScrollMagicContext = ({ children, trigger }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('#intro', {
      duration: 3,
      x: -300,
      // TODO custom easing
      ease: 'back',
    }).from(
      '.introduction__subtitle',
      {
        duration: 3,
        x: 300,
        ease: 'back',
      },
      '-=3',
    );
    // TODO less of a pause after previous timeline
    const bounce = gsap.timeline({
      repeat: 3,
      delay: 3.5,
      repeatDelay: 2,
    });
    bounce.from('.arrow', {
      duration: 2,
      y: -70,
      opacity: 0,
      ease: 'bounce',
    });
    // const projects = gsap.timeline();

    const controller = new ScrollMagic.Controller();
    // const projectTriggers = document.getElementsByClassName(
    //   'trigger',
    // );
    const projectTriggers = document.getElementsByClassName(
      'project',
    );
    console.log('project', projectTriggers);
    for (let i = 0; i < projectTriggers.length; i++) {
      // create a scene for each element
      const leftTrigger = projectTriggers[i].querySelector(
        '.project__left',
      );
      const rightTrigger = projectTriggers[i].querySelector(
        '.project__right',
      );
      console.log('tir', leftTrigger);
      new ScrollMagic.Scene({
        triggerElement: projectTriggers[i].querySelector(
          '.project__left',
        ), // y value not modified, so we can use element as trigger as well
        offset: 50, // start a little later
        triggerHook: 0.9,
      })
        .setClassToggle(projectTriggers[i], 'visible')
        .setClassToggle(leftTrigger, 'visible') // add class toggle
        .addTo(controller)
        .reverse(true);

      new ScrollMagic.Scene({
        triggerElement: projectTriggers[i].querySelector(
          '.project__right',
        ), // y value not modified, so we can use element as trigger as well
        offset: 50, // start a little later
        triggerHook: 0.9,
      })
        .setClassToggle(rightTrigger, 'visible')
        .addTo(controller)
        .reverse(true);
    }
    // Array.prototype.forEach.call(projectTriggers, function(
    //   projectTrigger,
    // ) {
    //   console.log('blah', projectTrigger);
    //   const projectLHS = projectTrigger.querySelector(
    //     '.project__left',
    //   );
    //   const projectRHS = projectTrigger.querySelector(
    //     '.project__right',
    //   );
    //   console.log('project sides', projectLHS, projectRHS);
    //   const project = gsap.timeline({ delay: 1.5 });
    //   project.from(projectLHS, {
    //     duration: 1.5,
    //     x: -500,
    //     opacity: 0,
    //     ease: 'back.out(2)',
    //   });
    //   project.from(projectRHS, {
    //     duration: 1.5,
    //     x: 500,
    //     opacity: 0,
    //     ease: 'back.out(2)',
    //   });
    //   const scene = new ScrollMagic.Scene({
    //     triggerElement: projectTrigger,
    //     triggerHook: 'onEnter',
    //     offset: 100, // show, when scrolled 10% into view
    //   })
    //     .on('start', function(e) {
    //       project.play();
    //     })
    //     .on('leave', function(e) {
    //       project.reverse();
    //     })
    //     // .setTween(project)
    //     .addTo(controller);
    //   scene.on('progress', function(event) {
    //     console.log('Scene progress changed to ' + event.progress);
    //   });
    // });
  });

  // then we can control the whole thing easily...
  // tl.pause();
  // tl.resume();
  // tl.seek(1.5);
  // tl.reverse();
  // controller.scrollTo("#anchor");
  //
  // // scroll to the beginning of a scene
  // var scene = new ScrollMagic.Scene({offset: 200});
  // controller.scrollTo(scene);
  return <div>{children}</div>;
};

export default ScrollMagicContext;
