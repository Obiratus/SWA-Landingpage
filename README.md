# Timepot Landing Page

> A progressive commitment funnel landing page designed to measure willingness-to-pay (WTP) and collect user engagement data for Timepot - a family screen time management app.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🎯 Project Overview

This landing page is a research tool designed to:
- **Measure willingness-to-pay** through a progressive 9-stage commitment funnel
- **Collect engagement data** via Umami analytics and Power Automate
- **Test product-market fit** for Timepot's family screen time features
- **Optimize conversion** through interactive demos and personalized value visualization

## 📊 Progressive Commitment Funnel

The landing page implements a 9-stage funnel to measure increasing levels of user commitment:

| CTA | Stage | Action | Data Collected |
|-----|-------|--------|----------------|
| 1 | **Video Engagement** | Watch product demo | Video view tracking |
| 2 | **Confirmation** | Confirm watched video | User acknowledgment |
| 3 | **Data Sharing** | Enter daily screen time | Daily/weekly hours, demographics |
| 4 | **Feature Interest** | Explore features | Feature clicks, time on page |
| 5 | **Deep Dive** | View detailed features | Modal interactions, feature preferences |
| 6 | **Price Signal** | State willingness-to-pay | Price in CHF (no anchoring) |
| 7 | **Reservation** | Confirm price commitment | Price confirmation |
| 8 | **Contact Info** | Join waitlist | Email, name, price context |
| 9 | **Feedback** | Complete survey | Detailed user insights |

## 🏗️ Architecture

### File Structure
```
SWA-Landingpage/
├── index.html              # Landing page (CTAs 1-4)
├── features.html           # Feature showcase + pricing (CTAs 5-7)
├── waitlist.html           # Email collection (CTA 8)
├── styles.css              # Complete styling system
├── script.js               # Core functionality
├── tracking.js             # Umami analytics helper
├── translations.js         # Multilingual support (EN/DE) 🆕
├── mobile-menu.js          # Hamburger menu functionality 🆕
├── test-multilingual.html  # Translation test page 🆕
├── POWER_AUTOMATE_SETUP.md # Data collection guide
└── assets/                 # Images and media
```

### Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Analytics:** Umami Cloud (self-hosted alternative to Google Analytics)
- **Internationalization:** Custom i18n system with auto-detection 🆕
- **Data Collection:** Microsoft Power Automate → Excel Online
- **Survey:** Microsoft Forms
- **Hosting:** GitHub Pages / Static hosting

## 🚀 Features

## 🎯 Features

### Interactive Screen Time Calculator
- **Daily Average Input**: Users enter their average daily family screen time (0-24 hours)
- **Visual Feedback**: Dynamic UI updates as users interact
- **Data Collection**: Tracks screen time data via Umami Analytics with properties support

### Feature Carousel (6 Cards)
- **Modal System**: Click any feature card to view detailed information
- **Navigation**: Previous/Next arrows for sequential exploration
- **Tracking**: Each modal view is tracked (CTA 4)
- **Privacy-First**: Highlights data protection commitment
- **Features**: Heroes & Villains System, Agreements, Privacy/App Categories, Individual Battle Reporting, Team Battle Reporting, Family vs. Family Reporting

### Multilingual Support (🆕)
- **Languages**: English (EN) and German (DE)
- **Auto-Detection**: Automatically detects browser language
- **Language Dropdown**: Professional dropdown menu with flags (🇬🇧/🇩🇪)
- **Persistent**: Language preference saved in localStorage
- **Complete Coverage**: All UI text, buttons, modals, and forms translated
- **Extensible**: Easy to add more languages (French, Italian, Spanish, etc.)
- **Mobile Optimized**: Hamburger menu for mobile devices with integrated language switcher
- **See**: `MULTILINGUAL_IMPLEMENTATION.md` for implementation details

### Responsive Mobile Navigation (🆕)
- **Hamburger Menu**: Professional 3-line menu icon on mobile devices (< 768px)
- **Slide-out Panel**: Smooth 280px side panel that slides from the right
- **Overlay**: Semi-transparent dark background when menu is open
- **Multiple Close Options**: Click overlay, navigation link, ESC key, or resize window
- **No Scroll**: Body scrolling disabled when menu is open
- **Integrated Dropdown**: Language switcher fully integrated into mobile menu
- **See**: `HAMBURGER_MENU.md` for implementation details

