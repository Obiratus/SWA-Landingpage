# Umami Tracking - Quick Reference

## 🎯 9-Stage Progressive Commitment Funnel

```
┌─────────────────────────────────────────────────────────────┐
│  STAGE 1: VIDEO ENGAGEMENT (index.html)                     │
│  • cta-1-watch-video                                         │
│  • cta-2-share-yes / cta-2-share-maybe                      │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 2: DATA SHARING (index.html)                         │
│  • cta-3-share-demo-data                                     │
│    Properties: { daily_screen_time, weekly_screen_time }    │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 3: FEATURE INTEREST (index.html)                     │
│  • cta-4-learn-more-features                                 │
│  • cta-4-view-all-features                                   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 4: FEATURE EXPLORATION (features.html)               │
│  • feature-card-{name}-click (6 cards)                       │
│  • {cardId}-modal-open                                       │
│  • modal-cta-{feature}-click                                 │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 5: PRICE SIGNAL (features.html)                      │
│  • cta-6-price-submit                                        │
│    Properties: { price_chf }                                 │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 6: PRICE CONFIRMATION (features.html)                │
│  • cta-7-reserve-at-price                                    │
│    Properties: { price_chf }                                 │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 7: WAITLIST SIGNUP (waitlist.html)                   │
│  • cta-8-waitlist-submit                                     │
│    → Redirects to Microsoft Forms                            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 8: SURVEY COMPLETION (External)                      │
│  • Microsoft Forms (not tracked in Umami)                    │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Event Summary by Page

### index.html
- ✅ Umami script loaded
- ✅ tracking.js loaded
- **Events:** 8 tracked events
  - 1× Video watch
  - 2× Share response (yes/maybe)
  - 1× Screen time data (with properties)
  - 2× Feature interest
  - Dynamic nav/footer tracking

### features.html
- ✅ Umami script loaded
- ✅ tracking.js loaded
- **Events:** 15+ tracked events
  - 6× Feature card clicks
  - Dynamic modal opens
  - Dynamic modal CTAs
  - 1× Price submit (with CHF value)
  - 1× Price confirmation (with CHF value)
  - 1× Direct waitlist button
  - Dynamic nav/footer tracking

### waitlist.html
- ✅ Umami script loaded (FIXED)
- ✅ tracking.js loaded
- **Events:** 3 tracked events
  - 1× Waitlist submit (CTA 8)
  - Dynamic nav/footer tracking

## 🔧 Files Modified

1. **tracking.js**
   - Added properties parameter support
   - Now: `trackEvent(eventName, properties = {})`

2. **waitlist.html**
   - Added Umami script to `<head>`
   - Updated event name to `cta-8-waitlist-submit`

## ✅ All Systems Operational

- [x] All pages have Umami analytics
- [x] All CTAs 1-8 tracked
- [x] Properties captured for screen time & pricing
- [x] Navigation & footer tracking active
- [x] Modal interactions tracked
- [x] No JavaScript errors

## 🎯 Key Metrics Available

**User Engagement:**
- Video watch rate
- Screen time sharing rate
- Average daily/weekly screen time
- Feature exploration patterns

**Pricing Insights:**
- Price distribution (CHF)
- Median/mode/range of WTP
- Conversion rate from price entry to confirmation
- Correlation: screen time vs. stated price

**Funnel Analytics:**
- Drop-off rates between each CTA
- Time spent at each stage
- Most engaging features
- Navigation patterns

---

**Quick Test:** Visit each page and click through the funnel. Check Umami dashboard → Events section to verify all events fire correctly.
