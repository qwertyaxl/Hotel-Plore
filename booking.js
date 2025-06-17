// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Hide all tab contents
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding tab content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});

// Add hover effects to booking cards
const bookingCards = document.querySelectorAll('.booking-card');

bookingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-3px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling animation on load
window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.6s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});