// Language translations for Timepot landing page
const translations = {
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.how-it-works': 'How It Works',
        'nav.home': 'Home',
        'nav.pricing': 'Pricing',
        
        // Hero Section
        'hero.title': 'Turn Screen Time into Quality Time',
        'hero.subtitle': 'Timepot helps your family build healthier digital habits together. No more fighting, just collaborating.',
        'hero.cta': 'Watch How It Works',
        
        // Video Section
        'video.title': 'See How Timepot Works',
        'video.question': 'Would you share your family\'s screen time data to build better habits together?',
        'video.cta.yes': 'Yes, I\'d Try This',
        'video.cta.maybe': 'Maybe, Tell Me More',
        
        // Sharing Section
        'sharing.title': 'Sharing is Caring',
        'sharing.subtitle': 'Share some of your screen time data with your family and start building better habits together!',
        
        // Demo Section
        'demo.title': 'See Your Personalized Savings Potential',
        'demo.subtitle': 'Enter your daily average screen time to see how much quality time you could reclaim.',
        'demo.tip': 'Tip: Open Screen Time on iPhone or Digital Wellbeing on Android',
        'demo.your-time': 'Your Daily Screen Time',
        'demo.hours': 'hours',
        'demo.cta': 'Calculate My Savings',
        'demo.potential-title': 'Your Family\'s Potential',
        'demo.weekly-reduction': 'Weekly Time Saved',
        'demo.monthly-reduction': 'Monthly Time Saved',
        'demo.benefits-title': 'Imagine What You Could Do!',
        'demo.game-nights': 'game nights per month',
        'demo.books': 'books read together',
        'demo.activities': 'outdoor adventures',
        'demo.next-cta': 'Explore All Features',
        
        // Features Preview (index.html)
        'features-preview.title': 'Why Families Choose Timepot',
        'features-preview.challenges': 'Family Challenges',
        'features-preview.challenges-desc': 'Turn reduction into friendly competition',
        'features-preview.privacy': 'Privacy First',
        'features-preview.privacy-desc': 'Category-based, not app-specific tracking',
        'features-preview.heroes': 'Heroes & Villains',
        'features-preview.heroes-desc': 'You choose which apps to protect or limit',
        'features-preview.cta': 'View All Features',
        
        // Features Page
        'features-page.title': 'Click on a Feature to learn more!',
        
        // Feature Cards
        'feature.heroes-villains.title': 'Heroes & Villains System',
        'feature.heroes-villains.modal.title': 'Heroes & Villains System',
        'feature.heroes-villains.modal.content': 'Personalize your screen time management by selecting up to 3 "Hero" apps (educational or productive apps that don\'t count against your time) and 3 "Villain" apps (distracting apps that get locked when time runs out). You\'re in control of what matters most to your family.',
        
        'feature.agreements.title': 'Agreements',
        'feature.agreements.modal.title': 'Family Agreements',
        'feature.agreements.modal.content': 'Create family agreements that everyone commits to together. Set shared goals, define boundaries, and build healthy habits through collaboration, not restriction. Everyone has a voice in the process.',
        
        'feature.privacy.title': 'Privacy',
        'feature.privacy.subtitle': 'App Categories',
        'feature.privacy.modal.title': 'Privacy-First App Categories',
        'feature.privacy.modal.content': 'Your privacy matters. Instead of exposing specific app names to your entire family, apps are grouped into three transparent categories: Productive, Educational, and Leisure. You stay in control of your data.',
        
        'feature.individual.title': 'Reporting',
        'feature.individual.subtitle': 'Individual Battle',
        'feature.individual.modal.title': 'Individual Battle Reporting',
        'feature.individual.modal.content': 'Track your personal screen time trends, celebrate your wins, and see your achievements over time. Focus on your own progress without comparison pressure.',
        
        'feature.team.title': 'Reporting',
        'feature.team.subtitle': 'Team Battle',
        'feature.team.modal.title': 'Team Battle Reporting',
        'feature.team.modal.content': 'Turn screen time reduction into a friendly family challenge. See your family\'s collective progress, visualize overall achievements, and celebrate together as a team.',
        
        'feature.family-vs-family.title': 'Reporting',
        'feature.family-vs-family.subtitle': 'Family vs. Family',
        'feature.family-vs-family.modal.title': 'Family vs. Family Reporting',
        'feature.family-vs-family.modal.content': 'Challenge other families to screen time reduction competitions. Light gamification keeps everyone motivated and engaged in building healthier digital habits together.',
        
        'feature.modal.cta': 'Join the Waitlist',
        
        // Feature Modal Content (for features.html JavaScript)
        'feature.heroes-villains.modal.description': 'Choose "Hero" apps that don\'t count against your time, and "Villain" apps that get punished when time runs out. You\'re in control!',
        'feature.agreements.modal.description': 'Families can define agreements, real-life treats or activities, that are unlocked when specific screen time goals are met.',
        'feature.privacy.modal.description': 'Instead of showing specific app names, Timepot groups apps into three transparent categories: Productive, Educational, and Leisure. This allows your family members to discuss screen time habits at a category level, without exposing personal app usage details.',
        'feature.individual.modal.description': 'A playful insight feature that visualizes each user\'s personal progress over time — showing how Timepot has influenced their Villain app usage.',
        'feature.team.modal.description': 'Turn screen time reduction into a friendly family challenge with collaborative progress tracking and light gamification — no pressure, just fun!',
        'feature.family-vs-family.modal.description': 'A social comparison feature that allows families to see how their overall screen time habits compare to other families using Timepot.',
        'feature.modal.audio-text': 'Let Anton explain it. Hit the play button!',
        
        // Onboarding Questions (for features.html)
        'onboarding.title': 'Let\'s personalize your Timepot experience',
        'onboarding.subtitle': 'Help us understand your family better so we can show you the most relevant features',
        'onboarding.family-size.question': 'How many people are in your family (in the same household)?',
        'onboarding.family-size.2-3': '2-3 people',
        'onboarding.family-size.4-5': '4-5 people',
        'onboarding.family-size.6-plus': '6+ people',
        'onboarding.device-age.question': 'When did your kids get their first smartphone/tablet?',
        'onboarding.device-age.1-2-years': '1-2 years ago',
        'onboarding.device-age.3-5-years': '3-5 years ago',
        'onboarding.device-age.6-10-years': '6-10 years ago',
        'onboarding.device-age.more-than-10': 'More than 10 years ago',
        'onboarding.device-age.none': 'They don\'t have smartphones yet',
        'onboarding.cta': 'Show Me Features',
        'onboarding.skip': 'Skip for now',
        
        // Pricing Section
        'pricing.title': 'What Would You Pay?',
        'pricing.subtitle': 'Help us understand what Timepot is worth to your family. Be honest - there\'s no wrong answer!',
        'pricing.label': 'Monthly Price (CHF)',
        'pricing.placeholder': '0.00',
        'pricing.month': '/month',
        'pricing.cta': 'Continue',
        'pricing.direct-waitlist': 'Skip to Waitlist',
        
        // Price Confirmation Modal
        'price-confirm.title': 'Thank You!',
        'price-confirm.message': 'You said you\'d pay',
        'price-confirm.month': 'per month',
        'price-confirm.reserve': 'Reserve this price and we\'ll keep you updated when we launch.',
        'price-confirm.cta': 'Reserve for This Price',
        
        // Waitlist Page
        'waitlist.title': 'Join the Waitlist',
        'waitlist.message': 'Awesome that you\'re interested in Timepot. We\'re not quite ready yet; while we can\'t promise a price today, we promise to put a lot of love into building your family\'s screen-time tool.',
        'waitlist.email-placeholder': 'Enter your email address',
        'waitlist.cta': 'Join Waitlist',
        'waitlist.success': 'Thanks! We\'ll be in touch soon.',
        'waitlist.error': 'Please enter a valid email address.',
        'waitlist.survey.prompt': 'Would you be open to a quick follow-up survey so we can build Timepot with your feedback?',
        'waitlist.survey.yes': 'Sure, show me the survey',
        'waitlist.survey.no': 'Maybe later',
        'waitlist.thankyou.heading': 'You\'re on the list! 🎉',
        'waitlist.thankyou.copy': 'Thank you for joining the Timepot waitlist. We\'ll keep you in the loop as we prepare the launch.',
        
        // Footer
        'footer.copyright': 'Timepot. All rights reserved.',
        'footer.home': 'How it works',
        'footer.features': 'Features',
        'footer.pricing': 'Pricing',
        
        // Common
        'common.close': 'Close',
    },
    
    de: {
        // Navigation
        'nav.features': 'Funktionen',
        'nav.how-it-works': 'Wie es funktioniert',
        'nav.home': 'Start',
        'nav.pricing': 'Preise',
        
        // Hero Section
        'hero.title': 'Verwandle Bildschirmzeit in Qualitätszeit',
        'hero.subtitle': 'Timepot hilft deiner Familie, gemeinsam gesündere digitale Gewohnheiten aufzubauen. Kein Streit mehr, nur Zusammenarbeit.',
        'hero.cta': 'Schau dir an, wie es funktioniert',
        
        // Video Section
        'video.title': 'So funktioniert Timepot',
        'video.question': 'Würdest du die Bildschirmzeit deiner Familie teilen, um gemeinsam bessere Gewohnheiten aufzubauen?',
        'video.cta.yes': 'Ja, das würde ich ausprobieren',
        'video.cta.maybe': 'Vielleicht, erzähl mir mehr',
        
        // Sharing Section
        'sharing.title': 'Teilen ist Fürsorge',
        'sharing.subtitle': 'Teile einige deiner Bildschirmzeit-Daten mit deiner Familie und beginnt gemeinsam, bessere Gewohnheiten aufzubauen!',
        
        // Demo Section
        'demo.title': 'Dein persönliches Einsparpotenzial',
        'demo.subtitle': 'Gib deine durchschnittliche tägliche Bildschirmzeit ein, um zu sehen, wie viel Qualitätszeit du zurückgewinnen könntest.',
        'demo.tip': 'Tipp: Öffne Bildschirmzeit auf dem iPhone oder Digital Wellbeing auf Android',
        'demo.your-time': 'Deine tägliche Bildschirmzeit',
        'demo.hours': 'Stunden',
        'demo.cta': 'Berechne mein Einsparpotenzial',
        'demo.potential-title': 'Das Potenzial deiner Familie',
        'demo.weekly-reduction': 'Wöchentlich eingesparte Zeit',
        'demo.monthly-reduction': 'Monatlich eingesparte Zeit',
        'demo.benefits-title': 'Stell dir vor, was ihr tun könntet!',
        'demo.game-nights': 'Spieleabende pro Monat',
        'demo.books': 'gemeinsam gelesene Bücher',
        'demo.activities': 'Outdoor-Abenteuer',
        'demo.next-cta': 'Alle Funktionen entdecken',
        
        // Features Preview (index.html)
        'features-preview.title': 'Warum Familien Timepot wählen',
        'features-preview.challenges': 'Familien-Challenges',
        'features-preview.challenges-desc': 'Verwandle Reduzierung in freundlichen Wettbewerb',
        'features-preview.privacy': 'Privatsphäre zuerst',
        'features-preview.privacy-desc': 'Kategoriebasiert, nicht App-spezifisch',
        'features-preview.heroes': 'Helden & Schurken',
        'features-preview.heroes-desc': 'Du entscheidest, welche Apps geschützt oder begrenzt werden',
        'features-preview.cta': 'Alle Funktionen ansehen',
        
        // Features Page
        'features-page.title': 'Klicke auf eine Funktion, um mehr zu erfahren!',
        
        // Feature Cards
        'feature.heroes-villains.title': 'Helden & Schurken System',
        'feature.heroes-villains.modal.title': 'Helden & Schurken System',
        'feature.heroes-villains.modal.content': 'Personalisiere dein Bildschirmzeit-Management, indem du bis zu 3 "Helden"-Apps (lehrreiche oder produktive Apps, die nicht auf deine Zeit angerechnet werden) und 3 "Schurken"-Apps (ablenkende Apps, die gesperrt werden, wenn die Zeit abläuft) auswählst. Du hast die Kontrolle über das, was deiner Familie am wichtigsten ist.',
        
        'feature.agreements.title': 'Vereinbarungen',
        'feature.agreements.modal.title': 'Familien-Vereinbarungen',
        'feature.agreements.modal.content': 'Erstelle Familienvereinbarungen, zu denen sich alle gemeinsam verpflichten. Setzt gemeinsame Ziele, definiert Grenzen und baut gesunde Gewohnheiten durch Zusammenarbeit auf, nicht durch Einschränkung. Jeder hat eine Stimme im Prozess.',
        
        'feature.privacy.title': 'Privatsphäre',
        'feature.privacy.subtitle': 'App-Kategorien',
        'feature.privacy.modal.title': 'Privatsphäre-erste App-Kategorien',
        'feature.privacy.modal.content': 'Deine Privatsphäre ist wichtig. Anstatt spezifische App-Namen deiner gesamten Familie zu zeigen, werden Apps in drei transparente Kategorien gruppiert: Produktiv, Lehrreich und Freizeit. Du behältst die Kontrolle über deine Daten.',
        
        'feature.individual.title': 'Berichte',
        'feature.individual.subtitle': 'Individueller Kampf',
        'feature.individual.modal.title': 'Individuelle Kampf-Berichte',
        'feature.individual.modal.content': 'Verfolge deine persönlichen Bildschirmzeit-Trends, feiere deine Erfolge und sieh deine Fortschritte im Laufe der Zeit. Konzentriere dich auf deinen eigenen Fortschritt ohne Vergleichsdruck.',
        
        'feature.team.title': 'Berichte',
        'feature.team.subtitle': 'Team-Kampf',
        'feature.team.modal.title': 'Team-Kampf-Berichte',
        'feature.team.modal.content': 'Verwandle die Reduzierung der Bildschirmzeit in eine freundliche Familien-Challenge. Seht den kollektiven Fortschritt eurer Familie, visualisiert gemeinsame Erfolge und feiert zusammen als Team.',
        
        'feature.family-vs-family.title': 'Berichte',
        'feature.family-vs-family.subtitle': 'Familie gegen Familie',
        'feature.family-vs-family.modal.title': 'Familie gegen Familie Berichte',
        'feature.family-vs-family.modal.content': 'Fordere andere Familien zu Bildschirmzeit-Reduzierungs-Wettbewerben heraus. Leichte Gamification hält alle motiviert und engagiert beim Aufbau gesünderer digitaler Gewohnheiten.',
        
        'feature.modal.cta': 'Zur Warteliste',
        
        // Feature Modal Content (for features.html JavaScript)
        'feature.heroes-villains.modal.description': 'Wähle "Helden"-Apps, die nicht auf deine Zeit angerechnet werden, und "Schurken"-Apps, die bestraft werden, wenn die Zeit abläuft. Du hast die Kontrolle!',
        'feature.agreements.modal.description': 'Familien können Vereinbarungen definieren, reale Belohnungen oder Aktivitäten, die freigeschaltet werden, wenn bestimmte Bildschirmzeit-Ziele erreicht werden.',
        'feature.privacy.modal.description': 'Anstatt spezifische App-Namen zu zeigen, gruppiert Timepot Apps in drei transparente Kategorien: Produktiv, Lehrreich und Freizeit. Dies ermöglicht es Familienmitgliedern, Bildschirmzeit-Gewohnheiten auf Kategorieebene zu besprechen, ohne persönliche App-Nutzungsdetails preiszugeben.',
        'feature.individual.modal.description': 'Eine spielerische Einblicksfunktion, die den persönlichen Fortschritt jedes Benutzers im Laufe der Zeit visualisiert — zeigt, wie Timepot die Nutzung von Schurken-Apps beeinflusst hat.',
        'feature.team.modal.description': 'Verwandle die Reduzierung der Bildschirmzeit in eine freundliche Familien-Challenge mit kollaborativem Fortschritts-Tracking und leichter Gamification — kein Druck, nur Spaß!',
        'feature.family-vs-family.modal.description': 'Eine soziale Vergleichsfunktion, die es Familien ermöglicht, zu sehen, wie sich ihre gesamten Bildschirmzeit-Gewohnheiten im Vergleich zu anderen Timepot-Familien verhalten.',
        'feature.modal.audio-text': 'Lass Anton es erklären. Drück den Play-Button!',
        
        // Onboarding Questions (for features.html)
        'onboarding.title': 'Lass uns deine Timepot-Erfahrung personalisieren',
        'onboarding.subtitle': 'Hilf uns, deine Familie besser zu verstehen, damit wir dir die relevantesten Funktionen zeigen können',
        'onboarding.family-size.question': 'Wie viele Personen leben in deinem Haushalt?',
        'onboarding.family-size.2-3': '2-3 Personen',
        'onboarding.family-size.4-5': '4-5 Personen',
        'onboarding.family-size.6-plus': '6+ Personen',
        'onboarding.device-age.question': 'Wann haben deine Kinder ihr erstes Smartphone/Tablet bekommen?',
        'onboarding.device-age.1-2-years': 'Vor 1-2 Jahren',
        'onboarding.device-age.3-5-years': 'Vor 3-5 Jahren',
        'onboarding.device-age.6-10-years': 'Vor 6-10 Jahren',
        'onboarding.device-age.more-than-10': 'Vor mehr als 10 Jahren',
        'onboarding.device-age.none': 'Sie haben noch keine Smartphones',
        'onboarding.cta': 'Zeig mir die Funktionen',
        'onboarding.skip': 'Für jetzt überspringen',
        
        // Pricing Section
        'pricing.title': 'Was würdest du bezahlen?',
        'pricing.subtitle': 'Hilf uns zu verstehen, was Timepot deiner Familie wert ist. Sei ehrlich - es gibt keine falsche Antwort!',
        'pricing.label': 'Monatlicher Preis (CHF)',
        'pricing.placeholder': '0.00',
        'pricing.month': '/Monat',
        'pricing.cta': 'Weiter',
        'pricing.direct-waitlist': 'Direkt zur Warteliste',
        
        // Price Confirmation Modal
        'price-confirm.title': 'Vielen Dank!',
        'price-confirm.message': 'Du hast gesagt, du würdest bezahlen',
        'price-confirm.month': 'pro Monat',
        'price-confirm.reserve': 'Reserviere diesen Preis und wir halten dich auf dem Laufenden, wenn wir starten.',
        'price-confirm.cta': 'Für diesen Preis reservieren',
        
        // Waitlist Page
        'waitlist.title': 'Zur Warteliste',
        'waitlist.message': 'Toll, dass du an Timepot interessiert bist. Wir sind noch nicht ganz fertig; obwohl wir heute noch keinen Preis versprechen können, versprechen wir, viel Liebe in den Aufbau deines Familien-Bildschirmzeit-Tools zu stecken.',
        'waitlist.email-placeholder': 'Gib deine E-Mail-Adresse ein',
        'waitlist.cta': 'Zur Warteliste',
        'waitlist.success': 'Danke! Wir melden uns bald bei dir.',
        'waitlist.error': 'Bitte gib eine gültige E-Mail-Adresse ein.',
        'waitlist.survey.prompt': 'Hättest du kurz Zeit für eine schnelle Umfrage, damit wir Timepot mit deinem Feedback bauen können?',
        'waitlist.survey.yes': 'Ja, zeig mir die Umfrage',
        'waitlist.survey.no': 'Vielleicht später',
        'waitlist.thankyou.heading': 'Du bist dabei! 🎉',
        'waitlist.thankyou.copy': 'Danke, dass du dich für die Timepot-Warteliste eingetragen hast. Wir halten dich auf dem Laufenden, während wir den Launch vorbereiten.',
        
        // Footer
        'footer.copyright': 'Timepot. Alle Rechte vorbehalten.',
        'footer.home': 'Wie es funktioniert',
        'footer.features': 'Funktionen',
        'footer.pricing': 'Preise',
        
        // Common
        'common.close': 'Schließen',
    }
};

