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
  tl.from ('blockquote', .5, {x: 200, opacity: 0 })
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
});


// then we can control the whole thing easily...
// tl.pause();
// tl.resume();
// tl.seek(1.5);
// tl.reverse();
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
