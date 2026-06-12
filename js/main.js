// Main Application JavaScript
import { NotificationBanner } from './components/NotificationBanner.js';
import { Navbar } from './components/Navbar.js';
import { HeroSection } from './components/HeroSection.js';
import { AwardsSection } from './components/AwardsSection.js';
import { PortfolioShowcase } from './components/PortfolioShowcase.js';
import { ServicesSection } from './components/ServicesSection.js';
import { IndustriesSection } from './components/IndustriesSection.js';
import { CaseStudiesSection } from './components/CaseStudiesSection.js';
import { ClientsSection } from './components/ClientsSection.js';
import { TeamSection } from './components/TeamSection.js';
import { PartnersSection } from './components/PartnersSection.js';
import { InsightsSection } from './components/InsightsSection.js';
import { CTASection } from './components/CTASection.js';
import { ServicesFooter } from './components/ServicesFooter.js';
import { Footer } from './components/Footer.js';
import { BackToTop } from './components/BackToTop.js';

// Component registry
const components = [
  NotificationBanner,
  Navbar,
  HeroSection,
  AwardsSection,
  PortfolioShowcase,
  ServicesSection,
  IndustriesSection,
  CaseStudiesSection,
  ClientsSection,
  TeamSection,
  PartnersSection,
  InsightsSection,
  CTASection,
  ServicesFooter,
  Footer,
  BackToTop
];

// Render all components
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = components.map(component => component.render()).join('');
}

// Initialize all components
function initComponents() {
  components.forEach(component => {
    if (typeof component.init === 'function') {
      component.init();
    }
  });
}

// Initialize Lucide icons
function initIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card-hover, .award-badge, .partner-logo, .team-card, .industry-card').forEach(el => {
    observer.observe(el);
  });
}

// Counter animation for stats
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Initialize application
function initApp() {
  renderApp();
  initIcons();
  initComponents();
  initSmoothScroll();
  
  // Delay scroll-dependent initializations
  setTimeout(() => {
    initScrollAnimations();
    initCounterAnimation();
  }, 100);

  // Reinitialize icons after any dynamic content changes
  const observer = new MutationObserver(() => {
    initIcons();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export for potential module usage
export { initApp };