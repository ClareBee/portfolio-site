export const GA_TRACKING_ID = 'UA-162089097-1';
/*eslint-disable */

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action }) => {
  window.gtag('event', action);
};
/*eslint-enable */
