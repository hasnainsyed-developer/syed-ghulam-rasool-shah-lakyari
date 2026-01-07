

document.addEventListener('DOMContentLoaded', function() {
    // Load services
    const servicesContainer = document.getElementById('servicesContainer');
    
    if (servicesContainer) {
        services.forEach(service => {
            servicesContainer.innerHTML += createServiceCard(service);
        });
    }
    
    // Load support plans
    const plansContainer = document.getElementById('plansContainer');
    
    if (plansContainer) {
        supportPlans.forEach(plan => {
            plansContainer.innerHTML += createPlanCard(plan);
        });
    }
});



// about.js

document.addEventListener('DOMContentLoaded', function() {
    // Load team members
    const teamContainer = document.getElementById('teamContainer');
    
    if (teamContainer) {
        teamMembers.forEach(member => {
            teamContainer.innerHTML += createTeamCard(member);
        });
    }
});


//data file .js
const products = [
    {
        id: 1,
        name: "Macbook m4",
        category: "Laptop",
        price: 1299,
        image: "https://images.pexels.com/photos/269323/pexels-photo-269323.jpeg",
        description: "Premium 15-inch laptop with Intel i7, 16GB RAM, and 512GB SSD",
        specs: ["Intel i7-12th Gen", "16GB RAM", "512GB SSD", "15.6\" Display", "2.1kg"]
    },
    {
        id: 2,
        name: "Iphone 17 pro max ",
        category: "Smartphone",
        price: 899,
        image: "https://images.pexels.com/photos/34624326/pexels-photo-34624326.jpeg",
        description: "Latest flagship smartphone with 5G, 108MP camera, and 120Hz display",
        specs: ["6.7\" AMOLED", "5G", "108MP Camera", "12GB RAM", "256GB Storage"]
    },
    {
        id: 3,
        name: "Headphone",
        category: "Headphones",
        price: 299,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
        description: "Noise-cancelling wireless headphones with 40-hour battery life",
        specs: ["Active Noise Cancellation", "40hr Battery", "Bluetooth 5.3", "Premium Sound"]
    },
    {
        id: 4,
        name: "Smartwatch",
        category: "Smartwatch",
        price: 399,
        image: "https://images.pexels.com/photos/16247532/pexels-photo-16247532.jpeg",
        description: "Advanced smartwatch with health monitoring and fitness tracking",
        specs: ["AMOLED Display", "Heart Rate Monitor", "GPS", "Water Resistant", "7-day Battery"]
    },
    {
        id: 5,
        name: "Camera",
        category: "Camera",
        price: 1199,
        image: "https://images.pexels.com/photos/45889/camera-photo-camera-sony-alpha-7-sony-45889.jpeg",
        description: "Professional 4K camera with advanced autofocus and stabilization",
        specs: ["4K 60fps", "20MP Sensor", "Optical Stabilization", "Professional Lens"]
    },
    {
        id: 6,
        name: "Ipad",
        category: "Ipad",
        price: 649,
        image: "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg",
        description: "12-inch tablet perfect for productivity and entertainment",
        specs: ["12\" LCD Display", "8GB RAM", "128GB Storage", "10-hour Battery", "Stylus Support"]
    }
];

const categories = ["All", "Laptop", "Smartphone", "Headphones", "Smartwatch", "Camera", "Tablet"];

const services = [
    {
        id: 1,
        name: "Mobile Repair",
        description: "Professional smartphone and tablet repair services",
        icon: "📱"
    },
    {
        id: 2,
        name: "Laptop Service",
        description: "Complete laptop maintenance and repair",
        icon: "💻"
    },
    {
        id: 3,
        name: "Accessory Support",
        description: "Repair and replacement of tech accessories",
        icon: "🔌"
    },
    {
        id: 4,
        name: "Data Recovery",
        description: "Safe and secure data recovery services",
        icon: "💾"
    }
];

