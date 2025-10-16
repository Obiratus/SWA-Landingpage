// Mobile Hamburger Menu Functionality
class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger-btn');
        this.navMenu = document.getElementById('nav-menu');
        this.overlay = document.getElementById('menu-overlay');
        this.navLinks = document.querySelectorAll('.nav-links a');
        
        this.init();
    }
    
    init() {
        // Toggle menu on hamburger click
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }
        
        // Close menu when clicking overlay
        if (this.overlay) {
            this.overlay.addEventListener('click', () => this.closeMenu());
        }
        
        // Close menu when clicking navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        
        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen()) {
                this.closeMenu();
            }
        });
        
        // Handle window resize - close menu if resizing above mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMenuOpen()) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        if (this.isMenuOpen()) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.hamburger.classList.add('active');
        this.navMenu.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
    
    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    isMenuOpen() {
        return this.navMenu.classList.contains('active');
    }
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});
