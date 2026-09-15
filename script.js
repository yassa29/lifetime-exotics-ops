// Navigation functionality
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const sectionId = e.target.dataset.section;
        
        // Remove active class from all buttons and sections
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button and corresponding section
        e.target.classList.add('active');
        document.getElementById(sectionId).classList.add('active');
        
        // Scroll to section
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add click effects to status items
document.querySelectorAll('.status-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Add click effects to mission items
document.querySelectorAll('.mission-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'translateX(8px)';
        setTimeout(() => {
            this.style.transform = 'translateX(0)';
        }, 300);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lifetime Exotics Operations Dashboard loaded');
});
