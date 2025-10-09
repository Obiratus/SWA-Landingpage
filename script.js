// Handle waitlist form submission
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const familySize = document.getElementById('familySize').value;
    
    // In a real application, this would send data to a backend server
    console.log('Waitlist signup:', { name, email, familySize });
    
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Clear form
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
