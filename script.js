// ========================================
// SMOOTH SCROLL & NAVIGATION
// ========================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// ACTIVE SECTION HIGHLIGHTING
// ========================================

const sections = document.querySelectorAll('.section, .hero-section');

function updateActiveNav() {
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========================================
// SCROLL ANIMATIONS (FADE IN ON SCROLL)
// ========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll(`
    .project-card, 
    .timeline-item, 
    .skill-category, 
    .about-content,
    .contact-card
`);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// PROJECT CARDS INTERACTION
// ========================================

const projectCards = document.querySelectorAll('.project-card:not(.add-project)');

projectCards.forEach(card => {
    const playBtn = card.querySelector('.play-btn');
    
    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const projectName = card.getAttribute('data-project');
            
            // You can add custom actions here based on project
            // For now, we'll show an alert (you can link to GitHub/demo later)
            switch(projectName) {
                case 'visionvoice':
                    alert('VisionVoice: Check out the code on GitHub!\n\nYou can add your GitHub link here.');
                    break;
                case 'codechef':
                    alert('CodeChef: Check out the code on GitHub!\n\nYou can add your GitHub link here.');
                    break;
                default:
                    alert('Project details coming soon!');
            }
        });
    }
    
    // Add click event to entire card
    card.addEventListener('click', function() {
        const projectName = this.getAttribute('data-project');
        
        // Expand project details (you can customize this)
        if (!this.classList.contains('add-project')) {
            this.classList.toggle('expanded');
        }
    });
});

// ========================================
// TYPING EFFECT FOR HERO TAGLINE
// ========================================

const heroTagline = document.querySelector('.hero-tagline');
const originalText = heroTagline.textContent;
let charIndex = 0;

function typeWriter() {
    if (charIndex === 0) {
        heroTagline.textContent = '';
    }
    
    if (charIndex < originalText.length) {
        heroTagline.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1500);
});

// ========================================
// PARTICLE EFFECT ON MOUSE MOVE (OPTIONAL)
// ========================================

const heroSection = document.querySelector('.hero-section');
let mouseX = 0;
let mouseY = 0;

heroSection.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create a subtle follow effect on the glow
    const heroGlow = document.querySelector('.hero-glow');
    if (heroGlow) {
        const moveX = (mouseX - window.innerWidth / 2) * 0.02;
        const moveY = (mouseY - window.innerHeight / 2) * 0.02;
        
        heroGlow.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    }
});

// ========================================
// SKILL ITEMS HOVER EFFECT
// ========================================

const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// SMOOTH SCROLL TO TOP BUTTON (OPTIONAL)
// ========================================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top on click
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
});

// ========================================
// TIMELINE ANIMATION
// ========================================

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// ========================================
// CONTACT CARDS RIPPLE EFFECT
// ========================================

const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(102, 126, 234, 0.5);
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// PERFORMANCE: THROTTLE SCROLL EVENTS
// ========================================

function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttle to scroll events
window.addEventListener('scroll', throttle(() => {
    // Any heavy scroll operations can be throttled here
}, 100));

// ========================================
// INITIALIZE
// ========================================

console.log(`
╔═══════════════════════════════════════╗
║  🚀 Portfolio Website Loaded!        ║
║  Built with passion by Showmik       ║
║  Disney+ Inspired Design ✨          ║
╚═══════════════════════════════════════╝
`);

// Log any interactions for debugging
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ All scripts initialized successfully!');
    console.log('📊 Animated elements:', animatedElements.length);
    console.log('🎯 Navigation links:', navLinks.length);
    console.log('💼 Projects:', projectCards.length);
});