const supportPlans = [
    {
        id: 1,
        name: "Basic",
        price: 29,
        duration: "month",
        features: ["Email Support", "Business Hours", "Response Time: 24hrs"]
    },
    {
        id: 2,
        name: "Standard",
        price: 79,
        duration: "month",
        features: ["24/7 Support", "Phone & Email", "Response Time: 4hrs", "Priority Queue"]
    },
    {
        id: 3,
        name: "Premium",
        price: 199,
        duration: "month",
        features: ["24/7 Dedicated Support", "All Channels", "Response Time: 1hr", "On-site Service"]
    }
];
const teamMembers = [
    {
        id: 1,
        name: "Ayesha",
        role: "CEO & Founder",
        image: "https://static.vecteezy.com/system/resources/thumbnails/053/630/747/small/a-beautiful-young-woman-in-a-business-suit-photo.jpeg"
    },
    {
        id: 2,
        name: "Ali",
        role: "Chief Technology Officer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYq64YrXj4fTTFfJRcGo4ewvLqEBRn2dVfA&s"
    },
    {
        id: 3,
        name: "Zoya",
        role: "Head of Sales",
        image: "https://img.freepik.com/free-photo/widely-smiling-businesswoman-working-laptop-sitting-cafe_197531-341.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 4,
        name: "Hassan",
        role: "Lead Engineer",
        image: "https://img.freepik.com/premium-photo/professional-businessman-working-office-desk-typing-laptop_856223-301.jpg"
    }
];

//common.js
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForms = document.querySelectorAll('#newsletterForm');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const input = form.querySelector('input[type="email"]');
            const email = input.value.trim();
            const messageDiv = form.nextElementSibling;
            
            if (email) {
                messageDiv.innerHTML = '<p class="text-success mt-2 mb-0">Thank you for subscribing!</p>';
                input.value = '';
                
                setTimeout(() => {
                    messageDiv.innerHTML = '';
                }, 3000);
            }
        });
    });
});

// Utility function to format currency
const USD_TO_PKR = 280;
function formatCurrency(amountUSD) {
    const pkr = amountUSD * USD_TO_PKR;
    return 'Rs. ' + pkr.toLocaleString('en-PK');
}


// Utility function to render product card
function createProductCard(product) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badge">${product.category}</div>
                </div>
                <div class="product-body">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-specs">
                        ${product.specs.slice(0, 2).map(spec => `
                            <div class="product-spec">• ${spec}</div>
                        `).join('')}
                        ${product.specs.length > 2 ? `
                            <div class="product-spec">+ ${product.specs.length - 2} more specs</div>
                        ` : ''}
                    </div>
                    
                    <div class="product-footer">
                        <span class="product-price">${formatCurrency(product.price)}</span>
                        <button class="btn btn-sm btn-dark"
                            onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    `;
}

// Utility function to render team member card
function createTeamCard(member) {
    return `
        <div class="col-md-6 col-lg-3">
            <div class="team-card">
                <div class="team-image">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <div class="team-info">
                    <h4 class="team-name">${member.name}</h4>
                    <p class="team-role">${member.role}</p>
                </div>
            </div>
        </div>
    `;
}

// Utility function to render service card
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

// Utility function to render pricing plan
function createPlanCard(plan) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="plan-card">
                <h3 class="plan-name">${plan.name}</h3>
                <div class="plan-price">${formatCurrency(plan.price)}</div>
                <div class="plan-duration">per ${plan.duration}</div>
                
                <ul class="plan-features">
                    ${plan.features.map(feature => `
                        <li>${feature}</li>
                    `).join('')}
                </ul>
                
                <button class="btn btn-cyan w-100">Choose Plan</button>
            </div>
        </div>
    `;
}

// Smooth scroll for anchor links
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


// product page js

let currentCategory = 'All';
let searchTerm = '';

document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderProducts();
    setupSearchListener();
});

// Render category buttons
function renderCategories() {
    const categoryContainer = document.getElementById('categoryContainer');
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-btn ${category === 'All' ? 'active' : ''}`;
        button.textContent = category;
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            currentCategory = category;
            renderProducts();
        });
        categoryContainer.appendChild(button);
    });
}

// Setup search input listener
function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchTerm = e.target.value.toLowerCase();
            renderProducts();
            updateSearchResult();
        });
    }
}

// Update search result count
function updateSearchResult() {
    const searchResult = document.getElementById('searchResult');
    const filtered = getFilteredProducts();
    
    if (searchTerm) {
        searchResult.textContent = `Found ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
    } else {
        searchResult.textContent = '';
    }
}

// Get filtered products
function getFilteredProducts() {
    return products.filter(product => {
        const matchesSearch = 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = 
            currentCategory === 'All' || product.category === currentCategory;
        
        return matchesSearch && matchesCategory;
    });
}

