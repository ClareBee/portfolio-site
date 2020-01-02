import Link from './Link';
import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import ScrollMagic from 'scrollmagic';
// import 'plugins/animation.gsap.js';

const ScrollMagicPage = () => {
useEffect(() => {
  var tl = gsap.timeline();
  const controller = new ScrollMagic.Controller();
  console.log('controller', controller)
  tl.from ('blockquote', { x: 200, opacity: 0, duration: 2, delay: .25 })
  const scene = new ScrollMagic.Scene({
    triggerElement: '.animate',
    duration: '100%'
  })
  .setPin('.animate')
  .on('enter', function (e) {
     tl.play();
   })
   .on('leave', function (e) {
      tl.reverse();
  })
  .addTo(controller)

  scene.on("progress", function (event) {
      console.log("Scene progress changed to " + event.progress);
  });
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
  return (
    <div>
      scroll magic example
      <section style={{height: '1000px'}}>Scroll down</section>
      <section className="animate">
      <blockquote>some text to animate</blockquote>
      </section>
    </div>
  )
};

export default ScrollMagicPage;
