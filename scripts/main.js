// Translations
const translations = {
    fr: {
        'page-title': 'Ons Ben Massoud - Portfolio | Étudiante en Génie Logiciel',
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-education': 'Formation',
        'nav-experience': 'Expérience',
        'nav-projects': 'Projets',
        'nav-skills': 'Compétences',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Étudiante en Génie Logiciel',
        'hero-description': 'Actuellement en dernière année d\'ingénierie, je suis passionnée par le génie logiciel et motivée par l\'envie de relever de nouveaux défis. J\'aime apprendre, expérimenter et mettre mes connaissances au service de projets concrets. Mon objectif est de rejoindre une équipe dynamique où je pourrai contribuer activement tout en développant mes compétences techniques et humaines.',
        'btn-contact': 'Me contacter',
        'btn-projects': 'Voir mes projets',
        'about-title': 'À propos',
        'about-text-1': 'Je suis Ons Ben Massoud, étudiante en dernière année de génie logiciel. Curieuse et motivée, j\'aime apprendre, expérimenter et transformer les idées en solutions concrètes. Je m\'intéresse particulièrement au développement web, à l\'architecture logicielle et aux bonnes pratiques d\'ingénierie.',
        'about-text-2': 'Mes expériences m\'ont permis de travailler avec Angular et Django pour des applications web complètes, ainsi qu\'avec des outils low-code comme Joget DX pour accélérer la réalisation d\'applications métiers. J\'accorde une importance particulière à la qualité, à la documentation et à l\'expérience utilisateur.',
        'location-label': 'Localisation :',
        'email-label': 'E‑mail :',
        'phone-label': 'Téléphone :',
        'languages-label': 'Langues :',
        'languages-text': 'Arabe (langue maternelle), Français (B2), Anglais (professionnel)',
        'education-title': 'Formation',
        'education-degree': 'Diplôme d\'Ingénieur en Génie Logiciel',
        'education-description': 'Formation complète en génie logiciel avec focus sur les technologies modernes, l\'architecture logicielle et les méthodologies agiles.',
        'prep-title': 'Classes Préparatoires',
        'prep-description': 'Mathématiques, Physique et Sciences de l\'Ingénieur avec spécialisation en informatique.',
        'experience-title': 'Expérience Professionnelle',
        'exp1-title': 'Développeuse Full Stack',
        'exp1-date': 'Juillet - Septembre 2024',
        'exp1-description': 'Développement d\'une application web complète avec Angular et Django. Création d\'interfaces utilisateur responsives et mise en place d\'APIs RESTful pour la gestion des données.',
        'exp2-title': 'Développeuse Low-Code',
        'exp2-date': 'Février - Avril 2024',
        'exp2-description': 'Développement d\'applications métiers avec la plateforme Joget DX. Automatisation des processus et création d\'interfaces utilisateur intuitives pour optimiser les workflows d\'entreprise.',
        'projects-title': 'Mes Projets',
        'project1-title': 'Application Web Full Stack',
        'project1-description': 'Développement d\'une application complète avec Angular en frontend et Django en backend, incluant authentification, gestion des données et interface responsive.',
        'project2-title': 'Application Mobile',
        'project2-description': 'Création d\'une application mobile cross-platform pour la gestion de tâches, avec synchronisation cloud et interface intuitive.',
        'project3-title': 'Dashboard Analytique',
        'project3-description': 'Interface de visualisation de données avec graphiques interactifs, tableaux de bord personnalisables et exports automatisés.',
        'skills-title': 'Compétences Techniques',
        'frontend-title': 'Frontend',
        'backend-title': 'Backend',
        'database-title': 'Base de données',
        'tools-title': 'Outils & Technologies',
        'contact-title': 'Me Contacter',
        'contact-subtitle': 'Restons en contact',
        'contact-description': 'N\'hésitez pas à me contacter pour discuter d\'opportunités professionnelles, de collaborations ou simplement pour échanger sur les technologies.',
        'email-title': 'Email',
        'phone-title': 'Téléphone',
        'location-title': 'Localisation',
        'form-name': 'Votre nom',
        'form-email': 'Votre email',
        'form-subject': 'Sujet',
        'form-message': 'Votre message',
        'form-submit': 'Envoyer le message',
        'footer-description': 'Étudiante en génie logiciel passionnée par l\'innovation et les technologies modernes.',
        'footer-quick-links': 'Liens rapides',
        'footer-follow': 'Suivez-moi',
        'footer-rights': 'Tous droits réservés.'
    },
    en: {
        'page-title': 'Ons Ben Massoud - Portfolio | Software Engineering Student',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-education': 'Education',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Software Engineering Student',
        'hero-description': 'Currently in my final year of engineering, I am passionate about software engineering and motivated by the desire to take on new challenges. I love learning, experimenting and putting my knowledge to work on concrete projects. My goal is to join a dynamic team where I can contribute actively while developing my technical and human skills.',
        'btn-contact': 'Contact me',
        'btn-projects': 'View my projects',
        'about-title': 'About',
        'about-text-1': 'I am Ons Ben Massoud, a final-year software engineering student. Curious and motivated, I love learning, experimenting and transforming ideas into concrete solutions. I am particularly interested in web development, software architecture and engineering best practices.',
        'about-text-2': 'My experiences have allowed me to work with Angular and Django for complete web applications, as well as with low-code tools like Joget DX to accelerate the development of business applications. I place particular importance on quality, documentation and user experience.',
        'location-label': 'Location:',
        'email-label': 'Email:',
        'phone-label': 'Phone:',
        'languages-label': 'Languages:',
        'languages-text': 'Arabic (native), French (B2), English (professional)',
        'education-title': 'Education',
        'education-degree': 'Software Engineering Degree',
        'education-description': 'Comprehensive training in software engineering with focus on modern technologies, software architecture and agile methodologies.',
        'prep-title': 'Preparatory Classes',
        'prep-description': 'Mathematics, Physics and Engineering Sciences with specialization in computer science.',
        'experience-title': 'Professional Experience',
        'exp1-title': 'Full Stack Developer',
        'exp1-date': 'July - September 2024',
        'exp1-description': 'Development of a complete web application with Angular and Django. Creating responsive user interfaces and implementing RESTful APIs for data management.',
        'exp2-title': 'Low-Code Developer',
        'exp2-date': 'February - April 2024',
        'exp2-description': 'Development of business applications with the Joget DX platform. Process automation and creation of intuitive user interfaces to optimize business workflows.',
        'projects-title': 'My Projects',
        'project1-title': 'Full Stack Web Application',
        'project1-description': 'Development of a complete application with Angular frontend and Django backend, including authentication, data management and responsive interface.',
        'project2-title': 'Mobile Application',
        'project2-description': 'Creation of a cross-platform mobile application for task management, with cloud synchronization and intuitive interface.',
        'project3-title': 'Analytics Dashboard',
        'project3-description': 'Data visualization interface with interactive charts, customizable dashboards and automated exports.',
        'skills-title': 'Technical Skills',
        'frontend-title': 'Frontend',
        'backend-title': 'Backend',
        'database-title': 'Database',
        'tools-title': 'Tools & Technologies',
        'contact-title': 'Contact Me',
        'contact-subtitle': 'Let\'s stay in touch',
        'contact-description': 'Feel free to contact me to discuss professional opportunities, collaborations or simply to exchange about technologies.',
        'email-title': 'Email',
        'phone-title': 'Phone',
        'location-title': 'Location',
        'form-name': 'Your name',
        'form-email': 'Your email',
        'form-subject': 'Subject',
        'form-message': 'Your message',
        'form-submit': 'Send message',
        'footer-description': 'Software engineering student passionate about innovation and modern technologies.',
        'footer-quick-links': 'Quick links',
        'footer-follow': 'Follow me',
        'footer-rights': 'All rights reserved.'
    }
};

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'fr';
        this.init();
    }

    init() {
        this.setupLanguageButtons();
        this.setLanguage(this.currentLang);
    }

    setupLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update translations
        this.updateTranslations();
    }

    updateTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[this.currentLang][key];
                } else {
                    element.textContent = translations[this.currentLang][key];
                }
            }
        });

        // Update document title
        const titleKey = 'page-title';
        if (translations[this.currentLang][titleKey]) {
            document.title = translations[this.currentLang][titleKey];
        }
    }
}

