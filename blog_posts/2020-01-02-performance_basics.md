---
title: 'Performance for Beginners'
subtitle: 'Some easy ways to improve the performance of your site'
author: Clare
date: '2020-01-02'
banner: rsz_test_image.png
alt_text: 'test'
tags: [performance, javascript]
promoted: false
---

## What & Why?

- network load performance
- JS performance
- rendering performance

**Jakob Nielson**

- 0.1s = no noticeable lag
- 0.3 = slight noticeable
- 1s = noticeable
- 10s+ = user leaves!

Slower load = fewer page views, fewer conversions, higher bounce rate

100ms improvement = 1% inc in Amazon's revenue
53% of users will leave a mobile site if it takes more than 3s to load

Perceived superiority = 20% faster than competitors
LTE (long-term evolution) - getting slower!
Apps are getting bigger :)

## Goals

Goals to achieve:   Your pages should reach these goals:First Meaningful Paint under 1 secondTime To Interactive under 5 seconds for the "average" configuration (a \$200 Android on a slow 3G network with 400ms RTT and 400kbps transfer speed) and under 2 seconds for repeat visits
Critical file size under 170Kb gzipped

Page weight: The weight of each page is between 0 and 500 KB.

## Measure First

Steve Kinney

## RAIL (Google acronym) benchmarks

- **Response** - > 100ms
- **Animation** - > 16 ms for frame to complete
- **Idle** - 50ms chunks proactively scheduled work
- **Load** - first meaningful paint in 1s

Identify your priorities!

Measurement is crucial - don't start until you've measured it! Everything has a trade-off...
**Benchmarking** NBNB
Question of network conditions, device speed, budget

> Doing less stuff takes less time!
> Doing stuff later is better than now!

## Javascript

# JavaScript Performance - Steve Kinney

https://speakerdeck.com/stevekinney/web-performance

## JavaScript Performance

- Be wary of out of date advice...
- We're sending increasing amounts of JS in client-side apps
- Parsing & compiling usually the problem
- Browsers use Just In Time compilation
- V8 JS Engine
- Parser turns JS into AST -> baseline compiler 'Ignition' -> optimizing compiler for any code that can be optimised -> TurboFan => byte code -> executed by browser

### Parsing

- slow (1MB/second on mobile!)
- Eager parsing (full parse)
- Lazy parsing (pre parse - do the minimum possible - i.e. code that's being used, save function declarations and classes for later) => if you get it wrong, can be worse than eager parsing!
- wrap a function in parentheses = forces eager loading => risky micro-optimization
- prefer tools: - https://github.com/nolanlawson/optimize-js? unmaintained
- avoid nested functions

### AST

- abstract syntax tree
- turns string into data structure representing our code
- turned into byte code by baseline compiler (Ignition)

### Optimising Compiler (TurboFan)

- speculative optimisation based on assumptions
- hidden classes for dynamic lookups
- function inlining

### Optimising objects

`%HaveSameMap(myObject)` - with `--allow-natives-syntax` flag

- Dynamic lookup = Ignition figures stuff out on the fly
  BUT also keeps a secret type system! Remembers what it has seen - cached version of the lookup
  BUT if a different path is used/created in a different way = loses cache...

- effected by scope (e.g. Class inside fn), prototype chain

### Measuring

- performance tab in dev tools
- mark start and end times, do a recording
- React uses this out of the box!
- perf_hooks: https://nodejs.org/api/perf_hooks.html
  `node --trace-opt file.js | grep add`
  `--trace-deopt` = when browser's assumption fails
- prevent optimisation: https://stackoverflow.com/questions/18476402/how-to-disable-v8s-optimizing-compiler, with `--allow-natives-syntax` and `%NeverOptimizeFunction(myFunction);`

V8 parses in two steps - using type-system:

- Monomorphism - value consistent - optimised
- Polymorphism - value can change - will try
- Megamorphism - value changes so much it will never be optimised

### Takeaways:

- initialise yr properties at creation
- initialise properties in same order
- try not to modify after the fact
- TypeScript :) & ship less code
- https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API

* function inlining: V8 rewrites hot functions for you!
* `node --trace-turbo-inlining`

## Images

## Rendering

