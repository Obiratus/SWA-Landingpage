# Umami Properties Troubleshooting Guide

## Issue: Event Properties Not Transmitting

### Current Status
Updated `tracking.js` to include better error handling and debug logging.

## How to Test & Debug

### 1. Open Browser Console
Open your browser's Developer Tools (F12) and go to the Console tab.

### 2. Test on Live Site
1. Visit `index.html`
2. Open Console (F12)
3. Scroll to the screen time input
4. Enter a value (e.g., "5")
5. Click "Share Demo Data"

**Expected Console Output:**
```
✅ Tracked: cta-3-share-demo-data with data: {daily_screen_time: 5, weekly_screen_time: 35}
```

### 3. Check Network Tab
1. Open Developer Tools → Network tab
2. Filter by "umami" or "collect"
3. Trigger an event (like submitting price)
4. Look for network request to Umami
5. Click on it and check:
   - **Request Payload:** Should contain event name and properties
   - **Response:** Should be 200 OK

### 4. Test with test-tracking.html
1. Open `test-tracking.html` in browser
2. Click each test button
3. Check console for results
4. Verify events in Umami dashboard

## Umami Dashboard Verification

### Check Events with Properties
1. Go to your Umami dashboard
2. Navigate to: **Events** section
3. Find events like:
   - `cta-3-share-demo-data`
   - `cta-6-price-submit`
   - `cta-7-reserve-at-price`
4. Click on event name to see details
5. Look for **Event Data** section
6. Should show properties like:
   - `daily_screen_time: 5`
   - `price_chf: 12.50`

## Common Issues & Solutions

### Issue 1: Properties Show as Empty Object
**Cause:** Umami script loaded after tracking call  
**Solution:** Ensure `defer` attribute on Umami script tag

```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="..."></script>
```

### Issue 2: Properties Not Visible in Dashboard
**Cause:** Umami Cloud might require event data to be enabled  
**Solution:** 
1. Check Umami dashboard settings
2. Ensure "Enable event data" is turned on
3. Some Umami versions store properties separately

### Issue 3: Console Shows "Umami not ready"
**Cause:** Script hasn't loaded yet  
**Solution:** 
- tracking.js now has better checks
- Events will show warning but still attempt to track

### Issue 4: Properties Type Mismatch
**Cause:** Properties must be serializable (no functions, etc.)  
**Solution:** Only pass:
- Numbers: `price_chf: 12.50`
- Strings: `currency: 'CHF'`
- Booleans: `confirmed: true`

## Updated tracking.js Code

```javascript
function trackEvent(eventName, properties = {}) {
  if (typeof window.umami !== 'undefined' && 
      window.umami && 
      typeof window.umami.track === 'function') {
    try {
      window.umami.track(eventName, properties);
      
      // Debug log
      if (Object.keys(properties).length > 0) {
        console.log('✅ Tracked:', eventName, 'with data:', properties);
      } else {
        console.log('✅ Tracked:', eventName);
      }
    } catch (error) {
      console.error('Error tracking event:', eventName, error);
    }
  } else {
    console.warn('⚠️ Umami not ready:', eventName, properties);
  }
}
```

## Debugging Checklist

- [ ] Check browser console for tracking logs
- [ ] Verify Umami script loads (check Network tab)
- [ ] Confirm `window.umami` exists (type in console: `window.umami`)
- [ ] Test `window.umami.track('test', {foo: 'bar'})` directly in console
- [ ] Check Umami dashboard for events appearing
- [ ] Look for event data in Umami event details
- [ ] Test with `test-tracking.html` file

## Alternative: Manual Testing

Open browser console on any page and run:

```javascript
// Test 1: Basic event
window.umami.track('manual-test-basic');

// Test 2: Event with properties
window.umami.track('manual-test-with-props', {
  test_number: 42,
  test_string: 'hello',
  test_decimal: 12.50
});

// Check if it worked
console.log('Events sent. Check Umami dashboard in ~10 seconds');
```

## Umami API Documentation

**Umami v2 Cloud API:**
```javascript
// Basic event
umami.track('event-name');

// Event with data
umami.track('event-name', {
  property1: 'value1',
  property2: 123,
  property3: 45.67
});
```

## Next Steps if Still Not Working

1. **Check Umami Version:**
   - Some cloud instances might use v1 API
   - Try: `window.umami('event-name', { data })`

2. **Check Dashboard Settings:**
   - Ensure your website/workspace has event data enabled
   - Some plans might have restrictions

3. **Contact Support:**
   - If using Umami Cloud, check their documentation
   - Verify your plan includes event data tracking

4. **Alternative Approach:**
   - Store properties in event name: `cta-6-price-submit-15.99`
   - Not ideal but works if properties aren't supported

## Expected Behavior After Fix

### Console Output Example:
```
✅ Tracked: cta-1-watch-video
✅ Tracked: cta-3-share-demo-data with data: {daily_screen_time: 5, weekly_screen_time: 35}
✅ Tracked: cta-6-price-submit with data: {price_chf: 12.5}
✅ Tracked: cta-7-reserve-at-price with data: {price_chf: 12.5}
```

### Umami Dashboard Example:
```
Events:
  cta-3-share-demo-data (12 occurrences)
    └─ Event Data:
        daily_screen_time: [3.5, 5, 6.2, ...]
        weekly_screen_time: [24.5, 35, 43.4, ...]
  
  cta-6-price-submit (8 occurrences)
    └─ Event Data:
        price_chf: [10, 12.5, 15, 20, ...]
```

---

**Last Updated:** October 13, 2025  
**Status:** Tracking function updated with debug logging  
**Action Required:** Test with browser console open to verify properties are transmitted
