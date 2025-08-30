// Function to toggle the navigation menu visibility
function toggleMenu() {
    const navToggle = document.getElementById('nav-toggle');
    navToggle.checked = !navToggle.checked;
}

// Function to filter projects by category
function filterProjects(category) {
    const articles = document.querySelectorAll('#projects article');
    articles.forEach(article => {
        if (category === 'all' || article.dataset.category === category) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });

    // Update active button
    const buttons = document.querySelectorAll('#projects .filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
}

// Function to open lightbox
function openLightbox(src, alt) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    img.alt = alt;
    modal.classList.add('show');
}

// Function to close lightbox
function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.classList.remove('show');
}

// Function to validate contact form
function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    document.getElementById('form-success').textContent = '';

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.nav-toggle-label');
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleMenu);
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                const navToggle = document.getElementById('nav-toggle');
                if (navToggle.checked) {
                    navToggle.checked = false;
                }
            }
        });
    });

    // Filter buttons for projects
    const filterButtons = document.querySelectorAll('#projects .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.filter;
            filterProjects(category);
        });
    });

    // Lightbox for project images
    const projectImages = document.querySelectorAll('#projects img');
    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });

    // Close lightbox
    const closeBtn = document.querySelector('.lightbox-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeLightbox();
            }
        });
    }

    // Contact form validation and submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // Simulate form submission success
                document.getElementById('form-success').textContent = 'Thank you! Your message has been sent successfully.';
                // Reset form
                this.reset();
            }
        });
    }

    // Real-time validation for form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Name validation on blur
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (!this.value.trim()) {
                document.getElementById('name-error').textContent = 'Name is required.';
            } else {
                document.getElementById('name-error').textContent = '';
            }
        });
    }

    // Email validation on input and blur
    if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailInput.addEventListener('input', function() {
            if (this.value.trim() && !emailRegex.test(this.value)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            } else {
                document.getElementById('email-error').textContent = '';
            }
        });
        emailInput.addEventListener('blur', function() {
            if (!this.value.trim()) {
                document.getElementById('email-error').textContent = 'Email is required.';
            }
        });
    }

    // Message validation on blur
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            if (!this.value.trim()) {
                document.getElementById('message-error').textContent = 'Message is required.';
            } else {
                document.getElementById('message-error').textContent = '';
            }
        });
    }
});