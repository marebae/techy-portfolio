// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for buttons (smooth scaling and futuristic glow)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)'; // Smooth scaling on hover
        button.style.boxShadow = '0 0 10px 2px #ff5c8d, 0 0 20px 5px #ff5c8d'; // Neon glow effect
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)'; // Revert scaling
        button.style.boxShadow = 'none'; // Remove glow effect
    });
});
