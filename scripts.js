// 4D Climate Solutions - Shared Scripts

// Mobile menu toggle
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-toggle');
    if (menu && menu.classList.contains('active') && !e.target.closest('.nav-menu') && !e.target.closest('.mobile-toggle')) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// Intersection Observer for fade-in animations with stagger
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on element's position in its parent
                const siblings = entry.target.parentElement.querySelectorAll('.fade-up');
                const siblingIndex = Array.from(siblings).indexOf(entry.target);
                entry.target.style.transitionDelay = `${siblingIndex * 0.1}s`;
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Animate stats when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    const text = entry.target.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    if (!isNaN(number)) {
                        animateCounter(entry.target, number);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => statsObserver.observe(stat));
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.querySelector('.nav-menu')?.classList.remove('active');
                    document.querySelector('.mobile-toggle')?.classList.remove('active');
                }
            }
        });
    });
});

// Back to top button
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Project filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.add('visible'), 10);
                } else {
                    card.classList.remove('visible');
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Sending... <span class="spinner"></span>';
            submitBtn.disabled = true;
        });
    }
});

// Typing animation for hero
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Team Modal Data
const teamData = {
    ehsan: {
        name: 'Ehsan Rizvi',
        role: 'Director',
        initials: 'ER',
        bio: 'Founder of 4D Climate Solutions with over 15 years of experience in agricultural development, market systems development, climate finance, and community empowerment. Ehsan has worked across multiple countries including Afghanistan, Tanzania, Sri Lanka, India, and Lesotho. He has studied more than 12 value chains and leads strategic partnerships with international organizations including World Bank, MCC, and AfDB.',
        expertise: 'Agricultural Development, Market Systems, Climate Finance, Value Chain Analysis, Strategic Planning, International Development'
    },
    mary: {
        name: 'Mary Leuta',
        role: 'Finance & Admin Manager',
        initials: 'ML',
        bio: 'Oversees financial operations, administrative functions, and ensures compliance across all projects. Mary brings strong organizational skills to support efficient project delivery.',
        expertise: 'Financial Management, Administration, Compliance, Operations'
    },
    poloko: {
        name: 'Poloko Mosebi',
        role: 'Climate Change Expert',
        initials: 'PM',
        bio: 'Specializes in climate vulnerability assessments, adaptation strategies, and environmental impact studies. Poloko leads technical work on climate-focused projects.',
        expertise: 'Climate Vulnerability, Adaptation Strategies, Environmental Assessment, Research'
    },
    barth: {
        name: 'Bartholomew Mofolisa',
        role: 'Program Coordinator',
        initials: 'BM',
        bio: 'Coordinates field operations and manages day-to-day project implementation. Bartholomew ensures smooth execution of community engagement activities.',
        expertise: 'Program Management, Field Coordination, Community Engagement, Logistics'
    },
    mantsatsi: {
        name: 'Mantsatsi Moleleki',
        role: 'Soil & Water Expert',
        initials: 'MM',
        bio: 'Technical expert in soil conservation and water resource management. Mantsatsi provides specialized knowledge for agricultural and water development projects.',
        expertise: 'Soil Conservation, Water Resources, Agriculture, Technical Advisory'
    },
    fusi: {
        name: 'Fusi Mosebo',
        role: 'M&E Officer',
        initials: 'FM',
        bio: 'Leads monitoring, evaluation, and learning activities across all projects. Fusi designs data collection systems and ensures project impact is measured effectively.',
        expertise: 'M&E Systems, Data Analysis, Impact Assessment, Reporting'
    },
    makhotso: {
        name: 'Makhotso Mohoanyane',
        role: 'Social Expert',
        initials: 'MM',
        bio: 'Focuses on social impact assessment and community development. Makhotso ensures projects address social dimensions and benefit vulnerable groups.',
        expertise: 'Social Assessment, Community Development, Gender, Stakeholder Engagement'
    },
    momakuena: {
        name: 'Momakuena Matebesi',
        role: 'Resettlement Expert',
        initials: 'MM',
        bio: 'Specializes in resettlement planning and livelihood restoration. Momakuena supports communities affected by development projects.',
        expertise: 'Resettlement Planning, Livelihood Restoration, Social Safeguards'
    },
    maama: {
        name: 'Maama Makotoko',
        role: 'Assistant M&E Officer',
        initials: 'MM',
        bio: 'Supports M&E activities including data collection, field surveys, and report preparation. Maama assists in maintaining project monitoring systems.',
        expertise: 'Data Collection, Field Surveys, M&E Support, Documentation'
    },
    palesa: {
        name: 'Palesa Mabaso',
        role: 'Admin Assistant',
        initials: 'PM',
        bio: 'Provides administrative support including document management, scheduling, and office coordination. Palesa ensures smooth daily operations.',
        expertise: 'Administration, Document Management, Office Support, Coordination'
    }
};

// Open Team Modal
function openModal(memberId) {
    const modal = document.getElementById('team-modal');
    const member = teamData[memberId];
    
    if (modal && member) {
        document.getElementById('modal-avatar').textContent = member.initials;
        document.getElementById('modal-name').textContent = member.name;
        document.getElementById('modal-role').textContent = member.role;
        document.getElementById('modal-bio').textContent = member.bio;
        document.getElementById('modal-expertise').textContent = member.expertise;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close Team Modal
function closeModal() {
    const modal = document.getElementById('team-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('team-modal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ================================================
// PAGE TRANSITIONS
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth page transitions for internal links
    const internalLinks = document.querySelectorAll('a[href$=".html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply to internal links (not external)
            if (href && !href.startsWith('http') && !href.startsWith('mailto')) {
                e.preventDefault();
                
                // Close mobile menu if open
                document.querySelector('.nav-menu')?.classList.remove('active');
                document.querySelector('.mobile-toggle')?.classList.remove('active');
                
                // Add exit animation
                document.body.classList.add('page-exit');
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
});
