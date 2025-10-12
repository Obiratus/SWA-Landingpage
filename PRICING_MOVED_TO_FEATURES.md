# Pricing Section Moved to Features Page

## Changes Made ✅

### 1. Removed from index.html
- **Removed both pricing sections** (simplified CHF input + old tiered pricing)
- **Removed price confirmation modal** 
- **Removed pricing JavaScript handlers** (CTA 6 & 7)
- Landing page now focuses on: Hero → Video → Screen Time Demo → Features Preview

### 2. Added to features.html
- **Added simplified pricing section** after the feature carousel
- **Single CHF input field**: "What Would You Pay?"
- **Price confirmation modal** with "Reserve for This Price" button
- **Complete JavaScript handlers** for CTA 6 & 7

## New User Journey

### On Landing Page (index.html)
1. **CTA 1:** Watch How It Works (video)
2. **CTA 2:** Confirm watched video
3. **CTA 3:** Share daily screen time → See personalized savings
4. **CTA 4:** Learn more features → Click "View All Features"

### On Features Page (features.html)
5. **Browse features:** Interactive carousel with modal popups
6. **CTA 6:** Enter price in CHF → Click "Continue"
7. **CTA 7:** Confirm price → Click "Reserve for This Price"
8. **Redirect to waitlist.html** with price parameter

### On Waitlist Page (waitlist.html)
9. **CTA 8:** Enter email/name → Submit waitlist form
10. **CTA 9:** Complete final survey (Microsoft Form)

## Benefits of This Structure

### Better Progressive Disclosure
- Users explore features before committing to a price
- More informed pricing decisions after seeing full value proposition
- Natural flow: Learn → Evaluate → Commit

### Cleaner Landing Page
- Focuses on quick demo and value visualization
- Less cognitive load on first visit
- Easier path to features exploration

### Higher Quality Pricing Data
- Users who reach pricing have already engaged with features
- Better understanding of value → more accurate WTP signals
- Eliminates rushed pricing decisions

## Technical Details

### Pricing Section Location
**File:** `features.html`  
**Position:** After carousel indicators, before "Join the Waitlist" CTA  
**Element IDs:**
- Input: `user-price-input`
- Submit button: `submit-price-btn`
- Modal: `price-confirmation-modal`
- Confirmation text: `price-confirmation-text`
- Reserve button: `reserve-spot-btn`

### Event Tracking
**CTA 6 - Price Submit:**
```javascript
trackEvent('cta-6-price-submit', { price_chf: price });
```

**CTA 7 - Reserve at Price:**
```javascript
trackEvent('cta-7-reserve-at-price', { price_chf: price });
```

### Data Flow
1. User enters price → Validated (min: 0, step: 0.50)
2. Price stored in `sessionStorage.setItem('userPrice', price)`
3. Confirmation modal displays: "You'd pay CHF X.XX/month"
4. On reserve: Redirect to `waitlist.html?price=${price}`
5. Waitlist page captures price from URL parameter

## Testing Checklist

- [ ] Navigate from index.html → features.html
- [ ] Scroll through feature carousel
- [ ] Enter price in CHF input field
- [ ] Click "Continue" → Modal appears
- [ ] Verify price displayed correctly (CHF X.XX/month)
- [ ] Click "Reserve for This Price" → Redirects to waitlist.html
- [ ] Check URL contains `?price=` parameter
- [ ] Verify Umami tracks both events (cta-6 and cta-7)
- [ ] Test on mobile responsive view
- [ ] Test with various price inputs (decimals, whole numbers)

## Analytics Impact

### Conversion Funnel
```
Landing Page (CTAs 1-4)
    ↓
Features Page (CTA 5 - feature exploration)
    ↓
Pricing Section (CTA 6 - price entry)
    ↓
Confirmation Modal (CTA 7 - reserve)
    ↓
Waitlist Page (CTA 8 - email/name)
    ↓
Survey (CTA 9 - feedback)
```

### Expected Drop-off Points
- **Landing → Features:** Users who don't want to explore deeper
- **Features → Pricing:** Users who aren't convinced of value
- **Pricing → Reserve:** Users who entered price but didn't commit
- **Reserve → Waitlist:** Technical issues or changed mind

### Key Metrics to Monitor
- **Feature engagement:** Which features get most clicks/views?
- **Time on features page:** How long before pricing decision?
- **Price distribution:** What are users willing to pay?
- **Conversion rate:** Features view → Price entry → Reservation

## Files Modified
- ✅ `index.html` - Removed all pricing sections and handlers
- ✅ `features.html` - Added pricing section and handlers
- ✅ No changes needed to `waitlist.html` (already ready to receive price parameter)
- ✅ No changes to `styles.css` (existing styles work for both locations)

## Migration Notes
- **No breaking changes:** All tracking event names remain the same
- **Backward compatible:** Old price confirmation modal ID reused
- **sessionStorage preserved:** Same storage mechanism for price data
- **URL parameters:** Same format for passing price to waitlist

---

**Updated:** October 12, 2025  
**Previous Location:** index.html (2 pricing sections)  
**New Location:** features.html (1 simplified section)  
**Removed:** Tiered pricing cards ($4.99, $9.99, $14.99)  
**Kept:** Single CHF input with confirmation flow
