---
title: 'Performance for Beginners'
subtitle: 'Some easy ways to improve the performance of your site'
author: Clare
date: '2020-06-19'
banner: performance.png
alt_text: 'racing track'
tags: [performance, javascript]
promoted: true
---

## What & Why?

As user expectations get higher and as mobile usage increases, it stands to reason that 'performance' has become one of the key areas of modern web development. After all, there's no point spending hours perfecting your content if your user gives up waiting for the page to load!

[Jakob Nielson](https://www.nngroup.com/articles/the-need-for-speed-1997/) back in 1997 identified that any wait longer than 0.3 seconds registers on the user's attention, with [research by Google](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/) revealing in 2017 that 53% of users will leave a mobile site if the page hasn't finished loading in just 3 seconds.

In other words, slow page load results in a whole load of misery:

- fewer page views
- higher bounce rates
- lower customer satisfaction
- poorer user experience
- lower conversion rates
- fewer return visits
- lower ranking by Google (especially now that the algorithm is based off mobile-first stats)

---

## Measuring it: basic benchmarking

So how do you measure how much of a problem you have? Luckily there are loads of free tools out there to use.

Here are just a few:

- [Lighthouse](https://web.dev/measure) (can also be integrated into your CI pipeline with [GitHub Actions](https://github.com/marketplace/actions/lighthouse-ci-action))
- Chrome Devtools can be configured to emulate slow network/device speed
- [Performance tab](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance) of Chrome Devtools
- [Webpagetest](https://www.webpagetest.org/) for page load speed
- [Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Pingdom](https://tools.pingdom.com/) for DNS lookup time (how long it takes DNS to turn your url into an ip address)
- [Google Analytics](https://analytics.google.com) to see drop-off points/bounce rates/mobile usage
- Check for Flash of Unstyled Content (FOUC) => lowers perceived performance
- [Timestamps](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) with `performance.now()` before & after functions etc.
- React and [React Devtools Profiler](https://kentcdodds.com/blog/profile-a-react-app-for-performance)

Once you've diagnosed what your main issues are, it's time to select which ones to prioritise and set about fixing them!

---

## Aims

What counts as 'good'? Standards are changing just as fast as the technologies underpinning them, but a good rule of thumb is the RAIL acronym from Google:

- **Response** - > 100ms
- **Animation** - > 16 ms for frame to complete
- **Idle** - 50ms chunks proactively scheduled work
- **Load** - time to FMP (First Meaningful Paint) in 1s

Steve Kinney in his Frontend Master's course on [Performance in Javascript](https://frontendmasters.com/courses/web-performance/) adds that:

- TTI (Time To Interactive) should be under 5 seconds and under 2 seconds for repeat visits
- Critical file size should be under 170Kb gzipped
- The weight of each page should be between 0 and 500 KB (weight = the total number of bytes the user receives)

---

## Solutions

## 1. Fewer HTTP requests & less code!

- Most of page load is accounted for by downloading scripts/assets (check the Network tab of Chrome Devtools) => fewer assets means faster load time!
- Achieve this by [minifying](http://minifycode.com/) & [compressing](https://en.ryte.com/magazine/compress-code-for-a-faster-website) your code e.g. in your Webpack build (HTTP/2 has reduced the need for file concatenation by upgrading the transport layer & managing requests in parallel => 'multiplexing')
- Preload critical code (resources marked with preload fetched before HTML parsing has finished):

```html
<link rel="preload" href="/styles/other.css" as="style" />
```

- HTTP/2 also offers a ['push'](https://www.smashingmagazine.com/2017/04/guide-http2-server-push/) feature => sends assets before they're requested, i.e. reduces number of round trips . It's not fully supported by all browsers, but looks like a good addition!
- Code-splitting (e.g. React's [lazy loading](https://reactjs.org/docs/code-splitting.html) => only load what the user needs )
- Webpack [splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/) -> splits bundle up into chunks, some of which can be optimized => faster build time, reduced duplication:
- Reduce your dependencies => fewer libraries => smaller bundle size - analysable with Webpack's `webpack-bundle-analyzer` plugin
- Tree-shaking: gets rid of unused code (Webpack handles this for you if you're using ES2015 module syntax i.e. import/export)
- Only load css that's needed 'above the fold' (Addy Osmani's [Critical](https://github.com/addyosmani/critical))

---

## 2. Optimise your images

- Build it into your build process e.g. Webpack [imagemin](https://www.npmjs.com/package/imagemin-webpack)
- [Responsive images](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images) via art direction/ picture element and srcset (small images on mobile => less bandwith => better performance)
- [Webp format](https://developers.google.com/speed/webp) can reduce image size by 26% while staying high-quality! (lossless & lossy compression). Not fully supported (IE11, Safari as of [06/2020](https://caniuse.com/#feat=webp)), so provide a jpg/png fallback
- Use fewer images! (reduce your number of assets, not just their weight!)
- Progressive image loading -> using placeholders/blur-up etc. => reduces perceived load time (though there's [a debate](https://www.smashingmagazine.com/2018/02/progressive-image-loading-user-perceived-performance/) around this)
- Consider [CDNs](https://web.dev/image-cdns/) e.g. Cloudinary

---

## 3. Avoid unnecessary browser work

To understand how rendering affects performance, it's worth revising the 'CRP' - the [critical rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) taken by the browser to convert JavaScript/HTML/CSS into pixels on your screen.

The render tree is made up of the DOM (Document Object Model) from HTML markup +
CCSOM (CSS Object Model) from CSS markup.

The [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is the relational tree structure that results from 'converting' raw bytes of HTML into encoded characters (e.g. UTF-8); 'tokenising' it e.g. into `<body>` etc; and 'lexing' it into objects with associated properties/rules.

The [CCSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model) is also tree-like -> organised by specificity of rules ('the cascade') -> where the more complex the rules/selectors used, the longer taken to calculate the style to apply.

The browser goes through 4 main stages in order to render to the screen:

1. Render tree
2. Layout (aka Reflow) - figure out where elements should go on the page
3. Paint - pixels onto screen!
4. Composite Layers - GPU combines layers

At any point, JavaScript can come along and interrupt this (on the same thread) e.g. by applying an inline style, adding/removing an element, animating background colours etc.

**What's the impact of this?**

If it changes the layout of elements (e.g. increasing the width of a div), it results in a ['reflow'](https://developer.mozilla.org/en-US/docs/Glossary/Reflow) (including a reflow of the parents and children of the affected element).

Reflows are inherently expensive, consuming CPU and 'blocking' the screen. What's more, they're more often than not followed by a repaint, which adds to the cost!

If you do this a lot, you'll get something called ['layout thrashing'](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing) i.e. 'forced synchronous layout' changes many times before the page loads => noticeably slow!

**How to avoid:**

- Try to only animate 'opacity' and 'transform' CSS properties -> [as these don't cause a repaint](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)! (check the rendering tab in Chrome devtools for 'paint flashing')
- Change CSS classes at the lowest level of DOM tree
- Avoid repeatedly changing inline styles with JavaScript
- [Batch DOM manipulation](https://areknawo.com/dom-performance-case-study/) & group the 'reading' stage (e.g. querySelector) from the 'writing' stage (e.g. updating and appending)
- [Debounce](https://gomakethings.com/debouncing-your-javascript-events/) window resize events:
- ['will-change'](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) CSS property lets the browser know to expect an upcoming change, but should only be used as a last resort!
- [requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) helps create optimised animations by batching changes to match the browser's 60fps refresh/repaint. But Steve Kinney argues that it's not necessarily any better if you need to use it in a loop, where it'd be better just to add a CSS class!

---

## 4. Check your fonts

- Don't use too many!
- Provide each font in WOFF2, WOFF, EOT, and TTF formats
- [Subset fonts](https://www.typotheque.com/help/webfonts/what_is_font_subsetting) if possible (only use what's needed)
- Self-host rather than making a request to Google Fonts ([debated here](https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/))
- useful overview: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization

---

## 5. Avoid 3rd party render-blocking scripts

- Watch out for 3rd party scripts with blocking behaviour (e.g. Matomo, Google Tags)
- Load scripts asynchronously where possible (synchronous JavaScript should be placed after the `<body>`)
- Load external css stylesheets **before** JavaScript scripts in the head (the `<script>` tag blocks parsing)

---

## 6. Caching

- [V8](https://v8.dev/blog/code-caching-for-devs.) handles most of this for you - just avoid making unnecessary changes!
- Check out `chrome://tracing`
- See also [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading) for caching and offline functionality.

---

## 7. Check your code for errors/omissions

- [Validate your HTML](http://validator.w3.org/)
- Make sure the lang attribute is on the `<html>` tag; your doctype declaration `<!DOCTYPE html>` is at the top; & you've included the encoding rule e.g.`<meta charset="utf-8">`
- Use a linter e.g. [ESLint](https://eslint.org/) to catch syntax errors/unused imports
- Maintain a decent level of test-coverage
- Consider [TypeScript](https://www.typescriptlang.org/)!

---

## 8. Optimise your JavaScript

- See: [Steve Kinney's course on Frontend Masters](https://frontendmasters.com/courses/web-performance/) for loads of good practical advice.
- Kinney points out that most of the performance impact of JavaScript comes from parsing & compiling (by [Ignition](https://v8.dev/docs/ignition))
- V8's optimizing compiler, [TurboFan](https://v8.dev/docs/turbofan), relies on makiing assumptions about your code ('speculative Just In Time optimisation'), so that it's always best to be as predictable as possible: initialise your object's properties at the point of creation and structure them in the same order each time, trying not to modify them after the fact!
- Avoid nested functions: unnecessary closures will impact processing speed and memory consumption

---

## Summary

So, plenty to get started with!

There's loads more to discover in this area (I haven't even mentioned latency or bandwidth, for example, and of course [accessibility](https://clarebee.com/blog/2020-06-04-accessibility_basics) is crucial as the fastest page load in the world won't make up for an inaccessible site!).

Here are a few resources to keep you going! Bear in mind, as the techniques used by module bundlers and browsers evolve, so too will the strategies needed for how to optimise them...

- [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
- [Moz Page Speed](https://moz.com/learn/seo/page-speed)
- [Kinsta Page Speed](https://kinsta.com/learn/page-speed/)