browser - CRP etc.CRP = critical rendering path = what the browser goes through to convert js, html, css into actual pixels on the screenOptimizing the critical rendering path refers to prioritizing the display of content that relates to the current user action.
1.DOM, CSSOM = creates render tree (DOM -> characters/tokens (tokenizer)/nodes (relationships - tree) = dom is the full parsed representation of the html markupBytes → characters → tokens → nodes → object model.HTML markup is transformed into a Document Object Model (DOM); CSS markup is transformed into a CSS Object Model (CSSOM).DOM and CSSOM are independent data structures.Chrome DevTools Timeline allows us to capture and inspect the construction and processing costs of DOM and CSSOM.Conversion: The browser reads the raw bytes of HTML off the disk or network, and translates them to individual characters based on specified encoding of the file (for example, UTF-8).Tokenizing: The browser converts strings of characters into distinct tokens—as specified by the W3C HTML5 standard; for example, "<html>", "<body>"—and other strings within angle brackets. Each token has a special meaning and its own set of rules.Lexing: The emitted tokens are converted into "objects," which define their properties and rules.DOM construction: Finally, because the HTML markup defines relationships between different tags (some tags are contained within other tags) the created objects are linked in a tree data structure that also captures the parent-child relationships defined in the original markup: the HTML object is a parent of the body object, the body is a parent of the paragraph object, and so on.
CSSOM also a tree:Why does the CSSOM have a tree structure? When computing the final set of styles for any object on the page, the browser starts with the most general rule applicable to that node (for example, if it is a child of a body element, then all body styles apply) and then recursively refines the computed styles by applying more specific rules; that is, the rules "cascade down."
google fast search response - incremental construction of domi.e server returns partial html so user doesn't have to wait
2.layout calculations3.paint pixels on screen

## Rendering Performance

1. DOM document object model = tree-like representation of the page
   CSSOM cascading style sheet object model = tree acc to specificity rules
   Render Tree = combines DOM & CSSOM = what appears on the page (computed rules, no hidden objects etc) -> via 'style calculation'

- more complicated css selectors => longer process
- stick to simple class names (e.g. w BEM) where possible & ideally only one
- browsers read selectors from right to left

2. Layout(aka Reflow) - figure out where elements go on page
3. Paint - pixels onto screen!
4. Composite Layers - GPU combines layers

JS can change any of this! - e.g. class, inline styles, add/remove elements => all sharing the same thread!

**Render pipeline: JS -> Style -> Layout -> Paint -> Composite**
= rebuild the render tree...
BUT you can skip steps, e.g. changing opacity doesn't change layout

### Reflows

- Layouts/reflows expensive, esp on phones = blocking operation, consumes CPU, can be noticeable
- Whenever the geometry of an element changes, browser has to reflow the page
- Reflow of an element causes reflow of its parents & children
- Examples: resizing window, changing font, content change, adding/removing stylesheet/classes/elements, changing orientation, calculating/changing size/position, etc.

Also: reflows usually followed by repaint - also expensive!

### How to avoid:

- change classes at lowest level of DOM tree
- avoid repeatedly changing inline styles
- avoid table layouts
- batch DOM manipulation
- debounce window resize events

Layout thrashing aka forced synchronous layout

- when browser has to stop and calculate style + layout: when JS writes/reads from DOM multiple times, causing document reflows

Solution: **separate reading from writing!** NB

- RequestAnimationFrame not necessarily any better => if you have to put it in a loop it still represents repeated work
- Better just to add a css class
- Store data in memory rather than the DOM (e.g. React state) => means you don't have to check the DOM
- FastDOM? https://github.com/wilsonpage/fastdom
  > Eliminates layout thrashing by batching DOM read/write operations (~600 bytes minified gzipped).
- Remember to switch React to production mode!!
- measure to make sure you're not thrashing!!

### Painting

> Any time you change something other than opacity or a CSS transform, you'll trigger a repaint

- changing layout => requires repaint
- changing colour => doesn't require layout change, but does require repaint
- see rendering tab in Chrome devtools and check 'paint flashing'
- try repaint as little as possible

#### Browser has roughly 3 threads:

- UI thread (Chrome itself)
- Renderer thread - main thread (one per tab) = CPU intensive
- Compositor thread - draws bitmaps to screen via GPU = GPU intensive
- create bitmaps for elements, put them onto layers, prepare shaders for animations if neeeded
- after painting, bitmaps shared w a thread on the GPU to do the actual compositing
- GPU + OpenGL = magic :)

#### Managing Layers

- Compositor thread: drawing/scaling/rotating bitmaps, making them transparent, applying filters
- Offload as much as possible to it!
- Layers = optimizations that the browser does
- what gets a layer? root object of a page; objects w specific css positions; objects w css transforms; objects w overflow;
- you don't have control, but you can hint with `will-change`
  e.g.

```css
.sidebar:hover {
  will-change: transform;
}
```

- BUT using layers is a tradeoff - (needs to be kept in shared memory between main & composite threads)
- warns the browser that you're going to use JS to transform sth that is currently static, so most often used in JS for temporary changes (otherwise best handled in css)

```javascript
element.addEventListener('mouseenter', () => {
  element.style.willChange = 'transform';
});
```

- remember to remove it when you no longer need it! = change back to 'auto' on 'animationEnd'/'mouseleave'

## Fonts

##

google page speedsitemap.xmlsubmitted to google search consolerobots.txtsitemap html via footer = https://websiteseochecker.com/html-sitemap-generator/

## Load Performance

### Latency and Bandwidth

- bandwidth: how much you can fit through
- latency: how long it takes

#### TCP: Transmission Control Protocol

- focused on reliability
- keep checking in w server to see everything ok
- packets delivered in correct order & without errors
- client acknowledges each packet
- unreliable connections handled well
- won't overload the network
- TCP starts by sending small, then if all well, sends more and more
- initial TCP window size is 14kb, so you could get it done in a one-r!
- cloudping.info: where's the optimal place to put our assets to avoid high latency? everywhere! CDNs

#### Caching

- 1997: HTTP/1.1 - cache-control response header for 'safe' methods: get/options/head
- settings: no-store (get a new version every time), no-cache (conditional get check w server), max-age, s-maxage (for CDNs only - CDN keeps, browser doesn't), immutable
- 3 states? missing, stale, valid

#### Content-Addressable Storage

- adding stuff to the end of your filename! = checksum => cache-busting for free!

### Service Workers

- PWAs
- Service worker like an app in the browser: means things can work offline
- https://developers.google.com/web/fundamentals/primers/service-workers

### Lazy Loading & Pre-Loading

- e.g. React with Webpack
- `webpack-bundle-analyzer` plugin
- build for prod and analyse
- reduce your dependencies
- https://reactjs.org/docs/code-splitting.html
- https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c

Chrome devtools lets you emulate slow connection speeds

### HTTP/2

- upgrades the HTTP transport layer
- multiplexed (multiple requests in parallel)
- allows servers to proactively push responses into client caches
- concatenting files was good for HTTP/1.1 not so much for HTTP/2!!
- no real need to do inline images etc
- Zeit Now, Netlify, CloudFront, cloudflare
