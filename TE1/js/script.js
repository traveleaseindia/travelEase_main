// DOM Elements
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.search-form');
const dateInputs = document.querySelectorAll('input[type="date"]');

// Set today's date as minimum for date inputs
const today = new Date().toISOString().split('T')[0];
dateInputs.forEach(input => {
    input.min = today;
    
    // Set default values
    if (input.previousElementSibling && 
        input.previousElementSibling.textContent.includes('Departure')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        input.value = tomorrow.toISOString().split('T')[0];
    }
    
    if (input.previousElementSibling && 
        input.previousElementSibling.textContent.includes('Check-in')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        input.value = tomorrow.toISOString().split('T')[0];
    }
    
    if (input.previousElementSibling && 
        input.previousElementSibling.textContent.includes('Check-out')) {
        const dayAfter = new Date();
        dayAfter.setDate(dayAfter.getDate() + 2);
        input.value = dayAfter.toISOString().split('T')[0];
    }
});

// Mobile Menu Toggle
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.querySelector('i').classList.toggle('fa-bars');
    mobileToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileToggle.querySelector('i').classList.remove('fa-times');
        mobileToggle.querySelector('i').classList.add('fa-bars');
    }
});

// Search Tab Switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const type = tab.dataset.type;
        
        // Remove active class from all tabs and forms
        tabs.forEach(t => t.classList.remove('active'));
        forms.forEach(form => form.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding form
        tab.classList.add('active');
        document.getElementById(`${type}-form`).classList.add('active');
    });
});

// Form Validation and Submission
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get the active tab
        const activeTab = document.querySelector('.tab.active');
        const travelType = activeTab.dataset.type;
        
        // Show loading state
        const submitBtn = form.querySelector('.btn-search');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        submitBtn.disabled = true;
        
        // Simulate search process
        setTimeout(() => {
            alert(`Searching for ${travelType}...\n\nThis is a demo. In the full application, this would show real search results.`);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileToggle.querySelector('i').classList.remove('fa-times');
            mobileToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .destination-card, .service-card').forEach(el => {
    observer.observe(el);
});


// Set today's date as minimum for date inputs

dateInputs.forEach(input => {
    input.min = today;
    
    // Set default values
    if (input.previousElementSibling && 
        input.previousElementSibling.textContent.includes('Departure')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        input.value = tomorrow.toISOString().split('T')[0];
    }
    
    if (input.previousElementSibling && 
        input.previousElementSibling.textContent.includes('Check-in')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        input.value = tomorrow.toISOString().split('T')[0];
    }
    
    if (input.previousElementSibling && 
        input.previousElementSibling.textContent.includes('Check-out')) {
        const dayAfter = new Date();
        dayAfter.setDate(dayAfter.getDate() + 2);
        input.value = dayAfter.toISOString().split('T')[0];
    }
    
    if (input.previousElementSibling && 
        input.previousElementSibling.textContent.includes('Cruise')) {
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        input.value = nextWeek.toISOString().split('T')[0];
    }
});


// Profile Dropdown Toggle
document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.getElementById("profileButton");
    const profileMenu = document.getElementById("profileMenu");

    profileBtn.addEventListener("click", function (e) {
        e.preventDefault();
        profileMenu.style.display =
            profileMenu.style.display === "flex" ? "none" : "flex";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileBtn.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.style.display = "none";
        }
    });
});