// Render products
function renderProducts() {
    const productsContainer = document.getElementById('productsContainer');
    const noResults = document.getElementById('noResults');
    
    const filtered = getFilteredProducts();
    
    productsContainer.innerHTML = '';
    
    if (filtered.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        filtered.forEach(product => {
            productsContainer.innerHTML += createProductCard(product);
        });
    }
}

// contact page js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const orderId = document.getElementById('orderId').value.trim();
            const message = document.getElementById('message').value.trim();
            
            const errors = validateContactForm(name, email, message);
            
            if (Object.keys(errors).length > 0) {
                showErrorAlert();
                displayErrors(errors);
            } else {
                clearErrors();
                showSuccessAlert();
                contactForm.reset();
                
                setTimeout(() => {
                    hideAlerts();
                }, 4000);
            }
        });
    }
});

// Validate contact form
function validateContactForm(name, email, message) {
    const errors = {};
    
    if (!name) {
        errors.name = 'Name is required';
    }
    
    if (!email) {
        errors.email = 'Email is required';
    } else if (!email.includes('@')) {
        errors.email = 'Email must contain @';
    }
    
    if (!message) {
        errors.message = 'Message is required';
    } else if (message.length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
}

// Display validation errors
function displayErrors(errors) {
    if (errors.name) {
        const nameField = document.getElementById('name');
        nameField.classList.add('is-invalid');
        document.getElementById('nameError').textContent = errors.name;
    }
    
    if (errors.email) {
        const emailField = document.getElementById('email');
        emailField.classList.add('is-invalid');
        document.getElementById('emailError').textContent = errors.email;
    }
    
    if (errors.message) {
        const messageField = document.getElementById('message');
        messageField.classList.add('is-invalid');
        document.getElementById('messageError').textContent = errors.message;
    }
}

// Clear error displays
function clearErrors() {
    document.getElementById('name').classList.remove('is-invalid');
    document.getElementById('email').classList.remove('is-invalid');
    document.getElementById('message').classList.remove('is-invalid');
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
}

// Show success alert
function showSuccessAlert() {
    const successAlert = document.getElementById('successAlert');
    successAlert.classList.remove('d-none');
}

// Show error alert
function showErrorAlert() {
    const errorAlert = document.getElementById('errorAlert');
    errorAlert.classList.remove('d-none');
}

// Hide alerts
function hideAlerts() {
    document.getElementById('successAlert').classList.add('d-none');
    document.getElementById('errorAlert').classList.add('d-none');
}

// Clear errors when user starts typing
document.addEventListener('input', function(e) {
    if (e.target.id === 'name' && e.target.classList.contains('is-invalid')) {
        e.target.classList.remove('is-invalid');
        document.getElementById('nameError').textContent = '';
    }
    
    if (e.target.id === 'email' && e.target.classList.contains('is-invalid')) {
        e.target.classList.remove('is-invalid');
        document.getElementById('emailError').textContent = '';
    }
    
    if (e.target.id === 'message' && e.target.classList.contains('is-invalid')) {
        e.target.classList.remove('is-invalid');
        document.getElementById('messageError').textContent = '';
    }
});


// ===== CART SYSTEM =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add ONLY clicked product
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    saveCart();
    updateCartCount();
    openCartModal();
}

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update header cart count
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (!cartCount) return;

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;
}

// Open cart modal
function openCartModal() {
    updateCartModal();
    const modalEl = document.getElementById("cartModal");
    if (!modalEl) return;

    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

// Render cart items in modal
function updateCartModal() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='text-muted'>Your cart is empty</p>";
        cartTotal.textContent = "$0";
        return;
    }

    cart.forEach(item => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                <div class="d-flex align-items-center gap-2">
                    <img src="${item.image}" width="50">
                    <div>
                        <strong>${item.name}</strong><br>
                        <small>Qty: ${item.qty}</small>
                    </div>
                </div>
                <div>
                    ${formatCurrency(item.price * item.qty)}
                    <button class="btn btn-sm btn-danger ms-2"
                        onclick="removeFromCart(${item.id})">❌</button>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = formatCurrency(total);
}

// Remove item
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    updateCartModal();
}

// Restore cart count on reload
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
