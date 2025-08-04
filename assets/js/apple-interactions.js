// Apple-Style Interactions for H.L. Corporation Website

// Portfolio modal function
function openPortfolioModal(projectType) {
  // Create a simple alert for now - can be expanded to a full modal
  const projectInfo = {
    'web-development': {
      title: 'Website / Web Responsive Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible']
    },
    'mobile-development': {
      title: 'Mobile Development (Android/iOS/Flutter)',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
      features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Offline Support']
    }
  };
  
  const project = projectInfo[projectType];
  if (project) {
    alert(`${project.title}\n\n${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\n\nFeatures: ${project.features.join(', ')}`);
  }
}

// Smooth scrolling with Apple-style easing
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Apple-style navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, .section, .main-banner, .statistics-section, .testimonials-section');
    const navLinks = document.querySelectorAll('.nav li a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Apple-style intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate statistics with Apple-style timing
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const target = parseInt(stat.getAttribute('data-count'));
                setTimeout(() => {
                    animateCounter(stat, target);
                }, index * 200); // Staggered animation
            });
            
            // Add animation classes
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section, .section, .statistics-section, .testimonials-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Apple-style counter animation
function animateCounter(element, target, duration = 1500) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// Apple-style form interactions
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Add character counter for textarea
        if (input.tagName === 'TEXTAREA') {
            const counter = document.createElement('span');
            counter.className = 'char-counter';
            counter.textContent = '0/500';
            counter.style.cssText = `
                position: absolute;
                bottom: 8px;
                right: 12px;
                font-size: 12px;
                color: #86868b;
                pointer-events: none;
            `;
            input.parentElement.style.position = 'relative';
            input.parentElement.appendChild(counter);
            
            input.addEventListener('input', function() {
                const length = this.value.length;
                counter.textContent = `${length}/500`;
                
                // Apple-style color changes
                if (length > 450) {
                    counter.style.color = '#ff3b30';
                } else if (length > 400) {
                    counter.style.color = '#ff9500';
                } else {
                    counter.style.color = '#86868b';
                }
            });
        }
    });
});

// Apple-style loading animation
window.addEventListener('load', function() {
    const preloader = document.querySelector('.js-preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Apple-style hover effects
document.addEventListener('DOMContentLoaded', function() {
    const hoverElements = document.querySelectorAll('.stat-item, .portfolio-item, .testimonial-item, .services .naccs .menu div');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Apple-style reveal animations
const revealElements = document.querySelectorAll('.wow');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(element);
});

// Apple-style button interactions
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, .primary-btn, .secondary-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create Apple-style ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('apple-ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for Apple-style ripple effect
const style = document.createElement('style');
style.textContent = `
    .apple-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: apple-ripple-animation 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
    }
    
    @keyframes apple-ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: appleSlideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes appleSlideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .focused label {
        transform: translateY(-20px) scale(0.8);
        color: #0071e3;
    }
`;
document.head.appendChild(style);

// Apple-style mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.nav');
    
    if (menuTrigger && nav) {
        menuTrigger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});

// Apple-style scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add Apple-style scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'apple-scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #0071e3;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
});

// Apple-style form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validate form
            if (!name || !email || !subject || !message) {
                showAppleNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showAppleNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show success message
            showAppleNotification('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        });
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Apple-style notification system
function showAppleNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `apple-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 300px;
        font-size: 14px;
        line-height: 1.33337;
        font-weight: 400;
        letter-spacing: -.01em;
    `;
    
    if (type === 'success') {
        notification.style.background = '#34c759';
    } else {
        notification.style.background = '#ff3b30';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Apple-style parallax effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.main-banner, .right-image img');
    
    parallaxElements.forEach(element => {
        const speed = scrolled * 0.3;
        element.style.transform = `translateY(${speed}px)`;
    });
});

// Apple-style focus management
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #0071e3';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Apple-style performance optimization
let ticking = false;

function updateAnimations() {
    ticking = false;
    // Animation updates here
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// Apple-style accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });
    
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #0071e3;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}); 