// Language switcher utility
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.init();
    }
    
    detectLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('timepot-language');
        if (saved && translations[saved]) {
            return saved;
        }
        
        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) {
            return browserLang;
        }
        
        // Default to English
        return 'en';
    }
    
    init() {
        this.applyTranslations();
        this.createLanguageToggle();
    }
    
    translate(key) {
        return translations[this.currentLanguage][key] || key;
    }
    
    applyTranslations() {
        // Find all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            // Check if we should translate placeholder
            if (element.hasAttribute('data-i18n-placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
    }
    
    switchLanguage(lang) {
        if (!translations[lang]) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('timepot-language', lang);
        this.applyTranslations();
        this.updateToggleButton();
    }
    
    createLanguageToggle() {
        // Add language dropdown to navigation
        const nav = document.querySelector('.nav-links');
        if (!nav) return;
        
        const dropdownContainer = document.createElement('li');
        dropdownContainer.className = 'language-dropdown';
        
        // Get language display names
        const languages = {
            en: '🇬🇧 English',
            de: '🇩🇪 Deutsch'
        };
        
        dropdownContainer.innerHTML = `
            <button class="lang-dropdown-btn" id="lang-dropdown-toggle" aria-label="Select language" aria-expanded="false">
                <span class="lang-current">${languages[this.currentLanguage]}</span>
                <svg class="lang-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <ul class="lang-dropdown-menu" id="lang-dropdown-menu" role="menu">
                <li role="menuitem">
                    <button class="lang-option" data-lang="en">🇬🇧 English</button>
                </li>
                <li role="menuitem">
                    <button class="lang-option" data-lang="de">🇩🇪 Deutsch</button>
                </li>
            </ul>
        `;
        
        nav.appendChild(dropdownContainer);
        
        // Toggle dropdown
        const toggleBtn = document.getElementById('lang-dropdown-toggle');
        const menu = document.getElementById('lang-dropdown-menu');
        
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // On mobile, only allow dropdown toggle when mobile menu is open
            const isMobile = window.innerWidth <= 768;
            if (isMobile && window.mobileMenu && !window.mobileMenu.isMenuOpen()) {
                return; // Don't toggle if mobile menu is closed
            }
            
            const isOpen = menu.classList.contains('show');
            menu.classList.toggle('show');
            toggleBtn.setAttribute('aria-expanded', !isOpen);
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                menu.classList.remove('show');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Language selection
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.target.getAttribute('data-lang');
                this.switchLanguage(selectedLang);
                menu.classList.remove('show');
                toggleBtn.setAttribute('aria-expanded', 'false');
            });
            
            // Highlight current language
            if (option.getAttribute('data-lang') === this.currentLanguage) {
                option.classList.add('active');
            }
        });
    }
    
    updateToggleButton() {
        const currentSpan = document.querySelector('.lang-current');
        const languages = {
            en: '🇬🇧 English',
            de: '🇩🇪 Deutsch'
        };
        
        if (currentSpan) {
            currentSpan.textContent = languages[this.currentLanguage];
        }
        
        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
}

// Initialize language switcher when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.i18n = new LanguageSwitcher();
    });
} else {
    window.i18n = new LanguageSwitcher();
}
