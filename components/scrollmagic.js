import Link from './Link';
import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import ScrollMagic from 'scrollmagic';
// import 'plugins/animation.gsap.js';

const ScrollMagicPage = () => {
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: timelineComplete });
    const tl2 = gsap.timeline();
    const controller = new ScrollMagic.Controller();
    console.log('controller', controller);
    tl.to('blockquote', { x: 200, opacity: 0 });
    tl2.from('#image', { x: -200, opacity: 0 });
    const scene = new ScrollMagic.Scene({
      triggerElement: '.animate',
      triggerHook: 'onLeave',
      duration: '100%',
    })
      .setPin('.animate')
      .on('enter', function(e) {
        console.log('entering');
        tl.play();
      })
      .on('leave', function(e) {
        console.log('leaving');
        tl.reverse();
      })
      .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '.animate',
    })
      .on('enter', function(e) {
        console.log('entering');
        tl2.play();
      })
      .on('leave', function(e) {
        console.log('leaving');
        tl2.reverse();
      })
      .addTo(controller);
    scene.on('progress', function(event) {
      console.log('Scene progress changed to ' + event.progress);
    });
  });

  const timelineComplete = () => {
    console.log('completed');
  };

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
  return (
    <div>
      scroll magic example
      <section style={{ height: '1000px' }}>Scroll down</section>
      <section className="animate">
        <blockquote>some text to animate</blockquote>
        <img id="image" src="/test_image.jpg" height="100" />
      </section>
    </div>
  );
};

export default ScrollMagicPage;
