function trackEvent(eventName) {
  if (window.umami) {
    window.umami.track(eventName);
  }
}