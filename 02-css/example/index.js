// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add active class to clicked link
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll behavior would go here in a real blog
            console.log(`Navigating to: ${this.getAttribute('href')}`);
        });
    });

    // Newsletter form submission
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                // In a real application, this would send the data to a server
                alert(`Thank you for subscribing with: ${emailInput.value}`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });
    }

    // Post hover effect enhancement
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Read more button functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postTitle = this.closest('.post-content').querySelector('h3').textContent;
            alert(`You clicked to read more about: "${postTitle}"`);
        });
    });
    
    // Original function kept for backward compatibility
    window.handleClick = function() {
        alert("Button clicked!");
        console.log("Button clicked!");
    }
    
    // Mobile menu toggle (would be expanded in a real blog)
    const setupMobileMenu = () => {
        // This is a placeholder for mobile menu toggle functionality
        // In a real blog, this would control a hamburger menu
        console.log('Mobile menu functionality would be set up here');
    };
    
    // Check if viewport is mobile sized
    const checkMobileView = () => {
        if (window.innerWidth <= 768) {
            setupMobileMenu();
        }
    };
    
    // Initialize mobile features
    checkMobileView();
    
    // Update on resize
    window.addEventListener('resize', checkMobileView);
    
    // Add lazy loading for images
    const loadImages = () => {
        const images = document.querySelectorAll('.post-image img');
        
        // Simple lazy loading simulation
        images.forEach(img => {
            // In a real implementation, this would check if the image is in viewport
            // and only then set the src attribute
            console.log(`Image loaded: ${img.alt}`);
        });
    };
    
    // Call image loading
    loadImages();
    
    console.log('Blog functionality initialized');
});