### Pricing Section (Features Page)
- **Single CHF input** - no tiered pricing to avoid anchoring bias
- Progressive disclosure after feature exploration
- Confirmation modal before commitment
- Price passed to waitlist via URL parameter

### Analytics & Tracking
All user interactions are tracked via Umami:
- Navigation and footer link clicks
- Video plays and confirmations
- Feature card clicks and modal views
- Screen time data sharing
- Pricing inputs and confirmations
- Waitlist submissions

## 📈 Data Collection

### Umami Analytics
**Website ID:** `44aec67b-1dc1-4330-8456-c14c21477512`

Tracked events include:
- `cta-1-watch-video`
- `cta-2-confirm-watch`
- `cta-3-share-demo-data` (with screen time values)
- `cta-4-learn-more-features`
- `cta-6-price-submit` (with CHF amount)
- `cta-7-reserve-at-price`
- `cta-8-waitlist-submit`
- `cta-9-final-survey-click`

### Power Automate Integration
Data is sent to Excel Online via HTTP trigger flow.

**Excel Schema:**
| Column | Description | Example |
|--------|-------------|---------|
| Timestamp | Submission time | 2024-10-12T14:30:00Z |
| Email | User email | user@example.com |
| Name | First name (optional) | John |
| Price | Monthly price (CHF) | 12.50 |
| Source | Form origin | Features Page |

See `POWER_AUTOMATE_SETUP.md` for complete setup instructions.

## 🎨 Design Principles

### Progressive Commitment
- Each CTA builds on previous engagement
- Gradual increase in user investment
- No pressure or forced actions
- Clear value proposition at each stage

### Privacy-First
- No tracking without user action
- Pricing separated from contact info
- Optional name field
- Transparent data usage

### Mobile-First
- Responsive breakpoints (320px → 1440px)
- Touch-optimized interactions
- Readable typography on all devices
- Fast loading times

## 🛠️ Setup & Deployment

### Local Development
```bash
# Clone the repository
git clone https://github.com/DSteinmann/SWA-Landingpage.git
cd SWA-Landingpage

# Open in browser
open index.html
# or use a local server
python3 -m http.server 8000
```

### Configuration

1. **Umami Analytics** (already configured)
   - Website ID embedded in all HTML files
   - Cloud-hosted at cloud.umami.is

2. **Power Automate Flow** (optional - for production)
   - Follow instructions in `POWER_AUTOMATE_SETUP.md`
   - Update placeholder URL in waitlist.html (if needed in future)

3. **Microsoft Forms Survey** (already configured)
   - Survey link embedded in waitlist.html
   - CTA 9 tracking active

### Deployment
```bash
# Commit changes
git add .
git commit -m "Your message"
git push origin main

# Deploy to GitHub Pages
# Settings → Pages → Source: main branch
```

## 📱 Pages Overview

### Landing Page (`index.html`)
**Purpose:** Quick engagement and value demonstration  
**Key Sections:**
- Hero with video CTA
- Video section with confirmation
- Interactive screen time calculator
- Personalized savings visualization
- Features preview grid
- Links to features page

### Features Page (`features.html`)
**Purpose:** Detailed feature exploration and pricing  
**Key Sections:**
- 9 feature cards in carousel
- Detailed modal popups
- Pricing input (CHF)
- Price confirmation modal
- Waitlist CTA

### Waitlist Page (`waitlist.html`)
**Purpose:** Contact information collection  
**Key Sections:**
- Simple email/name form
- Price context from URL parameter
- Link to final survey
- Minimal friction design

## 🧪 Testing

### Manual Testing Checklist
- [ ] Navigate through all 9 CTAs in sequence
- [ ] Test screen time calculator with various inputs (0-24 hours)
- [ ] Verify pricing input accepts decimals (CHF format)
- [ ] Check all modal popups open/close correctly
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Verify Umami events fire in dashboard
- [ ] Test URL parameter passing (price → waitlist)
- [ ] Confirm external survey link works

### Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Safari (macOS/iOS)
- ✅ Firefox
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Key Metrics to Monitor

### Conversion Funnel
```
100% → Landing page views
 80% → Video engagement (CTA 1-2)
 60% → Screen time sharing (CTA 3)
 40% → Features exploration (CTA 4-5)
 20% → Pricing entry (CTA 6)
 15% → Price confirmation (CTA 7)
 10% → Waitlist signup (CTA 8)
  5% → Survey completion (CTA 9)
```

### Pricing Analysis
- Price distribution (median, mode, range)
- Price vs. screen time correlation
- Price vs. feature engagement correlation
- Conversion rate by price range

### Feature Engagement
- Most viewed features (modal opens)
- Average time per feature
- Feature sequence patterns
- Feature-to-pricing conversion

## 🔄 Recent Updates

### October 16, 2025
- ✅ **Multilingual support** - Complete EN/DE translation system implemented across all pages
- ✅ **Language dropdown** - Professional dropdown menu with flags, persistence, and auto-detection
- ✅ **Translation infrastructure** - 60+ UI elements fully translated with data-i18n system
- ✅ **Persistent preferences** - Language selection saved in localStorage across all pages

### October 13, 2025
- ✅ **Umami tracking fixes** - Added script to waitlist.html, enabled properties support, standardized event naming
- ✅ **UI/UX improvements** - Added cursor: pointer to all interactive elements (.cta-button, .arrow-button, .feature-card, .play-button)
- ✅ **Modal centering fix** - Changed display from 'block' to 'flex' for proper vertical centering
- ✅ **Color contrast fix** - Removed blue-on-blue button styling for better accessibility
- ✅ **Documentation** - Created comprehensive audit and troubleshooting guides

### October 12, 2025
- ✅ Moved pricing section to features page
- ✅ Removed tiered pricing ($4.99, $9.99, $14.99)
- ✅ Changed currency from USD to CHF
- ✅ Simplified pricing to single open-ended input
- ✅ Changed screen time from weekly to daily average
- ✅ Added price confirmation modal
- ✅ Separated pricing from email collection

See documentation files for detailed implementation notes.

## 📝 Documentation

### Setup & Migration Guides
- `POWER_AUTOMATE_SETUP.md` - Step-by-step data collection setup
- `PRICING_FLOW_UPDATE.md` - Daily screen time & CHF pricing implementation
- `PRICING_MOVED_TO_FEATURES.md` - Features page migration details

### Quality Assurance & Audits
- `UMAMI_TRACKING_AUDIT.md` - Comprehensive tracking system audit (October 13, 2025)
- `TRACKING_TROUBLESHOOTING.md` - Debug guide for analytics issues
- `TRACKING_QUICK_REFERENCE.md` - Event naming and properties reference
- `CURSOR_AUDIT.md` - Interactive element cursor states verification
- `MODAL_CENTERING_FIX.md` - Display flex centering implementation
- `CTA_COLOR_CONTRAST_FIX.md` - Accessibility color improvements

### Internationalization 🆕
- `MULTILINGUAL_IMPLEMENTATION.md` - Complete guide for EN/DE translation system
- `MULTILINGUAL_COMPLETE.md` - Full implementation summary and testing checklist ⭐
- `LANGUAGE_DROPDOWN_SUMMARY.md` - Dropdown menu design and implementation details
- `test-multilingual.html` - Live demonstration of translation features

### Project Overview
- `README.md` - This file (comprehensive project documentation)

## 🤝 Contributing

This is a research project for Timepot. If you'd like to contribute or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Umami Analytics** - Privacy-focused analytics platform
- **Microsoft Power Automate** - Workflow automation
- **GitHub Pages** - Static site hosting

## 📞 Contact

**Project Owner:** Dominik Steinmann  
**Repository:** [DSteinmann/SWA-Landingpage](https://github.com/DSteinmann/SWA-Landingpage)  
**Product:** Timepot - Family Screen Time Management

---

**Last Updated:** October 16, 2025  
**Version:** 2.0 (Progressive Commitment Funnel + Multilingual Support)