// Navigation
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollEffect();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
    }

    setupMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }

    setupScrollEffect() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                this.navbar.style.boxShadow = 'none';
            }
        });
    }

    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 70;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Scroll to top when clicking logo
        document.querySelector('.nav-logo').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.animateSkillBars();
    }

    setupIntersectionObserver() {
        const animateElements = document.querySelectorAll('.animate-on-scroll, .experience-card, .project-card, .skill-category');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        animateElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 500);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }
}

// Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupFormValidation();
            this.setupFormSubmission();
        }
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styling
        field.classList.remove('error');
        this.removeErrorMessage(field);

        // Validate based on field type
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'text':
                if (field.required && !value) {
                    isValid = false;
                    errorMessage = 'This field is required';
                }
                break;
            default:
                if (field.required && !value) {
                    isValid = false;
                    errorMessage = 'This field is required';
                }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    removeErrorMessage(field) {
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        this.removeErrorMessage(field);
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            const inputs = this.form.querySelectorAll('input[required], textarea[required]');
            let isFormValid = true;
            
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                this.submitForm();
            }
        });
    }

    async submitForm() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual submission logic)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            this.showSuccessMessage();
            this.form.reset();
        } catch (error) {
            this.showErrorMessage();
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'form-message success';
        message.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
        this.form.appendChild(message);
        setTimeout(() => message.remove(), 5000);
    }

    showErrorMessage() {
        const message = document.createElement('div');
        message.className = 'form-message error';
        message.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again.';
        this.form.appendChild(message);
        setTimeout(() => message.remove(), 5000);
    }
}

// Theme Manager
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupParticleBackground();
        this.setupTypewriterEffect();
    }

    setupParticleBackground() {
        // Add subtle particle animation to hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    animation: float ${Math.random() * 6 + 4}s linear infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 5}s;
                `;
                hero.appendChild(particle);
            }
        }
    }

    setupTypewriterEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const text = subtitle.textContent;
            subtitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 2000);
        }
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    preloadCriticalResources() {
        const criticalImages = [
            'images/profile.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new LanguageManager();
    new Navigation();
    new ScrollAnimations();
    new ContactForm();
    new ThemeManager();
    new PerformanceOptimizer();

    // Add floating animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10%, 90% { opacity: 1; }
            50% { transform: translateY(-100px) rotate(180deg); }
        }
        
        .form-message {
            padding: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideIn 0.3s ease;
        }
        
        .form-message.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .form-message.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .error-message {
            color: #dc3545;
            font-size: 0.8rem;
            margin-top: 0.3rem;
            display: block;
        }
        
        .form-group input.error,
        .form-group textarea.error {
            border-color: #dc3545;
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});

// Add smooth scrolling for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill for smooth scrolling
    const smoothScrollTo = (targetPosition, duration) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    // Override default link behavior
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                smoothScrollTo(target.offsetTop - 70, 800);
            }
        });
    });
}