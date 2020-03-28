import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap/dist/gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, gsap);

const ScrollMagicContext = ({ children }) => {
  useEffect(() => {
    gsap.set('.portrait__image', {
      opacity: 0,
    });
    gsap.set('.arrow', {
      opacity: 1,
    });
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
      )
      .to(
        '.portrait__image',
        {
          opacity: 1,
          duration: 2.5,
        },
        '0',
      )
      .to('.footer', {
        opacity: 1,
        duration: 2,
      });

    // const projects = gsap.timeline();

    const controller = new ScrollMagic.Controller();
    const projectTriggers = document.getElementsByClassName(
      'project',
    );
    for (let i = 0; i < projectTriggers.length; i++) {
      // create a scene for each element
      const leftTrigger = projectTriggers[i].querySelector(
        '.project__left',
      );
      const rightTrigger = projectTriggers[i].querySelector(
        '.project__right',
      );

      new ScrollMagic.Scene({
        triggerElement: leftTrigger,
        offset: 50,
        triggerHook: 0.9,
      })
        .setClassToggle(projectTriggers[i], 'visible')
        .setClassToggle(leftTrigger, 'visible')
        .addTo(controller)
        .reverse(true);

      new ScrollMagic.Scene({
        triggerElement: rightTrigger,
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

ScrollMagicContext.propTypes = {
  children: PropTypes.object,
};
export default ScrollMagicContext;
