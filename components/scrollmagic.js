import React from 'react';
import { useEffect } from 'react';

import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap/dist/gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

console.log('gsap', gsap);
ScrollMagicPluginGsap(ScrollMagic, gsap);

const ScrollMagicContext = ({ children, trigger }) => {
  useEffect(() => {
    console.log('hi there');
    const tl = gsap.timeline();
    tl.from('#intro', {
      duration: 3,
      x: -300,
      // TODO custom easing
      ease: 'back',
    })
      .from(
        '.introduction__subtitle',
        {
          duration: 3,
          x: 300,
          ease: 'back',
        },
        '-=3',
      )
      .from(
        '.arrow',
        {
          duration: 2,
          y: -70,
          opacity: 0,
          ease: 'bounce',
        },
        '-=0.75',
      );

    // const projects = gsap.timeline();

    const controller = new ScrollMagic.Controller();
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
        ),
        offset: 50,
        triggerHook: 0.9,
      })
        .setClassToggle(projectTriggers[i], 'visible')
        .setClassToggle(leftTrigger, 'visible')
        .addTo(controller)
        .reverse(true);

      new ScrollMagic.Scene({
        triggerElement: projectTriggers[i].querySelector(
          '.project__right',
        ),
        offset: 50,
        triggerHook: 0.9,
      })
        .setClassToggle(rightTrigger, 'visible')
        .addTo(controller)
        .reverse(true);
    }
  }, []);
  return <div>{children}</div>;
};

export default ScrollMagicContext;
