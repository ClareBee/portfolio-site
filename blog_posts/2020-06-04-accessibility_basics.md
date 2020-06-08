---
title: 'Accessibility For Beginners'
subtitle: '14 handy hints for making your site more accessible'
author: Clare
date: '2020-06-04'
banner: website.jpg
alt_text: 'website'
tags: [A11y, accessibility]
promoted: false
---

An accessible website is one that is usable by as many people as possible, including those with:

- impaired vision
- motor difficulties
- cognitive impairments or learning disabilities
- deafness or impaired hearing

According to Scope, there are 13.9 million disabled people in the UK.
[Scope facts & figures](https://www.scope.org.uk/media/disability-facts-figures/)

Here are some basic things I've discovered while trying to improve the accessibility of my sites. I'm still new to this area, so apologies if there are any errors or glaring omissions. Feel free to reach out and let me know! Once you've worked through the checklist, hopefully it'll become second nature to build in these considerations from the start!

---

### 1. Use Tools

The best way to appreciate the importance of accessibility is through experiencing the site as many of your users might - through screen readers, or Chrome extensions that adjust the colours to match the range seen by someone with colour blindness.
These are largely free and easy to install.

Here are just a few to get you started:

- The [axe Chrome extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- The WAVE Chrome extension developed by WebAIM.org: [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- A screen reader (VoiceOver on Mac, ChromeVox, NVDA or Lynx)
- Check if you can navigate your site using the keyboard alone, e.g. by tabbing through.

---

### 2. Don't Disable Zoom

Check you haven't disabled magnification and zoom.

**Why?** People with visability challenges might need to enlarge text or images.
Check the meta viewport tag in your site's head element. If you see maximum-scale, minimum-scale, user-scalable=no, or user-scalable=0, remove these.

---

### 3. Check Colour Contrast

**Why?** If the contrast between foreground and background colours is too small, text becomes difficult to read.

> WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. WCAG 2.1 requires a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders). WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.

> Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.

Source: [WebAIM](https://webaim.org/resources/contrastchecker/)

Chrome devtools shows colour ratio under its colour picker (with AA & AAA thresholds) and there are lots of handy sites out there to help, e.g. [Contrast Ratio](https://contrast-ratio.com/)

---

### 4. Don't Remove Focus Style

Make sure you haven't removed focus style (e.g. setting outline of an input to 0 or none in your CSS). It's there for a reason and is essential for users who aren't using a mouse! See this article by The A11y Project for more info on this: [A11y Project Blog Post](https://a11yproject.com/posts/never-remove-css-outlines/)

If you want to get rid of the default blue, then make sure you replace it with an alternative style via CSS.

```css
a:focus {
  outline: 3px solid purple;
}
```

Check out this excellent CSS Tricks article for more on focus styles and assistive technologies: [CSS Tricks](https://css-tricks.com/focusing-on-focus-styles/)

---

### 5. Meaningful Links

> Link text should be unique within a page, should be meaningful when read out of context, and should help users to know something about their destination if they click on it. Link text such as “Click here” and “More” fail to meet these criteria.

(source: [Washington Uni](https://www.washington.edu/accessibility/links/))

**Why?** Screen readers can generate a list of links on the webpage and navigate them alphabetically. Speech recognition technology can enable a user to select a link with a voice command such as 'click' followed by the link text. It therefore makes sense that this text should be short, meaningful and easy to say!

`aria-label` or `aria-labelledby` attributes could be added to a link, as these could provide a more descriptive link text specifically for screen reader users.

---

### 6. Include Alt Text

**Why?** Not all users can see images. Assistive technology like screen readers will read the alt text instead, while alt text will also be visible where internet connection speeds are particularly slow.

[AbilityNet](https://abilitynet.org.uk/news-blogs/five-golden-rules-compliant-alt-text) provides '5 golden rules' for alt text:

- **Rule 1:** Every `<img>` must have an alt= attribute
- **Rule 2:** Describe the information, not the picture
- **Rule 3:** Active images require descriptive alt text.
- **Rule 4:** Images that contain information require descriptive alt text.
- **Rule 5:** Decorative images should have empty alt text.

---

### 7. Use Semantic HTML wherever possible.

**Why?** Semantic HTML provides information about the content and structure of a web page to screen readers. e.g. `<main>`, `<header>`, `<footer>`, `<nav>`

There's a great article on this by [WebAIM](https://webaim.org/techniques/semanticstructure/), but here are a few pointers to bear in mind:

- all pages should have a h1 that isn't the title of the website
- all forms should have labels
- use headings in order (h1 -> h6), without skipping levels
- prefer native UI controls (use a button rather than a clickable div which would also need an onKeyDown handler!)
- prefer links for navigation and buttons for actions
- if you use `<section>`, w3.org recommends adding the role="contentinfo" with a corresponding aria-label that describes the section. This makes the stucture more accessible and also helps user agents that don't support HTML5.
- `<article>` isn’t just for blog posts — it’s for any self-contained part of a page. It also helps WatchOS display your content properly. [SmashingMagazine](https://www.smashingmagazine.com/2020/01/html5-article-section/)

---

### 8. Add Main Landmarks

In addition to Semantic HTML, ARIA landmarks identify which parts of the page are important and help navigation. The most common roles are "main", "navigation", and "search".

e.g.

```html
<div id="maincontent" role="main">
  <form action="/add" role="search"></form>
</div>
```

---

### 9. Make Sure Interactive Elements are Reachable

> If an element can be clicked with a pointing device, such as a mouse, then it should also be focusable using the keyboard, and the user should be able to do something by interacting with it.

> An element is clickable if it has an onclick event handler defined. You can make it focusable by adding a tabindex=0 attribute value to it. You can make it operable with the keyboard by defining an onkeydown event handler; in most cases, the action taken by event handler should be the same for both types of events.

Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard)

Note that you should avoid setting the tabindex to greater than 0, as this will make the focus order different from the natural order of elements in the DOM.

It's best to rely on elements which are implicitly focusable, such as buttons or select lists.

If you need to customise this, i.e. by rolling your own 'focus management' in modals or custom buttons, then use tabIndex, roles, and aria-labels to aid assistive technologies to realise that an element is indeed interactive

```html
<div tabindex="0" role="button" aria-label="Close"></div>
```

Careful of situations where focus might get 'trapped' (where the user cannot tab further).

---

### 10. Let Users Control Animations

Excessive animations and parallax scrolling effects can trigger issues for people with vestibular or seizure disorders.

The CSS property `prefers-reduced-motion` remembers a user's preference and can be used to disable animations on a webpage.
Checkout this article in CSS Tricks for more info: [CSS Tricks](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/)

```css
@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
    transition: none;
  }
}
```

In addition, you could consider adding more controls, content warnings, the ability to opt-out etc.

---

### 11. Live Region Announcements

As JavaScript can dynamically change the content of a page without a reload, changes such as popup chat widgets or filtered lists are often missed by assistive technologies. ARIA live regions help draw attention and can be set to different levels of assertiveness!

Note that MDN points out:

> Note: Assistive technologies will announce dynamic changes in the content of a live region. The live region must first be present (and usually empty), so that the browser and assistive technologies are aware of it. Any subsequent changes are then announced.

Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

```html
<div role="status"></div>
<div role="alert"></div>
<div aria-live="polite"></div>
<div aria-live="assertive"></div>
```

---

### 12. Don't Rely on Colour

**Why?** People who are colourblind or screen-reader users may not be able to spot the difference between colours, so make sure you don't rely on colour alone to convey meaning. Instead, include cues and meaningful labels, and double-check that your design communicates what you want it to, even in grayscale!

---

### 13. Short Sentences

**Why?** Longer sentences (over 20 words) are much harder for readers to understand.
The optimal line length is often judged to be around 65 characters. If you're using fixed-width fonts, you can set this using CSS! [MeyerWeb](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/)

```css
p {
  max-width: 65ch;
}
```

According to Gov.uk, the average reading age in the UK is nine years old. Check the readability of your content with free sites such as [ReadabilityFormulas](https://readabilityformulas.com/free-readability-formula-tests.php), which uses the Flesch Kincaid measure [Wikipedia](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)

---

### 14. Test It!

- A11y linting with ESLint ([eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y))
- End to End testing with Cypress e.g. [Deque blog](https://www.deque.com/blog/how-to-test-for-accessibility-with-cypress/)

---

## Resources & Tools

- Marcy Sutton's accessibility course on [Frontend Masters](https://frontendmasters.com/courses/javascript-accessibility/)
- chrome://accessibility/ to see the Accessibility Tree of web pages
- [https://wave.webaim.org/](https://wave.webaim.org/)
- https://accessibilityinsights.io/
- [Chrome Accessibility Insights Extension](https://chrome.google.com/webstore/detail/accessibility-insights-fo/-pbjjkligggfmakdaogkfomddhfmpjeni?hl=en)
