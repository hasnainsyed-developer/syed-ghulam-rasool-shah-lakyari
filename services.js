/* ============================================
   TechZone - Services Page JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Load services
    loadServices();
    
    // Load support plans
    loadPlans();
    
    // Setup plan button click handlers
    setupPlanButtons();
});

/**
 * Load and render services
 */
function loadServices() {
    const servicesContainer = document.getElementById('servicesContainer');
    
    if (!servicesContainer) return;
    
    // Clear existing content
    servicesContainer.innerHTML = '';
    
    // Render each service
    services.forEach((service, index) => {
        const serviceCard = createServiceCard(service);
        servicesContainer.innerHTML += serviceCard;
    });
}

/**
 * Create service card HTML
 */
function createServiceCard(service) {
    return `
        <div class="col-md-6 col-lg-3">
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.name}</h3>
                <p class="text-muted">${service.description}</p>
            </div>
        </div>
    `;
}

/**
 * Load and render support plans
 */
function loadPlans() {
    const plansContainer = document.getElementById('plansContainer');
    
    if (!plansContainer) return;
    
    // Clear existing content
    plansContainer.innerHTML = '';
    
    // Render each plan
    supportPlans.forEach((plan, index) => {
        const planCard = createPlanCard(plan);
        plansContainer.innerHTML += planCard;
    });
}

/**
 * Create plan card HTML
 */
function createPlanCard(plan) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="plan-card">
                <h3 class="plan-name">${plan.name}</h3>
                <div class="plan-price">$${plan.price}</div>
                <div class="plan-duration">per ${plan.duration}</div>
                
                <ul class="plan-features">
                    ${plan.features.map(feature => `
                        <li>${feature}</li>
                    `).join('')}
                </ul>
                
                <button class="plan-button" data-plan-id="${plan.id}">Choose Plan</button>
            </div>
        </div>
    `;
}

/**
 * Setup plan button click handlers
 */
function setupPlanButtons() {
    const planButtons = document.querySelectorAll('.plan-button');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planId = this.getAttribute('data-plan-id');
            const plan = supportPlans.find(p => p.id === parseInt(planId));
            
            if (plan) {
                handlePlanSelection(plan);
            }
        });
    });
}

/**
 * Handle plan selection
 */
function handlePlanSelection(plan) {
    // Show alert with plan details
    alert(`You selected the ${plan.name} plan ($${plan.price}/month)\n\nRedirecting to checkout...`);
    
    // In a real application, this would redirect to checkout
    // window.location.href = '/checkout?plan=' + plan.id;
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Newsletter form handler
 */
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const input = this.querySelector('input[type="email"]');
        const email = input.value.trim();
        const messageDiv = this.nextElementSibling;
        
        if (email) {
            // Show success message
            messageDiv.innerHTML = '<p class="text-success mt-2 mb-0">Thank you for subscribing!</p>';
            input.value = '';
            
            // Clear message after 3 seconds
            setTimeout(() => {
                messageDiv.innerHTML = '';
            }, 3000);
        }
    });
}

/**
 * Active nav link highlighting
 */
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Highlight active nav link on page load
highlightActiveNavLink();

/**
 * Smooth transitions for page load
 */
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});