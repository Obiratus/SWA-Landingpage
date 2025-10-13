/**
 * Track custom events with Umami Analytics
 * Umami v2 Cloud API: window.umami.track(eventName, eventData)
 * 
 * @param {string} eventName - The name of the event to track
 * @param {object} properties - Optional event properties/data
 */
function trackEvent(eventName, properties = {}) {
  // Wait for Umami to be ready
  if (typeof window.umami !== 'undefined' && window.umami && typeof window.umami.track === 'function') {
    try {
      // Send event with or without properties
      window.umami.track(eventName, properties);
      
      // Debug log (remove in production)
      if (Object.keys(properties).length > 0) {
        console.log('✅ Tracked:', eventName, 'with data:', properties);
      } else {
        console.log('✅ Tracked:', eventName);
      }
    } catch (error) {
      console.error('Error tracking event:', eventName, error);
    }
  } else {
    console.warn('⚠️ Umami not ready. Event not tracked:', eventName, properties);
  }
}